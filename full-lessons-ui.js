/* Extended lesson renderer: original tasks, explicit answer explanations and local progress. */
(function(){
'use strict';
const esc=x=>String(x==null?'':x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const groupInfo=[['mc','A','Choose the best answer',10],['gap','B','Complete or identify',10],['correct','C','Correct the mistake',5],['order','D','Put the words in order',5],['read','E','Read and understand',5],['write','F','Use your own English',5]];
function normalise(value,strict){
 let s=String(value).normalize('NFKC').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/[–—]/g,'-').replace(/\s+/g,' ').trim();
 // Keep meaningful email, symbol, decimal and IPA characters. Ignore only sentence-final punctuation.
 if(s.length>1&&!s.includes('@')&&!/^[\d£]+\.[\d]+$/.test(s))s=s.replace(/[.!?]+$/,'');
 if(!/[.@_£/]/.test(s))s=s.replace(/[,;:]/g,'');
 return strict?s:s.toLowerCase();
}
function strictCase(q){return /capital|lower-case|upper-case|personal name|Correct: i am/.test(q.prompt);}
function matches(q,value){return [q.answer].concat(q.accept||[]).some(a=>normalise(value,strictCase(q))===normalise(a,strictCase(q)));}
window.EVA_FULL_MATCH=matches;
window.EVA_RENDER_FULL=function(lesson,chapter){
 const l=(window.EVA_FULL_LESSONS||{})[lesson.id];if(!l)return false;
 const page=document.getElementById('lesson-page'),key='eva-full-'+lesson.id+'-v1';
 let state;try{state=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){state={}}
 if(!state||typeof state!=='object'||Array.isArray(state))state={};
 state.answers=state.answers&&typeof state.answers==='object'?state.answers:{};
 state.checked=state.checked&&typeof state.checked==='object'?state.checked:{};
 state.goals=Array.isArray(state.goals)?state.goals:[];
 const save=()=>{try{localStorage.setItem(key,JSON.stringify(state));return true}catch(e){return false}};
 const byId=id=>document.getElementById(id);
 const section=(id,kicker,title,body,white)=>'<section class="lesson-section'+(white?' white':'')+'" id="'+id+'"><div class="wrap"><span class="kicker">'+esc(kicker)+'</span><h2>'+esc(title)+'</h2>'+body+'</div></section>';
 const listen=(text,label)=>'<button type="button" class="listen" data-fl-speak="'+esc(text)+'" aria-label="'+esc(label)+'">Listen</button>';
 let number=0;const numbers={};
 groupInfo.forEach(([name])=>{numbers[name]=l.practice[name].map(()=>++number)});
 const options=(q,i)=>{const shift=i%3;return q.options.slice(shift).concat(q.options.slice(0,shift))};
 function table(t,title){return '<div class="fl-table-wrap"><table class="alphabet-table"><caption>'+esc(title)+'</caption><thead><tr>'+t.head.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+t.rows.map(row=>'<tr>'+row.map((c,i)=>i===0?'<th scope="row">'+esc(c)+'</th>':'<td>'+esc(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>'}
 function tasks(name){return l.practice[name].map((q,i)=>{
  const n=numbers[name][i],value=state.answers[name+'-'+i]||'',isChoice=!!q.options;
  const controls=isChoice?options(q,i).map((option,j)=>'<label class="fl-option"><input type="radio" name="fl-'+name+'-'+i+'" data-fl-answer="'+name+'-'+i+'" value="'+esc(option)+'"'+(value===option?' checked':'')+'><span>'+String.fromCharCode(65+j)+'. '+esc(option)+'</span></label>').join(''):
  '<'+(name==='write'?'textarea':'input')+' id="fl-input-'+name+'-'+i+'" data-fl-answer="'+name+'-'+i+'"'+(name==='write'?' rows="3"':' type="text" value="'+esc(value)+'"')+' aria-label="Answer to question '+n+'" autocomplete="off" placeholder="'+(name==='write'?'Write your own response':'Type your answer')+'">'+(name==='write'?esc(value)+'</textarea>':'');
  return '<fieldset class="fl-question exercise" id="fl-task-'+name+'-'+i+'"><legend>'+n+'. '+esc(q.prompt)+'</legend>'+controls+(name==='write'?'<details><summary>Show a model and self-check guidance</summary><p><b>'+esc(q.answer)+'</b></p><p>'+esc(q.why)+'</p><p class="note">This is an example, not the only possible answer. This task is not automatically marked.</p></details>':'<div class="feedback" id="fl-feedback-'+name+'-'+i+'" hidden role="status"></div>')+'</fieldset>';
 }).join('')}
 const teaching=l.sections.map((s,i)=>'<article class="deep-topic" id="fl-section-'+i+'"><h3>'+(i+1)+'. '+esc(s.title)+'</h3><p>'+esc(s.explain)+'</p><ul>'+s.points.map(p=>'<li>'+esc(p)+'</li>').join('')+'</ul>'+(s.table?table(s.table,s.title):'')+'</article>').join('');
 const exampleHtml='<p class="intro">Read the word or sentence, then the explanation. Say it aloud and change one detail where appropriate. Audio uses your device’s available voice; use the reference links for recorded UK dictionary pronunciation.</p><div class="grid2">'+l.examples.map(([line,why],i)=>'<article class="example fl-example"><span class="number">EXAMPLE '+String(i+1).padStart(2,'0')+'</span><p class="sentence">'+esc(line)+'</p><p>'+esc(why)+'</p>'+listen(line.replace(/\/[^/]+\//g,''),'Listen to example '+(i+1))+'</article>').join('')+'</div>';
 const dialogueHtml='<p class="intro">Read both roles, then cover one role and reply from memory. Practise again with a different name, object or situation. The conversations are language models, so you can make natural changes.</p>'+l.dialogues.map((d,i)=>'<article class="dialogue-block"><h3>'+(i+1)+'. '+esc(d.title)+'</h3>'+d.lines.map(([person,line])=>'<p class="dialogue-line"><b>'+esc(person)+':</b> '+esc(line)+' '+listen(line,'Listen to '+person+' in dialogue '+(i+1))+'</p>').join('')+'</article>').join('');
 const mistakes='<div class="deep-errors">'+l.mistakes.map(([bad,good,why])=>'<article class="deep-error"><span class="badword">Review: '+esc(bad)+'</span><strong class="goodword">Use / understand: '+esc(good)+'</strong><p>'+esc(why)+'</p></article>').join('')+'</div>';
 const practice='<p class="intro">Questions 1–35 have answer checks. Questions 36–40 are open writing or speaking tasks with models for self-assessment. A written score does not assess pronunciation. Try before opening the answers.</p><div class="score" role="status" aria-live="polite" id="fl-progress"></div><p class="note">Answers and checklist ticks stay on this browser when storage is available. This is not an online account. Short-answer checks accept listed models; if another valid wording is flagged, compare its meaning and grammar with the explanation.</p>'+groupInfo.map(([name,letter,title,count])=>'<div class="fl-part" id="fl-part-'+name+'"><h3>Part '+letter+' — '+esc(title)+' ('+count+')</h3>'+(name==='read'?'<div class="fl-reading"><h4>Read this passage first</h4><p>'+esc(l.practice.reading)+'</p>'+listen(l.practice.reading,'Listen to the reading passage')+'</div>':'')+(name==='gap'?'<p class="note">For letter-form tasks, capitals and lower-case letters matter. For other tasks, minor sentence punctuation is ignored. Keep every email symbol and digit accurate.</p>':'')+(name==='order'?'<p class="note">Use every supplied word. Add suitable punctuation and capitals. An alternative word order is accepted where listed.</p>':'')+tasks(name)+(name!=='write'?'<button class="btn teal" type="button" data-fl-check="'+name+'">Check Part '+letter+'</button><div class="score" id="fl-score-'+name+'" hidden role="status" aria-live="polite"></div>':'<p class="note">Compare each response with the model and explain your choice. These five tasks have no automatic pass/fail score.</p>')+'</div>').join('');
 const answers='<p class="intro">Every task has an answer or model and a reason. For open tasks, different accurate responses are welcome. For short-answer tasks, an acceptable alternative may need self-checking if it is not in the automatic answer list.</p>'+groupInfo.map(([name,letter,title])=>'<details><summary>Part '+letter+' — '+esc(title)+': answers and reasons</summary><ol class="answer-list" start="'+numbers[name][0]+'">'+l.practice[name].map(q=>'<li><strong>'+esc(q.answer)+'</strong><p>'+esc(q.why)+'</p>'+((q.accept||[]).length?'<p class="note">Also accepted: '+q.accept.map(esc).join('; ')+'</p>':'')+(name==='write'?'<p class="note">Model only; your answer may differ.</p>':'')+'</li>').join('')+'</ol></details>').join('');
 const prev=Number(lesson.id)-1,next=Number(lesson.id)+1;
 const lessonLink=(n,text)=>'<a class="btn light" href="'+(n===1?'lesson.html':'study.html?lesson='+String(n).padStart(3,'0'))+'">'+esc(text)+'</a>';
 page.innerHTML='<div class="hero"><div class="wrap"><span class="eyebrow">MODULE '+String(lesson.module).padStart(2,'0')+' · '+esc(chapter.title)+'</span><h1>LESSON '+esc(lesson.id)+' — '+esc(lesson.title)+'</h1><p class="lead">'+esc(l.intro)+'</p><div class="meta"><span>FULL EXTENDED EDITION</span><span>'+esc(lesson.level)+'</span><span>30 WORKED EXAMPLES</span><span>5 DIALOGUES</span><span>40 ORIGINAL ACTIVITIES</span></div><a class="btn gold" href="#overview">Begin this lesson</a><a class="btn light" href="#practice">Go to practice</a><button class="btn light" type="button" id="fl-print">Print lesson</button><p class="note" id="fl-audio-notice" aria-live="polite" style="color:#d2e6e6">Speech audio uses your device. Accent and availability may vary; recorded UK references are linked below.</p></div></div>'+
 '<nav class="toc" aria-label="Lesson sections"><div class="wrap">'+[['overview','Goals'],['full-teaching','Step-by-step teaching'],['examples','30 examples'],['dialogues','5 dialogues'],['mistakes','Common mistakes'],['flashcards','Flashcards'],['practice','40 activities'],['answers','Answers'],['review','Review']].map(([id,text])=>'<a href="#'+id+'">'+text+'</a>').join('')+'</div></nav><main>'+
 section('overview','01 · Your learning goals','What you will learn','<ul class="fl-goals">'+l.goals.map(g=>'<li>'+esc(g)+'</li>').join('')+'</ul><div class="feature gold"><strong>A sensible study plan:</strong> Read the explanations, practise the examples, act out the dialogues, then complete the activities. Take breaks when needed. You can return to the lesson in several sessions; understanding matters more than finishing quickly.</div><div class="fl-section-links" aria-label="Teaching topics">'+l.sections.map((s,i)=>'<a href="#fl-section-'+i+'">'+(i+1)+'. '+esc(s.title)+'</a>').join('')+'</div>',true)+
 section('full-teaching','02 · Understand, compare, apply','Learn step by step',teaching,false)+
 section('examples','03 · Words and patterns in use','30 worked examples',exampleHtml,true)+
 section('dialogues','04 · Speak in real situations','Five practical conversations',dialogueHtml,false)+
 section('mistakes','05 · Understand the correction','Common confusions and mistakes',mistakes,true)+
 section('flashcards','06 · Active recall','Practise the examples from memory','<p class="intro">Read the meaning or explanation, then try to recall a suitable word or sentence. The model is one useful answer; a different sentence may also express the meaning.</p><div class="flashcard"><small id="fl-card-count"></small><h3 id="fl-card-clue"></h3><p class="answer" id="fl-card-answer" hidden></p><button class="btn gold" id="fl-card-reveal" type="button">Reveal model</button><button class="btn light" id="fl-card-next" type="button">Next card</button><button class="btn light" id="fl-card-listen" type="button">Listen</button></div>',false)+
 section('practice','07 · Practise and check','40 varied activities',practice,false)+
 section('answers','08 · Reasons, not just answers','Full answer key',answers,true)+
 section('review','09 · Check your own progress','Can you use what you learnt?','<div class="card checklist">'+l.goals.map((g,i)=>'<label><input type="checkbox" data-fl-goal="'+i+'"'+(state.goals[i]?' checked':'')+'>'+esc(g)+'</label>').join('')+'</div><p id="fl-goal-status" role="status" aria-live="polite"></p><div class="feature"><strong>Your next review:</strong> Choose three difficult examples and one dialogue. Practise them again tomorrow. Then complete five questions without looking at the key and explain why each answer fits.</div><h3>Reference and further practice</h3><p class="note">These external references support further study. Academy explanations, conversations and activities are independently written. External sites provide their own content and services.</p><ul>'+l.sources.map(([title,url])=>'<li><a class="fl-reference" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(title)+'</a></li>').join('')+'</ul><h3>Related lessons</h3><div class="fl-related">'+l.related.map(id=>{const target=window.EVA_COURSE_DATA.lessons.find(x=>x.id===id);return target?'<a href="'+(id==='001'?'lesson.html':'study.html?lesson='+id)+'">Lesson '+esc(id)+': '+esc(target.title)+'</a>':''}).join('')+'</div><div class="finish"><h2>Keep building your English.</h2><p>Move on when the main ideas are clear. Return whenever you need a review.</p><div class="nav-next">'+lessonLink(prev,'← Lesson '+String(prev).padStart(3,'0'))+lessonLink(next,'Lesson '+String(next).padStart(3,'0')+' →')+'</div><a class="btn gold" href="catalog.html">Browse all lessons</a></div>',false)+'</main>';
 page.hidden=false;document.title='Lesson '+lesson.id+' — '+lesson.title+' | Engli Vance Academy';
 document.querySelector('meta[name="description"]').content='Extended British English lesson '+lesson.id+': '+lesson.title+'. Step-by-step teaching, 30 examples, five dialogues and 40 varied activities with answer explanations.';
 const scoreFor=name=>l.practice[name].reduce((n,q,i)=>n+(q.options?(state.answers[name+'-'+i]===q.answer):matches(q,state.answers[name+'-'+i]||'')),0);
 function progress(){
  const names=groupInfo.map(x=>x[0]).filter(n=>n!=='write'&&state.checked[n]);
  const correct=names.reduce((n,g)=>n+scoreFor(g),0),total=names.reduce((n,g)=>n+l.practice[g].length,0);
  const written=l.practice.write.filter((_,i)=>String(state.answers['write-'+i]||'').trim()).length;
  byId('fl-progress').textContent=names.length+' of 5 answer-check sections checked · '+correct+'/'+total+' correct in checked sections · '+written+'/5 personal responses drafted.';
  byId('fl-goal-status').textContent=state.goals.filter(Boolean).length+' of '+l.goals.length+' learning goals checked.';
 }
 function mark(name){
  let attempted=0;
  l.practice[name].forEach((q,i)=>{const value=state.answers[name+'-'+i]||'',ok=q.options?value===q.answer:matches(q,value);if(value.trim())attempted++;
   const f=byId('fl-feedback-'+name+'-'+i);f.hidden=false;f.className='feedback '+(ok?'good':'bad');f.textContent=(ok?'Correct. ':value.trim()?'Review. ':'Not answered. ')+'Answer: '+q.answer+(/[.!?]$/.test(q.answer)?' ':'. ')+q.why;
  });
  const score=byId('fl-score-'+name);score.hidden=false;score.textContent='Score: '+scoreFor(name)+'/'+l.practice[name].length+'. Answered: '+attempted+'/'+l.practice[name].length+'. Read each explanation, then try again.';
 }
 page.querySelectorAll('[data-fl-answer]').forEach(input=>{
  const update=()=>{const id=input.dataset.flAnswer,name=id.split('-')[0];state.answers[id]=input.value;
   if(state.checked[name]){delete state.checked[name];const score=byId('fl-score-'+name);if(score)score.hidden=true;page.querySelectorAll('[id^="fl-feedback-'+name+'-"]').forEach(f=>f.hidden=true)}
   if(!save())byId('fl-progress').textContent='Browser storage is unavailable. Your answers will stay only while this page remains open.';else progress();
  };
  input.addEventListener(input.type==='radio'?'change':'input',update);
 });
 page.querySelectorAll('[data-fl-check]').forEach(b=>b.addEventListener('click',()=>{const name=b.dataset.flCheck;state.checked[name]=true;mark(name);save();progress()}));
 page.querySelectorAll('[data-fl-goal]').forEach(input=>input.addEventListener('change',()=>{state.goals[Number(input.dataset.flGoal)]=input.checked;save();progress()}));
 function speak(text){
  const status=byId('fl-audio-notice');
  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){status.textContent='Speech audio is unavailable here. Use the UK dictionary links or read aloud.';return}
  try{window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-GB';u.rate=.85;
   const voice=window.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase()==='en-gb');if(voice)u.voice=voice;
   status.textContent=voice?'Playing the device’s British English voice.':'Playing a device voice; its accent may differ. Use UK dictionary recordings for a reference.';
   u.onerror=()=>{status.textContent='The device could not play this audio. Use the reference links or read aloud.'};window.speechSynthesis.speak(u);
  }catch(e){status.textContent='Audio could not be played. Use the reference links or read aloud.'}
 }
 page.querySelectorAll('[data-fl-speak]').forEach(b=>b.addEventListener('click',()=>speak(b.dataset.flSpeak)));
 let card=0;function draw(){byId('fl-card-count').textContent='CARD '+(card+1)+' OF '+l.examples.length;byId('fl-card-clue').textContent=l.examples[card][1];byId('fl-card-answer').textContent=l.examples[card][0];byId('fl-card-answer').hidden=true;byId('fl-card-reveal').textContent='Reveal model'}
 byId('fl-card-reveal').addEventListener('click',()=>{const answer=byId('fl-card-answer');answer.hidden=!answer.hidden;byId('fl-card-reveal').textContent=answer.hidden?'Reveal model':'Hide model'});
 byId('fl-card-next').addEventListener('click',()=>{card=(card+1)%l.examples.length;draw()});
 byId('fl-card-listen').addEventListener('click',()=>speak(l.examples[card][0].replace(/\/[^/]+\//g,'')));
 byId('fl-print').addEventListener('click',()=>window.print());
 const opened=[];window.addEventListener('beforeprint',()=>{page.querySelectorAll('details:not([open])').forEach(d=>{opened.push(d);d.open=true})});
 window.addEventListener('afterprint',()=>{opened.splice(0).forEach(d=>d.open=false)});
 Object.keys(state.checked).filter(n=>state.checked[n]&&n!=='write'&&l.practice[n]).forEach(mark);draw();progress();
 const footer=document.querySelector('footer');if(footer&&!footer.textContent.includes('Designed by Sameera Gunawardhana'))footer.insertAdjacentHTML('beforeend','<p style="color:#f4b942">Designed by Sameera Gunawardhana</p>');
 return true;
};
})();
