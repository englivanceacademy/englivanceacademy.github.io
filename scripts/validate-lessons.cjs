// Validate authored content and answer models without additional dependencies.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
global.window={};
for(const name of ['course-data','full-lessons','foundation-lessons','a1-lessons','a1-completion','grammar-expansions','full-lessons-ui'])require(path.join(root,name+'.js'));
const db=window.EVA_COURSE_DATA,full=window.EVA_FULL_LESSONS;
const assert=(ok,message)=>{if(!ok)throw Error(message)};
const groupNames=['mc','gap','correct','order','read','write'];
const expected=[10,10,5,5,5,5];
const tokens=s=>s.toLowerCase().replace(/[^a-z ]/g,'').split(/\s+/).filter(Boolean).sort().join('|');
let tasks=0;
for(const [id,l] of Object.entries(full)){
 assert(db.lessons.some(x=>x.id===id),'Unknown lesson '+id);
 assert(l.goals.length===5&&l.sections.length===6&&l.examples.length===30&&l.dialogues.length===5,'Incomplete lesson '+id);
 assert(l.mistakes.length>=5&&l.practice.reading.length>50,'Missing review content '+id);
 for(const [groupIndex,name] of groupNames.entries()){
  const qs=l.practice[name];assert(qs.length===expected[groupIndex],'Question count '+id+' '+name);
  for(const q of qs){
   assert(q.prompt&&q.answer&&q.why,'Missing explanation '+id+' '+name);
   if(q.options)assert(q.options.length===3&&new Set(q.options).size===3&&q.options.includes(q.answer),'Invalid choice set '+id);
   else{assert(window.EVA_FULL_MATCH(q,q.answer),'Model rejected '+id+': '+q.prompt);for(const a of q.accept||[])assert(window.EVA_FULL_MATCH(q,a),'Variant rejected '+id);}
   tasks++;
  }
 }
 for(const q of l.practice.order){const words=q.prompt.split('Order:')[1];assert(words,'Missing word-order marker '+id);assert(tokens(words.split('/').join(' '))===tokens(q.answer),'Word-order mismatch '+id+': '+q.prompt);}
 for(const e of l.examples)assert(e.length===2&&e.every(Boolean),'Invalid example '+id);
 for(const m of l.mistakes)assert(m.length===3&&m.every(Boolean),'Invalid correction '+id);
 for(const s of l.sections){assert(s.title&&s.explain&&s.points.length>=3,'Incomplete section '+id);if(s.table)for(const r of s.table.rows)assert(r.length===s.table.head.length,'Table width '+id);}
 for(const d of l.dialogues){assert(d.lines.length>=4,'Short dialogue '+id);for(const line of d.lines)assert(line.length===2&&line.every(Boolean),'Invalid dialogue line '+id);}
 for(const target of l.related)assert(db.lessons.some(x=>x.id===target),'Broken related lesson '+id+' → '+target);
}
for(const name of ['study.html','catalog.html','index.html','grammar.html']){
 const html=fs.readFileSync(path.join(root,name),'utf8');
 for(const [,script] of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))if(script.trim())new vm.Script(script,{filename:name});
 for(const [,src] of html.matchAll(/<script[^>]+src="([^"]+)"/g))assert(fs.existsSync(path.join(root,src.split('?')[0])),'Missing script '+src);
}
const match=window.EVA_FULL_MATCH;
const email=full['006'].practice.gap.find(q=>q.answer==='ada_khan@example.com');
assert(!match(email,'ada-khan@example.com')&&!match(email,'ada_khan@example.com.'),'Email symbols not preserved');
const capital=full['002'].practice.gap.find(q=>q.prompt.includes('capital form'));
assert(!match(capital,capital.answer.toLowerCase()),'Case-sensitive letter task failed');
const clock=full['040'].practice.gap.find(q=>q.answer==='3:45');
assert(!match(clock,'3:15')&&!match(clock,'345'),'Clock digits/separator conflated');
const grams=Object.keys(window.EVA_GRAMMAR_EXPANSIONS).filter(id=>!full[id]).length;
const count=Object.keys(full).length;
console.log(JSON.stringify({fullEditionsIncluding001:count+1,explainedExamples:count*30,dialogues:count*5,originalTasks:tasks,remainingFocusedWorkshops:grams,remainingStudyGuide:240-count-1-grams},null,2));
