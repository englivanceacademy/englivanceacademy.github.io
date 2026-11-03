/* Original full foundation lessons; lesson numbers follow the existing syllabus. */
(function(){'use strict';
const L=window.EVA_FULL_LESSONS=window.EVA_FULL_LESSONS||{};
const R=s=>s.trim().split('\n').map(r=>r.trim().split('|').map(x=>x.trim()));
const S=(title,explain,points,table)=>({title,explain,points,table:table||null});
const Q=s=>R(s).map(r=>({prompt:r[0],answer:r[1],options:r.slice(1,4),why:r[4]}));
const T=s=>R(s).map(r=>({prompt:r[0],answer:r[1],why:r[2],accept:r[3]?r[3].split('~'):[]}));
const D=(title,s)=>({title,lines:R(s)});
const beSource=[['British Council: present simple be','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be']];
const table=(head,s)=>({head,rows:R(s)});

L['011']={intro:'A verb can express an action, an event or a state. Learn to find verbs, distinguish them from nouns and adjectives, and recognise useful verb forms without trying to master every tense at once.',
goals:['Find the main verb in a short sentence.','Distinguish an action from a state in clear examples.','Explain why be is a verb even without an action.','Recognise base, -s, -ing, past and participle forms.','Notice a helper and main verb in a verb phrase.'],
sections:[
S('What does a verb do?','A verb helps tell us what happens or what a situation is like. In I write reports, write expresses an action. In I know the answer, know expresses a state of knowledge. In The room is quiet, is links the subject to a description. Not every verb describes a visible movement.',[
'An action is something happening or being done: walk, write, open, drive.',
'A state is a condition, feeling, possession or opinion: know, need, own, like.',
'An event can happen without a deliberate actor: The glass broke.',
'Look at the word in its sentence. One spelling can do different jobs: I work here, but My work is interesting.'
]),
S('Find the verb, not just a word that looks important','Ask what the subject does, what happens or what is being stated about it. The important noun is not necessarily the verb. In The nurse checks the form, nurse and form are nouns; checks is the verb. In The nurse is tired, tired describes the nurse and is is the verb.',[
'A complete ordinary statement normally contains a subject and a verb.',
'A sign such as Reception upstairs can omit words. The full sentence is Reception is upstairs.',
'An instruction such as Please wait has the verb wait even without an expressed you.',
'Do not put be before every action: I work here is complete; I am work here is not the usual present-simple pattern.'
]),
S('Five useful forms of many verbs','Many verbs have five forms worth learning: base, third-person singular present, -ing, past and past participle. Sometimes different grammatical forms have the same spelling. A participle is used with a helper in patterns you will study later; it is not automatically a complete tense.',[
'Regular verbs usually form the past and past participle with -ed.',
'Irregular verbs need individual learning: write, wrote, written.',
'Be is especially irregular: be, am/is/are, being, was/were, been.',
'Learn forms in short sentences as well as lists.'
],table(['Base','Present -s','-ing','Past','Past participle'],`work|works|working|worked|worked
write|writes|writing|wrote|written
go|goes|going|went|gone
have|has|having|had|had`)),
S('Helpers and main verbs work together','In I am writing, am helps form the ongoing-action pattern and writing supplies the main action. In I have written, have helps connect a completed action with the present. In Do you work here?, do helps make the question. These words have different jobs depending on the sentence.',[
'A verb phrase can contain more than one word: is working, has arrived, can help.',
'The helper often carries tense or agreement: she is working, they are working.',
'Have can be a main verb in I have a bag and a helper in I have finished.',
'This is a first map of the system. Later lessons teach each pattern separately.'
]),
S('Action and state depend on meaning','Many state meanings are normally used in simple forms: I know, not I am knowing in the ordinary sense. However, a verb may have a different action meaning. I think you are right expresses an opinion; I am thinking about the problem describes a mental activity in progress.',[
'Do not learn a false rule that a particular verb can never have an -ing form.',
'Compare I have a car with I am having lunch: possession versus an activity.',
'Compare I see your point with I am seeing the manager tomorrow: understanding versus an arrangement.',
'At this stage, learn common whole patterns and check the intended meaning.'
]),
S('Time is expressed by the complete pattern','A base verb alone does not tell you every time relationship. Compare I work every day, I am working now and I worked yesterday. The subject, helper, ending and time expression contribute together. An -ing word on its own does not prove that a sentence is about now.',[
'Routine: I work every weekday. In progress: I am working now.',
'Past: I worked yesterday. Present connection: I have worked here for a year.',
'After can, use the base form: She can help, not She can helps.',
'For practice, underline the whole verb phrase, then identify its main verb.'
])],
examples:R(`I write reports.|Write is an action verb.
She opens the door.|Opens tells us what she does.
They walk to work.|Walk describes an activity.
The glass broke.|Broke describes an event.
I know the answer.|Know expresses a state of knowledge.
He needs a pen.|Needs expresses a requirement.
They own a flat.|Own expresses possession.
We like the course.|Like expresses a feeling or preference.
The room is quiet.|Is is a verb; quiet is an adjective.
She is a nurse.|Is links the person to a job.
I work here.|Work is a verb.
My work is interesting.|Work is a noun; is is the verb.
Please wait.|Wait is the verb in a command.
I am working now.|The verb phrase is am working.
She is writing an email.|Is is a helper; writing gives the main action.
They have arrived.|Have helps form the complete verb phrase.
Do you work here?|Do helps make the question.
She can help.|The base verb follows can.
He works on Mondays.|Works has the present -s form.
They work on Mondays.|Work is used with they.
I worked yesterday.|Worked is a regular past form.
She wrote a note.|Wrote is an irregular past form.
She has written a note.|Written is the participle used with has.
They went home.|Went is the past of go.
They have gone home.|Gone follows have here.
I think you are right.|Think expresses an opinion.
I am thinking about the question.|Thinking describes an activity in progress.
I have a bicycle.|Have is the main possession verb.
I am having lunch.|Having describes an activity.
I can explain the main verb.|Can is a helper; explain is the main verb.`),
dialogues:[D('Finding the verb',`Teacher|What is the verb in Ada checks the form?
Learner|Checks.
Teacher|What are Ada and form?
Learner|They are nouns.`),D('A state, not a movement',`Learner|Is know a verb? I cannot see an action.
Emily|Yes. It expresses a state.
Learner|Like I know the address?
Emily|Exactly.`),D('Why be matters',`James|The room quiet. Is that a full ordinary sentence?
Learner|It needs is: The room is quiet.
James|Which word is the verb?
Learner|Is.`),D('An irregular form',`Learner|Is the past of write writed?
Teacher|No. It is wrote.
Learner|And after has?
Teacher|Has written.`),D('Different meanings of have',`Emily|Do you have a car?
James|Yes. I have a small car.
Emily|And what are you doing now?
James|I am having lunch.`)],
mistakes:R(`I am work here.|I work here.|Do not insert be into the ordinary present-simple action pattern.
The room quiet.|The room is quiet.|The full statement needs a verb.
She can helps.|She can help.|Use the base form after can.
I writed a note.|I wrote a note.|Write has an irregular past.
Every verb describes physical movement.|Verbs can express actions, events and states.|Know and be are verbs too.`),
practice:{mc:Q(`Which word is the verb in The nurse checks the form?|checks|nurse|form|Checks expresses the action.
Which is a state in I know the answer?|know|answer|the|Know expresses knowledge.
Which word is the verb in The room is quiet?|is|room|quiet|Is links the subject to the description.
Which sentence uses work as a noun?|My work is interesting.|I work here.|They work late.|My work names the activity or job.
Which is the past of write?|wrote|writed|writing|Write is irregular.
Which form completes has __ a note?|written|wrote|writes|Has combines with the participle written.
Which is a regular past form?|worked|went|wrote|Worked adds -ed.
Which sentence is standard?|She can help.|She can helps.|She can to help.|Can takes the base verb.
What is the whole verb phrase in I am working?|am working|I am|working now only|The helper and main verb form the phrase.
Which statement is accurate?|A verb can express a state.|All verbs are visible actions.|An -ing word always means now.|Meaning and full structure matter.`),gap:T(`Find the verb: They walk home.|walk|Walk expresses the activity.
Find the verb: He needs time.|needs|Needs expresses a requirement.
Find the verb: The office is quiet.|is|Is is a form of be.
Complete: I __ here every day. (work / working)|work|Use the ordinary simple form here.
Complete: She can __. (help / helps)|help|Use the base form after can.
Write the past of work.|worked|Work is regular.
Write the past of go.|went|Go is irregular.
Write the participle in has written.|written|Written is used with has.
Write the helper in is writing.|is|Is helps form the ongoing-action phrase.
Write the main verb form in is writing.|writing|Writing supplies the main action.`),correct:T(`Correct: I am work here.|I work here.|Remove am from this present-simple action statement.
Correct: The office quiet.|The office is quiet.|Add the missing verb.
Correct: She can helps.|She can help.|Use the base form after can.
Correct: I writed a report.|I wrote a report.|The past of write is wrote.
Correct: He has wrote a note.|He has written a note.|Use the participle after has.`),order:T(`Order: reports / write / I|I write reports.|The subject comes before the action verb.
Order: answer / know / the / I|I know the answer.|Know expresses a state.
Order: quiet / is / office / The|The office is quiet.|Be links the subject to an adjective.
Order: help / can / She|She can help.|A modal is followed by a base verb.
Order: working / am / I / now|I am working now.|Am and working form the verb phrase.`),reading:'Ada works in an office. She writes reports and knows the customers well. Today she is writing a short email. Yesterday she wrote a longer report. Her colleague can help. The office is quiet, so they can concentrate.',read:Q(`What is Ada’s usual activity?|Writing reports|Driving a train|Cooking meals|She writes reports.
Which word expresses knowledge?|knows|reports|office|Knows is a state verb here.
What is she doing today?|Writing an email|Reading a menu|Buying a car|The passage says she is writing an email.
Which is the past form used in the passage?|wrote|writes|writing|Wrote refers to yesterday.
In can help, which word is the main verb?|help|can|colleague|Help carries the main action.`),write:T(`Write a sentence with an action verb.|I write emails at work.|Choose an action and give a clear subject.
Write a sentence with a state verb.|I know the address.|The meaning should describe a state.
Write a sentence using be and an adjective.|The room is quiet.|Be is still a verb.
Show one verb in its base and past forms.|I work here. I worked yesterday.|Keep the time meanings clear.
Write a sentence with a helper and main verb.|She can help.|Identify both words in the verb phrase.`)},sources:[['Cambridge: verbs and their types','https://dictionary.cambridge.org/grammar/british-grammar/state-and-action-verbs']],related:['010','012','034','035']};

L['012']={intro:'Use am, is and are to give names, jobs, descriptions, ages and locations. Learn the complete present-tense pattern, useful positive contractions and the important difference between be and an ordinary action verb.',
goals:['Match every subject pronoun with am, is or are.','Use be for identity, a job, a description and a location.','Use a or an with a singular countable job noun.','Give an age and a feeling in complete sentences.','Recognise positive contractions and avoid an extra be before a simple action.'],
sections:[
S('Be joins a subject to information','Be is a verb even when nobody is moving. In I am Ada, it gives identity. In She is a nurse, it gives a job. In The room is quiet, it gives a description. In They are at work, it gives location. Keep the subject before be in an ordinary positive statement.',[
'Pattern: subject + am/is/are + information.',
'The information can be a noun phrase, adjective or place phrase.',
'Do not omit be: The room is quiet, not The room quiet.',
'Do not add an action verb unnecessarily: She is tired is complete.'
]),
S('Learn the whole agreement pattern','Be is unusually irregular. Its present form depends on the subject. You are is used for one listener or several. They are is also used with singular they. Noun subjects follow the same number pattern: the desk is, the desks are.',[
'Use am only with I in the present pattern taught here.',
'Use is with he, she, it and an ordinary singular noun phrase.',
'Use are with you, we, they and plural noun phrases.',
'Two people joined by and normally take are: Ada and Ravi are here.'
],table(['Subject','Full form','Contraction'],`I|I am|I’m
you|you are|you’re
he|he is|he’s
she|she is|she’s
it|it is|it’s
we|we are|we’re
they|they are|they’re`)),
S('Names, jobs and nationalities','Use be to introduce who someone is. A singular countable job noun normally needs a determiner such as a/an: I am a nurse. A nationality adjective normally does not: I am Sri Lankan. A plural job noun does not use a/an: We are nurses.',[
'I am Ada. She is my colleague. These identify people.',
'He is a driver; she is an engineer. Choose a/an by the next sound.',
'I am Sri Lankan. I am from Sri Lanka. Both are useful but different patterns.',
'We are students, not We are a students. Articles are developed in Lesson 015.'
]),
S('Descriptions, feelings, age and location','Use an adjective after be to describe: The office is busy. Use a place phrase to locate: The office is near the station. Use be, not have, for an ordinary age statement: I am forty years old. The adjective itself does not become plural.',[
'Feelings: I am tired; she is happy; they are worried.',
'Descriptions: The bag is heavy; the bags are heavy.',
'Location: I am at home; we are in the office.',
'Age: He is thirty. He is thirty years old. The two versions have the same basic age meaning.'
]),
S('Positive contractions are common in conversation','I’m means I am; she’s can mean she is in this lesson. An apostrophe shows missing letters. Contractions are natural in speech and much everyday writing. Full forms can be clearer for emphasis and are common in formal writing.',[
'I am ready → I’m ready. They are here → They’re here.',
'Do not confuse you’re with your or they’re with their. The meanings differ.',
'He’s can mean he is or he has in other patterns; context decides.',
'Do not end a short positive answer with only a contracted be: Yes, I am, not Yes, I’m.'
]),
S('Be is not the helper for every sentence','I work in a clinic uses an ordinary action verb without am. I am working now uses be plus an -ing form. These are different patterns. Today, focus on be followed by a name, noun phrase, adjective or place phrase; later lessons teach ongoing actions fully.',[
'Correct: I am a nurse. Correct: I work in a clinic.',
'Avoid: I am work in a clinic. Do not combine the patterns that way.',
'Negative statements add not; questions move be before the subject. Lessons 013–014 develop those skills.',
'Practise changing one subject at a time: I am ready → she is ready → we are ready.'
])],
examples:R(`I am Ada.|Be links the speaker to a name.
I am a nurse.|Use a with the singular job noun.
I am an engineer.|An comes before the vowel sound in engineer.
I am Sri Lankan.|Sri Lankan is a nationality adjective here.
I am from Sri Lanka.|From introduces the country of origin.
You are welcome.|You takes are.
You are all early.|You can refer to a group.
He is a driver.|He takes is; a comes before driver.
She is my colleague.|My identifies the colleague relationship.
It is a useful book.|It refers to a known singular thing.
We are nurses.|A plural job noun does not take a/an.
They are students.|They takes are.
Ada and Ravi are here.|Two named people normally take are.
The desk is clean.|A singular subject takes is.
The desks are clean.|A plural subject takes are.
I am forty years old.|Use be for age.
She is thirty.|Years old can be omitted.
The room is quiet.|Quiet is an adjective after be.
The rooms are quiet.|The adjective stays the same.
I am tired.|Be introduces a feeling or condition.
They are happy.|Happy does not take plural s.
She is at home.|At home is a place phrase.
We are in the office.|In introduces the enclosed place.
The station is nearby.|Be introduces location information.
I’m ready.|I’m means I am.
You’re helpful.|You’re means you are.
She’s a teacher.|She’s means she is here.
We’re early.|We’re means we are.
They’re at work.|They’re means they are.
I work in a clinic.|This action sentence does not need am.`),
dialogues:[D('A new colleague',`Ada|Hello. I am Ada. I am a nurse.
Ravi|Nice to meet you. I’m Ravi.
Ada|Are you a nurse too?
Ravi|Yes, I am.`),D('One room, two rooms',`Emily|The room is quiet.
Learner|And two rooms?
Emily|The rooms are quiet.
Learner|So the verb changes, but quiet stays the same.`),D('Age and origin',`James|I am thirty years old. I’m from London.
Ada|I’m forty. I’m from Sri Lanka.
James|We are both English learners today.
Ada|Yes. We’re ready.`),D('Location',`Colleague|Where is Ada?
Ravi|She is in the office.
Colleague|And the visitors?
Ravi|They are at reception.`),D('Be or work?',`Learner|I am work in a clinic?
Teacher|Say I work in a clinic.
Learner|And I am a nurse?
Teacher|Yes. That uses be and a job noun.`)],
mistakes:R(`I is ready.|I am ready.|Use am with I.
She are a nurse.|She is a nurse.|Use is with she.
They is here.|They are here.|Use are with they.
I am nurse.|I am a nurse.|A singular countable job noun normally needs a determiner.
I have forty years.|I am forty years old.|Use be for age in this pattern.
We are happys.|We are happy.|The adjective does not take plural s.`),
practice:{mc:Q(`Choose the form with I.|am|is|are|The pattern is I am.
Choose: She __ a nurse.|is|am|are|She takes is.
Choose: We __ ready.|are|is|am|We takes are.
Which sentence gives a job correctly?|He is a driver.|He is driver.|He are a driver.|Use is and a singular article.
Which sentence gives nationality correctly?|I am Sri Lankan.|I am a Sri Lankan adjective.|I from Sri Lankan.|A nationality adjective can follow be without an article.
Which sentence gives age naturally?|I am forty years old.|I have forty years.|I are forty.|Use be for age.
What does they’re mean?|they are|their|there|The apostrophe marks missing letters.
Which sentence is standard?|I work in a clinic.|I am work in a clinic.|I is work in a clinic.|The ordinary action pattern does not add am.
Choose: The desks __ clean.|are|is|am|Desks is plural.
Which short positive answer is complete?|Yes, I am.|Yes, I’m.|Yes, I are.|Do not leave a positive be contraction at the end.`),gap:T(`Complete: I __ ready.|am|I takes am.
Complete: You __ welcome.|are|You takes are.
Complete: He __ a driver.|is|He takes is.
Complete: She __ at home.|is|She takes is.
Complete: It __ a book.|is|It takes is.
Complete: We __ early.|are|We takes are.
Complete: They __ students.|are|They takes are.
Complete: Ada and Ravi __ colleagues.|are|Two people joined by and take are.
Complete: I am __ engineer.|an|Engineer begins with a vowel sound.
Write the full form of I’m.|I am|The contraction combines I and am.`),correct:T(`Correct: I is ready.|I am ready.|Use am with I.
Correct: She are a nurse.|She is a nurse.|Use is with she.
Correct: The desks is clean.|The desks are clean.|The subject is plural.
Correct: I am nurse.|I am a nurse.|Add a before the singular job noun.
Correct: We are happys.|We are happy.|Adjectives normally do not have plural endings.`),order:T(`Order: a / am / nurse / I|I am a nurse.|Put the subject before be and the job phrase.
Order: home / at / is / She|She is at home.|At home gives location.
Order: early / are / We|We are early.|Use are with we.
Order: old / years / forty / am / I|I am forty years old.|Use be with age.
Order: quiet / are / rooms / The|The rooms are quiet.|The plural subject takes are.`),reading:'My name is Ada. I am a nurse. I am from Sri Lanka, and I am forty years old. My colleague is Ravi. He is a driver. We are at work today. The office is quiet, and we are ready for the visitors.',read:Q(`What is Ada’s job?|A nurse|A driver|An engineer|She says I am a nurse.
Where is Ada from?|Sri Lanka|London|India|The passage gives Sri Lanka.
How old is Ada?|Forty|Thirty|Fifty|She is forty years old.
Who is the driver?|Ravi|Ada|The visitors|Ravi is identified as a driver.
What is the office like?|Quiet|Busy|Closed|The office is quiet.`),write:T(`Introduce your name with be.|I am Ada.|Use your own or an imaginary name.
Write a sentence about a job.|I am a nurse.|Use a/an with a singular countable job noun.
Write a plural description.|The rooms are clean.|Match the plural subject with are.
Write a location sentence.|We are in the office.|Use a clear subject, be and place phrase.
Give a full form and its positive contraction.|They are ready. They’re ready.|Keep the apostrophe and the same meaning.`)},sources:beSource,related:['010','011','013','014','015']};

L['013']={intro:'Make clear negative statements with be. Learn where not belongs, compare the possible contractions and distinguish it’s, its, you’re and your in useful everyday contexts.',
goals:['Put not after am, is or are.','Use I’m not, isn’t and aren’t accurately.','Recognise she’s not and she isn’t as equivalent negative patterns.','Keep the subject and the correct be form in a negative.','Distinguish a contraction from a possessive word.'],
sections:[
S('A negative changes the meaning, not the subject','A positive statement says something is true: Ada is here. A negative says it is not true: Ada is not here. Keep the original subject and the correct form of be. Put not directly after am, is or are in the basic pattern.',[
'I am ready → I am not ready.',
'She is at home → She is not at home.',
'They are nurses → They are not nurses.',
'Do not add do or does to make these be negatives.'
]),
S('Full forms and the common negative contractions','Is not contracts to isn’t; are not contracts to aren’t. For I am not, the usual standard learner form is I’m not. Amn’t occurs in some regional English varieties, but it is not the general form used in this course.',[
'I am not → I’m not. Do not write I am’t.',
'He is not → he isn’t. She is not → she isn’t.',
'We are not → we aren’t. They are not → they aren’t.',
'An apostrophe marks omitted letters; it is not optional decoration.'
],table(['Full form','Negative contraction','Another common form'],`I am not|I’m not|No usual amn’t form in this course
you are not|you aren’t|you’re not
he is not|he isn’t|he’s not
she is not|she isn’t|she’s not
it is not|it isn’t|it’s not
we are not|we aren’t|we’re not
they are not|they aren’t|they’re not`)),
S('There are two common ways to contract many negatives','She isn’t ready and She’s not ready have the same basic negative meaning. One joins is and not; the other joins she and is. Do not combine the two contractions into She’sn’t. Full forms are also correct and can make a correction clearer.',[
'They aren’t at home = They’re not at home = They are not at home.',
'It isn’t my phone = It’s not my phone.',
'For emphasis, a speaker may use the full phrase: I am not late.',
'A negative contraction can end a short answer: No, she isn’t. Positive short-answer contractions behave differently.'
]),
S('Use negatives for identity, location and description','The negative pattern works with the same information as a positive be statement. You can deny a job, a location, an age or a description. Give the correction afterwards when it helps: I’m not a driver. I’m a nurse.',[
'Identity: This is not my passport.',
'Location: We are not in the meeting room.',
'Description: The bag is not heavy.',
'Age: He is not thirty; he is forty. Keep an appropriate article when the following noun needs one.'
]),
S('Contractions and possessives are different words','It’s usually means it is or it has, depending on the next words. Its without an apostrophe expresses a relationship or possession: The company changed its name. You’re means you are; your goes before a noun. They’re means they are; their goes before a noun.',[
'It’s not my bag = It is not my bag.',
'The dog is in its bed: its relates the bed to the dog.',
'You’re not late = You are not late. Your ticket is here: your identifies the ticket.',
'Test a suspected contraction by expanding it. If it is does not fit the meaning, do not use it’s for possession.'
]),
S('Be negatives and action negatives are different systems','She isn’t busy uses be. She doesn’t work today uses an ordinary verb with does not. Do not mix them into She doesn’t is busy or She isn’t work today. Later lessons develop ordinary present-simple negatives.',[
'Before an adjective or place phrase in this lesson, keep be: I’m not tired; we aren’t at home.',
'Not normally comes after be, not before it: They are not here.',
'A question such as Isn’t she here? has a different order and can express expectation; practise basic statements first.',
'Say a positive, its negative and a useful correction aloud as one short sequence.'
])],
examples:R(`I am not late.|Not follows am.
I’m not late.|The usual contraction joins I and am.
I am not a driver.|Keep a before the singular job noun.
I’m not tired.|An adjective follows the negative be phrase.
You are not alone.|You takes are.
You aren’t late.|Aren’t means are not.
You’re not late.|You’re means you are.
He is not available.|Not follows is.
He isn’t available.|Isn’t means is not.
He’s not available.|The subject and is are contracted instead.
She is not at home.|The negative denies location.
She isn’t at home.|A common negative contraction.
She’s not at home.|The same basic negative meaning.
It is not my phone.|It takes is.
It isn’t my phone.|Is and not contract.
It’s not my phone.|It’s means it is here.
We are not ready.|We takes are.
We aren’t ready.|Aren’t can follow we.
We’re not ready.|We’re means we are.
They are not nurses.|A plural job noun has no a/an.
They aren’t nurses.|They takes aren’t.
They’re not nurses.|They’re means they are.
The office isn’t open.|A singular noun phrase takes isn’t.
The offices aren’t open.|A plural noun phrase takes aren’t.
This is not my passport.|Deny ownership or identification.
The dog is in its bed.|Its has no apostrophe for this relationship.
Your ticket is here.|Your identifies whose ticket.
You’re not in the wrong room.|You’re expands to you are.
No, she isn’t.|A negative contraction can end this short answer.
I’m not a driver. I’m a nurse.|Give the useful correction after the negative.`),
dialogues:[D('Correcting a job',`Visitor|Are you the driver?
Ada|No, I’m not. I’m a nurse.
Visitor|Thank you for explaining.
Ada|You’re welcome.`),D('Not at home',`James|Is Emily at home?
Ravi|No, she isn’t. She’s at work.
James|So she’s not available now?
Ravi|That’s right.`),D('The wrong phone',`Emily|Is this your phone?
Ada|No. It isn’t my phone.
Emily|Is it Ravi’s?
Ada|I’m not sure. Let’s ask him.`),D('Full and short forms',`Teacher|Change They are not ready to a contraction.
Learner|They aren’t ready.
Teacher|Is there another form?
Learner|They’re not ready.`),D('Checking a word',`Learner|Does its need an apostrophe in The dog is in its bed?
Teacher|No. Its is possessive there.
Learner|And It’s not my bag?
Teacher|That means It is not my bag.`)],
mistakes:R(`I not am late.|I am not late.|Put not after be.
She don’t is tired.|She is not tired.|Be does not need do in this negative.
They isn’t ready.|They aren’t ready.|Match are with they.
She’sn’t here.|She isn’t here.|Use one recognised contraction pattern.
Its not my phone.|It’s not my phone.|Here it’s means it is.
The dog is in it’s bed.|The dog is in its bed.|Possessive its has no apostrophe.`),
practice:{mc:Q(`Where does not go in a basic be negative?|After am/is/are|Before the subject always|Before am/is/are|The pattern is subject + be + not.
Which is the usual course form for I am not?|I’m not|I am’t|I not’m|Contract I am, leaving not separate.
Which means she is not?|she isn’t|she aren’t|she amn’t|Is not becomes isn’t.
Which matches They are not ready?|They’re not ready.|They’s not ready.|They isn’t ready.|They’re expands to they are.
Which sentence is standard?|We aren’t late.|We isn’t late.|We don’t are late.|We takes are not.
Which word means it is in __ not my phone?|It’s|Its|Their|It’s expands to it is.
Which phrase shows possession?|its bed|it’s bed|isn’t bed|Its goes before the noun without an apostrophe.
Which is a correct negative short answer?|No, she isn’t.|No, she is notn’t.|No, she aren’t.|The negative contraction can end this answer.
Which sentence denies location?|She isn’t at home.|She is a nurse.|Her bag is blue.|At home gives a location.
Which has the same meaning as It isn’t heavy?|It’s not heavy.|Its heavy.|It not is heavy.|Both correct versions contain is not.`),gap:T(`Complete: I am __ ready.|not|Put not after am.
Complete: She __ not at home.|is|She takes is.
Complete: They __ not late.|are|They takes are.
Contract is not.|isn’t|Use the apostrophe.|isn't
Contract are not.|aren’t|Use the apostrophe.|aren't
Complete the usual contraction: I __ not late. (am / is)|am|The full form uses am.
Expand I’m not.|I am not|I’m means I am.
Expand she isn’t.|she is not|Isn’t means is not.
Choose its or it’s: __ not my bag.|it’s|The meaning is it is.|it's
Choose its or it’s: The company changed __ name.|its|Possessive its has no apostrophe.`),correct:T(`Correct: I not am ready.|I am not ready.|Not follows am.
Correct: They isn’t here.|They aren’t here.|They takes are not.|They are not here.~They’re not here.~They're not here.
Correct: She don’t is late.|She is not late.|Do not add do to this be negative.|She isn’t late.~She isn't late.~She’s not late.~She's not late.
Correct: Its not my phone.|It’s not my phone.|Use the contraction it is.|It's not my phone.~It is not my phone.
Correct: The dog is in it’s bed.|The dog is in its bed.|Use possessive its without an apostrophe.`),order:T(`Order: not / am / late / I|I am not late.|Keep not after am.
Order: ready / are / not / They|They are not ready.|The plural subject takes are.
Order: is / home / not / at / She|She is not at home.|The location follows the negative phrase.
Order: phone / not / my / is / It|It is not my phone.|Not denies identification.
Order: nurses / not / are / We|We are not nurses.|Use a plural job noun after we.`),reading:'Ada is not a driver. She is a nurse. Today she isn’t at home; she is at work. Ravi and Emily are not late, but they aren’t ready for the meeting yet. Ada sees a phone on the desk. She says, “It’s not my phone.” The company’s name is on its case.',read:Q(`Which job does Ada deny?|Driver|Nurse|Teacher only|She says she is not a driver.
Where is Ada today?|At work|At home|On holiday|The negative is followed by the correct location.
Are Ravi and Emily late?|No|Yes|The passage says they are nurses.|They are not late.
What does It’s mean in It’s not my phone?|It is|It has a case|Possessive its|The expansion is It is not my phone.
Why is its written without an apostrophe before case?|It expresses a relationship or possession.|It means it is.|It is a plural ending.|Its identifies the case of the phone.`),write:T(`Write a true or imaginary negative about your job.|I’m not a driver.|Keep the subject and appropriate be form.
Write one negative in two contraction patterns.|She isn’t ready. She’s not ready.|Both must expand to she is not ready.
Write a negative and a helpful correction about location.|We aren’t at home. We are at work.|The correction should answer the likely question.
Use its and it’s in separate sentences.|The dog is in its bed. It’s not asleep.|Expand it’s to test the difference.
Write a short negative response to Is she available?|No, she isn’t.|The pronoun and be form should match.`)},sources:beSource,related:['012','014','020']};

L['014']={intro:'Ask yes/no questions with am, is and are, then answer from the correct speaker’s point of view. Learn complete short answers, natural negatives and when to add useful information.',
goals:['Move be before the subject to form a yes/no question.','Choose am, is or are to match the subject.','Answer Are you…? with I or we as appropriate.','Use a full positive be form at the end of a short answer.','Add a useful correction after a negative answer.'],
sections:[
S('Move be in front of the subject','Start with an ordinary statement: She is ready. To ask a yes/no question, move is before she: Is she ready? Do not add do or does. The other information usually stays in the same order. A question mark finishes the written question.',[
'You are ready → Are you ready?',
'He is your colleague → Is he your colleague?',
'They are at work → Are they at work?',
'I am in the right room → Am I in the right room?'
]),
S('Keep agreement when the subject is a noun phrase','The same matching rule applies in a question. A singular object normally uses is; plural objects use are. This and that normally take is, while these and those take are. You remains are even when only one person is addressed.',[
'Is the office open? Are the offices open?',
'Is this your ticket? Are these your tickets?',
'Am I early? is the question a speaker asks about themself.',
'Be and the subject swap positions; they do not change the number meaning.'
],table(['Statement','Question','Short positive answer'],`You are ready.|Are you ready?|Yes, I am. (one listener answers)
She is here.|Is she here?|Yes, she is.
They are open.|Are they open?|Yes, they are.
This is your bag.|Is this your bag?|Yes, it is.
I am early.|Am I early?|Yes, you are. (another person answers)`)),
S('Short answers repeat the subject idea and be','A short answer normally contains Yes or No, a suitable pronoun and the matching be form. Use it for a singular thing and they for plural things. A full sentence is also possible, but a short answer avoids repeating information that is already clear.',[
'Is Ada ready? — Yes, she is. No, she isn’t.',
'Are the forms ready? — Yes, they are. No, they aren’t.',
'Is this your passport? — Yes, it is. No, it isn’t.',
'Avoid Yes, is or No, aren’t on their own in the standard pattern.'
]),
S('I and you change with the speaker','If James asks Ada Are you ready?, you refers to Ada. Ada answers Yes, I am because she is now speaking about herself. If James asks a whole group, the group may answer Yes, we are. If Ada asks Am I late?, another person answers No, you aren’t.',[
'Question to one listener: Are you a nurse? — Yes, I am.',
'Question to a group: Are you ready? — Yes, we are.',
'Question about the speaker: Am I early? — Yes, you are.',
'For Are we late?, choose the answer pronoun by whether the answerer belongs to the group: No, we aren’t or No, you aren’t can fit different situations.'
]),
S('Positive and negative endings behave differently','At the end of a short positive answer, use the full form: Yes, I am; Yes, she is; Yes, they are. Do not stop at Yes, I’m or Yes, she’s. Negative contractions can finish an answer: No, she isn’t. I’m not is the usual negative first-person form.',[
'Positive: Yes, we are, not Yes, we’re.',
'Negative: No, they aren’t or No, they’re not.',
'First person: No, I’m not or No, I am not.',
'A contraction is fine when more information follows: Yes, she’s ready.'
]),
S('Answer the real question and add useful information','Short answers are a starting point for communication. A negative can be followed by the right information: Is this Room 4? — No, it isn’t. Room 4 is upstairs. Use a friendly tone; an accurate correction is often more useful than only No.',[
'At reception: Are you here for the course? — Yes, I am.',
'At work: Is Ada available? — No, she isn’t. She is in a meeting.',
'For a neutral beginner question, use the positive question form. Negative questions can suggest expectations and come later.',
'Practise asking and answering, then exchange roles so I and you both become natural.'
])],
examples:R(`Are you ready?|Are comes before you.
Yes, I am.|One listener answers about themself.
No, I’m not.|The common first-person negative answer.
Am I early?|The speaker asks about themself.
Yes, you are.|Another person answers the previous question.
Is he your colleague?|He takes is.
Yes, he is.|Use a full positive ending.
No, he isn’t.|A negative contraction can end the answer.
Is she at home?|The place phrase follows the subject.
Yes, she is.|Repeat the be form, not does.
No, she’s not.|This is another common negative form.
Is it heavy?|It refers to a singular thing.
Yes, it is.|Use the full final verb.
No, it isn’t.|A standard negative short answer.
Are we late?|We takes are.
No, we aren’t.|The answerer includes themself in the group here.
Are they at work?|They takes are.
Yes, they are.|A full positive ending.
Is the office open?|The office is singular.
No, it isn’t. It is closed.|Add a useful correction.
Are the offices open?|Offices is plural.
Yes, they are.|They replaces the plural noun phrase.
Is this your ticket?|This refers to one thing.
Yes, it is.|It replaces this ticket in the answer.
Are these your tickets?|These refers to plural things.
No, they aren’t.|They replaces the plural reference.
Are you all ready?|You addresses a group.
Yes, we are.|The group answers with we.
Is Ada available?|The question checks availability.
No, she isn’t. She is in a meeting.|Give the relevant reason or location.`),
dialogues:[D('One listener',`James|Are you ready, Ada?
Ada|Yes, I am.
James|Is your colleague ready too?
Ada|No, he isn’t. He needs a moment.`),D('A group replies',`Emily|Are you all here for the course?
Learners|Yes, we are.
Emily|Are your books on the desks?
Learners|Yes, they are.`),D('Finding the right room',`Visitor|Is this Room 4?
Receptionist|No, it isn’t. Room 4 is upstairs.
Visitor|Am I early?
Receptionist|Yes, you are. Please take a seat.`),D('A ticket check',`Worker|Is this your ticket?
Traveller|Yes, it is.
Worker|Are these bags yours too?
Traveller|No, they aren’t.`),D('A colleague is unavailable',`Caller|Is Ada available?
Ravi|No, she isn’t. She is in a meeting.
Caller|Is she in the office today?
Ravi|Yes, she is.`)],
mistakes:R(`You are ready? (as the basic neutral question pattern)|Are you ready?|Use inversion for the neutral pattern taught here; rising statements have special conversational uses.
Does she is ready?|Is she ready?|Do not add does to this be question.
Are he here?|Is he here?|He takes is.
Are you ready? — Yes, I are.|Are you ready? — Yes, I am.|The answer changes perspective to I.
Yes, she’s. (answer ending here)|Yes, she is.|A positive short answer needs the full final be form.
Is this your bag? — Yes, she is.|Is this your bag? — Yes, it is.|Use it for the singular object.`),
practice:{mc:Q(`Turn She is ready into a question.|Is she ready?|Does she is ready?|Are she ready?|Move is before she.
Choose the question with I.|Am I early?|Is I early?|Are I early?|I takes am.
One listener answers Are you ready? Which fits?|Yes, I am.|Yes, I are.|Yes, you am.|The listener speaks about themself.
A group answers Are you all ready? Which fits?|Yes, we are.|Yes, I is.|Yes, they am.|The answering group uses we.
Which positive short answer is complete?|Yes, she is.|Yes, she’s.|Yes, is.|Use a pronoun and a full final be form.
Which negative answer is correct?|No, they aren’t.|No, they isn’t.|No, aren’t.|Use they with are not.
Is this your ticket? Choose the answer.|Yes, it is.|Yes, he is.|Yes, they are.|A singular thing normally takes it.
Are the forms ready? Choose the answer.|Yes, they are.|Yes, it is.|Yes, she am.|Forms is plural.
Which question uses no unnecessary do?|Is Ada available?|Does Ada is available?|Do is Ada available?|Be makes this question itself.
What helps after a negative answer?|A useful correction or explanation|Repeating the wrong fact|Changing every pronoun to I|Relevant extra information helps the listener.`),gap:T(`Complete: __ you ready?|Are|You takes are.
Complete: __ she here?|Is|She takes is.
Complete: __ I early?|Am|I takes am.
Complete: __ the doors open?|Are|Doors is plural.
Complete: Is this your bag? Yes, __ is.|it|Use it for a singular thing.
Complete: Are the books here? Yes, __ are.|they|Use they for plural things.
Complete: Are you ready? Yes, I __.|am|The answerer uses I am.
Complete: Is she late? No, she __. (contracted negative)|isn’t|Isn’t means is not.|isn't
Complete: Are they open? No, they __. (contracted negative)|aren’t|Aren’t means are not.|aren't
Complete: Am I early? Yes, you __.|are|Another person addresses the original speaker as you.`),correct:T(`Correct: Does she is ready?|Is she ready?|Remove does and place is before she.
Correct: Are he here?|Is he here?|He takes is.
Correct: Are you ready? Yes, I are.|Are you ready? Yes, I am.|The answering speaker uses I am.
Correct a positive short answer ending here: Yes, she’s.|Yes, she is.|Use the full final be form.
Correct: Is this your bag? Yes, she is.|Is this your bag? Yes, it is.|It refers to the singular bag.`),order:T(`Order: ready / you / Are|Are you ready?|Be comes before the subject.
Order: colleague / your / she / Is|Is she your colleague?|Is comes before she.
Order: late / I / Am|Am I late?|Use am with I.
Order: offices / open / the / Are|Are the offices open?|The plural noun phrase takes are.
Order: your / ticket / this / Is|Is this your ticket?|This refers to one ticket.`),reading:'Ada arrives at an English class. James asks, “Are you ready?” Ada replies, “Yes, I am.” Two other learners arrive. James asks, “Are you here for the course?” They answer, “Yes, we are.” Ada points to a ticket and asks, “Is this yours?” James says, “No, it isn’t.”',read:Q(`Who answers Yes, I am?|Ada|The two learners together|The ticket|Ada speaks about herself.
Why do the two learners answer we?|They are speaking as a group.|They mean the ticket.|They are using a singular object.|We includes both answering speakers.
Which form begins the question to the learners?|Are|Am|Does|You takes are.
What does it refer to in No, it isn’t?|The ticket|Ada|The course teacher|The question points to a singular ticket.
Which positive answer follows the standard ending rule?|Yes, I am.|Yes, I’m.|Yes, is.|The final positive be form is full.`),write:T(`Write a question with Are you and answer about yourself.|Are you ready? Yes, I am.|Change you to I in the reply when appropriate.
Write a question about a singular object and a short answer.|Is the bag heavy? No, it isn’t.|Use it in the answer.
Write a question about plural things.|Are the forms ready?|Match the plural subject with are.
Write a negative answer with useful extra information.|No, she isn’t. She is in a meeting.|The added information should help.
Write a four-line reception conversation using two be questions.|A: Is this Room 4? B: Yes, it is. A: Am I early? B: Yes, you are.|Keep the answer perspective clear.`)},sources:beSource,related:['010','012','013','017']};

L['015']={intro:'Choose a or an by the next spoken sound. Learn why a singular countable noun often needs an article, how an adjective changes the choice, and when a/an cannot be used.',
goals:['Use a/an with an appropriate singular countable noun.','Choose by sound rather than only the written letter.','Use an hour but a university and a useful tool.','Keep a/an before an adjective and noun together.','Avoid a/an directly before plural or uncountable nouns.'],
sections:[
S('A and an introduce one member of a type','A/an often introduces one person or thing when the listener does not yet know exactly which one. I need a pen means one pen, not a previously identified particular pen. She is a nurse identifies her as a member of a job group. A and an have the same basic grammatical job.',[
'Use a/an with singular countable nouns: a chair, an office.',
'Do not put a/an directly before a plural: some chairs, not a chairs.',
'A job noun normally needs a determiner: He is an accountant.',
'One can emphasise the number or contrast with two; a/an is often the ordinary unstressed choice.'
]),
S('Listen to the next sound','Use a before a consonant sound and an before a vowel sound. The sound immediately after the article matters, not simply the first written letter of the noun. If an adjective comes between the article and noun, listen to the adjective first.',[
'a pen, a bag, a small office: the next sound is a consonant.',
'an apple, an engineer, an old bag: the next sound is a vowel.',
'an umbrella but a university: university begins with /j/, like the start of yes.',
'an hour but a hotel in the usual pronunciation with spoken h.'
],table(['Phrase','First following sound','Choice'],`a nurse|/n/|a
an engineer|A vowel|an
a useful book|/j/ in useful|a
an hour|A vowel; h is silent|an
a university|/j/|a
an old university|A vowel in old|an`)),
S('Silent letters and abbreviations need pronunciation','Hour and honest have silent initial h, so an hour and an honest answer are usual. One begins with /w/, so a one-way ticket is correct. For abbreviations pronounced as letter names, use the first letter name’s sound: an MRI scan starts with the vowel in em.',[
'a European country: European begins with /j/.',
'a uniform and a user: both begin with /j/ in their usual pronunciations.',
'an X-ray: the letter name X begins with a vowel sound.',
'If an abbreviation has more than one pronunciation, article choice can depend on how the speaker says it. Check the spoken form.'
]),
S('The article stays before the describing words','The basic order is a/an + adjective + singular noun. Say a quiet room and an interesting lesson. The adjective normally does not replace the noun by itself in this pattern. Compare an office with a busy office: adding busy changes the first following sound.',[
'an umbrella → a large umbrella.',
'a room → an empty room.',
'Do not say a an office or an a office. Choose one article for the phrase.',
'An article can cover a longer phrase, but today practise one adjective and one noun.'
]),
S('Countability limits where a/an can go','Information, advice and furniture are normally uncountable in their basic meanings. Do not say an information or a furniture. Use some information, a piece of advice or a piece of furniture. The word piece is countable and can therefore take a.',[
'a document, two documents; some information, two pieces of information.',
'a chair is one item of furniture; furniture itself usually does not take a/an.',
'Some nouns can change countability with meaning. An orange juice can mean one serving in a café.',
'For the foundation pattern, learn each noun with a natural phrase rather than assuming every object word is countable.'
]),
S('A/an is different from the, my and this','A/an introduces a type or a not-yet-identified item. The identifies something the listener can work out. I bought a book. The book is on the desk introduces the book, then identifies the same one. My and this also identify a noun, so do not usually combine them directly with a/an.',[
'I need a pen. Any suitable pen will do.',
'I need the pen on the desk. The phrase identifies a particular pen.',
'This is my bag, not This is a my bag.',
'Article choice has more uses and exceptions; Lesson 027 expands the system after this first sound-based lesson.'
])],
examples:R(`a pen|Pen begins with a consonant sound.
an apple|Apple begins with a vowel sound.
a bag|Bag begins with /b/.
an office|Office begins with a vowel sound.
a nurse|A singular job noun with /n/.
an engineer|A singular job noun beginning with a vowel.
a driver|Driver begins with /d/.
an accountant|The first sound is a vowel.
an umbrella|The usual first sound is a vowel.
a university|The first sound is /j/, not a vowel sound.
a uniform|The initial sound is /j/.
a useful website|Useful begins with /j/.
a European city|European begins with /j/.
an hour|The initial h is silent.
an honest answer|The h in honest is silent.
a hotel|The usual initial h is pronounced.
a one-way ticket|One begins with /w/.
an X-ray|The letter name X begins with a vowel.
an MRI scan|The letter name M begins with a vowel.
a quiet office|Listen to quiet, not office, after the article.
an empty room|Empty supplies the first sound.
an old bag|Old begins with a vowel sound.
a large umbrella|Large begins with a consonant sound.
an interesting lesson|Interesting supplies a vowel sound.
She is a teacher.|The singular countable job noun takes a.
We are teachers.|Do not put a/an before the plural noun.
I need some information.|Information is normally uncountable here.
She gave me a piece of advice.|Piece supplies a countable unit.
I bought a book. The book is useful.|First mention, then an identified reference.
This is my bag.|My identifies the noun without a/an.`),
dialogues:[D('Requesting an object',`Ada|Could I have a pen, please?
Ravi|A blue pen or a black pen?
Ada|A black pen, please.
Ravi|Here you are.`),D('A useful website',`Learner|Is it an useful website?
Teacher|Say a useful website. Useful begins with /j/.
Learner|Like a university?
Teacher|Yes. Listen to the sound.`),D('An hour',`Visitor|How long does it take?
Worker|About an hour.
Visitor|Why an before h?
Worker|The h in hour is silent.`),D('Adding an adjective',`Emily|Say an office.
Learner|An office.
Emily|Now add busy.
Learner|A busy office. The first following sound changed.`),D('Some advice',`Learner|Could I have an advice?
James|Say some advice, or a piece of advice.
Learner|Because advice is uncountable here?
James|Exactly.`)],
mistakes:R(`an university|a university|The first sound is /j/.
a hour|an hour|The h is silent.
an useful book|a useful book|Useful begins with /j/.
a old bag|an old bag|The adjective old supplies a vowel sound.
an information|some information|Information is normally uncountable in this use.
a my ticket|my ticket|My and a do not normally occupy this position together.`),
practice:{mc:Q(`Choose the phrase.|an apple|a apple|a apples|Apple is singular and begins with a vowel sound.
Choose the phrase.|a university|an university|an universities|University begins with /j/.
Choose the phrase.|an hour|a hour|a hours|The h is silent.
Choose the phrase.|a useful tool|an useful tool|an tools|Useful begins with /j/.
Choose the phrase.|an empty room|a empty room|an empty rooms|Listen to empty after the article.
Which noun normally cannot directly take a/an here?|information|document|chair|Information is normally uncountable.
Which gives a job correctly?|She is an engineer.|She is engineer.|She is a engineers.|Use an with the singular job noun.
Which phrase is correct?|a one-way ticket|an one-way ticket|an one-way tickets|One begins with /w/.
Which is correct with an abbreviation said as letters?|an MRI scan|a MRI scan|an MRI scans|Em begins with a vowel sound.
What determines a versus an?|The next spoken sound|Only the noun’s first written letter|The colour of the object|An adjective or abbreviation can affect the first following sound.`),gap:T(`Complete: __ apple.|an|Apple starts with a vowel sound.
Complete: __ pen.|a|Pen starts with a consonant sound.
Complete: __ hour.|an|Hour has a silent h.
Complete: __ university.|a|University starts with /j/.
Complete: __ honest answer.|an|Honest begins with a vowel sound.
Complete: __ useful book.|a|Useful begins with /j/.
Complete: __ old chair.|an|Old provides the first following sound.
Complete: __ large umbrella.|a|Large begins with /l/.
Complete: __ X-ray.|an|Ex begins with a vowel sound.
Complete: She is __ nurse.|a|Nurse is a singular countable job noun.`),correct:T(`Correct: an university.|a university|The sound is /j/.
Correct: a hour.|an hour|The h is silent.
Correct: an useful website.|a useful website|Useful starts with /j/.
Correct: I need an information.|I need some information.|Information is normally uncountable.
Correct: This is a my bag.|This is my bag.|Remove a before my.`),order:T(`Order: need / pen / a / I|I need a pen.|Put the article before the noun.
Order: an / is / She / engineer|She is an engineer.|Use an with engineer.
Order: useful / a / is / It / book|It is a useful book.|A comes before useful book.
Order: empty / room / an / booked / We|We booked an empty room.|The adjective comes between article and noun.
Order: some / need / information / I|I need some information.|Some is natural with the uncountable noun.`),reading:'Ada buys a book and an umbrella. The book is about English. She reads it at a university near her home. Later, she asks a teacher for some advice. The teacher recommends a useful website and an interesting exercise. The exercise takes about an hour.',read:Q(`Why is an used before umbrella?|It begins with a vowel sound.|It is plural.|Every word with u takes an.|Sound, not the letter alone, controls the choice.
Why does the passage later say the book?|The same book is now identified.|Book is uncountable.|The noun becomes plural.|It refers back to the introduced book.
Which phrase begins with /j/?|a university|an umbrella|an hour|University starts with /j/.
What does Ada request?|Some advice|An advice|A furniture|Advice is normally uncountable here.
Which phrase has a silent initial h?|an hour|a home|a hotel|Hour starts with a vowel sound.`),write:T(`Write one a phrase and one an phrase.|a pen; an apple|Use singular countable nouns and choose by sound.
Write a sentence with a useful website.|It is a useful website.|Useful begins with /j/.
Expand an office with an adjective that changes an to a.|a busy office|The new first following sound is a consonant.
Write a job introduction.|I am an engineer.|Your job may differ; keep the appropriate article.
Introduce a book, then refer to the same book with the.|I bought a book. The book is useful.|Make the second reference clear.`)},sources:[['Cambridge: a/an and the','https://dictionary.cambridge.org/grammar/british-grammar/a-an-and-the']],related:['004','009','012','027']};

L['016']={intro:'Describe people, places and things with adjectives. Build clear noun phrases and simple sentences, keep adjectives unchanged with plurals, and distinguish an adjective from a verb or adverb.',
goals:['Place a common adjective before a noun.','Use an adjective after be or another suitable linking verb.','Keep adjectives unchanged with plural nouns.','Distinguish a describing adjective from a noun or action verb.','Build a clear subject–verb sentence with useful details.'],
sections:[
S('An adjective adds a description','An adjective gives information about a noun or pronoun. A quiet room is a room described as quiet. The room is quiet makes the same description in a sentence. Useful, heavy, clean, tired and friendly are common adjectives for adult everyday situations.',[
'Size: small, large. Condition: clean, dirty. Opinion: useful, interesting.',
'Feelings or states: tired, happy, ready. Descriptions can concern people as well as objects.',
'The adjective is not automatically the verb: in The room is quiet, is is the verb.',
'Find the noun being described before deciding where to put the adjective.'
]),
S('Position one: before a noun','In a basic noun phrase, a describing adjective normally comes before its noun: a busy office, not an office busy. If the phrase has an article or possessive, that normally comes first: my new phone, an old bag.',[
'Order: determiner + adjective + noun.',
'Change a/an by the next spoken sound: an office but a busy office.',
'You can use two adjectives, but order and punctuation become more complex. Begin with one clear description.',
'Some adjectives have special positions. Later lessons examine them; do not apply this beginner pattern to every adjective without checking.'
],table(['Noun phrase','Main noun','Describing word'],`a quiet room|room|quiet
my new phone|phone|new
an old bag|bag|old
two useful books|books|useful
a friendly colleague|colleague|friendly`)),
S('Position two: after a linking verb','Be can link the subject to an adjective: The room is quiet. Other linking verbs include seem, look and feel in suitable meanings: The bag looks heavy. Use an adjective, not automatically an adverb, after a linking verb describing the subject.',[
'The room is quiet. The room seems quiet.',
'I feel tired. Tired describes I, not the way an action is performed.',
'The soup smells good uses good to describe the soup.',
'Look can also be an action verb: Look carefully. Meaning decides the pattern.'
]),
S('Adjectives normally do not change for number or gender','A small room and two small rooms both use small. The noun becomes plural and be may change, but the adjective normally stays unchanged. A friendly man and a friendly woman both use friendly.',[
'The bag is heavy → The bags are heavy.',
'A useful lesson → two useful lessons.',
'Do not add s to quiet or useful just because the noun is plural.',
'Friendly is an adjective even though it ends in -ly. Not every -ly word is an adverb.'
]),
S('Adjectives and adverbs answer different questions','The office is quiet describes the office. She speaks quietly describes how she speaks. The first uses an adjective; the second uses an adverb. Many adverbs have -ly, but this is not a universal spelling test. Focus on what the word modifies.',[
'A careful driver: careful describes the person. She drives carefully: carefully describes the action.',
'A good worker: good is an adjective. She works well: well is an adverb in this meaning.',
'An adjective does not usually replace the action verb: She helpful needs She is helpful.',
'Adverbs receive fuller treatment in later lessons; today keep the basic contrast clear.'
]),
S('Build a clear sentence before adding detail','Start with subject + verb. Then add a description or object as the pattern requires. The office is quiet is a complete statement. We work in a modern office has an action verb and a place phrase containing an adjective.',[
'Noun phrase only: a modern office. Full sentence: The office is modern.',
'Useful basic order: subject + be + adjective.',
'Very can strengthen many gradable adjectives: very quiet, very useful. Not every adjective naturally takes very in every meaning.',
'When changing a sentence, check both the be agreement and the noun’s singular/plural form.'
])],
examples:R(`a quiet room|Quiet comes before the noun.
The room is quiet.|Quiet follows be.
two quiet rooms|The adjective has no plural s.
The rooms are quiet.|Be changes to are, but quiet stays unchanged.
a busy office|Busy describes office.
The office is busy.|A complete describing sentence.
a modern hospital|Modern describes the type of building.
We work in a modern hospital.|The description is inside a place phrase.
my new phone|My comes before adjective and noun.
an old bag|Old supplies a vowel sound after an.
a large umbrella|Large changes the article choice to a.
a useful lesson|Useful begins with /j/.
two useful lessons|Lessons is plural; useful is unchanged.
a friendly colleague|Friendly is an adjective.
The colleagues are friendly.|The adjective remains unchanged.
I am tired.|Tired describes the speaker.
She feels tired.|Feel is linking in this meaning.
The bag looks heavy.|Heavy describes the bag.
The soup smells good.|Good describes the soup after a linking verb.
Look carefully.|Carefully describes the action look.
a careful driver|Careful describes the driver.
She drives carefully.|Carefully describes how she drives.
a good worker|Good is an adjective.
She works well.|Well describes the action here.
He is helpful.|Helpful needs be in this full statement.
They are helpful.|Helpful does not become helpfuls.
The desk is very clean.|Very strengthens clean.
The desks are very clean.|The plural changes are, not clean.
This is an important meeting.|Important comes before meeting.
The meeting is important.|The same description appears after be.`),
dialogues:[D('Describing a room',`Ada|What is the room like?
Ravi|It is small and quiet.
Ada|A quiet room is useful for studying.
Ravi|Yes. The other rooms are quiet too.`),D('One or two',`Teacher|Say a useful book.
Learner|A useful book.
Teacher|Now make it two.
Learner|Two useful books.`),D('An adjective ending in -ly',`Learner|Is friendly always an adverb?
Emily|No. A friendly colleague uses an adjective.
Learner|So the ending alone is not enough?
Emily|Correct. Look at the job of the word.`),D('Linking or action?',`James|The bag looks heavy.
Ada|Heavy describes the bag?
James|Yes. But in Look carefully, carefully describes the action.
Ada|The meaning changes the pattern.`),D('Completing a sentence',`Learner|She helpful.
Teacher|Add a verb: She is helpful.
Learner|And They are helpful?
Teacher|Yes. Helpful stays the same.`)],
mistakes:R(`a room quiet|a quiet room|The ordinary before-noun position places quiet first.
two usefuls books|two useful books|The adjective does not take plural s.
The rooms is quiet.|The rooms are quiet.|Match be to the plural subject.
She helpful.|She is helpful.|The statement needs a verb.
She drives careful.|She drives carefully.|Describe the action with the adverb here.
an useful lesson|a useful lesson|Useful begins with a consonant sound.`),
practice:{mc:Q(`Which phrase has ordinary adjective order?|a quiet room|a room quiet|quiet a room|The adjective comes before the noun.
Which sentence is standard?|The rooms are quiet.|The rooms are quiets.|The rooms is quiet.|Use plural are and unchanged quiet.
Which word describes a noun in my new phone?|new|my only|phone|New describes phone.
Which word is the verb in The room is quiet?|is|quiet|room|Quiet is the adjective.
Which is an adjective despite its -ly ending?|friendly|quickly|carefully|Friendly describes a person or relationship.
Which sentence describes how someone drives?|She drives carefully.|She is careful.|A careful driver.|Carefully modifies the action.
Choose the linking-verb pattern.|The bag looks heavy.|The bag looks heavily in this description.|The bag heavy.|Heavy describes the bag.
Which phrase is correct?|two useful books|two usefuls books|two usefully books|The adjective does not change for plural number.
Choose the article.|a useful lesson|an useful lesson|an lessons|Useful begins with /j/.
What does very modify in very clean?|clean|the noun’s number|the article only|Very strengthens the adjective.`),gap:T(`Choose quiet or quietly: The room is __.|quiet|The adjective describes the room.
Choose careful or carefully: She drives __.|carefully|The adverb describes driving.
Choose friendly or friendlies: They are __.|friendly|The adjective is unchanged.
Complete: The rooms __ clean.|are|Rooms is plural.
Complete: She __ helpful.|is|A complete statement needs be here.
Complete: __ old bag.|an|Old begins with a vowel sound.
Complete: __ useful lesson.|a|Useful begins with /j/.
Find the adjective: a modern office.|modern|Modern describes office.
Find the noun: a quiet room.|room|Room is the thing described.
Choose good or well: She works __.|well|Well describes the action work in this meaning.`),correct:T(`Correct: a room quiet.|a quiet room|Place the adjective before the noun.
Correct: two usefuls books.|two useful books|The adjective has no plural ending.
Correct: The rooms is clean.|The rooms are clean.|Use are for the plural subject.
Correct: She helpful.|She is helpful.|Add the missing verb.
Correct: She drives careful.|She drives carefully.|Use an adverb for the action.`),order:T(`Order: room / quiet / a / need / I|I need a quiet room.|Put the adjective before room.
Order: clean / are / desks / The|The desks are clean.|Use plural are.
Order: helpful / is / She|She is helpful.|An adjective can follow be.
Order: office / modern / a / in / work / We|We work in a modern office.|The adjective is inside the place phrase.
Order: bag / heavy / looks / The|The bag looks heavy.|Looks is linking here.`),reading:'Ada works in a modern office. The office is small but quiet. Her colleagues are friendly. Ravi is a careful driver, and he drives carefully. On Ada’s desk there are two useful books. She likes the clean room because it is good for studying.',read:Q(`Which word describes the office’s style?|modern|carefully|driver|Modern modifies office.
Are Ada’s colleagues described with a plural adjective ending?|No; friendly stays unchanged.|Yes; friendlies.|The passage has no adjectives.|English adjectives normally do not change for number.
Which word describes how Ravi drives?|carefully|careful|driver|Carefully modifies the action.
What is the head noun in two useful books?|books|useful|two|Books names the things.
Why does Ada like the room?|It is clean and good for studying.|It is noisy.|It has no desks.|The passage gives this reason.`),write:T(`Describe a room using be and an adjective.|The room is quiet.|Use a full subject–verb sentence.
Make a phrase with my, an adjective and a noun.|my new phone|Keep that order.
Write the plural of a useful book.|two useful books|Change the noun, not the adjective.
Use careful and carefully in separate sentences.|He is careful. He drives carefully.|Distinguish a person’s description from an action’s manner.
Write a sentence with looks and an adjective.|The bag looks heavy.|The adjective should describe the subject.`)},sources:[['Cambridge: adjective position','https://dictionary.cambridge.org/grammar/british-grammar/adjective-phrases-position']],related:['009','012','015','030','031']};

L['017']={intro:'Point to one or more things clearly with this, that, these and those. Learn near/far and singular/plural together, then use the words before nouns, on their own and in useful introductions.',
goals:['Choose this/that for singular and these/those for plural references.','Use near and far from the speaker’s point of view.','Match is/are with the demonstrative reference.','Use a demonstrative with a noun or on its own.','Recognise simple introductions and discussion references.'],
sections:[
S('Two choices work together: distance and number','This and these often point to things near the speaker. That and those often point to things farther away. This and that are singular; these and those are plural. To choose, ask two questions: How many? and Near whom?',[
'One near thing: this bag. One farther thing: that bag.',
'Several near things: these bags. Several farther things: those bags.',
'Near and far are relative to the speaker and the situation, not fixed distances in metres.',
'Objects in the current shared focus can be this/these even without a simple physical-distance rule.'
],table(['','Near the speaker','Farther from the speaker'],`One countable thing|this pen|that pen
More than one|these pens|those pens
Uncountable amount|this water|that water`)),
S('Use the word before a matching noun','When a demonstrative comes before a noun, it identifies which thing or things you mean. This form and these forms must match singular and plural. Do not normally add a/an or the directly before the demonstrative in this identifying position.',[
'this document, that office, these tickets, those buildings.',
'Not this tickets or these ticket in the ordinary countable patterns.',
'My and this do not normally stack as this my bag; use this bag or my bag.',
'This water and that information can identify uncountable amounts; do not make them plural merely because there is a lot.'
]),
S('Use the demonstrative on its own when the reference is clear','This is my bag uses this instead of repeating the noun phrase. These are ready uses these for known plural things. Such uses depend on pointing, shared knowledge or earlier words. Make the reference clear enough for the listener.',[
'This is a pen. That is a printer.',
'These are my tickets. Those are the visitors’ bags.',
'Use is with this/that and are with these/those in these patterns.',
'That’s can mean that is. Write these are and those are as separate words in ordinary learner writing.'
]),
S('Questions and short answers','Make a be question by moving is or are first. Is this your ticket? asks about one thing. Are these your tickets? asks about several. Short answers usually switch to it for the singular object and they for the plural objects.',[
'Is that your phone? — Yes, it is. No, it isn’t.',
'Are those your bags? — Yes, they are. No, they aren’t.',
'Do not answer a singular ticket question with Yes, they are unless the reference has changed.',
'A question can also request a name: What is this? What are these?'
]),
S('Introductions and telephone identification','This can introduce a person: This is my colleague, Ada. On a phone call, This is Ada is a normal way to identify yourself. That can identify a person at a distance: Is that Ravi over there? These are practical patterns beyond objects on a desk.',[
'Introduce a colleague with a name, not only an unclear this.',
'These are my colleagues introduces more than one person.',
'On the phone: Hello, this is Ada. Is that Ravi?',
'Gestures and tone affect politeness. A person’s name is often clearer than repeated pointing.'
]),
S('Time, ideas and speaker perspective','This week usually means the current or upcoming week in context. That was useful can refer back to an idea or experience just mentioned. Distance can be conversational rather than physical. Keep the basic near/far chart as a starting guide, not an absolute rule for every use.',[
'This is a good idea can point to the proposal under discussion.',
'That is helpful can respond to advice you have just heard.',
'When the speaker changes, what is near me may become far from you.',
'Practise with real desk objects, then use an introduction and a response to an idea.'
])],
examples:R(`this pen here|One pen near the speaker.
that pen over there|One pen farther from the speaker.
these pens here|Plural pens near the speaker.
those pens over there|Plural pens farther away.
This bag is heavy.|This matches singular bag and is.
That bag is blue.|That matches one farther bag.
These bags are heavy.|These matches plural bags and are.
Those bags are blue.|Those matches plural bags.
this document|A singular noun after this.
these documents|A plural noun after these.
that office|A singular place after that.
those offices|A plural place reference.
this water|Water is uncountable in this meaning.
that information|Information is uncountable here.
This is my ticket.|This stands on its own.
That is the printer.|That identifies a known thing.
These are my keys.|These refers to plural things.
Those are the forms.|Those takes are.
That’s my phone.|That’s means that is.
Is this your bag?|A singular be question.
Yes, it is.|It replaces the singular thing.
Are these your bags?|A plural be question.
No, they aren’t.|They replaces the plural things.
What is this?|Ask for the identity of one thing.
What are those?|Ask about plural farther things.
This is my colleague, Ada.|This introduces a person.
These are my colleagues.|A plural introduction.
Hello, this is Ada.|A natural telephone identification.
This week is busy.|This refers to the current relevant week.
That is helpful. Thank you.|That refers back to an idea or advice.`),
dialogues:[D('One near, one far',`Ada|Is this your pen here?
Ravi|No, that pen over there is mine.
Ada|The blue one?
Ravi|Yes. Thank you.`),D('Several forms',`Worker|Are these forms ready?
Ada|Yes, they are.
Worker|And those forms on the far desk?
Ada|Those are not ready yet.`),D('Introducing a colleague',`James|Emily, this is my colleague, Ada.
Emily|Nice to meet you, Ada.
Ada|Nice to meet you too.
James|These are our course books.`),D('On the telephone',`Ada|Hello, this is Ada. Is that Ravi?
Ravi|Yes, it is. Hello, Ada.
Ada|Are these the forms you need?
Ravi|Please describe them so I can check.`),D('Not only physical distance',`Learner|I will practise five minutes every day.
Teacher|That is a useful plan.
Learner|Does that refer to my plan?
Teacher|Yes, to the idea you just mentioned.`)],
mistakes:R(`this tickets|these tickets|Use the plural demonstrative with plural tickets.
these ticket|these tickets|Match the noun’s plural form.
Those is my bags.|Those are my bags.|Those takes are.
This are my phone.|This is my phone.|A singular reference takes is.
this my bag|this bag / my bag|Do not normally combine these identifying determiners that way.
Near always means less than one metre.|Near and far depend on speaker and context.|The grammar has no fixed distance measurement.`),
practice:{mc:Q(`Choose one pen near the speaker.|this pen|these pen|those pen|This is singular and near.
Choose several pens far from the speaker.|those pens|that pens|this pens|Those is plural and farther away.
Which phrase is plural and near?|these bags|this bag|that bag|These identifies nearby plural things.
Choose the verb: Those __ ready.|are|is|am|Those takes are.
Choose the verb: This __ my ticket.|is|are|am|This takes is.
Which answer fits Is this your phone?|Yes, it is.|Yes, they are.|Yes, she are.|Use it for the singular object.
Which answer fits Are these your keys?|Yes, they are.|Yes, it is.|Yes, he is.|Keys is plural.
Which can identify an uncountable amount?|this water|these water|those information|Use singular this/that with an uncountable amount.
Which is a natural introduction?|This is my colleague, Ada.|This my colleague Ada.|These is Ada.|Use this is for one person being introduced.
What decides near and far here?|The speaker and context|A fixed number of metres|The object’s colour|Distance is relative and can be conversational.`),gap:T(`One near object: __ bag here.|this|This is singular and near.
One farther object: __ bag over there.|that|That is singular and farther.
Several near objects: __ bags here.|these|These is plural and near.
Several farther objects: __ bags over there.|those|Those is plural and farther.
Complete: This __ my phone.|is|This takes is.
Complete: Those __ my keys.|are|Those takes are.
Complete: Is this your ticket? Yes, __ is.|it|Use a singular object pronoun.
Complete: Are these yours? Yes, __ are.|they|Use a plural pronoun.
Expand that’s in That’s my bag.|That is|That’s means that is here.
Complete a phone introduction: Hello, __ is Ada.|this|This is is natural for telephone identification.`),correct:T(`Correct: this tickets.|these tickets|Use these with the plural noun.
Correct: those is my bags.|Those are my bags.|Use are with those.
Correct: This are my phone.|This is my phone.|Use is for the singular reference.
Correct: These is my keys.|These are my keys.|These takes are.
Correct this introduction: This my colleague, Ada.|This is my colleague, Ada.|Add the missing verb.`),order:T(`Order: my / is / bag / This|This is my bag.|This takes is.
Order: ready / are / forms / These|These forms are ready.|These modifies plural forms.
Order: your / those / Are / bags|Are those your bags?|Move are before the subject.
Order: this / your / Is / ticket|Is this your ticket?|Use is for one ticket.
Order: colleague / my / is / This / Ada|This is my colleague, Ada.|Name the person being introduced.`),reading:'Ada has one bag beside her chair. She says, “This bag is mine.” Across the room are Ravi’s two bags. Ada says, “Those bags are Ravi’s.” She holds two tickets and asks, “Are these your tickets?” Ravi replies, “Yes, they are.” Then Ada introduces Emily: “This is my colleague, Emily.”',read:Q(`Why does Ada use this bag?|It is one bag near her.|It is several bags far away.|It is an abstract idea only.|Number and distance match this.
Why does she use those bags?|They are plural and across the room.|They are one nearby bag.|They are a phone call.|Those matches the farther plural reference.
What does these refer to?|The two tickets she holds|One far bag|Emily only|The tickets are plural and close to Ada.
Why does Ravi answer they?|He means the plural tickets.|He means one person.|Every answer must use they.|The answer pronoun matches the reference.
Who is introduced with this is?|Emily|The bags|The chairs|The final sentence introduces a colleague.`),write:T(`Write a phrase for one object near you.|this pen|Choose a singular noun.
Write a phrase for plural objects farther away.|those buildings|Choose a plural noun.
Write a plural demonstrative question and short answer.|Are these your keys? Yes, they are.|Match these/are with they/are.
Introduce an imaginary colleague.|This is my colleague, Ada.|Use this is and a clear name.
Use that to respond to an idea.|That is a useful plan.|Make clear which idea you mean.`)},sources:[['Cambridge: this, that, these and those','https://dictionary.cambridge.org/grammar/british-grammar/this-']],related:['010','014','018','020']};

L['018']={intro:'Say what exists in a place with there is and there are. Learn singular, plural and uncountable patterns, questions, negatives and the difference between introducing something and locating a known thing.',
goals:['Use there is with a singular noun or uncountable amount.','Use there are with plural countable nouns.','Ask Is there…? and Are there…?','Give appropriate short answers with there.','Distinguish existence there from a place word or possessive their.'],
sections:[
S('Introduce what exists before describing it','There is a bank near the station introduces a bank in that area. The sentence is not primarily about something already identified as the bank. The bank is near the station locates a known bank. Both patterns are useful, but they organise information differently.',[
'There is/are + noun phrase + place information is a useful starting order.',
'There is a chair in the room introduces one chair.',
'There are two chairs in the room introduces a plural number.',
'Existential there fills a grammatical subject position; it does not itself mean over there.'
]),
S('Choose is or are from the following noun phrase','Use is for a singular countable noun and for an uncountable amount in the basic pattern. Use are for plural countable nouns. A lot of can occur with either type; look at the noun: a lot of water is uncountable, a lot of bottles is plural.',[
'There is a desk. There are three desks.',
'There is some water. There are two bottles of water.',
'In casual speech you may hear there’s before a plural list. Practise standard agreement for careful writing.',
'With mixed lists, a simple beginner solution is to split the sentence: There is a desk. There are two chairs.'
],table(['Reference','Positive','Question'],`One countable item|There is a chair.|Is there a chair?
Plural items|There are two chairs.|Are there any chairs?
Uncountable amount|There is some water.|Is there any water?`)),
S('Negative forms and no/any','Put not after is or are. There isn’t a lift denies a singular countable item. There aren’t any empty rooms denies a plural amount. There isn’t any milk denies an uncountable amount. No can also express absence without adding a second negative.',[
'There is not → there isn’t / there’s not.',
'There are not → there aren’t.',
'There are no empty rooms has a negative meaning without not.',
'For the standard pattern, avoid There aren’t no rooms. Use aren’t any or are no.'
]),
S('Questions move be before there','Is there a pharmacy nearby? asks whether one exists. Are there any chairs? asks about a plural amount. Some and any have more advanced uses, but any is the usual neutral choice in these amount questions. Do not replace there with it when answering the existence question.',[
'Is there a lift? — Yes, there is. No, there isn’t.',
'Are there any empty rooms? — Yes, there are. No, there aren’t.',
'Is there any water? — Yes, there is.',
'Do not finish a positive short answer with Yes, there’s. Use the full form.'
]),
S('There’s, there, their and they’re','There’s usually means there is or there has; in this lesson it means there is. There can also be a place word: The bag is there. Their is possessive: their bag. They’re means they are: They’re ready. Sound similarities do not make these spellings interchangeable.',[
'There’s a bank nearby = There is a bank nearby.',
'The bank is there uses there as a place word.',
'Their office is upstairs identifies whose office.',
'In ordinary learner writing, use there are as two words; there’re is uncommon and not needed for this lesson.'
]),
S('Use the structure for helpful real information','A visitor needs to know whether a service exists before asking where it is. Start with Is there…?, then give a location. A short description can combine the foundation grammar: There is a small office. There are two clean desks. The keys are on the first desk.',[
'Use a/an for a newly introduced singular countable thing: a bank, an office.',
'Do not say There is bank without the appropriate noun phrase.',
'When referring back, switch naturally: There is a bank nearby. It is next to the hotel.',
'Practise describing your room, workplace or an imaginary street without listing private addresses.'
])],
examples:R(`There is a chair.|Introduce one countable thing.
There are two chairs.|Introduce plural things.
There is a bank nearby.|Introduce a service in the area.
The bank is near the station.|Locate a known bank.
There is an office upstairs.|Use an before office.
There are three offices upstairs.|Use are with plural offices.
There is some water.|Water is uncountable here.
There are two bottles of water.|Bottles is the plural head noun.
There is a lot of milk.|Milk is uncountable.
There are a lot of people.|People is plural.
There isn’t a lift.|Deny a singular countable item.
There aren’t any empty rooms.|Deny a plural amount.
There isn’t any milk.|Deny an uncountable amount.
There are no empty rooms.|No expresses absence.
There is no water.|No with an uncountable noun.
Is there a pharmacy nearby?|An existence question about one service.
Yes, there is.|Use a full final positive form.
No, there isn’t.|A standard singular negative answer.
Are there any chairs?|A plural existence question.
Yes, there are.|Keep there in the answer.
No, there aren’t.|A plural negative answer.
Is there any water?|An uncountable amount question.
There’s a café on this street.|There’s means there is.
The café is there.|Here there indicates a place.
Their office is upstairs.|Their is possessive, not existential.
They’re at work.|They’re means they are.
There is a small meeting room.|Adjective and noun follow the article.
There are two clean desks.|Clean is unchanged with the plural noun.
There is a bank. It is next to the hotel.|Introduce, then locate the same thing.
There is a desk, and there are two chairs.|Separate clauses keep agreement clear.`),
dialogues:[D('A nearby service',`Visitor|Is there a pharmacy nearby?
Receptionist|Yes, there is.
Visitor|Where is it?
Receptionist|It is next to the bank.`),D('An empty room',`Ada|Are there any empty rooms?
Worker|No, there aren’t.
Ada|Is there a waiting area?
Worker|Yes, there is. It is over there.`),D('Water for a meeting',`James|Is there any water?
Emily|Yes, there is. There are two bottles on the desk.
James|Are there any cups?
Emily|Yes, there are.`),D('Describing an office',`Learner|There is two desks.
Teacher|For two desks, use there are.
Learner|There are two desks and there is a chair.
Teacher|Good. Each noun phrase has the matching form.`),D('Three similar words',`Learner|Is their the same as there?
Emily|No. Their shows possession.
Learner|And they’re?
Emily|That means they are.`)],
mistakes:R(`There is two chairs.|There are two chairs.|Plural chairs takes are.
There are some water.|There is some water.|Water is uncountable here.
There is bank nearby.|There is a bank nearby.|The singular countable noun needs a determiner.
Are there any rooms? — Yes, they are.|Are there any rooms? — Yes, there are.|Keep existential there in this short answer.
Yes, there’s. (answer ending here)|Yes, there is.|Use the full positive final form.
There aren’t no chairs.|There aren’t any chairs.|Avoid a double negative in this standard pattern.`),
practice:{mc:Q(`Choose the singular pattern.|There is a chair.|There are a chair.|There am a chair.|A singular countable item takes is.
Choose the plural pattern.|There are two chairs.|There is two chairs.|There am chairs.|Plural chairs takes are.
Choose the uncountable pattern.|There is some water.|There are some water.|There is a water in the basic amount meaning.|Water is uncountable here.
Which asks about existence?|Is there a bank nearby?|Is bank nearby?|Does there is a bank?|Move is before there.
Choose the plural question.|Are there any rooms?|Is there any rooms?|Are they there any rooms?|Plural rooms takes are there.
Which answer fits Is there a lift?|Yes, there is.|Yes, it are.|Yes, there’s.|Use the full final positive form.
Which negative is standard?|There aren’t any chairs.|There aren’t no chairs.|There isn’t chairs.|Use aren’t any for this plural negative.
What does there’s mean here: There’s a café?|There is|Their|They are|It introduces a singular thing.
Which word is possessive?|their|there|they’re|Their goes before a noun to express possession or relationship.
Which sentence locates an already identified bank?|The bank is next to the hotel.|There is a bank nearby.|There are banks.|The definite noun phrase is the topic.`),gap:T(`Complete: There __ a chair.|is|Chair is singular.
Complete: There __ two chairs.|are|Chairs is plural.
Complete: There __ some milk.|is|Milk is uncountable here.
Complete: __ there a bank?|Is|Use is before there.
Complete: __ there any rooms?|Are|Rooms is plural.
Complete: Is there a lift? Yes, there __.|is|The short answer keeps there is.
Complete: Are there chairs? Yes, there __.|are|Use are for the plural reference.
Complete: There isn’t __ water. (any / a)|any|Any is natural in the neutral negative amount phrase.
Complete: There aren’t __ empty rooms. (any / a)|any|Use any with this plural negative.
Expand there’s in There’s a desk.|There is|This contraction means there is.`),correct:T(`Correct: There is two desks.|There are two desks.|Desks is plural.
Correct: There are some water.|There is some water.|Water is uncountable here.
Correct: There is bank nearby.|There is a bank nearby.|Add a for the singular countable noun.
Correct: Are there chairs? Yes, they are.|Are there chairs? Yes, there are.|Keep there in the existence answer.
Correct: There aren’t no chairs.|There aren’t any chairs.|Use one negative pattern.|There are no chairs.`),order:T(`Order: chair / a / is / There|There is a chair.|Introduce a singular thing.
Order: two / are / desks / There|There are two desks.|Use are with plural desks.
Order: nearby / bank / a / there / Is|Is there a bank nearby?|Move is before there.
Order: any / rooms / there / Are|Are there any rooms?|Use are there for plural existence.
Order: water / some / is / There|There is some water.|Water is uncountable.`),reading:'There is a small office near reception. There are two desks and three chairs in it. There is some water on one desk, but there aren’t any cups. There is no lift in the building. A visitor asks whether there is a pharmacy nearby. Ada says, “Yes, there is. It is next to the hotel.”',read:Q(`How many desks are in the office?|Two|Three|One|The passage gives two desks.
Why is there is used with water?|Water is uncountable here.|Water is plural.|All liquids must use are.|The amount noun takes singular agreement.
Are there any cups?|No, there aren’t.|Yes, there are.|Yes, it is.|The passage denies cups.
Is there a lift?|No, there isn’t.|Yes, there is.|There are two.|The building has no lift.
What does it refer to in It is next to the hotel?|The pharmacy|The water|The chairs|The service has just been introduced.`),write:T(`Describe one thing in an imaginary room.|There is a desk in the room.|Use a singular countable phrase with is.
Describe plural things in the same room.|There are two chairs.|Use are with the plural phrase.
Write an uncountable amount sentence.|There is some water.|Do not add a directly before water in this meaning.
Write an existence question and short answer.|Is there a bank nearby? Yes, there is.|Keep there in the short answer.
Introduce a service, then locate it using it.|There is a café nearby. It is next to the bank.|The second sentence refers to the same café.`)},sources:[['British Council: there is and there are','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/using-there-there-are']],related:['012','014','017','022','026']};

L['019']={intro:'Make common plural nouns accurately and pronounce their endings clearly. Learn -s, -es and -ies, compare useful -o and -f exceptions, and distinguish the three main spoken plural endings.',
goals:['Form regular plurals with -s and common -es endings.','Change consonant + y to -ies while keeping vowel + y.','Check common exceptions with -o and -f/-fe.','Choose /s/, /z/ or /ɪz/ from the final sound.','Use plural nouns with numbers and suitable agreement.'],
sections:[
S('Plural countable nouns usually mean more than one','A singular countable noun names one item; its plural names more than one. Usually add -s: desk → desks. With a number above one, the noun normally needs its plural form: two desks. The article a/an cannot directly identify a plural noun.',[
'one chair → two chairs; a ticket → three tickets.',
'The plural noun can change the verb: The chair is clean → The chairs are clean.',
'Adjectives normally stay unchanged: two clean chairs, not two cleans chairs.',
'This lesson focuses on common spelling patterns. Irregular plurals such as people are developed in Lesson 025.'
]),
S('Add -es after many sibilant endings','Many nouns ending in s, ss, sh, ch or x add -es: buses, classes, dishes, watches, boxes. These endings usually represent sounds that need an extra syllable before the final /z/. A noun ending in a single z may need doubled z, as in quiz → quizzes.',[
'bus → buses; class → classes; box → boxes.',
'dish → dishes; watch → watches.',
'Not every written ch is /tʃ/: stomach → stomachs has /k/ and adds -s.',
'Spelling and sound are connected but not identical. Use the spoken final sound for pronunciation.'
],table(['Singular','Plural','Pattern'],`book|books|Usually add -s
bus|buses|Add -es
box|boxes|Add -es
watch|watches|Add -es
quiz|quizzes|Double z and add -es
stomach|stomachs|Ch represents /k/ here`)),
S('Look at the letter before final y','After a consonant letter + y, change y to i and add -es: city → cities. After a vowel letter + y, usually keep y and add -s: key → keys. Do not change every y noun to -ies.',[
'city → cities; baby → babies; country → countries.',
'key → keys; boy → boys; day → days.',
'Compare the written letter immediately before y, not only the first letter of the word.',
'Proper names can have different conventions; this foundation rule covers common ordinary nouns.'
]),
S('-o and -f endings have important exceptions','Some -o nouns take -es, such as potato and tomato, while photo, piano and video normally add -s. Some -f/-fe nouns change to -ves, such as leaf and knife, while roof and chief add -s. There is no one simple ending rule that correctly predicts every word in these groups.',[
'potato → potatoes; tomato → tomatoes; hero → heroes.',
'photo → photos; piano → pianos; video → videos.',
'leaf → leaves; knife → knives; wife → wives.',
'roof → roofs; chief → chiefs. Check a dictionary when unsure; some nouns have accepted variants.'
]),
S('Three spoken endings: listen to the final sound','Plural -s has three main pronunciations. After /p, t, k, f, θ/, use /s/. After most other voiced endings, including vowels, use /z/. After the sibilant sounds /s, z, ʃ, ʒ, tʃ, dʒ/, add an extra syllable, commonly /ɪz/. Some descriptions use /əz/ for an unstressed variant.',[
'cups, cats, books: final /s/.',
'bags, pens, keys: final /z/.',
'buses, watches, boxes: an extra syllable ending in /z/.',
'The final SOUND matters. If the stem changes, check its plural pronunciation too: leaf/leaves changes /f/ to /v/. Mouth/mouths also has a common voiced-stem plural. Do not choose only from the last written letter.'
],table(['Ending','After','Examples'],`/s/|Voiceless non-sibilants|cups, cats, books
/z/|Voiced non-sibilants and vowels|bags, pens, keys
/ɪz/|Sibilant sounds|buses, watches, boxes`)),
S('Use the plural in a whole message','A correct ending is useful only if the listener understands the number. Practise one desk/two desks, then There are two desks in the office. Avoid an extra vowel after every plural: books is one syllable, while boxes has two in the usual pronunciation.',[
'Write the singular, form the plural, then check pronunciation separately.',
'A plural ending has no apostrophe: books, not book’s when you mean several books.',
'Book’s can express possession or a contraction in another context; do not use that spelling for the ordinary plural.',
'The written tasks assess spelling and sound knowledge. Use dictionary recordings and spoken practice to check actual pronunciation.'
])],
examples:R(`one desk — two desks|Usually add -s.
one chair — three chairs|Keep the noun after a number plural.
one book — four books|Books ends with /s/.
one cup — two cups|Cups ends with /s/.
one cat — two cats|Cats ends with /s/.
one bag — two bags|Bags ends with /z/.
one pen — three pens|Pens ends with /z/.
one key — four keys|Keep y after a vowel letter; final /z/.
one bus — two buses|Add -es and an extra spoken syllable.
one class — two classes|The ending has an extra syllable.
one dish — three dishes|Sh commonly takes -es.
one watch — two watches|Ch here represents /tʃ/.
one box — five boxes|X ends in /ks/, so the final /s/ takes the extra syllable.
one quiz — two quizzes|Double z before -es.
one city — two cities|Consonant + y changes to -ies.
one baby — two babies|Change final y to i before -es.
one country — three countries|Consonant + y pattern.
one boy — two boys|Vowel + y keeps y.
one day — seven days|Keep y and add -s.
one toy — two toys|Vowel + y pattern.
one potato — two potatoes|This -o noun takes -es.
one tomato — three tomatoes|Learn the common -es form.
one photo — two photos|This -o noun normally adds only -s.
one piano — two pianos|Do not add -es here.
one video — three videos|Usually add -s.
one leaf — two leaves|This noun changes f to v before -es.
one knife — two knives|This noun changes -fe to -ves.
one roof — two roofs|This f noun normally takes -s.
There are two clean desks.|Use are and keep the adjective unchanged.
I need three books.|No apostrophe is needed for the ordinary plural.`),
dialogues:[D('Counting furniture',`Ada|How many chairs do we need?
Ravi|Three chairs and two desks.
Ada|So not three chair?
Ravi|Right. Use the plural noun.`),D('Keys or keies?',`Learner|Does key become keies?
Teacher|No. A vowel letter comes before y.
Learner|So keys, but cities?
Teacher|Exactly.`),D('An extra syllable',`Emily|Say book and books.
Learner|Both have one syllable.
Emily|Now box and boxes.
Learner|Boxes has an extra syllable.`),D('An exception',`Learner|Is the plural of photo photoes?
James|The usual form is photos.
Learner|But potato becomes potatoes?
James|Yes. Learn common forms and check exceptions.`),D('No plural apostrophe',`Ada|Should I write three book’s?
Ravi|No. Write three books.
Ada|The apostrophe is not a plural mark?
Ravi|Correct. It has other uses.`)],
mistakes:R(`two chair|two chairs|Use the plural after two.
citys|cities|Consonant + y changes to -ies.
keies|keys|Vowel + y usually keeps y.
photoes|photos|Photo normally adds only -s.
knifes|knives|Knife has the common -ves plural.
three book’s|three books|The ordinary plural does not take an apostrophe.`),
practice:{mc:Q(`Choose the plural of box.|boxes|boxs|box’s|Add -es after x.
Choose the plural of city.|cities|citys|cityes|Consonant + y changes to -ies.
Choose the plural of key.|keys|keies|keyes|Keep y after a vowel letter.
Choose the usual plural of photo.|photos|photoes|photies|Photo normally adds -s.
Choose the plural of knife.|knives|knifes|knife’s|Knife changes -fe to -ves.
Choose the usual plural of roof.|roofs|rooves only|roofes|Roofs is the usual standard form.
Which plural ends with /s/?|cups|bags|keys|The original word ends in voiceless /p/.
Which plural ends with /z/?|bags|books|cats|The original word ends in voiced /ɡ/.
Which usually adds a spoken syllable?|watches|books|pens|The original ending is the sibilant /tʃ/.
Which ordinary plural spelling is correct?|three books|three book’s|three books’ as a plain plural|A plural alone needs no apostrophe.`),gap:T(`Write the plural of chair.|chairs|Usually add -s.
Write the plural of bus.|buses|Add -es.
Write the plural of class.|classes|Add -es after ss.
Write the plural of watch.|watches|Add -es.
Write the plural of baby.|babies|Consonant + y changes to -ies.
Write the plural of day.|days|Vowel + y keeps y.
Write the plural of tomato.|tomatoes|This common -o noun takes -es.
Write the plural of video.|videos|Normally add -s.
Write the plural of leaf.|leaves|Leaf changes f to v in the plural.
Write the plural of quiz.|quizzes|Double z and add -es.`),correct:T(`Correct: two chair.|two chairs|Plural number requires the plural noun.
Correct: three citys.|three cities|Change consonant + y to -ies.
Correct: four keies.|four keys|Keep y after the vowel letter.
Correct: two photoes.|two photos|Photo normally adds only -s.
Correct the plain plural: three book’s.|three books|Remove the apostrophe.`),order:T(`Order: two / are / desks / There|There are two desks.|Use are with the plural noun.
Order: books / three / need / I|I need three books.|Use a plural after three.
Order: clean / chairs / The / are|The chairs are clean.|Keep the adjective unchanged.
Order: keys / my / are / These|These are my keys.|Match plural these and are.
Order: boxes / ready / are / The|The boxes are ready.|Boxes is plural.`),reading:'Ada prepares a room for a course. She checks two desks, four chairs and three boxes. There are five keys in a small bag. Ravi brings photos of two cities. Ada writes books, not book’s, when listing the three books on the desk. She practises saying books and boxes with different endings.',read:Q(`How many boxes are there?|Three|Two|Five|The passage gives three boxes.
Which word follows the consonant + y spelling rule?|cities|keys|photos|City changes to cities.
Which word keeps vowel + y?|keys|cities|boxes|Key becomes keys.
Why is book’s wrong in the plain list?|A plural alone needs no apostrophe.|All apostrophes are forbidden.|Book is uncountable.|The intended meaning is several books.
Which word usually has an extra plural syllable?|boxes|books|keys|Boxes adds /ɪz/ after the final sibilant.`),write:T(`Write five singular nouns with their plurals.|book/books; box/boxes; city/cities; key/keys; photo/photos|Check each spelling pattern.
Write a sentence with a number and plural noun.|There are three chairs.|Match the verb where needed.
Give a consonant + y and a vowel + y example.|city/cities; key/keys|Explain why the spellings differ.
Give one -o exception pair.|potato/potatoes; photo/photos|Do not invent one rule for every -o noun.
Name one example for each spoken plural ending.|cups /s/; bags /z/; watches /ɪz/|Use the relevant stem-final sound to explain the choice; remember that some stems change in the plural.`)},sources:[['Cambridge: noun plurals','https://dictionary.cambridge.org/grammar/british-grammar/plural-nouns'],['Cambridge: UK pronunciation','https://dictionary.cambridge.org/pronunciation/']],related:['005','009','018','025']};

L['020']={intro:'Use my, your, his, her, its, our and their before nouns. Show ownership and relationships clearly, distinguish the owner from the owned thing, and compare possessive determiners with mine and yours.',
goals:['Match subject pronouns with possessive determiners.','Choose the possessive from the owner or relationship.','Place a possessive before a noun or adjective + noun.','Distinguish its/it’s, your/you’re and their/they’re.','Recognise the difference between my bag and the bag is mine.'],
sections:[
S('Possessive words identify a relationship','My bag relates a bag to me. Her colleague relates a colleague to a person referred to with she. The relationship is not always legal ownership: my brother, our teacher and their country are also possessive patterns. These words normally appear before a noun.',[
'I → my; you → your; he → his; she → her.',
'It → its; we → our; they → their.',
'You can be one person or several, and your works for both.',
'These forms are often called possessive adjectives; possessive determiners is a more precise grammatical label.'
],table(['Subject form','Before a noun','Example'],`I|my|my ticket
you|your|your ticket
he|his|his ticket
she|her|her ticket
it|its|its name
we|our|our tickets
they|their|their tickets`)),
S('Choose from the owner, not the thing','His or her is chosen from the person the thing is associated with, not from the object’s gender or number. If Ada uses she, her bag and her bags both use her. If Ravi uses he, his sister uses his because the relationship is to Ravi, not because sister is male.',[
'Ada has a brother → her brother, if Ada uses she.',
'Ravi has a sister → his sister, if Ravi uses he.',
'A visitor has a phone → their phone is useful when further identity or pronouns are unknown.',
'Use people’s pronouns and context; do not infer his/her from their job.'
]),
S('Position: possessive, adjective, noun','A possessive determiner normally comes before adjectives and the noun: my new phone, their small office. It replaces an article in this identifying position. Do not normally say the my phone or a her bag. The possessive itself does not change because the noun is plural.',[
'my ticket → my tickets; their book → their books.',
'our helpful teacher; your new passport.',
'A number can follow: my two books, our three desks.',
'Not my’s or their’s before a noun. These words already carry the possessive meaning.'
]),
S('Its and it’s have different meanings','Its without an apostrophe is the possessive determiner for it: The company changed its name. It’s is a contraction of it is or it has, depending on the next words. The apostrophe does not mark possession in its.',[
'The dog is in its bed. The bed is associated with the dog.',
'It’s a quiet room = It is a quiet room.',
'It’s not ready = It is not ready.',
'Expand it’s as a test. The company changed it is name does not fit, so use its name.'
]),
S('My bag needs a noun; mine can stand alone','My, your, her, our and their normally need a following noun in this use. Mine, yours, hers, ours and theirs replace the complete possessive noun phrase: This is my bag → This bag is mine. His has the same spelling in both positions. Lesson 029 develops these pronouns further.',[
'This is your ticket. This ticket is yours.',
'That is her phone. That phone is hers.',
'Do not say This is mine bag in the ordinary pattern.',
'Possessive pronouns yours, hers, ours and theirs have no apostrophe.'
]),
S('Keep reference clear in real conversations','A possessive is useful only if the listener knows which person or group it refers to. Ada spoke to Emily about her manager can be unclear. Repeat a name when necessary. On a form, your surname addresses the person completing the form; the speaker may then answer my surname.',[
'Your ticket is here. — Thank you. My ticket is the blue one.',
'Our office includes the speaker’s group. Their office refers to another identified group.',
'Your and you’re differ: Your bag is heavy; you’re ready.',
'Their and they’re differ: Their bags are here; they’re ready. There is a place or existence word.'
])],
examples:R(`my ticket|The ticket is associated with the speaker.
your ticket|The listener’s ticket; one or several listeners can be addressed.
his ticket|The owner is referred to with he.
her ticket|The owner is referred to with she.
its name|A thing or organisation’s name.
our tickets|The tickets relate to the speaker’s group.
their tickets|The tickets relate to the identified other group.
Ada uses she. Her bag is blue.|Choose her from Ada’s pronoun.
Ada uses she. Her bags are blue.|The number of bags does not change her.
Ravi uses he. His sister is here.|His follows the relationship to Ravi.
Ada uses she. Her brother is here.|Her follows the relationship to Ada.
A visitor left their phone.|Their can refer to one person.
my new phone|Possessive before adjective and noun.
our small office|Our identifies the office relationship.
their helpful teacher|The adjective follows the possessive.
your two books|A number can follow your.
my book — my books|My does not change for plural number.
The dog is in its bed.|Its is possessive, with no apostrophe.
The company changed its name.|The name belongs to the company in this sense.
It’s a quiet office.|It’s means it is.
It’s not my bag.|The contraction is not a possessive.
This is my bag.|My has a following noun.
This bag is mine.|Mine replaces my bag.
This is your phone.|Your has a following noun.
This phone is yours.|Yours stands without a following noun.
That phone is hers.|Hers needs no apostrophe.
This is his desk. The desk is his.|His has the same form in both uses.
Your bag is here. You’re early.|Your and you’re have different jobs.
Their bags are here. They’re ready.|Their and they’re have different jobs.
Our teacher is here. Their teacher is upstairs.|The possessives identify different groups.`),
dialogues:[D('A ticket',`Worker|Your ticket is here.
Ada|Thank you. Is my passport here too?
Worker|Yes. Your passport is next to your ticket.
Ada|Thank you for checking.`),D('Owner or object?',`Learner|Ravi uses he. Should I say her sister because sister is female?
Teacher|Say his sister. The relationship is to Ravi.
Learner|And Ada’s brother is her brother if Ada uses she?
Teacher|Exactly.`),D('My or mine?',`Emily|Is this your bag?
James|Yes. It is my bag. It is mine.
Emily|Can you say mine bag?
James|Not in the ordinary pattern.`),D('Its name',`Learner|The company changed it’s name?
Teacher|Use its without an apostrophe.
Learner|Because it is name does not fit?
Teacher|Yes. Here we need the possessive.`),D('Two groups',`Ada|Our classroom is downstairs.
Ravi|Where is their classroom?
Ada|It is upstairs. Their teacher is already there.
Ravi|And our teacher?
Ada|She is at reception.`)],
mistakes:R(`the my bag|my bag|The and my do not normally combine in this identifying position.
mine phone|my phone|My is the form before a noun.
This phone is your.|This phone is yours.|Use the possessive pronoun when the noun is omitted.
The company changed it’s name.|The company changed its name.|Its is possessive.
Your ready.|You’re ready.|You’re means you are.
Their ready.|They’re ready.|They’re means they are.`),
practice:{mc:Q(`Choose the possessive for I.|my|me|mine before every noun|My is the determiner before a noun.
Choose the possessive for we.|our|us|we’s|Our goes before the noun.
Ada uses she and has two bags. Choose the phrase.|her bags|hers bags|his bags because they are plural|Her follows Ada, not the number of bags.
Ravi uses he and has a sister. Choose the phrase.|his sister|her sister because sister is female|he sister|The relationship is to Ravi.
Choose the correct noun phrase.|my new phone|new my phone|the my new phone|Possessive comes before adjective and noun.
Choose: The company changed __ name.|its|it’s|it|Its is possessive.
Choose: __ ready. (you are)|You’re|Your|Yours|You’re is a contraction.
Choose: This bag is __. (my bag)|mine|my|me|Mine replaces my bag.
Which possessive pronoun needs no apostrophe?|yours|your’s|you’re’s|Yours already has possessive meaning.
Which can refer to one visitor of unspecified identity?|their phone|it phone|they phone|Singular their is appropriate in this context.`),gap:T(`Complete: I have a bag. It is __ bag.|my|I becomes my before a noun.
Complete: You have a ticket. It is __ ticket.|your|You becomes your.
Complete: He has a sister. She is __ sister.|his|Choose from he, the person related to the sister.
Complete: She has a brother. He is __ brother.|her|Choose from she.
Complete: We have books. They are __ books.|our|We becomes our.
Complete: They have a teacher. That is __ teacher.|their|They becomes their.
Complete: The dog is in __ bed.|its|Possessive its has no apostrophe.
Choose your or you’re: __ bag is blue.|Your|A noun follows the possessive.
Choose their or they’re: __ ready.|They’re|The meaning is they are.|They're
Complete: This is my phone. This phone is __.|mine|Use the independent possessive form.`),correct:T(`Correct: the my phone.|my phone|Remove the article before my.
Correct: This is mine bag.|This is my bag.|Use my before a noun.
Correct: This bag is your.|This bag is yours.|Use the possessive pronoun.
Correct: The dog is in it’s bed.|The dog is in its bed.|Possessive its has no apostrophe.
Correct: Your ready.|You’re ready.|The meaning is you are.|You're ready.~You are ready.`),order:T(`Order: ticket / my / is / This|This is my ticket.|My goes before ticket.
Order: new / phone / your / is / Where|Where is your new phone?|Your precedes adjective and noun.
Order: teacher / helpful / Our / is|Our teacher is helpful.|Our identifies the teacher relationship.
Order: books / Their / here / are|Their books are here.|The plural noun takes are.
Order: mine / bag / is / This|This bag is mine.|Mine stands without a following noun.`),reading:'Ada and Ravi are colleagues. Ada uses she, and her bag is blue. Ravi uses he, and his sister studies English. Ada and Ravi say, “Our teacher is helpful.” Another group is upstairs; their books are on a table. The company has changed its name. Its office is still in the same building.',read:Q(`Whose bag is blue?|Ada’s|Ravi’s sister’s|The other group’s|Her bag refers to Ada.
Why is his used before sister?|The relationship is to Ravi.|Sister is male.|All relatives use his.|The possessor or related person determines the possessive.
Who is included in our teacher?|Ada and Ravi|Only the other group|The company only|They speak as a group.
What does their refer to?|The other group|The company’s name|Only Ada|The group was just introduced.
Why is its used without an apostrophe?|It relates the name and office to the company.|It means it is.|It is a plural noun.|This is possessive its.`),write:T(`Write a phrase with each of my, your and our.|my book; your phone; our office|Each determiner should have a following noun.
Describe two belongings of an imaginary person.|Ada uses she. Her bag is blue and her books are new.|Keep the person’s reference clear.
Show my versus mine in two sentences.|This is my bag. This bag is mine.|Do not put mine directly before bag.
Use its and it’s accurately.|The dog is in its bed. It’s tired.|The contraction expands to it is.
Write a short exchange using your and my.|A: Is this your ticket? B: Yes, it is my ticket.|The reference changes with the speaker.`)},sources:[['British Council: possessive adjectives','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/possessives-adjectives'],['British Council: possessive pronouns','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/possessives-pronouns']],related:['010','013','017','029']};

L['021']={intro:'Talk about possessions, relationships and useful resources with have or have got. Keep their question and negative patterns separate, match has with he/she/it, and distinguish possession from activities such as having breakfast.',
goals:['Use have/has and have got/has got with the correct subjects.','Express the same possession in two common patterns.','Ask Do/Does…have? or Have/Has…got? without mixing them.','Make don’t/doesn’t have and haven’t/hasn’t got negatives.','Distinguish possession have from activity have.'],
sections:[
S('Have can express more than ownership','I have a bag expresses possession. She has two brothers describes a family relationship. We have a meeting today describes an arrangement. Have is a flexible verb; not every use means owning an object. Begin with clear present-time possession and relationship examples.',[
'I/you/we/they have; he/she/it has.',
'Ada has a phone. Ada and Ravi have phones.',
'A possession can be temporary: I have your pen means it is with me now, not necessarily legally mine.',
'Be careful with age: I am forty, not I have forty years in the ordinary English age pattern.'
]),
S('Have got often expresses the same present possession','I have a laptop and I have got a laptop can express the same possession. Have got is especially common in British conversation. Contract have or has in positive phrases: I’ve got, she’s got. In she’s got, ’s means has, not is.',[
'I’ve got = I have got; he’s got = he has got.',
'You’ve got, we’ve got and they’ve got use have.',
'Use has got with he, she, it or a singular noun phrase.',
'This possession pattern is normally used for the present. For past possession, use had: I had a bike when I was younger.'
],table(['Subject','Have pattern','Have got pattern'],`I/you/we/they|have a bag|have got a bag
he/she/it|has a bag|has got a bag
Ada|has a phone|has got a phone
Ada and Ravi|have tickets|have got tickets`)),
S('Questions: choose one system','With ordinary have, use do or does and the base form have: Does she have a car? With have got, move have or has before the subject: Has she got a car? Do not combine does and has got in the same beginner pattern.',[
'Do you have a pen? — Yes, I do. No, I don’t.',
'Have you got a pen? — Yes, I have. No, I haven’t.',
'Does he have a car? — Yes, he does.',
'Has he got a car? — Yes, he has. Keep the short answer matched to the question system.'
]),
S('Negatives: keep the two systems separate','I don’t have a car uses ordinary have. I haven’t got a car uses have got. With he/she/it, use doesn’t have or hasn’t got. After doesn’t, the main verb returns to have, not has.',[
'She doesn’t have a car = She hasn’t got a car.',
'They don’t have tickets = They haven’t got tickets.',
'Do not say She doesn’t has a car.',
'Do not say I haven’t a car as the default beginner pattern here; it exists in some usage, but don’t have or haven’t got is more generally useful.'
]),
S('Activity have is different from possession','Have breakfast, have lunch and have a shower describe activities. Do not automatically replace them with have got. We have breakfast at seven is a routine. We are having breakfast now is an activity in progress. I have a car is possession and normally does not use am having for that meaning.',[
'Routine activity: I have lunch at one. Do you have lunch at work?',
'In progress: She is having a shower.',
'Possession: She has a car. She has got a car.',
'Have got can have other meanings in other structures, such as have got to for obligation. Those are separate lessons.'
]),
S('Use questions to offer resources and check needs','Have you got a pen? is a useful way to check whether somebody has what they need. A negative can lead to an offer: No, I haven’t. — Here is one. Use any naturally in neutral plural or uncountable amount questions: Have you got any water?',[
'A singular countable object needs a suitable determiner: a pen, your ticket.',
'We have two meetings today does not mean we own meetings; meaning depends on the noun.',
'In careful answers, match the question: Do you have…? — Yes, I do; Have you got…? — Yes, I have.',
'Practise one object, one family relationship, one negative and one activity so you can distinguish the patterns.'
])],
examples:R(`I have a laptop.|Have expresses present possession.
She has a phone.|She takes has.
They have tickets.|They takes have.
Ada has two brothers.|Have can express a family relationship.
We have a meeting today.|Have can describe an arrangement.
I have got a laptop.|A common British possession pattern.
I’ve got a laptop.|I’ve means I have.
You’ve got a pen.|You takes have got.
He’s got a bicycle.|He’s means he has here.
She’s got a new phone.|She has got in contracted form.
We’ve got the tickets.|We have got.
They’ve got two bags.|They have got.
Do you have a pen?|Ordinary have uses do in this question.
Yes, I do.|Match the do question.
Does she have a car?|Use base have after does.
No, she doesn’t.|Match the does question.
Have you got a pen?|Invert have in the have got pattern.
Yes, I have.|Match the have got question.
Has he got a bicycle?|Use has with he.
No, he hasn’t.|Match the has got question.
I don’t have a car.|An ordinary have negative.
She doesn’t have a car.|Use base have after doesn’t.
I haven’t got a car.|A have got negative.
She hasn’t got a car.|Use hasn’t with she.
Have you got any water?|Check an uncountable amount.
I have breakfast at seven.|Have describes a routine activity.
I am having lunch now.|The activity can be ongoing.
She is having a shower.|An activity, not possession.
I had a bicycle when I was younger.|Had expresses past possession.
I am forty years old.|Age normally uses be, not have.`),
dialogues:[D('A pen for class',`Emily|Have you got a pen?
Ada|No, I haven’t.
Emily|Here is one.
Ada|Thank you. I’ve got a notebook too.`),D('Using ordinary have',`James|Do you have a car?
Ravi|No, I don’t. I have a bicycle.
James|Does Ada have a bicycle?
Ravi|Yes, she does.`),D('A family relationship',`Ada|Have you got any brothers or sisters?
Ravi|I’ve got two sisters.
Ada|I have one brother.
Ravi|Both patterns work for relationships.`),D('Keeping systems separate',`Learner|Does she has got a car?
Teacher|Choose Does she have a car? or Has she got a car?
Learner|Has she got a car?
Teacher|Yes, she has.`),D('An activity',`Emily|What are you doing?
James|I’m having lunch.
Emily|Is that possession?
James|No. Having lunch is an activity.`)],
mistakes:R(`She have a phone.|She has a phone.|Use has with she.
Does she has a car?|Does she have a car?|After does, use the base have.
Does she has got a car?|Has she got a car?|Do not mix the systems.
I am having a car. (possession)|I have a car.|Use the simple possession pattern.
I have got breakfast at seven every day. (routine action)|I have breakfast at seven every day.|Do not automatically use have got for activities.
Have you got a pen? — Yes, I do.|Have you got a pen? — Yes, I have.|Match the short answer to the question.`),
practice:{mc:Q(`Choose the form with she.|has|have|haves|She takes has.
Which matches I have a phone in possession meaning?|I’ve got a phone.|I’m have a phone.|I am got a phone.|Have got can express the same present possession.
Which ordinary have question is correct?|Does she have a car?|Does she has a car?|Do she has a car?|Use does and base have.
Which have got question is correct?|Has she got a car?|Does she has got a car?|Is she have got a car?|Move has before she.
Which negative is correct?|She doesn’t have a car.|She doesn’t has a car.|She don’t has a car.|Doesn’t takes base have.
Which is a have got negative?|She hasn’t got a car.|She isn’t got a car.|She doesn’t has got a car.|Use has not got.
What does ’s mean in She’s got a phone?|has|is|a possessive noun ending|The full form is she has got.
Which answer matches Have you got a pen?|Yes, I have.|Yes, I do.|Yes, I am.|Match have in the question.
Which describes an activity in progress?|I am having lunch.|I am having a car as possession.|I has lunch.|Having lunch is an activity.
Which gives past possession clearly?|I had a bicycle.|I have got a bicycle yesterday.|I am had a bicycle.|Use had for this past possession pattern.`),gap:T(`Complete: I __ a phone.|have|I takes have.
Complete: She __ a phone.|has|She takes has.
Complete: They __ got tickets.|have|They takes have got.
Complete: He __ got a bicycle.|has|He takes has got.
Complete: Does she __ a car?|have|Use the base form after does.
Complete: __ she got a car?|Has|Invert has in the have got system.
Complete: I don’t __ a car.|have|Use have after don’t.
Complete: She hasn’t __ a car.|got|Hasn’t got is the possession negative.
Complete: Have you got a pen? Yes, I __.|have|Match the question helper.
Complete: Do you have a pen? Yes, I __.|do|Match do.`),correct:T(`Correct: She have a phone.|She has a phone.|Use has with she.
Correct: Does she has a car?|Does she have a car?|Use base have after does.
Correct: Does she has got a car?|Has she got a car?|Use one system.|Does she have a car?
Correct: She doesn’t has a phone.|She doesn’t have a phone.|Use base have after doesn’t.|She does not have a phone.
Correct possession: I am having a car.|I have a car.|Use simple have for the ordinary possession meaning.|I have got a car.~I’ve got a car.~I've got a car.`),order:T(`Order: phone / has / She / a|She has a phone.|Use has with she.
Order: got / have / tickets / We|We have got tickets.|Keep have got together.
Order: a / she / have / car / Does|Does she have a car?|Use does before the subject.
Order: got / he / Has / bicycle / a|Has he got a bicycle?|Use has before he.
Order: lunch / having / am / I|I am having lunch.|This describes an activity.`),reading:'Ada has a laptop and a new phone. Ravi hasn’t got a car, but he has a bicycle. Before class, Emily asks, “Have you got a pen?” Ada answers, “Yes, I have.” Later, Ravi is having lunch. He does not mean that he owns lunch; he is describing an activity.',read:Q(`What does Ada have?|A laptop and a phone|A car only|Three bicycles|The passage names both objects.
Does Ravi have a car?|No|Yes|He has two.|He hasn’t got a car.
Which answer matches Emily’s question?|Yes, I have.|Yes, I am.|Yes, I do in the matching-pattern task|The question uses have got.
What does is having lunch describe?|An activity in progress|Permanent ownership|Age|Have has an activity meaning here.
Which form belongs with he for possession?|has|have|haves|He takes has.`),write:T(`Describe a possession with have and have got.|I have a phone. I’ve got a phone.|Keep the same possession meaning.
Write both question systems for one object.|Do you have a pen? Have you got a pen?|Do not combine their helpers.
Write two equivalent negative statements.|She doesn’t have a car. She hasn’t got a car.|Use base have after doesn’t.
Describe a family relationship.|I have two sisters.|Use imaginary information if preferred.
Write an activity with have that is not possession.|I am having lunch.|Explain that the meaning is an activity.`)},sources:[['British Council: have got','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-have-got']],related:['010','011','020','034','035']};

L['022']={intro:'Locate everyday things and places with in, on, under, next to and related words. Build complete location sentences, understand the reference object and compare common in/on/at uses without treating them as absolute geometric rules.',
goals:['Use in, on, under and next to with a clear reference object.','Distinguish near from next to and opposite from behind.','Use between, in front of and behind in simple situations.','Ask Where is…? or Where are…? with correct agreement.','Choose common in/on/at place phrases by meaning and context.'],
sections:[
S('A place word relates two things','The keys are in the bag tells us where the keys are relative to the bag. Keys are the located item; the bag is the reference object. A preposition is normally followed by a noun phrase in these beginner patterns. Do not stop at The keys are in when the place is not otherwise clear.',[
'Pattern: subject + be + preposition + reference noun phrase.',
'The phone is on the desk. The phone is the item; the desk is the reference.',
'Use a suitable determiner: on the desk, in my bag, under a chair.',
'If the reference object moves, the relationship may change even when the item stays where it was.'
]),
S('In, on and under: start with clear objects','In often means inside a container or area. On often describes contact with a supporting or attached surface; it is not limited to horizontal tops. Under means lower than something, often with the thing above covering part of the space.',[
'The receipt is in the bag: it is inside the bag.',
'The phone is on the table: it is supported by the table surface.',
'The picture is on the wall: on can describe an attached vertical surface.',
'The shoes are under the bed: they are lower, in the space beneath it.'
],table(['Relationship','Example','Main idea'],`in|The keys are in the bag.|Inside a container
on|The phone is on the table.|Surface contact/support
on|The picture is on the wall.|Attached to a surface
under|The shoes are under the bed.|Lower, in the space beneath`)),
S('Next to, near, between and opposite','Next to or beside usually means immediately to one side of something. Near means close, but not necessarily adjacent. Between locates something in relation to distinct reference points. Opposite usually means across from something, with space in between.',[
'The café is next to the bank: they are side by side in this scene.',
'The station is near the hotel: the distance is small in this context, but they need not be neighbours.',
'The pharmacy is between the bank and the café: name both reference points.',
'The hotel is opposite the station: they face one another across the street in this example.'
]),
S('In front of and behind depend on orientation','The reference object has a front or an understood direction. The car is in front of the hotel describes a place on the hotel’s front side. The car is behind the hotel is the other side. Do not assume left and right stay the same when the viewer turns around.',[
'The visitor is in front of the desk; the worker is behind the desk in this reception scene.',
'In front of is a multiword preposition. Keep all three words.',
'On the left and on the right need a clear viewpoint: on your left is often useful for directions.',
'When the viewpoint could confuse the listener, name a landmark or clarify where you are looking from.'
]),
S('In, on and at have common place uses beyond simple geometry','In is common for an enclosed space or larger area: in the room, in Doha. At can present a place as a point or activity location: at the station, at work. On appears in established expressions such as on the bus and on the first floor. Learn meaning and common combinations together.',[
'In the station focuses on being inside its building; at the station can identify the location more generally.',
'At home and at work are useful fixed phrases without an article in the ordinary meaning.',
'In a car but on a bus/train are common transport patterns; do not derive every phrase only from physical enclosure.',
'This lesson introduces basic place. Lesson 068 develops more complex preposition choices.'
]),
S('Ask, locate and check understanding','Use Where is…? for a singular noun and Where are…? for plural nouns. Answer with a complete sentence first: They are in the drawer. Once the reference is clear, a shorter reply such as In the drawer can be natural in conversation.',[
'Where is my phone? — It is on the desk.',
'Where are the keys? — They are in your bag.',
'Check a landmark: Next to the bank, not opposite it?',
'Use there is to introduce something and a location sentence to locate it: There is a café nearby. It is next to the bank.'
])],
examples:R(`The keys are in the bag.|In indicates the inside of the container.
The receipt is inside the folder.|Inside makes the enclosed relationship explicit.
The phone is on the table.|On expresses surface support.
The picture is on the wall.|On is not limited to horizontal tops.
The shoes are under the bed.|Under locates them beneath the bed.
The bag is under the chair.|Name the reference object after under.
The printer is next to the window.|Next to means beside in this scene.
The café is beside the bank.|Beside has a similar side-by-side meaning.
The station is near the hotel.|Near does not require immediate adjacency.
The pharmacy is between the bank and the café.|Two named reference points clarify the position.
The hotel is opposite the station.|Across from the station in this street scene.
The car is in front of the hotel.|Use the full multiword preposition.
The garden is behind the house.|Behind refers to the back side.
The worker is behind the reception desk.|The desk is the reference object.
The visitor is in front of the desk.|The visitor is on the other side in this scene.
The office is on your left.|Your viewpoint is specified.
The lift is on your right.|Your viewpoint is specified.
The forms are in the drawer.|Forms is plural, so use are.
The office is in Doha.|In can identify a city or larger area.
Ada is in the room.|Focus on being inside.
Ravi is at the station.|At identifies a location.
Ravi is in the station.|In focuses on the building’s interior.
I am at home.|A common fixed place phrase.
They are at work.|Work is used without an article in this phrase.
She is on the bus.|A common transport combination.
He is in a car.|A common contrasting transport combination.
The office is on the first floor.|On is usual for floors.
Where is my phone?|Use is for the singular object.
Where are the keys?|Use are for plural keys.
They are in your bag.|They clearly refers to the keys.`),
dialogues:[D('Finding keys',`Ada|Where are the keys?
Ravi|They are in your bag.
Ada|In the small pocket?
Ravi|Yes, inside the small pocket.`),D('On, not under',`James|Where is the phone?
Emily|It is on the table.
James|Not under the table?
Emily|No. On the top surface.`),D('A street landmark',`Visitor|Where is the pharmacy?
Worker|It is between the bank and the café.
Visitor|Is the hotel nearby?
Worker|Yes. It is opposite the station.`),D('Clarifying next to',`Learner|Does near always mean next to?
Teacher|No. Near means close, but not necessarily beside.
Learner|So two places can be near with another building between them?
Teacher|Yes.`),D('Inside or general location?',`Caller|Where is Ravi?
Ada|He is at the station.
Caller|Is he inside the building?
Ada|Yes. He is in the station café.`)],
mistakes:R(`The keys is in the bag.|The keys are in the bag.|Keys is plural.
The phone is on desk.|The phone is on the desk.|The singular countable reference needs a determiner here.
in front the hotel|in front of the hotel|Keep of in the phrase.
between the bank|between the bank and the café|Give the reference points needed for this scene.
On can only mean on a horizontal top.|On can also describe a picture attached to a wall.|Learn the surface relationship, not a false top-only rule.
Near always means immediately next to.|Near means close; next to is usually more specific.|The meanings differ.`),
practice:{mc:Q(`The keys are inside a bag. Choose the phrase.|in the bag|on the bag|opposite the bag|In matches the inside relationship.
The phone rests on the table surface. Choose the phrase.|on the table|under the table|behind the table|On expresses surface support.
The shoes are beneath the bed. Choose the phrase.|under the bed|in front of the bed|opposite the bed|Under means beneath.
Two shops are immediately side by side. Choose a phrase.|next to each other|opposite each other necessarily|inside each other|Next to expresses adjacency.
Which word does not require immediate adjacency?|near|beside in the stated side-by-side scene|next to in this scene|Near is less specific.
The pharmacy is in the middle of the bank and café. Which fits?|between|inside|under|Between relates it to the two points.
Which complete phrase is correct?|in front of the hotel|in front the hotel|front in hotel|The expression includes of.
Which is a usual transport phrase?|on the bus|at the bus in every meaning|under the bus for travelling inside|On the bus is the normal travel-location pattern.
Which question matches plural keys?|Where are the keys?|Where is the keys?|Where am the keys?|Use are for the plural noun.
Which statement about on is accurate?|It can describe attachment to a wall.|It only refers to horizontal tops.|It always means inside.|On has broader surface uses.`),gap:T(`Complete: The receipt is __ the bag. (inside)|in|In expresses the inside relationship.|inside
Complete: The picture is __ the wall.|on|On expresses attachment to a surface.
Complete: The shoes are __ the bed. (beneath)|under|Under means beneath.
Complete: The café is next __ the bank.|to|Keep to in next to.
Complete: The car is in front __ the hotel.|of|The full phrase is in front of.
Complete: The pharmacy is between the bank __ the café.|and|Name the second reference point with and.
Complete: Where __ my phone?|is|Phone is singular.
Complete: Where __ the keys?|are|Keys is plural.
Complete the usual phrase: I am __ home.|at|At home is an established phrase.
Complete the usual phrase: The office is __ the first floor.|on|Use on for floors.`),correct:T(`Correct: The keys is in the bag.|The keys are in the bag.|Use plural are.
Correct: The phone is on desk.|The phone is on the desk.|Add the appropriate determiner.
Correct: The car is in front the hotel.|The car is in front of the hotel.|Keep of.
Correct: Where is the keys?|Where are the keys?|Use are with the plural noun.
Correct the usual phrase: I am at the home. (ordinary location)|I am at home.|At home normally has no article in this meaning.`),order:T(`Order: bag / the / in / are / keys / The|The keys are in the bag.|The reference object follows in.
Order: table / on / phone / the / is / The|The phone is on the table.|Use on for the surface relationship.
Order: next / bank / the / to / is / café / The|The café is next to the bank.|Keep next to together.
Order: keys / the / are / Where|Where are the keys?|Use question order with are.
Order: hotel / the / front / in / is / car / of / The|The car is in front of the hotel.|Use the complete multiword preposition.`),reading:'Ada’s keys are in her bag. Her phone is on the table, and her shoes are under the chair. Outside, the café is next to the bank. The pharmacy is between the bank and the library. The hotel is opposite the station, across the road. Ravi is at the station, inside its café.',read:Q(`Where are Ada’s keys?|In her bag|On the table|Under the chair|The passage locates them inside her bag.
What is on the table?|Her phone|Her shoes|The pharmacy|The phone is on the surface.
Which place is beside the bank?|The café|The hotel|The station|The café is next to the bank.
Where is the pharmacy?|Between the bank and the library|Under the station|In Ada’s bag|Both reference points are named.
What is opposite the station?|The hotel|The chair|The library only|The hotel is across the road.`),write:T(`Locate three imaginary objects using in, on and under.|The keys are in the bag. The phone is on the desk. The shoes are under the chair.|Make the relationships clear.
Describe two neighbouring places.|The café is next to the bank.|Use a clear reference landmark.
Use between with two reference points.|The pharmacy is between the bank and the library.|Name both points.
Write a singular and a plural Where question.|Where is the phone? Where are the keys?|Match is/are to number.
Explain why at the station and in the station can differ.|At gives a general location; in focuses on being inside the building.|Context can make both appropriate.`)},sources:[['Cambridge: at, on and in for place','https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place']],related:['014','018','041','068']};

L['023']={intro:'Bring your foundation English together in a useful adult introduction. Give a name, origin, current home and work or study information. Ask a question back, clarify spelling and choose how much personal information to share.',
goals:['Give a short introduction with name and useful facts.','Distinguish origin from current residence.','Use be for a job and work for an activity.','Ask a suitable return question in a conversation.','Clarify a name and repair a misunderstanding politely.'],
sections:[
S('A good introduction can be short','Begin with a greeting and your name. Add one or two facts that suit the situation. You do not need a long life story or complicated grammar. Hello, I’m Ada. I’m from Sri Lanka. I work in a clinic is a useful adult introduction.',[
'A first meeting can include Nice to meet you.',
'Use My name is… or I’m… for a name.',
'At work, your role may be relevant. In class, your reason for learning may help.',
'Choose details you are comfortable sharing. A city is usually enough; an exact home address is not needed for classroom practice.'
]),
S('Origin and current home are different facts','I am from Sri Lanka describes origin in this context. I live in Qatar describes current residence. Both can be true at the same time. A city and a country can follow in: I live in Doha, in Qatar. Do not replace the country name with a nationality adjective after from.',[
'I’m from Sri Lanka. I’m Sri Lankan. These use different structures.',
'I live in Qatar, not I am live in Qatar.',
'Where are you from? asks origin; where do you live? asks residence.',
'The meaning of from depends on context; for this lesson, use it for your introductory origin fact.'
],table(['Purpose','Model','Return question'],`Name|My name is Ada.|What is your name?
Origin|I’m from Sri Lanka.|Where are you from?
Residence|I live in Doha.|Where do you live?
Job|I’m a nurse.|What do you do?
Workplace|I work in a clinic.|Where do you work?`)),
S('Job, workplace and study need different patterns','I am a nurse identifies a job. I work in a clinic describes an activity and setting. I study English describes learning. Do not mix be with the base action verb: I am work is not the ordinary present-simple structure.',[
'Singular job noun: I’m a teacher; she’s an engineer.',
'Workplace: I work in a hospital; I work at the city library. Preposition choice can depend on the meaning.',
'If not employed, choose a truthful or imaginary practice fact: I’m a student; I’m looking for work.',
'Present-simple I statements use the base form: I work, I live, I study, I speak.'
]),
S('Give a reason and connect simple ideas','I am learning English for work gives a purpose. I want to speak more confidently gives a goal. At this stage, a few useful longer phrases can be learned as whole chunks while later grammar lessons explain their structures. And connects two related facts; but can show a contrast.',[
'I work in a clinic, and I study English after work.',
'I speak Sinhala and some English.',
'I’m from Sri Lanka, but I live in Qatar now.',
'Do not overload the first introduction. Pause so the other person can respond.'
]),
S('Conversation is more than a speech about yourself','After giving a fact, ask a suitable question back. What about you? can be a useful simple return. Listen to the reply and respond to the information, rather than repeating a memorised script. Avoid assuming somebody’s job or nationality from their appearance.',[
'I’m from Sri Lanka. Where are you from?',
'I work in a clinic. What do you do?',
'How do you spell your name? checks spelling, not the whole introduction.',
'If a question feels too personal, a short polite boundary is possible: I’d rather not share that.'
]),
S('Repair, rehearse and improve','Record a short introduction and listen for clear words and pauses. Check I am versus I work, a/an before a singular job noun, capitals in writing and the difference between origin and home. Ask a partner to tell you what they understood.',[
'If a name is unclear: Sorry, could you repeat your name?',
'For spelling: Could you spell that, please? Read it back to check.',
'Correct a fact politely: I’m from Sri Lanka, not India.',
'Make two versions: a short workplace introduction and a slightly longer classroom introduction. Use imaginary details for public practice if preferred.'
])],
examples:R(`Hello. My name is Ada.|A clear opening.
Hi, I’m Ravi.|A less formal opening.
Nice to meet you.|Use for a first introduction.
I’m from Sri Lanka.|Give origin with from and a place name.
I’m Sri Lankan.|Give nationality with an adjective.
I live in Qatar.|Give current residence.
I live in Doha.|A city can follow in.
I’m from Sri Lanka, but I live in Qatar now.|Origin and residence can differ.
I’m a nurse.|Use a with the singular job noun.
I’m an engineer.|Use an before the vowel sound.
I work in a clinic.|Use the base action verb after I.
I work at the city library.|A useful workplace pattern.
I’m a student.|A valid study role introduction.
I study English after work.|Give a learning routine.
I speak Sinhala and some English.|List languages without a/an.
I’m learning English for work.|A useful purpose chunk.
I want to speak more confidently.|A useful goal chunk.
I work in a clinic, and I study English.|And links related facts.
What is your name?|Ask about the name.
Where are you from?|Ask about origin.
Where do you live?|Ask about current residence.
What do you do?|Often asks about work in an introduction.
Where do you work?|Ask about workplace.
What about you?|A simple return question when the reference is clear.
Could you repeat your name, please?|Repair a listening problem.
How do you spell that?|Ask for the letters.
My surname is Khan: K–H–A–N.|Give the whole surname and its spelling.
I’m from Sri Lanka, not India.|Correct the specific misunderstanding.
I’d rather not share my address.|A polite way to decline a private detail.
It was nice to meet you. Goodbye.|End a first conversation politely.`),
dialogues:[D('A first class',`Ada|Hello. I’m Ada. I’m from Sri Lanka.
Emily|Nice to meet you. I’m Emily. I live in London.
Ada|I live in Qatar now. I’m learning English for work.
Emily|Welcome to the class.`),D('Work and workplace',`Ravi|What do you do?
Ada|I’m a nurse. I work in a clinic. What about you?
Ravi|I’m a driver.
Ada|Nice to meet you, Ravi.`),D('Origin versus home',`James|Where are you from?
Ada|I’m from Sri Lanka.
James|Do you live there now?
Ada|No. I live in Qatar now.`),D('Checking a name',`Receptionist|What is your surname?
Visitor|Khan.
Receptionist|Could you spell that, please?
Visitor|K–H–A–N.`),D('Choosing what to share',`Learner|What is your exact home address?
Ada|I’d rather not share my address. I live in Doha.
Learner|Of course. Why are you learning English?
Ada|For work and everyday conversation.`)],
mistakes:R(`I am live in Doha.|I live in Doha.|Do not add am before the base action verb.
I am work in a clinic.|I work in a clinic.|Use the simple action pattern.
I am nurse.|I am a nurse.|Use a with a singular countable job noun.
I am from Sri Lankan.|I am from Sri Lanka.|Use the place name after from in this origin pattern.
My name Ada.|My name is Ada.|The full statement needs is.
I speak an English.|I speak English.|A language name does not take a/an in this pattern.`),
practice:{mc:Q(`Which gives a name clearly?|My name is Ada.|My name Ada.|I name is Ada.|Use My name is.
Which gives current residence?|I live in Doha.|I am live in Doha.|I living Doha.|Use the base verb live after I.
Which gives origin correctly?|I’m from Sri Lanka.|I’m from Sri Lankan.|I’m from a Sri Lankan in this country pattern.|Use the place name.
Which gives a job correctly?|I’m a nurse.|I’m nurse.|I am work nurse.|Use be and an appropriate job noun phrase.
Which gives workplace correctly?|I work in a clinic.|I am work in a clinic.|I working in clinic without a helper.|Use the ordinary action pattern.
Which asks about origin?|Where are you from?|Where is you from?|How are from?|Use are with you.
Which asks about residence?|Where do you live?|Where you live?|Where are you live?|Use do with live in the ordinary present-simple question.
Which question commonly asks about work in introductions?|What do you do?|What are you name?|Where is your age?|Context gives the work meaning.
Which is an appropriate spelling request?|Could you spell your name, please?|Could you spelling your name?|You spell must name.|Use could you plus base verb.
Which statement is sensible for classroom practice?|You may use imaginary details and avoid private addresses.|You must share every private detail.|Longer always means better.|Only relevant, comfortable details are needed.`),gap:T(`Complete: My name __ Ada.|is|A full statement needs is.
Complete: I am __ Sri Lanka.|from|From introduces origin.
Complete: I live __ Doha.|in|Use in with the city here.
Complete: I am __ nurse.|a|The singular countable job noun needs a.
Complete: I am __ engineer.|an|Engineer begins with a vowel sound.
Complete: I __ in a clinic. (work / am work)|work|Use the ordinary simple action form.
Complete: Where __ you from?|are|You takes are.
Complete: Where do you __? (residence)|live|Live asks about where someone resides.
Complete: Could you __ your name? (letters)|spell|Spelling gives the letters.
Complete: I speak Sinhala __ some English.|and|And joins the language facts.`),correct:T(`Correct: My name Ada.|My name is Ada.|Add is.
Correct: I am live in Doha.|I live in Doha.|Remove am from this present-simple pattern.
Correct: I am work in a clinic.|I work in a clinic.|Use work as the main verb.
Correct: I am nurse.|I am a nurse.|Add a before the singular job noun.
Correct: I am from Sri Lankan.|I am from Sri Lanka.|Use the country name after from.`),order:T(`Order: Ada / is / name / My|My name is Ada.|Use a clear name statement.
Order: Sri / from / Lanka / am / I|I am from Sri Lanka.|Use be + from + country.
Order: Doha / in / live / I|I live in Doha.|Use the base verb live.
Order: clinic / a / in / work / I|I work in a clinic.|Use a with the singular countable place noun.
Order: you / are / Where / from|Where are you from?|Use the appropriate be question.`),reading:'Hello. My name is Ada Khan. I’m from Sri Lanka, but I live in Doha now. I’m a nurse, and I work in a clinic. I speak Sinhala and some English. I study after work because I want to communicate more confidently. My surname is Khan: K–H–A–N. Nice to meet you. What about you?',read:Q(`What is Ada’s surname?|Khan|Doha|Sri Lanka|She introduces Ada Khan and spells the surname.
Where is she from?|Sri Lanka|Doha|London|Origin is given after from.
Where does she live now?|Doha|Sri Lanka in this passage|London|Residence is given with live in.
What is her job?|Nurse|Driver|Engineer|She says I’m a nurse.
Why does she study?|To communicate more confidently|To change her surname|To buy a clinic|The passage gives this goal.`),write:T(`Write a short introduction using a name and origin.|Hello. I’m Ada. I’m from Sri Lanka.|Use your own or imaginary details.
Give separate origin and residence facts.|I’m from Sri Lanka. I live in Qatar.|Keep place names and patterns appropriate.
Give a job and workplace.|I’m a nurse. I work in a clinic.|Use be for the job and work for the action.
Ask two return questions.|Where are you from? What do you do?|Choose questions that suit the situation.
Write a five-line first-meeting conversation with a spelling check.|A: Hello, I’m Ada. B: Nice to meet you. A: What is your surname? B: Khan, K–H–A–N. A: Thank you.|Different natural dialogues are welcome. Include both speakers.`)},sources:[['British Council: meeting new people','https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people']],related:['001','006','008','012','021']};

L['024']={intro:'Use Lessons 001–023 together in realistic situations. Review names, sounds, numbers, be, articles, descriptions, possession and location. Find your weak points, explain corrections and build a short introduction without copying a script.',
goals:['Combine foundation grammar in a short introduction.','Check names, digit sequences and simple prices accurately.','Use be statements, negatives, questions and answers together.','Describe objects with articles, plurals, possessives and place words.','Use feedback to choose specific lessons for review.'],
sections:[
S('Review by using English, not only rereading it','A review lesson should help you retrieve and combine what you learnt. First try a task without notes. Check the answer and its reason. If something is difficult, return to the exact lesson that teaches it. A mistake identifies a useful practice target; it is not a reason to stop.',[
'For names and letter names, revisit Lessons 002–003 and 006.',
'For vowel/consonant contrasts, revisit 004–005 and use recorded UK dictionary audio.',
'For numbers and prices, revisit 007. For polite repair phrases, revisit 008.',
'A written review score measures these written tasks only. It does not certify a proficiency level or automatically measure spoken pronunciation.'
]),
S('Start a conversation and verify details','Give a greeting and a name, then ask a question back. If you miss a detail, ask for repetition or spelling. Read back a number or address before assuming it is correct. Use an imaginary code or example.com address for practice.',[
'My name is Ada. Could you spell your surname, please?',
'Is that the letter O or the number zero?',
'Did you say fifteen or fifty? Use digits to confirm the number.',
'Thank you for your help. — You’re welcome. Complete both sides of the exchange.'
]),
S('Build statements, negatives and questions with be','Use I am, he/she/it is and you/we/they are. Add not after be for a negative. Move be before the subject for a yes/no question. In a short answer, choose the pronoun from the current speaker’s perspective.',[
'I am a nurse. I’m not a driver. Are you a nurse?',
'Are you ready? — Yes, I am. Do not end the positive answer with only I’m.',
'Is this your ticket? — No, it isn’t. Keep the singular object reference.',
'For an action statement, do not insert be: I work in a clinic, not I am work in a clinic.'
]),
S('Describe nouns accurately','First identify the noun and whether it is singular, plural or uncountable. Choose the determiner and adjective order. Then check agreement. A useful book becomes two useful books; useful does not gain a plural ending. An article depends on the next sound.',[
'a university but an hour; an office but a busy office.',
'this bag is heavy; these bags are heavy.',
'my new phone; their two books. Avoid the my phone.',
'city/cities and key/keys use different y spelling patterns. Pronounce plural endings from the final sound.'
],table(['Task','Useful model','Review lesson'],`Choose be|She is ready.|012–014
Choose a/an|an hour; a useful book|015
Describe a noun|two clean desks|016, 019
Identify possession|my ticket; her bag|020–021
Locate or introduce|in the bag; there is a café|018, 022`)),
S('Possession, existence and location have different jobs','I have a pen tells us what I possess. There is a pen on the desk introduces what exists there. The pen is on the desk locates a known pen. Learn the differences so you can choose the sentence that answers the question.',[
'Have you got a pen? — Yes, I have. Do you have a pen? — Yes, I do.',
'Is there a café nearby? — Yes, there is.',
'Where are the keys? — They are in my bag.',
'This is my bag and This bag is mine are different grammatical patterns with the same ownership meaning in context.'
]),
S('Read, listen, speak and write as separate useful skills','Read the passage for meaning before answering. For listening, have a partner read a sentence while you cannot see it; then check what you understood. For speaking, introduce yourself and answer an unexpected question. For writing, create your own sentences rather than copying models.',[
'Do not call a visible-text multiple-choice task a true listening test.',
'Use the optional device voice for practice, but check target sounds with recorded UK dictionary audio when needed.',
'After marking, write down one grammar target and one communication target to review tomorrow.',
'Move on when you understand the patterns; return to earlier lessons whenever a specific point remains unclear.'
])],
examples:R(`Hello. My name is Ada.|A complete name introduction.
Nice to meet you.|A first-meeting phrase.
Could you spell that, please?|Ask for the letter sequence.
Khan: K–H–A–N.|Keep the letters and order accurate.
Did you say fifteen or fifty?|Clarify a number.
The code ends in five, five, eight, zero.|Keep repeated digits.
£12.05 is twelve pounds and five pence.|Distinguish five pence from fifty.
I am a nurse.|Be with a singular job phrase.
She is an engineer.|Use an before a vowel sound.
We are ready.|We takes are.
I’m not late.|A standard first-person negative.
They aren’t at home.|A plural negative.
Are you ready? Yes, I am.|The reply changes perspective to I.
Is this your bag? No, it isn’t.|Use it for a singular object.
I work in a clinic.|An action statement without am.
I know the address.|A state verb.
an hour|Silent h gives a vowel sound.
a useful website|Useful begins with /j/.
two quiet rooms|The adjective stays unchanged.
The rooms are quiet.|Match are to the plural subject.
this bag — these bags|Match the demonstrative to number.
that office — those offices|A farther singular/plural contrast.
one city — two cities|Consonant + y changes to -ies.
one key — two keys|Vowel + y keeps y.
This is my ticket.|Possessive before the noun.
The company changed its name.|Possessive its has no apostrophe.
She’s got a phone.|She has got a phone.
There are two desks.|Introduce plural things.
The keys are in the bag.|Locate known plural things.
I’m from Sri Lanka, but I live in Qatar.|Distinguish origin from residence.`),
dialogues:[D('A reception check',`Receptionist|Good morning. What is your surname?
Ada|Khan. K–H–A–N.
Receptionist|Are you here for the English course?
Ada|Yes, I am.`),D('Ready for class',`Emily|Have you got a pen?
Ravi|Yes, I have. Is this my book?
Emily|No, it isn’t. Your book is on the desk.
Ravi|Thank you.`),D('A useful location',`Visitor|Is there a café nearby?
Ada|Yes, there is. It is next to the bank.
Visitor|Are there any empty tables?
Ada|I’m not sure. Let’s check.`),D('An introduction',`James|What do you do?
Ada|I’m a nurse. I work in a clinic.
James|Where are you from?
Ada|I’m from Sri Lanka, but I live in Qatar.`),D('Choosing a review target',`Learner|I wrote an useful book.
Teacher|Listen to useful. It begins with /j/, so use a.
Learner|I will review Lesson 015.
Teacher|Good. Then make three new examples.`)],
mistakes:R(`I am work in a clinic.|I work in a clinic.|Do not mix the be and simple-action patterns.
She are an engineer.|She is an engineer.|Match be with she.
an useful book|a useful book|Choose the article by sound.
two quiets room|two quiet rooms|Pluralise the noun, not the adjective.
There is two desks.|There are two desks.|Use plural agreement.
The dog is in it’s bed.|The dog is in its bed.|Possessive its has no apostrophe.`),
practice:{mc:Q(`Choose the complete job introduction.|I am a nurse.|I nurse.|I am work nurse.|Use be and a singular job noun phrase.
Choose the correct be agreement.|She is ready.|She are ready.|She am ready.|She takes is.
One learner answers Are you ready? Choose the reply.|Yes, I am.|Yes, I’m.|Yes, you are for self-reference.|Use I and a full final positive be form.
Choose the article phrase.|an hour|a hour|an university|Hour has a silent h.
Choose the plural description.|two useful books|two usefuls book|two usefully books|Pluralise books, not useful.
Choose the correct existence sentence.|There are two desks.|There is two desks.|There am two desks.|Desks is plural.
Which answer matches Have you got a pen?|Yes, I have.|Yes, I am.|Yes, there is.|Match the have got question.
Choose the possessive spelling.|its name|it’s name for possession|its’ name|Possessive its has no apostrophe.
Which question checks a number precisely?|Did you say fifteen or fifty?|What is your surname?|Are you a teacher?|Name the uncertain alternatives.
What is the best response to a review error?|Find the reason and revisit the relevant lesson.|Copy every answer without reading.|Assume the whole course is impossible.|Use feedback to set a specific practice target.`),gap:T(`Complete: My name __ Ada.|is|A name statement needs is.
Complete: I __ from Sri Lanka.|am|Use am with I.
Complete: She __ an engineer.|is|Use is with she.
Complete: They __ not late.|are|Use are with they.
Complete: Is this your ticket? Yes, __ is.|it|Use a singular object pronoun.
Complete: __ useful book. (a/an)|a|Useful begins with /j/.
Write the plural of city.|cities|Consonant + y changes to -ies.
Write the plural of key.|keys|Keep y after a vowel letter.
Complete: The company changed __ name. (its/it’s)|its|Possessive its has no apostrophe.
Write the four digits: double five, eight, zero.|5580|Do not omit the repeated five.`),correct:T(`Correct: I am work in a clinic.|I work in a clinic.|Use the simple action pattern.
Correct: She are ready.|She is ready.|Match is with she.
Correct: an useful book.|a useful book|Choose by the next sound.
Correct: There is two chairs.|There are two chairs.|Use are with plural chairs.
Correct: The dog is in it’s bed.|The dog is in its bed.|Use the possessive spelling.`),order:T(`Order: nurse / a / am / I|I am a nurse.|Use subject + be + job phrase.
Order: ready / you / Are|Are you ready?|Move are before you.
Order: chairs / two / are / There|There are two chairs.|Introduce plural objects.
Order: bag / the / in / keys / are / The|The keys are in the bag.|Keep location after be.
Order: Sri / from / Lanka / am / I|I am from Sri Lanka.|Use a place name after from.`),reading:'Ada Khan is a nurse from Sri Lanka. She lives in Doha and studies English after work. Today she is at a small learning centre. There are two clean desks and four chairs in her room. Her phone is in her bag. She has got a pen, but she hasn’t got a notebook. The class book costs £12.05. She asks Ravi, “Is this my book?” He replies, “Yes, it is.”',read:Q(`What is Ada’s job?|A nurse|A driver|An accountant|The first sentence identifies her job.
Where does she live?|Doha|Sri Lanka in this passage|London|The passage distinguishes residence from origin.
How many desks are in the room?|Two|Four|One|There are two desks.
What has Ada not got?|A notebook|A pen|A phone|The passage gives hasn’t got a notebook.
What is the book price in words?|Twelve pounds and five pence|Twelve pounds fifty|One hundred and twenty-five pounds|.05 means five pence.`),write:T(`Write a four-sentence introduction using name, origin, residence and work.|My name is Ada. I’m from Sri Lanka. I live in Doha. I work in a clinic.|Use your own or imaginary facts and correct patterns.
Describe an imaginary room using there is and there are.|There is a table. There are two chairs.|Match the noun number and be form.
Write a location question and answer using a possessive.|Where are my keys? They are in your bag.|Keep pronoun reference and agreement clear.
Ask and answer one be question and one have got question.|Are you ready? Yes, I am. Have you got a pen? Yes, I have.|Match each short answer to its question.
Choose two specific things to review and explain your plan.|I will review a/an in Lesson 015 and plural endings in Lesson 019. I will make three examples of each.|A useful plan names the skill and a concrete practice action.`)},sources:[['British Council: grammar reference','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference'],['Cambridge: recorded pronunciation','https://dictionary.cambridge.org/pronunciation/']],related:['007','012','015','019','023']};

})();
