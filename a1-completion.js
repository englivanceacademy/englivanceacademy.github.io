/* Original extended lessons 041–060. Keep canonical course numbering. */
(function(){'use strict';
const L=window.EVA_FULL_LESSONS=window.EVA_FULL_LESSONS||{};
const R=s=>s.trim().split('\n').map(r=>r.trim().split('|').map(x=>x.trim()));
const S=(title,explain,points,table)=>({title,explain,points,table:table||null});
const Q=s=>R(s).map(r=>({prompt:r[0],answer:r[1],options:r.slice(1,4),why:r[4]}));
const T=s=>R(s).map(r=>({prompt:r[0],answer:r[1],why:r[2],accept:r[3]?r[3].split('~'):[]}));
const D=(title,s)=>({title,lines:R(s)});
const tb=(head,s)=>({head,rows:R(s)});
const continuous=[['British Council: present continuous','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous']];
const past=[['British Council: past simple','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple']];
const future=[['British Council: future forms','https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous']];

L['041']={intro:'Use at, on and in to organise a timetable clearly. Learn their common time patterns, important fixed expressions and the difference between a time point, a period and a duration.',
goals:['Use at for ordinary clock-time phrases.','Use on with days, dates and specified day parts.','Use in with months, years and general day parts.','Omit extra prepositions before next/last/this/every in the taught patterns.','Explain at night, in the night and basic in/for contrasts.'],
sections:[
S('Start with the kind of time reference','At, on and in connect an event to a time reference. A clock reading is a point; a day or date is a calendar reference; a month or year is a broader period. These are useful patterns, not rules for every possible expression.',[
'At nine; on Monday; in June.',
'A longer sentence can contain more than one: on Monday at nine.',
'Do not choose a time preposition from a place rule alone: in the office and at nine have different jobs.'
],tb(['Reference','Pattern','Example'],`Clock time|at|at 8:30
Day/date|on|on Friday; on 14 May
Month/year|in|in July; in 2026
General day part|in|in the afternoon`)),
S('At: clock times and useful fixed phrases','Use at with exact clock times and familiar time points such as noon or midnight. British English commonly uses at the weekend or at weekends; on the weekend is common in other varieties. Learn these phrases as combinations rather than inventing an exact-size rule.',[
'The class starts at half past eight.',
'We meet at noon. The train leaves at midnight.',
'At night and at the moment are common fixed phrases.'
]),
S('On: days, dates and particular day parts','On Monday and on 14 May identify calendar times. When a morning or evening is specified by a day or description, on is common: on Monday morning, on a cold evening. Compare in the morning for a general day part.',[
'We study on Fridays means a repeated Friday routine.',
'The meeting is on Friday morning, not in Friday morning in the ordinary pattern.',
'On Christmas Day refers to the day; at Christmas can refer to the holiday period.'
]),
S('In: broader periods and day parts','Use in with months, years and seasons, and in the morning/afternoon/evening for general day parts. In the night can refer to something during a particular night. At night commonly describes nights generally; neither phrase makes the other impossible.',[
'in September; in 2026; in winter.',
'She studies in the evening. She works at night.',
'I woke up in the night refers to an occurrence during that night.'
]),
S('Next, last, this and every usually need no extra preposition','In these ordinary time phrases, say next Monday, last week, this evening and every Friday without adding on/in/at. Today, tomorrow and yesterday also normally stand alone as time adverbials. Keep a full date’s on when the sentence uses that pattern.',[
'We meet next Tuesday, not on next Tuesday in the neutral learner model.',
'I study every evening; I called yesterday.',
'This lesson teaches the neutral patterns; special contrasts and dialectal uses can vary.'
]),
S('In two hours is different from for two hours','In two hours can locate a future event two hours from now; it can also describe time needed to complete a task in another context. For two hours describes duration. When arranging a meeting, confirm the date, time and relevant time zone rather than relying on one number.',[
'The lesson starts in two hours: a future starting point.',
'We study for two hours: the length of study.',
'I completed it in two hours: time taken to finish. Meaning comes from the complete sentence.'
])],examples:R(`at eight|A clock time.
at 8:30|An exact time.
at noon|A time point.
at midnight|Clarify the calendar date when necessary.
at night|A common general-night phrase.
at the weekend|Common British usage.
at weekends|Repeated weekend reference.
at the moment|A fixed phrase for now.
on Monday|A day.
on Fridays|A repeated day.
on 14 May|A date.
on Monday morning|A specified morning.
on Friday evening|A specified evening.
on Christmas Day|A particular holiday day.
in June|A month.
in 2026|A year.
in winter|A season.
in the morning|A general day part.
in the afternoon|A general day part.
in the evening|A general day part.
I woke up in the night.|An occurrence during a particular night.
next Tuesday|No extra on in the neutral pattern.
last week|No extra in.
this evening|No extra in.
every Friday|No extra on.
We met yesterday.|Yesterday stands alone.
The lesson starts in two hours.|Time until the start.
We study for two hours.|Duration.
I finished it in two hours.|Time needed for completion.
We meet on Monday at nine.|Day and clock time can combine.`),dialogues:[D('A class time',`Ada|When does the class start?
Emily|On Monday at nine.
Ada|In the morning?
Emily|Yes.`),D('A day part',`Learner|In Friday morning?
Teacher|Say on Friday morning.
Learner|But in the morning?
Teacher|Yes, for the general day part.`),D('Night phrases',`Ravi|I work at night.
Ada|I woke up in the night yesterday.
Ravi|So both phrases can be useful?
Ada|Yes. Their usual contexts differ.`),D('No extra on',`James|We meet next Tuesday.
Learner|Not on next Tuesday?
James|Use no extra preposition in the neutral pattern.
Learner|Next Tuesday. Thank you.`),D('Point or duration?',`Emily|The class starts in two hours.
Ada|And how long does it last?
Emily|For two hours.
Ada|The phrases answer different questions.`)],mistakes:R(`in Monday|on Monday|Use on with the day.
at June|in June|Use in with a month.
in Friday morning|on Friday morning|The day specifies the morning.
on next Tuesday|next Tuesday|The neutral next phrase needs no extra on.
At night means in the night is always wrong.|In the night can refer to a particular night.|Learn meanings, not false bans.`),practice:{mc:Q(`Choose the clock phrase.|at nine|on nine|in nine for this clock reading|Use at.
Choose the day phrase.|on Monday|in Monday|at Monday|Use on.
Choose the month phrase.|in June|on June in this month-only phrase|at June|Use in.
Choose the specified day part.|on Friday morning|in Friday morning|at Friday morning|Use on with the specified morning.
Choose the neutral next phrase.|next Tuesday|on next Tuesday as the neutral model|in next Tuesday|No extra preposition is needed.
Which is common British weekend usage?|at the weekend|in the weekend as the taught model|on the weekend is the only English form|Varieties differ.
Which gives duration?|for two hours|at two hours as the intended duration|on two hours|For gives length of time.
What can in two hours mean in The class starts in two hours?|Time from now until it starts|Its duration necessarily|Two separate classrooms|The verb starts identifies a point.
Can in the night be correct?|Yes, for an occurrence during a particular night.|No, never.|Only for a year.|Meaning affects the phrase.
Choose two combined references.|on Monday at nine|in Monday on nine|at Monday in nine|Use the matching day and clock patterns.`),gap:T(`Complete: __ eight.|at|Clock time.
Complete: __ noon.|at|A time point.
Complete: __ Monday.|on|A day.
Complete: __ 14 May.|on|A date.
Complete: __ June.|in|A month.
Complete: __ 2026.|in|A year.
Complete: __ the evening.|in|A general day part.
Complete: __ Friday evening.|on|A specified evening.
Complete: __ night. (general nights)|at|The common general phrase.
Choose duration: We study __ two hours.|for|The phrase gives length.`),correct:T(`Correct: in Monday.|on Monday|Use on.
Correct: at June.|in June|Use in.
Correct: in Friday morning.|on Friday morning|The day specifies the morning.
Correct the neutral phrase: on next Tuesday.|next Tuesday|No extra on is needed.
Correct intended duration: We study at two hours.|We study for two hours.|For expresses duration.`),order:T(`Order: nine / at / starts / class / The|The class starts at nine.|Use at with clock time.
Order: Mondays / on / study / We|We study on Mondays.|A repeated-day phrase.
Order: June / in / travel / They|They travel in June.|Use in with a month.
Order: Tuesday / next / meet / We|We meet next Tuesday.|No extra preposition.
Order: hours / two / for / study / We|We study for two hours.|For gives duration.`),reading:'Ada studies on Mondays at nine in the morning. She practises every evening. In June, the class meets on Friday morning instead. Next Tuesday she has a separate practice call. It starts in two hours from the time she reads a reminder, and the call lasts for thirty minutes.',read:Q(`When is the usual class?|On Mondays at nine|In Mondays|At June|Day and clock time combine.
Does every evening need an extra in here?|No|Yes|Only on Fridays|Every begins the time phrase.
Why is on used before Friday morning?|Friday specifies the morning.|Morning always takes on.|It is a duration.|The phrase identifies a particular day part.
What does in two hours locate?|The call’s start|Its thirty-minute duration|The month June|Starts identifies a future point.
Which phrase gives the call’s duration?|for thirty minutes|next Tuesday|on Mondays|For gives length.`),write:T(`Give one at, on and in time phrase.|at nine; on Monday; in June|Match the reference types.
Use a specified morning.|The class is on Friday morning.|Use on.
Write a neutral next phrase sentence.|We meet next Tuesday.|Do not add an unnecessary preposition.
Contrast in two hours and for two hours.|We start in two hours. We study for two hours.|Point versus duration.
Write a clear appointment confirmation.|On Monday at nine in the morning, correct?|Include the relevant date and time details.`)},sources:[['Cambridge: time prepositions','https://dictionary.cambridge.org/grammar/british-grammar/at-on-in-time']],related:['022','040','042','068']};

L['042']={intro:'Describe a working day in a clear order. Combine present simple, clock times, frequency and sequence words, then turn a list of activities into a useful short spoken or written account.',goals:['Use present simple for a typical routine.','Put daily events in a sensible order.','Add accurate time and frequency phrases.','Use useful routine verb combinations.','Ask and answer a follow-up about a routine.'],sections:[
S('Choose a typical day, not every possible day','A routine account describes what normally happens. Begin with I usually… or On a typical working day… when days vary. Do not claim always if the activity only happens sometimes. Use imaginary details if you prefer.',[
'I get up at six is a routine, not necessarily what I am doing now.',
'Choose the details relevant to the listener: commute, work tasks, breaks and study.',
'A short organised account is more useful than a long disconnected list.'
]),
S('Use accurate routine verb phrases','Learn the verb and its natural partners: get up, have breakfast, leave home, take the bus, start work and go to bed. These are practical chunks. Do not add am before each base verb in an ordinary present-simple routine.',[
'I have breakfast, not I am have breakfast.',
'I leave home at seven. I arrive at work at eight.',
'Go to bed normally has no the in this routine meaning.'
],tb(['Stage','Useful model'],`Morning|I get up and have breakfast.
Travel|I take the bus to work.
Work|I check my schedule.
After work|I cook dinner and study.
Night|I go to bed at ten.`)),
S('Give times and frequency naturally','Use at for clock times, in the morning for a day part and on Mondays for a repeated day. Usually normally goes before an ordinary main verb; after main-verb be, put it after be. Exact frequency phrases can replace vague words when needed.',[
'I usually take the bus. I am usually early.',
'I check the schedule every morning; I study three times a week.',
'Every morning needs no additional in in this neutral pattern.'
]),
S('Sequence words connect the account','First, then, after that and finally show order. Before and after can connect a noun phrase to an activity: before work, after lunch. Do not overuse then before every sentence; vary the structure when it remains clear.',[
'First, I check the schedule. Then I prepare the room.',
'After lunch, I answer emails. Finally, I check tomorrow’s tasks.',
'A comma can help after an opening phrase in writing, especially when it improves clarity.'
]),
S('Keep subjects, tense and viewpoint consistent','With I/we/they, ordinary positive verbs use the base form. With she/he, add the appropriate present-simple ending. If changing your own routine into a colleague’s routine, check every verb, not only the first one.',[
'I start and finish → She starts and finishes.',
'I have lunch → He has lunch.',
'If describing yesterday instead, use a past account; Lessons 052–057 develop that pattern.'
]),
S('Practise meaning as well as memorisation','Write a short account, read it aloud and then retell it without looking. A partner should ask one new question: What time do you leave? How do you travel? Respond to that question rather than restarting the whole script.',[
'Check the order, times, verb forms and pronouns.',
'Change one detail and retell: a different start time or travel method.',
'Device speech can model sentences, but it does not automatically assess your spoken fluency.'
])],examples:R(`On a typical day, I get up at six.|Set the routine context.
I usually get up early.|Use frequency before get.
First, I wash and get dressed.|Begin the sequence.
I have breakfast at six thirty.|A natural meal phrase.
I check my schedule.|A useful work action.
I leave home at seven.|A departure point.
I take the bus to work.|A travel routine.
I arrive at work at eight.|Place and time can both use at.
I am usually early.|Frequency follows be.
I start work at eight thirty.|A start time.
I prepare the room.|A work task.
Then I check the forms.|A sequence link.
I answer emails in the morning.|A general day part.
We have a short break.|A shared activity.
I have lunch at noon.|Meal and time.
After lunch, I meet clients.|Locate the next activity.
I finish work at five.|A finish time.
I usually walk home.|A travel habit.
After work, I cook dinner.|An evening routine.
I study English for twenty minutes.|Give duration.
I practise three times a week.|Give exact frequency.
Sometimes I read at night.|An alternative frequency position.
I do not study every evening.|State the actual limit.
Finally, I prepare for tomorrow.|Close the sequence.
I go to bed at ten.|A natural bedtime phrase.
She starts at eight.|Third-person agreement.
He has lunch at noon.|Have becomes has.
They finish at five.|Plural subject uses the base form.
What time do you leave?|Ask a follow-up.
How do you get to work?|Ask about transport.`),dialogues:[D('Morning',`Ada|What time do you get up?
Ravi|Usually at six.
Ada|Do you have breakfast at home?
Ravi|Yes, I do.`),D('Travel',`Emily|How do you get to work?
James|I usually take the train.
Emily|Are you usually early?
James|Yes.`),D('Sequence',`Teacher|What do you do first?
Learner|I check the schedule.
Teacher|And after that?
Learner|I prepare the room.`),D('Changing the subject',`Learner|I start at eight. She start at eight?
Teacher|She starts at eight.
Learner|And she has lunch?
Teacher|Correct.`),D('After work',`Ada|Do you study every evening?
Ravi|No. I study three times a week.
Ada|For how long?
Ravi|About twenty minutes.`)],mistakes:R(`I am get up at six.|I get up at six.|Use the ordinary routine pattern.
I have the breakfast at seven. (ordinary routine)|I have breakfast at seven.|The meal phrase normally has no article here.
She start at eight.|She starts at eight.|Use third-person agreement.
I study in every evening.|I study every evening.|No extra in before every.
I go to the bed at ten. (ordinary sleep routine)|I go to bed at ten.|Use the common routine phrase.`),practice:{mc:Q(`Choose a routine sentence.|I get up at six.|I am get up at six.|I getting at six.|Use present simple.
Choose the meal phrase.|I have breakfast.|I am have breakfast.|I have breakfasts as the required daily pattern.|Use the natural routine chunk.
Choose the time phrase.|at eight|on eight|in eight for this clock reading|Clock time uses at.
Choose the neutral frequency order.|I usually take the bus.|I am usually take bus.|I take usually the bus as the required model.|Frequency usually precedes the ordinary verb.
Choose the be pattern.|I am usually early.|I usually are early.|I am earlys.|After main-verb be.
Which gives sequence?|after that|often as a sequence label|three times as an order word|It links the next event.
Choose the third-person form.|She starts work.|She start work.|She am start.|Use starts.
Choose the third-person meal phrase.|He has lunch.|He have lunch.|He haves lunch.|Have becomes has.
Which gives duration?|for twenty minutes|at twenty minutes as the intended duration|on twenty minutes|For gives length.
Which is a useful follow-up?|How do you travel to work?|Repeat your whole introduction regardless of the answer.|No question is possible.|Ask about a relevant detail.`),gap:T(`Complete: I __ up at six. (get/gets)|get|Use base get.
Complete: I __ breakfast. (have/has)|have|Use have with I.
Complete: I leave home __ seven.|at|Clock time.
Complete: I work __ the morning.|in|General day part.
Complete: __ lunch, I answer emails. (after/at)|After|It introduces the following stage.
Complete: She __ work at eight. (start)|starts|Add -s.
Complete: He __ lunch at noon. (have)|has|Use the irregular form.
Complete: I study __ twenty minutes. (duration)|for|For gives duration.
Complete: I go __ bed at ten.|to|The chunk is go to bed.
Complete: What time __ you leave?|do|Use do with the ordinary verb.`),correct:T(`Correct: I am get up at six.|I get up at six.|Remove am.
Correct: She start at eight.|She starts at eight.|Use starts.
Correct: He have lunch.|He has lunch.|Use has.
Correct: I study in every evening.|I study every evening.|Remove in.
Correct the ordinary sleep routine: I go to the bed at ten.|I go to bed at ten.|Remove the article.`),order:T(`Order: six / at / up / get / I|I get up at six.|A routine.
Order: breakfast / have / Then / I|Then I have breakfast.|Connect the next event.
Order: work / at / start / eight / I|I start work at eight.|Use at with time.
Order: lunch / after / emails / answer / I|After lunch, I answer emails.|A sequence phrase.|I answer emails after lunch.
Order: ten / at / bed / to / go / I|I go to bed at ten.|A bedtime routine.`),reading:'On a typical working day, Ada gets up at six. She has breakfast and leaves home at seven. She takes the bus and starts work at eight. After lunch, she checks forms. She finishes at five. In the evening, she studies English for twenty minutes, then prepares for the next day.',read:Q(`What time does Ada get up?|Six|Seven|Eight|The opening gives six.
How does she travel?|By bus|By plane|She never travels.|She takes the bus.
When does she check forms?|After lunch|Before getting up|At midnight only|The sequence phrase gives the time.
What does for twenty minutes express?|Study duration|Clock start time|A date|For gives length.
Which tense organises the typical day?|Present simple|Past simple throughout|Future will throughout|The account describes a routine.`),write:T(`Describe your morning in three sentences.|I get up at six. I have breakfast. I leave home at seven.|Use real or imaginary details.
Describe your travel routine.|I usually take the bus to work.|Use a useful frequency word.
Connect three tasks with sequence words.|First, I check the schedule. Then I prepare the room. Finally, I answer emails.|Keep a sensible order.
Change I start at eight to a colleague’s routine.|She starts at eight.|Check agreement.
Write and answer a follow-up about duration.|How long do you study? For twenty minutes.|Answer the requested detail.`)},sources:[['British Council: present simple','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-simple']],related:['033','034','039','040','041']};

L['043']={intro:'Build present continuous statements with am/is/are + -ing. Learn the main spelling patterns carefully, including making, running, studying and lying, and connect the form to actions in progress or temporary situations.',goals:['Use the complete be + -ing pattern.','Match am/is/are to the subject.','Apply add-ing, silent-e and -ie spelling patterns.','Apply common doubling and British travelling conventions.','Distinguish current activity from a general routine or state.'],sections:[
S('The pattern needs both parts','I am reading combines a present form of be and an -ing form. Reading alone is not a full ordinary statement. I am read also mixes the patterns incorrectly. Use the continuous for activity in progress now or around now, not automatically every present-time meaning.',[
'I am working; she is working; we are working.',
'Positive contractions are natural: I’m reading, they’re waiting.',
'A current project can be around now even if paused at the exact speaking moment.'
]),
S('Choose be from the subject, not the next verb','Use am with I, is with he/she/it or an ordinary singular noun phrase, and are with you/we/they or a plural noun phrase. The -ing form stays the same across subjects.',[
'Ada is reading. Ada and Ravi are reading.',
'You are waiting can address one listener or a group.',
'Do not add an extra -s to reading with she.'
],tb(['Subject','Pattern'],`I|am working
he/she/it|is working
you/we/they|are working
the visitor|is waiting
the visitors|are waiting`)),
S('Add -ing, drop silent e, and change ie','Usually add -ing: work/working, play/playing. Keep final y in study/studying. Usually drop a final silent e: make/making, write/writing. Verbs ending in -ie change ie to y: lie/lying, tie/tying.',[
'Keep e in common -ee forms: see/seeing, agree/agreeing.',
'Dye/dyeing keeps e and differs from die/dying.',
'Some words have special conventions; check a dictionary instead of treating a simplified rule as universal.'
],tb(['Base','-ing form','Reason'],`work|working|Usually add -ing
study|studying|Keep y
make|making|Drop silent e
see|seeing|Keep -ee
lie|lying|Change ie to y
tie|tying|Change ie to y`)),
S('Doubling depends on spelling and stress','In many one-syllable verbs ending in one vowel letter and one consonant letter, double the final consonant: run/running, sit/sitting. Do not double final w, x or y. In longer words, a stressed final syllable often triggers doubling: begin/beginning, prefer/preferring.',[
'stop/stopping, swim/swimming; fix/fixing, play/playing.',
'visit/visiting: the final syllable is not stressed.',
'British English commonly uses travel/travelling; American traveling is also standard. Follow the chosen variety consistently.'
]),
S('Use it for activities and temporary situations','She is speaking to a visitor describes an activity in progress. I am working from home this week presents a temporary situation. We are meeting the client tomorrow can express an arrangement; context and time phrases help identify that use.',[
'Now and at the moment are useful, but not mandatory in every continuous sentence.',
'A temporary situation need not be short in clock time.',
'Not every -ing phrase is a continuous tense: I enjoy reading has no continuous be + -ing verb phrase.'
]),
S('Do not force state meanings into the continuous','I know the answer normally uses present simple. I have a car expresses possession. Some verbs can have action meanings too: I am having lunch, I am thinking about the problem. Meaning decides, not only the spelling of the verb.',[
'Routine: I study every day. Current activity: I am studying now.',
'Check the complete subject, be form and spelling before practising aloud.',
'Lesson 045 compares simple and continuous in detail; Lesson 044 adds questions and negatives.'
])],examples:R(`I am reading.|Both be and -ing are needed.
I’m reading a message.|A positive contraction.
You are waiting.|You takes are.
She is working.|She takes is.
He is speaking.|He takes is.
It is raining.|It takes is.
We are studying.|We takes are.
They are having a meeting.|They takes are.
Ada is helping a visitor.|A singular name takes is.
The visitors are waiting.|A plural subject takes are.
work — working|Usually add -ing.
play — playing|Keep y.
study — studying|Keep final y.
carry — carrying|Keep final y.
make — making|Drop silent e.
write — writing|Drop silent e.
see — seeing|Keep -ee.
agree — agreeing|Keep -ee.
dye — dyeing|Keep e in this word.
die — dying|Change -ie to -y.
lie — lying|Change -ie to -y.
tie — tying|Change -ie to -y.
run — running|Double final n.
sit — sitting|Double final t.
stop — stopping|Double final p.
fix — fixing|Do not double x.
begin — beginning|Final syllable stress supports doubling.
visit — visiting|No final stressed syllable doubling.
travel — travelling|Common British spelling.
I know the answer.|A normal simple state meaning.`),dialogues:[D('Now',`Ada|What are you doing?
Ravi|I’m reading a message.
Ada|Is Emily working?
Ravi|Yes, she is.`),D('The missing helper',`Learner|She working?
Teacher|A full statement is She is working.
Learner|And They are working?
Teacher|Correct.`),D('Spelling',`Emily|What is the -ing form of make?
Learner|Making. Drop silent e.
Emily|And study?
Learner|Studying. Keep y.`),D('Doubling',`James|Run becomes running.
Learner|Does fix become fixxing?
James|No. Do not double x.
Learner|Fixing.`),D('A temporary situation',`Ada|I usually work in the office.
Ravi|What about this week?
Ada|I’m working from home.
Ravi|So this week’s pattern is temporary.`)],mistakes:R(`I reading.|I am reading.|Include be.
She is read.|She is reading.|Use the -ing form.
They is waiting.|They are waiting.|Match plural they.
makeing|making|Drop silent e.
runing|running|Double n.
studing|studying|Keep y.
lieing|lying|Change ie to y.`),practice:{mc:Q(`Choose the complete pattern.|I am reading.|I reading.|I am read.|Use be + -ing.
Choose with she.|She is working.|She are working.|She am working.|She takes is.
Choose with they.|They are waiting.|They is waiting.|They waiting.|Use are.
Choose make + -ing.|making|makeing|makking|Drop silent e.
Choose study + -ing.|studying|studing|studiesing|Keep y.
Choose lie + -ing.|lying|lieing|liying|Change ie to y.
Choose run + -ing.|running|runing|runnning|Double n once.
Choose fix + -ing.|fixing|fixxing|fixeing|Do not double x.
Choose the common British travel spelling.|travelling|travellling|traveing|British English commonly doubles l.
Choose the normal knowledge state.|I know the answer.|I am knowing the answer as the basic state model.|I knowing answer.|Use simple know for this meaning.`),gap:T(`Complete: I __ reading.|am|Use am with I.
Complete: She __ working.|is|Use is with she.
Complete: We __ waiting.|are|Use are with we.
Write make + -ing.|making|Drop silent e.
Write write + -ing.|writing|Drop silent e.
Write study + -ing.|studying|Keep y.
Write lie + -ing.|lying|Change ie to y.
Write run + -ing.|running|Double n.
Write begin + -ing.|beginning|The stressed ending doubles n.
Write visit + -ing.|visiting|Do not double t here.`),correct:T(`Correct: I reading.|I am reading.|Add be.
Correct: She are working.|She is working.|Use is.
Correct: They is waiting.|They are waiting.|Use are.
Correct: I am makeing tea.|I am making tea.|Drop silent e.
Correct: She is runing.|She is running.|Double n.`),order:T(`Order: message / a / reading / am / I|I am reading a message.|Use both verb parts.
Order: working / is / She|She is working.|Use is with she.
Order: outside / waiting / are / They|They are waiting outside.|Use are with they.
Order: English / studying / are / We|We are studying English.|Keep the -ing form.
Order: tea / making / is / He|He is making tea.|Make becomes making.`),reading:'Ada is reading a message. Ravi is making tea. Two visitors are waiting outside. Emily is studying English this week while she is away from her usual class. She knows the basic alphabet and is practising some new sounds. The activities describe what is happening now or around now.',read:Q(`What is Ada doing?|Reading a message|Reading every day as the only stated fact|Making tea|The first sentence gives her activity.
What is Ravi doing?|Making tea|Waiting outside|Travelling|Making is the -ing form of make.
Why is are used with visitors?|The subject is plural.|Visitor ends in r.|All continuous forms use are.|The subject controls be.
Why can studying this week be continuous?|It describes current temporary activity.|Every week phrase forces simple.|It is past.|Around-now activity is possible.
Which form expresses a knowledge state?|knows|knowing with no helper|is knows|The normal simple state form is used.`),write:T(`Describe three imagined current activities.|I am reading. She is making tea. They are waiting.|Check be agreement.
Give five -ing spelling examples.|working, making, studying, lying, running|Explain the different changes.
Describe a temporary situation.|I am working from home this week.|Make the temporary context clear.
Contrast a routine and an activity now.|I study every day. I am studying now.|Use different complete patterns.
Explain why I know is useful here.|Know expresses a state, so I know the answer is the normal basic form.|Some verbs vary by meaning.`)},sources:continuous,related:['011','034','044','045','046']};

L['044']={intro:'Make present continuous negatives and questions without adding do. Put not after be, move be before the subject in questions and answer with the matching be form.',goals:['Put not after am/is/are.','Use isn’t, aren’t and I’m not with -ing.','Form yes/no questions by moving be.','Give correct short answers with speaker changes.','Ask a basic wh-question about current activity.'],sections:[
S('Negate the helper, keep the activity form','She is working becomes She is not working. Not follows be; working stays in its -ing form. The negative can describe an activity not in progress now or a temporary arrangement not happening in the relevant period.',[
'I am not reading. We are not waiting.',
'Do not add do/does: She doesn’t is working is not the basic pattern.',
'A negative denies the activity in context, not necessarily all ability or employment.'
]),
S('Contract the negative naturally','I’m not is the normal first-person contraction in this course. She isn’t working and She’s not working are equivalent basic patterns. They aren’t waiting and They’re not waiting also work. Keep the apostrophe and the -ing form.',[
'He isn’t driving today. It isn’t raining.',
'We aren’t using that room; we’re not using it.',
'Do not invent she’sn’t or I am’t.'
],tb(['Positive','Negative'],`I am reading.|I’m not reading.
She is driving.|She isn’t driving.
They are waiting.|They aren’t waiting.
We are working.|We’re not working.`)),
S('Questions move be before the subject','Are you listening? comes from You are listening. Is she working? comes from She is working. The activity remains -ing. A singular noun phrase takes is; a plural one takes are.',[
'Am I speaking clearly? Is the visitor waiting?',
'Are the visitors waiting? Are you coming today?',
'Do not change reading to read after is/are in this continuous question.'
]),
S('Short answers repeat be, not the whole activity','Are you studying? — Yes, I am. No, I’m not. Is Ada working? — Yes, she is. No, she isn’t. Use full final be in a positive short answer; do not stop at Yes, she’s.',[
'Are they coming? — Yes, they are.',
'Am I speaking too fast? — No, you aren’t, from another speaker.',
'A group answering Are you all listening? can say Yes, we are.'
]),
S('Wh-questions ask for a missing detail','Put a question phrase before the be question: What are you doing? Where is she working today? Why are they waiting? Who is speaking? can ask for the subject. Match the answer to the requested information.',[
'What are you reading? — A message.',
'Where are you working this week? — At home.',
'A time phrase can make an arrangement clear: Are you working tomorrow?'
]),
S('Distinguish current activity from a routine question','Are you working today? checks the current/relevant day’s situation. Do you work on Sundays? checks a routine. Both are useful, but they are not interchangeable in every context. Ask the question that matches the meaning.',[
'She isn’t driving today does not necessarily mean she cannot drive.',
'Listen to the answer and add a useful follow-up.',
'Before practising, check subject, be, not/question order and the -ing spelling.'
])],examples:R(`I am not reading.|Not follows am.
I’m not using this computer.|A normal first-person negative.
He is not driving.|Keep driving.
He isn’t driving today.|A current-day negative.
He’s not driving today.|An equivalent contraction pattern.
She is not working.|Not follows is.
She isn’t working.|Is not contracts.
She’s not working.|She is contracts instead.
It isn’t raining.|An it negative.
We are not waiting.|We takes are.
We aren’t waiting.|A negative contraction.
We’re not waiting.|Another contraction pattern.
They aren’t using the lift.|Plural they takes aren’t.
Am I speaking clearly?|A question with I.
Are you listening?|Move are before you.
Is he working today?|A current-day question.
Is she driving?|Keep the -ing form.
Are we leaving now?|We takes are.
Are they coming?|They takes are.
Is the visitor waiting?|Singular visitor takes is.
Are the visitors waiting?|Plural visitors takes are.
Yes, I am.|A positive short answer.
No, I’m not.|A first-person negative answer.
Yes, she is.|Use a full positive ending.
No, they aren’t.|A plural negative answer.
What are you doing?|Ask about the activity.
Where is she working today?|Ask about a current place.
Why are they waiting?|Ask for a reason.
Who is speaking?|Ask for the speaker.
Do you work on Sundays?|A different routine question.`),dialogues:[D('Listening',`Teacher|Are you listening?
Learner|Yes, I am.
Teacher|What are you writing?
Learner|The first example.`),D('Not today',`Ada|Is Ravi driving today?
Emily|No, he isn’t. He is taking the train.
Ada|Can he drive?
Emily|Yes. Today’s choice is different.`),D('A room',`Visitor|Are you using this room?
Worker|No, we aren’t.
Visitor|Are the other learners coming?
Worker|Yes, they are.`),D('A short answer',`Learner|Yes, she’s?
Teacher|End the positive short answer with Yes, she is.
Learner|No, she isn’t is possible?
Teacher|Yes.`),D('A temporary place',`James|Where are you working this week?
Ada|At home.
James|Are you joining the meeting?
Ada|Yes, I am.`)],mistakes:R(`She doesn’t is working.|She isn’t working.|Negate be directly.
Are you read?|Are you reading?|Keep -ing.
Is they waiting?|Are they waiting?|Plural they takes are.
Yes, she’s. (ending here)|Yes, she is.|Use the full final positive form.
I not am reading.|I am not reading.|Not follows be.`),practice:{mc:Q(`Choose the continuous negative.|She isn’t working.|She doesn’t is working.|She not working.|Negate be.
Choose the question.|Are you reading?|Do you reading?|Are you read?|Use be before the subject and -ing.
Choose with plural visitors.|Are the visitors waiting?|Is the visitors waiting?|Do the visitors waiting?|Plural visitors takes are.
Choose a positive short answer.|Yes, I am.|Yes, I’m.|Yes, I do for this be question.|Repeat be fully.
Choose a negative short answer.|No, she isn’t.|No, she doesn’t for this be question.|No, she aren’t.|Match she/is.
Choose the wh-question.|What are you doing?|What you are doing as the neutral direct question?|What do you doing?|Question word plus be question.
Which checks a routine?|Do you work on Sundays?|Are you working right now?|Are you reading this message?|The repeated-day simple question checks a habit.
Does not driving today mean unable to drive?|Not necessarily|Always|Only in a question|Context limits the negative.
Choose another form of She isn’t reading.|She’s not reading.|She’sn’t reading.|She doesn’t reading.|Both recognised contractions expand to is not.
Who answers Yes, I am to Are you listening?|The addressed listener|Only a third person|The book|The listener becomes the speaker.`),gap:T(`Complete: I am __ reading.|not|Put not after am.
Complete: She __ not working.|is|She takes is.
Complete: They __ not waiting.|are|They takes are.
Complete: __ you listening?|Are|Move are before you.
Complete: __ she working?|Is|She takes is.
Complete: __ I speaking clearly?|Am|I takes am.
Complete: Are they __? (come)|coming|Use -ing.
Complete: Are you reading? Yes, I __.|am|Match the perspective and helper.
Complete: Is she driving? No, she __.|isn’t|Use the negative be form.|isn't
Complete: What __ you doing?|are|You takes are.`),correct:T(`Correct: She doesn’t is working.|She isn’t working.|Use a be negative.|She isn't working.~She is not working.
Correct: Are you read?|Are you reading?|Use -ing.
Correct: Is they waiting?|Are they waiting?|Use are.
Correct this positive answer ending here: Yes, she’s.|Yes, she is.|Use the full final form.
Correct: I not am reading.|I am not reading.|Place not after am.`),order:T(`Order: not / reading / am / I|I am not reading.|Not follows am.
Order: working / she / Is|Is she working?|Move is before she.
Order: listening / you / Are|Are you listening?|Use are with you.
Order: doing / are / you / What|What are you doing?|A wh-question.
Order: waiting / aren’t / They|They aren’t waiting.|A plural negative.|They aren't waiting.`),reading:'Ada is working from home today. She isn’t using the office computer. James asks, “Are you joining the meeting?” Ada replies, “Yes, I am.” Ravi isn’t driving today; he is taking the train. Emily asks him what he is reading, and he says he is reading a message.',read:Q(`Where is Ada working today?|At home|In the office in this stated scene|At the station|The first sentence gives the temporary place.
Is she using the office computer?|No, she isn’t.|Yes, she is.|No, she doesn’t as the matching answer.|The passage denies that activity.
Which helper is repeated in Ada’s reply?|am|do|have|The question uses be.
Does the passage say Ravi cannot drive?|No|Yes|It says he owns a train.|It only states today’s activity.
What is Ravi reading?|A message|A menu|A timetable only|His answer identifies a message.`),write:T(`Write two continuous negatives.|I’m not reading. They aren’t waiting.|Use not after be.
Write a yes/no question and answer.|Are you studying? Yes, I am.|Match perspective and helper.
Write a wh-question about a current activity.|What are you reading?|Ask for a useful detail.
Give two equivalent negative contractions.|She isn’t working. She’s not working.|Both expand to she is not.
Contrast a routine and current-day question.|Do you work on Sundays? Are you working today?|Explain the context difference.`)},sources:continuous,related:['013','014','037','043','045']};

L['045']={intro:'Choose present simple or present continuous from the meaning you want. Compare routines, temporary activities, state meanings and future schedules or arrangements without relying only on words such as now or always.',goals:['Contrast a routine with current activity.','Describe a temporary exception to a normal pattern.','Recognise ordinary non-continuous state meanings.','Use the correct helpers in questions and negatives.','Explain why context matters more than one time word.'],sections:[
S('Compare the two complete patterns','I work uses the present simple. I am working uses the continuous. With she, compare works and is working. The difference is not just an added ending; the continuous needs be and -ing, while ordinary simple questions and negatives use do/does.',[
'Routine: I walk to work every day.',
'Current activity: I am walking to work now.',
'Check the subject, helper and main verb together.'
],tb(['Meaning','Present simple','Present continuous'],`Usual versus now|I usually drink tea.|I’m drinking coffee now.
Stable versus temporary|She works in a bank.|She’s working from home this week.
Question|Does he drive?|Is he driving?
Negative|He doesn’t drive.|He isn’t driving.`)),
S('Routine and temporary exception can appear together','I usually take the train, but today I’m walking separates the normal pattern from today’s activity. A temporary situation can last days or months; temporary does not mean only a few seconds.',[
'She studies in London, but she is visiting Doha this week.',
'We normally work upstairs; we are using this room this month.',
'Do not assume a state is permanent forever because present simple is used.'
]),
S('State verbs depend on their meaning','Know, believe, need and understand often use simple forms in their ordinary state meanings. Some verbs have both state and activity uses. I think you are right is an opinion; I am thinking about the question is a current mental activity.',[
'I have a car expresses possession; I am having lunch expresses an activity.',
'I see your point expresses understanding; I am seeing the manager tomorrow can describe an arrangement.',
'Avoid “this verb can never be continuous” as a universal rule without checking its meaning.'
]),
S('Time words help but do not choose automatically','Every day commonly supports a routine, and at the moment commonly supports a current activity. However, I need help now is a normal simple state. Always can occur with continuous in comments about repeated behaviour, although that use is beyond the basic routine model.',[
'Read the whole sentence and identify the intended message.',
'A visible now does not force every verb into -ing.',
'A current project can be continuous without now being written.'
]),
S('Questions and negatives preserve the same meaning contrast','Does she work here? asks about an ordinary work situation. Is she working here today? checks a relevant current activity. She doesn’t drive and She isn’t driving can both be grammatical but tell the listener different things.',[
'Simple: Do you study? I don’t study on Sundays.',
'Continuous: Are you studying? I’m not studying now.',
'Do not combine helpers into Does she is working?'
]),
S('Future uses are useful additional patterns','A timetable can use present simple: The train leaves at six. A personal arrangement can use present continuous: We are meeting Ada tomorrow. These are not definitions of every future message; later lessons compare future forms fully.',[
'Use time phrases to prevent an arrangement being mistaken for an activity now.',
'A simple/continuous contrast sometimes reflects the speaker’s viewpoint, not one mechanically correct choice.',
'Practise by explaining the meaning of your answer, not only naming its tense.'
])],examples:R(`I walk to work every day.|A routine.
I’m walking to work now.|Activity in progress.
She works in a bank.|An ordinary work situation.
She is working from home today.|A temporary current situation.
We usually drink tea.|A usual pattern.
We are drinking coffee today.|A current exception.
They live near the station.|A stable residence statement.
They are staying with friends this week.|A temporary stay.
He reads every morning.|A reading habit.
He is reading a message now.|A particular current activity.
I know the answer.|A normal state meaning.
I need help now.|Now does not force continuous.
She believes the explanation.|A belief state.
I think you are right.|An opinion.
I am thinking about the problem.|A mental activity.
I have a car.|Possession.
I am having lunch.|An activity.
I see your point.|Understanding.
I am seeing Ada tomorrow.|An arrangement.
Does she work here?|A simple question.
Is she working here today?|A continuous question.
He doesn’t drive.|A general negative.
He isn’t driving today.|A current-context negative.
Do you study on Mondays?|A routine question.
Are you studying now?|A current question.
The train leaves at six.|A timetable use.
We are meeting the client tomorrow.|An arrangement use.
The shop opens at nine.|A schedule.
The staff are preparing the shop now.|Current activity.
I usually walk, but today I’m taking the bus.|Routine plus temporary exception.`),dialogues:[D('A change today',`Ada|Do you usually take the train?
Ravi|Yes, but I’m walking today.
Ada|Why?
Ravi|I have more time.`),D('A state with now',`Learner|I am needing help now?
Teacher|The normal state pattern is I need help now.
Learner|So now is not enough to choose -ing?
Teacher|Correct.`),D('Two meanings of think',`Emily|I think your answer is right.
James|I’m still thinking about the last question.
Emily|One is an opinion and one is an activity.
James|Yes.`),D('Two questions',`Visitor|Does Ada work here?
Worker|Yes, she does.
Visitor|Is she working today?
Worker|No, she isn’t.`),D('Future meanings',`Ada|The train leaves at six.
Ravi|Are we meeting Emily at the station?
Ada|Yes, we are.
Ravi|I will check the arrangement.`)],mistakes:R(`I am knowing the answer. (basic state)|I know the answer.|Use the normal simple state form.
She work here every day.|She works here every day.|Simple third-person agreement.
She is work here now.|She is working here now.|Continuous needs -ing.
Does she is working?|Is she working?|Do not mix helper systems.
Now always requires continuous.|A state such as I need help now can use simple.|Meaning decides.`),practice:{mc:Q(`Choose a routine.|I walk every day.|I am walk every day.|I walking every day.|Use present simple for this routine.
Choose activity now.|I am reading now.|I readed now.|I am read now.|Use be + -ing.
Choose the basic knowledge state.|I know the answer.|I am knowing the answer as the basic model.|I knowing answer.|Know is a state here.
Choose the temporary exception.|I usually walk, but today I’m taking the bus.|I usually am walk today.|I taking bus with no helper.|Separate routine and current activity.
Choose a continuous question.|Is she working?|Does she is working?|Is she work?|Use be before the subject.
Choose a simple question.|Does she work?|Does she works?|Is she work?|Use does plus base work.
Which has an activity meaning of have?|I am having lunch.|I am having a car as ordinary possession.|I has a car.|Lunch is an activity.
Which can describe a timetable?|The train leaves at six.|The train leave at six with singular train.|The train is leave.|Present simple can express schedules.
Does now always require continuous?|No|Yes|Only if it ends the sentence.|States can use simple.
Can the speaker’s viewpoint affect the choice?|Yes|No|Only colour affects it.|Meaning and context matter.`),gap:T(`Routine: I __ every day. (walk/am walking, neutral routine)|walk|Use simple.
Now: I __ a message. (am reading/read as the current activity)|am reading|Use continuous.
Complete the state: She __ the answer. (knows/is knowing)|knows|Use the simple state form.
Complete: She is __ today. (work/working)|working|Continuous needs -ing.
Complete: Does she __ here? (work/works)|work|Base form after does.
Complete: __ she working?|Is|Use be.
Complete: I __ a car. (have/am having, ordinary possession)|have|Simple possession.
Complete: I am __ lunch.|having|Activity meaning.
Schedule: The train __ at six. (leave/leaves)|leaves|Singular schedule subject.
Arrangement: We __ meeting Ada tomorrow.|are|Use be in the continuous.`),correct:T(`Correct the basic state: I am knowing the answer.|I know the answer.|Use simple know.
Correct: She work every day.|She works every day.|Use third-person agreement.
Correct: She is work now.|She is working now.|Add -ing.
Correct: Does she is working?|Is she working?|Use the continuous question.
Correct: He doesn’t drives.|He doesn’t drive.|Use the base form after doesn’t.|He doesn't drive.`),order:T(`Order: day / every / walk / I|I walk every day.|A routine.
Order: now / reading / am / I|I am reading now.|Current activity.
Order: answer / the / knows / She|She knows the answer.|A state.
Order: working / she / Is|Is she working?|A continuous question.
Order: six / at / leaves / train / The|The train leaves at six.|A schedule.`),reading:'Ada usually works in a clinic. This week she is attending a course. She normally takes the train, but today she is walking. She knows the route and needs no map. The class starts at nine. After class, she is meeting Ravi at a café; they arranged it yesterday.',read:Q(`What is Ada’s usual work setting?|A clinic|The café as her usual job|The train|The opening gives her normal work.
What is temporary this week?|Attending a course|Knowing the route forever as an activity|Owning a train|The week-long activity is current.
Why is knows simple?|It expresses a knowledge state.|Every route is plural.|It is a spelling error.|The meaning is a state.
What does starts at nine describe?|A schedule|Only a spontaneous decision|A negative|Present simple can express a timetable.
What does is meeting express here?|An arrangement|An unchanging fact|A completed past event|They arranged it yesterday.`),write:T(`Contrast a routine and a current exception.|I usually take the train, but today I’m walking.|Keep both complete patterns.
Write two simple state sentences.|I know the address. I need help.|Choose clear state meanings.
Use think with an opinion and an activity.|I think it is useful. I’m thinking about the question.|Explain the meanings.
Write simple and continuous questions.|Does she work here? Is she working today?|Explain what each checks.
Write a timetable and an arrangement.|The train leaves at six. We are meeting Ada tomorrow.|Use clear future context.`)},sources:continuous,related:['034','035','036','043','044','058']};

L['046']={intro:'Describe activities you enjoy and activities you would rather avoid. Build verb + -ing patterns without confusing them with the present continuous, and recognise the useful alternative to + verb after like, love and hate.',goals:['Describe preferences with verb + -ing.','Keep enjoy followed by an -ing form.','Build negative statements and questions.','Distinguish a general preference from would like to.','Spell common activity words accurately.'],sections:[
S('An activity can follow a preference verb','In I enjoy cooking, cooking names the activity that gives me pleasure. The sentence describes a general preference; it does not say that I am cooking now. Learn the two verbs together as a pattern.', ['Subject + enjoy/like/love/hate + activity in -ing.','I love reading. She enjoys gardening.','A noun can also follow these verbs: I like music.']),
S('Enjoy has a firm pattern','When another verb follows enjoy directly in this pattern, use its -ing form. Enjoy to cook is not standard. The first verb carries the tense and agreement; the activity keeps its -ing form.', ['He enjoys cycling: add -s to enjoys, not to cycling.','They enjoy travelling: no -s with they.','I enjoyed cooking yesterday is a past-tense version of the same pattern.'],tb(['Subject','Preference','Activity'],`I|enjoy|walking
She|enjoys|walking
We|do not enjoy|waiting`)),
S('Like, love and hate allow another pattern','Like, love and hate can take -ing or to + verb. I like swimming and I like to swim are both grammatical. The -ing pattern often highlights enjoyment of the activity; the infinitive can highlight a habit or choice. Meanings overlap.', ['Practise -ing here, but do not mark every infinitive after like as wrong.','I like to check my work before sending it describes a preferred habit.','Enjoy does not share this direct infinitive alternative.']),
S('Make questions and negatives with do','These preference verbs are ordinary present-simple verbs. Use do/does for questions and do not/does not for negatives. After does or does not, return the preference verb to its base form. The second verb stays in -ing.', ['Does she enjoy dancing? Not Does she enjoys dancing?','He does not like waiting.','What do you enjoy doing at weekends?']),
S('Compare like doing and would like to do','I like visiting York describes a preference. I would like to visit York expresses a wish. Learn would like to + base verb and would love to + base verb as separate patterns. Would you like to sit down? is an invitation.', ['I would like to learn Spanish: a wish, not a claim about a regular activity.','Would like + noun also works: I would like a coffee.','I do not mind waiting means that waiting is acceptable to me; mind takes -ing here.']),
S('Spell and extend the activity','Use the same -ing spelling principles as in Lesson 043. Add an object or place to make the preference useful: reading history books, cooking for friends or walking by the river. Keep your explanation simple and personal.', ['Make → making; swim → swimming; study → studying.','Do not add am just because you see -ing: I enjoy reading is complete.','A reason with because helps a partner understand your choice: I enjoy walking because it helps me relax.'])],examples:R(`I like reading.|Reading names an activity.
She likes drawing.|Likes agrees with she.
We love travelling.|Travelling uses British spelling.
He loves cooking.|The second verb stays in -ing.
They hate waiting.|Hate introduces a disliked activity.
I enjoy swimming.|Enjoy takes -ing.
Ada enjoys gardening.|A named singular subject takes enjoys.
We enjoy meeting people.|Meeting has an object.
I like making bread.|Make loses its final silent e.
He enjoys running.|Run doubles n.
She loves studying languages.|Study keeps y.
I hate getting up early.|The whole phrase names the activity.
We like eating outside.|A place word extends the activity.
I do not like driving at night.|Do not makes a present-simple negative.
She does not enjoy shopping.|Enjoy is base after does not.
They do not mind walking.|Do not mind means the activity is acceptable.
Does he like singing?|Does comes before the subject.
Do you enjoy painting?|Do supports the question.
What does she enjoy doing?|Does supports a question with what.
Yes, I do.|The short answer uses do.
No, he does not.|The short answer agrees with he.
I like to check my spelling.|Like can take an infinitive.
She loves to dance.|Love can also take an infinitive.
I hate to interrupt.|Hate can take an infinitive in context.
I would like to travel.|Would like expresses a wish.
We would love to join you.|Would love to is a separate useful pattern.
Would you like a seat?|Would like can take a noun.
Would you like to sit here?|An invitation uses to + base verb.
I enjoy reading because it is relaxing.|A reason extends the preference.
He likes walking, but he hates running.|Two preferences contrast.`),dialogues:[D('After work',`Ada|What do you enjoy doing after work?
Ben|I enjoy cooking.
Ada|What do you cook?
Ben|Usually soup or rice.`),D('A shared interest',`Mia|Do you like reading?
Leo|Yes, I do.
Mia|I love reading travel books.
Leo|So do I. They give me ideas.`),D('A different preference',`Sam|Does Jo enjoy running?
Kim|No, she does not.
Sam|What does she like doing?
Kim|She likes swimming.`),D('An invitation',`Host|Would you like to join our walk?
Guest|Yes, I would love to.
Host|Do you mind starting early?
Guest|No, I do not mind getting up early.`),D('Activity or wish',`Tutor|Do you like travelling?
Learner|Yes. I enjoy visiting new places.
Tutor|Where would you like to go next?
Learner|I would like to visit Bath.`)],mistakes:R(`I enjoy to cook.|I enjoy cooking.|Use -ing directly after enjoy.
She enjoy reading.|She enjoys reading.|The preference verb agrees with she.
Does he enjoys dancing?|Does he enjoy dancing?|Does is followed by the base verb.
I am like swimming.|I like swimming.|A present-simple preference does not need am.
I would like learning French.|I would like to learn French.|This wish uses would like to + base verb.`),practice:{mc:Q(`Choose the standard enjoy pattern.|I enjoy cooking.|I enjoy to cook.|I enjoy cook.|Enjoy takes -ing.
Choose a sentence about a wish.|I would like to visit Rome.|I enjoy visiting Rome.|I like visiting Rome.|Would like expresses a wish.
Complete: She ___ reading.|enjoys|enjoy|enjoying|She takes enjoys.
Complete: Does he ___ dancing?|like|likes|liking|Does requires the base form.
Which sentence is also grammatical?|I like to swim.|I enjoy to swim.|I mind to wait.|Like allows an infinitive.
Complete: I do not mind ___.|waiting|to wait|wait|Mind takes -ing in this pattern.
Complete: We love ___.|travelling|travels|travelled|Love + -ing names the activity.
Complete: He does not ___ shopping.|enjoy|enjoys|enjoying|Use the base after does not.
Which expresses an invitation?|Would you like to sit down?|Do you like sitting down?|You like sitting down.|Would you like to can invite someone.
Choose the correct spelling.|making|makeing|makking|Drop the silent e in make.`),gap:T(`I enjoy ___ (read).|reading|Add -ing to read.
She ___ (like) cooking.|likes|She takes likes.
We love ___ (swim).|swimming|Double the final m.
He enjoys ___ (make) things.|making|Drop the silent e.
They hate ___ (wait).|waiting|Use -ing after hate in this exercise.
Does Jo ___ (enjoy) singing?|enjoy|Does carries the agreement.
I do not mind ___ (walk).|walking|Mind takes -ing.
I would like ___ learn Italian. Write the missing word.|to|Would like to + base verb.
She loves ___ (study).|studying|Keep y before -ing.
What do you enjoy ___ (do)?|doing|Doing names the activity asked about.`),correct:T(`Correct: I enjoy to dance.|I enjoy dancing.|Enjoy takes -ing.
Correct: She like drawing.|She likes drawing.|Add -s to like.
Correct: Does he enjoys reading?|Does he enjoy reading?|Use the base after does.
Correct: I would like visit York.|I would like to visit York.|Add to before visit.
Correct: We do not mind to wait.|We do not mind waiting.|Mind takes -ing.`),order:T(`Order: enjoy / I / cooking|I enjoy cooking.|Subject + preference + activity.
Order: likes / reading / She|She likes reading.|Likes agrees with she.
Order: enjoy / you / Do / swimming|Do you enjoy swimming?|Do begins the question.
Order: like / to / would / I / travel|I would like to travel.|Would like to introduces a wish.
Order: not / waiting / mind / do / We|We do not mind waiting.|Mind is followed by -ing.`),reading:'Nora enjoys painting landscapes at weekends. Her brother, Eli, likes taking photographs but does not enjoy painting. They both love walking by the river. Nora does not mind getting up early for a walk. Eli hates getting up before seven. Next summer, Nora would like to visit a coastal town and paint the harbour. This is a wish; she has not booked a trip.',read:Q(`What does Nora enjoy?|Painting landscapes|Repairing boats|Driving buses|The opening sentence states her preference.
What does Eli like doing?|Taking photographs|Painting landscapes|Getting up before seven|Eli likes photography.
What do both people love?|Walking by the river|Booking flights|Cooking lunch|Their shared activity is walking.
Who dislikes getting up before seven?|Eli|Nora|Neither person|Eli hates the early start.
Has Nora booked the summer trip?|No|Yes|The text says she has paid.|The text says it is a wish without a booking.`),write:T(`Write two activities you enjoy.|I enjoy reading and cooking.|Use enjoy with two -ing activities; replace the activities freely.
Describe an activity a friend likes.|My friend likes cycling.|Check third-person -s and the -ing activity.
Write a question about someone's preferences.|Do you enjoy gardening?|Use do + subject + base preference verb.
Write one thing you do not mind doing.|I do not mind waiting.|Use do not mind + -ing.
Write a wish with would like.|I would like to learn French.|Use would like to + base verb; choose a personal wish.`)},sources:[['British Council: verbs followed by -ing or infinitive','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/verbs-followed-ing-or-infinitive']],related:['034','035','043','045']};

L['047']={intro:'Explain what you and other people are able to do. Use can and cannot accurately with every subject, ask about skills and distinguish an ability from an activity happening now.',goals:['Build can + base verb statements.','Use cannot and cannot contractions accurately.','Ask ability questions without do.','Give short answers with can.','Describe a skill with useful detail.'],sections:[
S('Can describes ability','An ability is something a person is able to do. I can swim tells us about a skill. It does not tell us that I am swimming at this moment. Add detail about a language, instrument, task or practical skill.', ['I can speak English. She can repair bicycles.','Can can also describe what is possible in a situation: We can finish today.','Permission and requests are other meanings; the next lesson practises them.']),
S('Use one form for every subject','Can is a modal verb. Its form does not change with I, you, he, she, it, we or they. Put a base verb after it, without to and without a third-person -s.', ['He can drive, not He cans drive.','She can speak, not She can speaks.','We can be ready: be is the base form after can.'],tb(['Subject','Modal','Base verb'],`I|can|swim
She|can|swim
They|can|swim`)),
S('Make the negative with cannot','Cannot is normally written as one word. Can’t is its usual contraction. Both can describe a lack of ability or a situational difficulty. I cannot lift this box may mean this particular box is too heavy, rather than that I can lift nothing.', ['I cannot drive. I can’t drive.','Do not add do: I do not can drive is incorrect.','Cannot is useful in clear or formal writing; can’t is common in conversation.']),
S('Move can to the front for questions','Put can before the subject and keep the following verb in its base form. For information questions, place a question phrase before can.', ['Can you swim? Can she use this software?','What languages can you speak?','Do not use Do you can...? or Does she can...?']),
S('Answer briefly or give useful detail','Use Yes, I can or No, I can’t. Match the subject to the person answering: Can you drive? — Yes, I can. A full answer can explain a limit, degree of skill or alternative.', ['Can Omar cook? — Yes, he can.','I can read French, but I cannot speak it confidently.','I cannot lift the box alone, but I can help you carry it.']),
S('Choose ability, routine or current action','Can + base verb answers Is it possible? or Is the person able? Present simple describes a routine. Present continuous describes an activity in progress. A good description may use all three with different meanings.', ['I can swim: ability. I swim on Sundays: routine. I am swimming now: current action.','I cannot swim does not mean the same as I am not swimming.','Can often has a weak vowel in fluent statements, but a stronger form in short answers; listen to natural examples before practising.'])],examples:R(`I can swim.|A personal skill.
You can read this map.|A useful ability.
He can cook rice.|Can stays unchanged with he.
She can drive a van.|Drive stays in its base form.
It can print in colour.|A machine has a capability.
We can speak English.|A shared ability.
They can repair doors.|A practical skill.
Ada can play the piano.|A musical ability.
I can use a spreadsheet.|A workplace skill.
Ben can ride a bicycle.|An everyday skill.
I cannot swim.|Cannot is one word.
She cannot lift the suitcase.|A situational limit.
We cannot finish alone.|The task needs help.
They cannot read the sign.|A current difficulty.
He can’t drive.|A negative contraction.
I can’t hear you clearly.|A situational difficulty.
Can you cook?|Can begins the question.
Can she speak German?|Speak is the base verb.
Can they help us?|No do is needed.
What can you make?|What asks about the ability.
Which languages can he read?|The question phrase precedes can.
Yes, I can.|A positive short answer.
No, she cannot.|A full negative short answer.
Yes, they can.|Match the plural subject.
No, we can’t.|A contracted negative answer.
I can swim, but I do not swim often.|Ability and frequency differ.
She can sing, and she is singing now.|Ability and current action differ.
I can write simple emails.|A skill can have a limit.
We can be ready by six.|Be is the base form.
I cannot carry it alone, but I can help.|A limitation can include an alternative.`),dialogues:[D('A skill',`Ada|Can you drive?
Ben|Yes, I can.
Ada|Can you drive a large van?
Ben|No, I cannot. I only drive a small car.`),D('Languages',`Host|Which languages can you speak?
Guest|I can speak English and Tamil.
Host|Can you read French?
Guest|Yes, but only simple texts.`),D('A heavy box',`Jo|Can you lift this box?
Lee|I cannot lift it alone.
Jo|I can help you.
Lee|Thank you. Let us carry it together.`),D('A workplace task',`Manager|Can Mina use the booking system?
Colleague|Yes, she can.
Manager|Can she train the new staff?
Colleague|Yes. She can explain it clearly.`),D('Skill and action',`Tutor|Can you play the guitar?
Learner|Yes, I can.
Tutor|Are you playing it now?
Learner|No. I am studying at the moment.`)],mistakes:R(`She cans swim.|She can swim.|Can never takes third-person -s.
I can to drive.|I can drive.|Use a base verb without to.
He can speaks French.|He can speak French.|The main verb stays in its base form.
Do you can cook?|Can you cook?|Move can before the subject.
I do not can swim.|I cannot swim.|Use cannot or can't.`),practice:{mc:Q(`Complete: She ___ swim.|can|cans|can to|Can has one form.
Complete: He can ___ a bicycle.|ride|rides|riding|Use a base verb.
Choose an ability question.|Can you cook?|Do you can cook?|Can you to cook?|Move can before you.
Choose a standard negative.|I cannot drive.|I do not can drive.|I can not to drive.|Cannot is the usual full negative.
Answer: Can you read this?|Yes, I can.|Yes, I do.|Yes, I am.|Match the modal.
What does I can swim describe here?|An ability|An action definitely happening now|A past journey|It states a skill.
Complete: They can ___ ready.|be|are|being|Be is the base form.
Answer about Jo: Can she sing?|No, she cannot.|No, she does not.|No, she is not.|Use cannot in the answer.
Choose the question about languages.|Which languages can you speak?|Which languages you can speaks?|Which languages do you can speak?|Question phrase + can + subject + base verb.
Which sentence describes a routine?|I swim every Sunday.|I can swim.|I am swimming now.|Every Sunday signals the repeated activity.`),gap:T(`She ___ drive. Use the ability modal.|can|Can expresses ability.
He can ___ (speak) English.|speak|Use the base verb.
Write the one-word full negative of can.|cannot|Cannot is normally one word.
___ you swim? Use the ability modal.|Can|Can comes before the subject.
Can they cook? Yes, they ___.|can|Repeat the modal in a short answer.
Can she drive? No, she ___. Use the full negative.|cannot|Use the full form requested.
We can ___ (be) ready.|be|Be follows a modal in its base form.
What can you ___ (make)?|make|No -s or to follows can here.
I cannot ___ (lift) this bag.|lift|The negative also takes a base verb.
Write the contraction of cannot.|can't|The apostrophe replaces omitted letters.`),correct:T(`Correct: He cans dance.|He can dance.|Can does not take -s.
Correct: I can to swim.|I can swim.|Remove to.
Correct: She can reads English.|She can read English.|Use the base form read.
Correct: Do you can drive?|Can you drive?|Use can before you without do.
Correct: They do not can help.|They cannot help.|Use cannot.|They can't help.`),order:T(`Order: can / I / cook|I can cook.|Subject + can + base verb.
Order: swim / Can / she|Can she swim?|Can starts the question.
Order: cannot / We / drive|We cannot drive.|Cannot precedes the base verb.
Order: you / can / What / make|What can you make?|Question word comes first.
Order: can / Yes / he|Yes, he can.|Use can in the short answer.`),reading:'Malik works in a community centre. He can speak English and Arabic, and he can repair simple computer problems. He cannot drive, so he travels to work by bus. His colleague, Rose, can drive the centre’s van, but she cannot repair computers. Today Malik is helping a visitor with a laptop. Rose is carrying chairs to the meeting room. They can both prepare the room before the afternoon class.',read:Q(`Which two languages can Malik speak?|English and Arabic|French and Arabic|English and German|The text names English and Arabic.
Why does Malik take the bus?|He cannot drive.|He cannot walk.|He works on a bus.|His inability to drive explains the bus journey.
Who can drive the van?|Rose|Malik|Both people|Rose has that ability.
What is Malik doing today?|Helping with a laptop|Driving the van|Painting chairs|The current action is helping a visitor.
Can they prepare the room together?|Yes|No|Only after the class|They can both prepare it before class.`),write:T(`Write two things you can do.|I can cook and swim.|Use can once with two base verbs, or repeat can.
Write a skill you cannot do yet.|I cannot drive yet.|Use cannot + base verb; choose your own skill.
Ask about a useful work skill.|Can you use a spreadsheet?|Use can before the subject.
Answer a can question and add detail.|Yes, I can. I can read simple French texts.|Use a modal short answer and a specific ability.
Contrast an ability with a routine.|I can swim, but I only swim once a month.|Keep the ability and repeated action distinct.`)},sources:[['British Council: can and could','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/can-could']],related:['034','043','048']};

L['048']={intro:'Ask for help, ask for permission and respond courteously. Practise can and could as everyday request forms, with clear wording, a suitable tone and a useful response when you cannot help.',goals:['Ask someone to do something with can or could.','Ask permission with can I or could I.','Use please in natural positions.','Accept or decline a request clearly.','Recognise could in a present request.'],sections:[
S('Ask someone to do an action','Can you + base verb asks another person to act. Could you + base verb often sounds more tentative. Could in this request does not automatically place the action in the past. Context and tone influence politeness.', ['Can you open the window, please?','Could you repeat the address, please?','A request usually needs a response or action, not an explanation of physical ability.']),
S('Keep the modal pattern','Use can/could + subject + base verb. Do not add to, do or a third-person -s. A useful request states the action and the object clearly. Add a time when the listener needs it.', ['Could you send the form today?','Can Sam help us after lunch?','Avoid Could you to send...? and Do you could send...?'],tb(['Purpose','Pattern','Example'],`Ask for an action|Could you + base verb?|Could you move this chair?
Ask permission|Could I + base verb?|Could I sit here?
Ask for an item|Could I have + noun?|Could I have a receipt?`)),
S('Ask permission for your own action','Can I or could I asks whether you may do something. The subject identifies the person acting: Could I open the window? asks permission for me to open it. Could you open the window? asks you to act.', ['Can I use this seat?','Could I borrow your pen for a moment?','May I is another permission form; can I is normal everyday English.']),
S('Ask for an item or information','Could I have + noun is useful in shops and cafés. Could you tell me + information is useful when you need help. Keep beginner requests short; a direct, clear question can be courteous.', ['Could I have a glass of water, please?','Can you tell me the price, please?','Could you say that again? is useful when you miss a word.']),
S('Please and tone support the request','Please can appear near the start, before the main verb, or at the end. Could you please wait? and Could you wait, please? both work. A calm tone, greeting and brief reason help when a request interrupts someone.', ['Excuse me. Could you help me with this machine?','Could you speak more slowly, please? I am learning English.','Please is useful, but it does not make an unreasonable demand acceptable.']),
S('Respond to the real request','Accept with Of course, Certainly, Sure or Yes, you can when granting permission. If you cannot help, say so clearly and offer an alternative if appropriate. You do not have to echo could in your reply.', ['Could I sit here? — Yes, of course.','Could you help now? — Sorry, I cannot right now. I can help in ten minutes.','I could by itself often sounds conditional; it is not the usual simple permission-granting answer here.'])],examples:R(`Can you help me, please?|A direct everyday request.
Could you open the door, please?|A more tentative request.
Could you close the window?|The listener performs the action.
Can you pass the salt?|A table request.
Could you speak more slowly?|A request for clearer speech.
Could you repeat that, please?|Ask to hear information again.
Can you write it down?|Ask for a written record.
Could you send the form today?|The time makes the request specific.
Can you wait a moment?|Ask for a short delay.
Could you please move your bag?|Please appears before the base verb.
Can I sit here?|Ask permission for your own action.
Could I use your phone?|Could makes a tentative permission request.
Can I borrow this pen?|The speaker wants temporary use.
Could I open the window?|The speaker offers to perform the action with permission.
Could we leave a little earlier?|Permission can involve a group.
Could I have a receipt, please?|Request an item.
Can I have some water, please?|Some is natural in a request.
Could you tell me the price?|Request information.
Excuse me. Could you help me?|A polite opening acknowledges interruption.
Could you spell your surname?|Request spelling.
Of course. Here you are.|Accept and hand something over.
Certainly. I will send it today.|Accept the requested task.
Yes, you can use this seat.|Grant permission with can.
Sorry, this seat is taken.|Decline with a reason.
I cannot help now, but I can help later.|Offer an alternative.
No problem. I can wait.|Accept a delay.
Thank you for your help.|Acknowledge the response.
You are welcome.|Respond to thanks.
Could you call after two, please?|Specify a suitable time.
Could I have the menu, please?|An everyday restaurant request.`),dialogues:[D('A seat',`Guest|Excuse me. Could I sit here?
Passenger|Yes, of course.
Guest|Thank you. Could you move your bag, please?
Passenger|Certainly. Here you are.`),D('A form',`Learner|Could you help me with this form?
Clerk|Of course. Which part?
Learner|Could you explain this question?
Clerk|It asks for your current address.`),D('A short delay',`Jo|Could you check this now?
Sam|Sorry, I cannot right now.
Jo|Could you check it after lunch?
Sam|Yes. I can do that.`),D('In a café',`Customer|Could I have a menu, please?
Server|Certainly.
Customer|Could I also have some water?
Server|Of course. I will bring a glass.`),D('Clarification',`Caller|Could you repeat the time, please?
Receptionist|The appointment is at three thirty.
Caller|Could you write that in an email?
Receptionist|Yes, of course.`)],mistakes:R(`Could you to help me?|Could you help me?|Use a base verb without to.
Do you could repeat that?|Could you repeat that?|Could moves before the subject.
Can she sends the form?|Can she send the form?|The verb after can has no -s.
Could I use your pen? — Yes, I could.|Could I use your pen? — Yes, of course.|Grant permission clearly rather than suggesting conditional ability.
Could you helps me, please?|Could you help me, please?|Keep help in its base form.`),practice:{mc:Q(`Ask the listener to open a door.|Could you open the door?|Could I open the door?|You opened the door.|Could you asks the listener to act.
Ask permission for yourself to sit.|Could I sit here?|Could you sit here?|Did you sit here?|Could I asks permission for your action.
Complete: Could you ___ that?|repeat|to repeat|repeats|Use the base verb.
Choose a natural reply granting permission.|Yes, of course.|Yes, I could.|Yes, I did.|Of course clearly grants permission.
Ask for an item.|Could I have a receipt, please?|Could I to have a receipt?|Could I has a receipt?|Could I have + noun requests an item.
What does could mean in Could you help me now?|A tentative request|Necessarily a past action|A finished event|Now makes the current request clear.
Choose a grammatical please position.|Could you please wait?|Could please you waiting?|Could you please to wait?|Please can precede the base verb.
Choose a helpful refusal.|Sorry, I cannot now. I can help at two.|No, I am not a receipt.|Yes, I could yesterday.|A clear refusal can offer an alternative.
Complete: Can she ___ the form today?|send|sends|to send|Can takes a base verb.
You missed a spoken word. Ask again.|Could you say that again, please?|Could I said that?|Could you saying again?|This requests repetition.`),gap:T(`Could you ___ (help) me?|help|Use a base verb.
Can I ___ (sit) here?|sit|The speaker asks permission.
Could I ___ a menu, please? Use have.|have|Could I have requests an item.
Could you speak more ___? Use the comparative of slowly.|slowly|More slowly is the complete comparative phrase.
Could you ___ (repeat) the number?|repeat|Use a base verb.
Can she ___ (send) it today?|send|No -s after can.
Could you wait, ___? Add the courtesy word.|please|Please is natural at the end.
Could ___ borrow your pen? Use the pronoun for the speaker.|I|I identifies the person borrowing.
Can you help? Yes, I ___.|can|Can is used in the short answer.
Write the full negative: I ___ help right now.|cannot|Cannot is a clear negative.`),correct:T(`Correct: Could you to wait?|Could you wait?|Remove to.
Correct: Do you can help me?|Can you help me?|Do is unnecessary with can.
Correct: Can I has a receipt?|Can I have a receipt?|Use the base verb have.
Correct: Could she sends the email?|Could she send the email?|Use send after could.
Correct: Could you speaking slowly?|Could you speak slowly?|Use a base verb.`),order:T(`Order: you / Could / help / me|Could you help me?|Could precedes the subject.
Order: sit / I / Can / here|Can I sit here?|Can I asks permission.
Order: please / a / Could / receipt / have / I|Could I have a receipt, please?|Could I have requests an item.
Order: that / you / repeat / Could|Could you repeat that?|Use the base verb repeat.
Order: course / of / Yes|Yes, of course.|A clear accepting response.`),reading:'Lena is at a visitor centre. She says, “Excuse me. Could I have a street map, please?” The assistant gives her one. Lena then asks, “Could you show me the railway station?” The assistant points to it on the map. Lena wants to use a nearby chair, so she asks, “Can I sit here?” The assistant says the chair is reserved but offers a seat by the window. Lena thanks him and sits there.',read:Q(`What does Lena request first?|A street map|A train ticket|A meal|She asks for a street map.
Who is asked to show the station?|The assistant|Lena|A train driver|Could you asks the assistant to act.
Which question asks permission?|Can I sit here?|Could you show me the station?|Where is the map?|Can I asks about Lena's own action.
Why can Lena not use the first chair?|It is reserved.|It is broken.|It is outside.|The assistant explains that it is reserved.
Where does she sit?|By the window|On the train|At the station|The assistant offers that alternative seat.`),write:T(`Ask someone to repeat information.|Could you repeat that, please?|Use could you + base verb and courteous wording.
Ask permission to use a chair.|Can I use this chair, please?|Use can I or could I for your own action.
Request an item in a café.|Could I have a glass of water, please?|Use could I have + an appropriate noun phrase.
Decline a request and offer another time.|Sorry, I cannot help now. I can help after lunch.|State the limit and a realistic alternative.
Write a request with a brief reason.|Could you speak slowly, please? I am learning English.|Give a clear action and a useful reason.`)},sources:[['British Council: requests, offers and invitations','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/requests-offers-invitations']],related:['046','047','051']};
const quantifiers=[['British Council: quantifiers','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/quantifiers']];
L['049']={intro:'Ask how many items there are, how much of a substance someone needs and how much something costs. Choose the question from the meaning and grammar of the noun, then build the rest of the question correctly.',goals:['Use how many with plural countable nouns.','Use how much with uncountable nouns.','Ask about prices with how much.','Use countable units for uncountable substances.','Build quantity questions with be or do.'],sections:[
S('Count items with how many','A countable noun can name one separate item and has a plural form: one chair, two chairs. Use how many + plural noun to ask for its number. Do not use a singular noun after how many in this pattern.', ['How many chairs do we need?','How many people are coming? People is the normal plural of person.','An answer can be a number or an estimate: Six. About ten.']),
S('Ask about an amount with how much','Uncountable nouns name things treated as an amount rather than separate units in this use. Use how much + uncountable noun. Common examples include water, rice, money, time, information and luggage.', ['How much water do you drink?','How much time do we have?','Do not add plural -s to information or luggage in these ordinary uses.'],tb(['Quantity type','Question','Possible answer'],`Separate items|How many bags?|Three bags.
Substance|How much rice?|Half a kilogram.
Available time|How much time?|Twenty minutes.`)),
S('Count a container or unit instead','A countable unit lets you count an uncountable substance. Compare How much water? with How many bottles of water? The question follows the head noun: bottles is countable even though water is not.', ['How many cups of tea do we need?','How much tea is in the pot?','A kilogram of rice, two pieces of advice and three bags of luggage name units.']),
S('Build the whole question','How much or how many does not replace the rest of the question grammar. Use do/does + subject + base verb for ordinary present-simple questions. With be, move is/are before the subject. There is/are questions keep there.', ['How many tickets does she need?','How much milk is in the fridge?','How many chairs are there? No do is needed with are.']),
S('Ask about price with how much','How much is this jacket? asks its price, although jacket is countable. How much does this jacket cost? asks the same thing with cost. How many jackets? asks the number of jackets, not their price.', ['How much are these shoes? — They are forty pounds.','How much does a ticket cost? — Twelve pounds.','Choose is/are from the subject in the be price question.']),
S('Meaning can change the noun use','A noun can have countable and uncountable meanings. Coffee is usually a drink substance, but two coffees can mean two servings in a café. Work from the intended meaning rather than memorising one permanent label for every word.', ['How much coffee is left? asks about an amount.','How many coffees would you like? asks about servings.','Money is uncountable, but pounds and coins are countable: How many coins? How much money?'])],examples:R(`How many chairs do we need?|Chairs are countable items.
How many books have you got?|Books has a plural form.
How many people are here?|People is a plural count noun.
How many tickets does she need?|Does is followed by need.
How many bags are there?|Are agrees with plural bags.
How many rooms does the flat have?|Rooms are separate units.
How many students are coming?|The question asks for a number.
How many days do you work?|Days are countable time units.
How much water is left?|Water is an uncountable substance.
How much rice do you need?|Ask for an amount of rice.
How much milk is in the fridge?|Milk is uncountable here.
How much money do we have?|Money is normally uncountable.
How much time is available?|Time is an amount here.
How much information do you need?|Information is uncountable.
How much luggage have you got?|Luggage is normally uncountable.
How many bottles of water do we need?|Bottles are the countable units.
How many cups of tea are there?|Cups determines the quantity question.
How much tea is in the pot?|Tea names the substance.
How many pieces of advice did she give?|Pieces makes a countable unit.
How many coins are in your pocket?|Coins are separate items.
How much is this coat?|How much asks the price.
How much are these shoes?|Plural shoes takes are.
How much does a ticket cost?|Use does with cost.
How much do two tickets cost?|Plural subject takes do.
It costs twelve pounds.|A price answer.
There are six chairs.|A number answer.
We need half a kilogram of rice.|A measured amount.
How much coffee is left?|Coffee means the drink substance.
How many coffees would you like?|Coffees means servings.
About twenty people are coming.|An approximate number.`),dialogues:[D('A meeting',`Jo|How many chairs do we need?
Ali|Twelve.
Jo|How many are there now?
Ali|Ten. We need two more.`),D('Cooking',`Cook|How much rice do we need?
Helper|Half a kilogram.
Cook|How much water is in the jug?
Helper|One litre.`),D('A price',`Customer|How much is this jacket?
Assistant|It is thirty pounds.
Customer|How much are these gloves?
Assistant|They are eight pounds.`),D('Units',`Nora|How much water should we buy?
Dan|We need six bottles.
Nora|How many bottles are in this pack?
Dan|Six. One pack is enough.`),D('Servings',`Server|How many coffees would you like?
Guest|Two, please.
Server|And how much milk would you like in yours?
Guest|Just a little, please.`)],mistakes:R(`How many water do we need?|How much water do we need?|Water names an uncountable substance.
How much chairs are there?|How many chairs are there?|Chairs are countable and plural.
How many ticket does she need?|How many tickets does she need?|Use the plural noun after how many.
How much does it costs?|How much does it cost?|Does takes a base verb.
How much are this coat?|How much is this coat?|This coat is singular.`),practice:{mc:Q(`Complete: How ___ rice do we need?|much|many|a|Rice is uncountable here.
Complete: How ___ bottles are there?|many|much|any|Bottles are countable.
Ask the price of one coat.|How much is this coat?|How many is this coat?|How much are this coat?|How much asks the price; coat takes is.
Complete: How many ___ do you need?|tickets|ticket|water|Use a plural count noun.
Complete: How much time ___ left?|is|are|do|Time is uncountable here.
Choose the natural quantity question.|How much information do you need?|How many informations do you need?|How many information is it?|Information is uncountable.
Complete: How much does it ___?|cost|costs|costing|Does requires the base verb.
Ask about separate coins.|How many coins have you got?|How much coins have you got?|How many coin have you got?|Coins are countable items.
What can two coffees mean in a café?|Two servings of coffee|Two kinds of money|Exactly two kilograms|A countable serving meaning is common.
Complete: How much ___ these shoes?|are|is|does|Shoes is plural in the be question.`),gap:T(`How ___ chairs are there?|many|Chairs are plural countable items.
How ___ milk is left?|much|Milk is uncountable.
How many ___ (bottle) do we need?|bottles|Use a plural count noun.
How much ___ this bag? Use be.|is|This bag is singular.
How much ___ these socks? Use be.|are|These socks is plural.
How much does a ticket ___ (cost)?|cost|Use the base verb after does.
How ___ money do you have?|much|Money is uncountable.
How ___ cups of tea do we need?|many|Cups is the countable head noun.
How many tickets ___ she need? Use do/does.|does|She requires does.
How much ___ is available: time or times? Write the noun.|time|Available time is an amount.`),correct:T(`Correct: How many milk do we need?|How much milk do we need?|Use much with uncountable milk.
Correct: How much people are there?|How many people are there?|People is plural and countable.
Correct: How many chair do you need?|How many chairs do you need?|Use plural chairs.
Correct: How much does this costs?|How much does this cost?|Use cost after does.
Correct: How much is these boots?|How much are these boots?|Boots requires are.`),order:T(`Order: many / chairs / How / there / are|How many chairs are there?|Quantity phrase comes first.
Order: much / do / rice / need / we / How|How much rice do we need?|Use do before we.
Order: this / is / coat / much / How|How much is this coat?|A price question with is.
Order: cost / does / it / How / much|How much does it cost?|Use the base verb cost.
Order: water / left / is / much / How|How much water is left?|Water takes is.`),reading:'Anita is organising lunch for eight colleagues. She needs eight bowls and eight cups. There are only six bowls in the kitchen. She has enough cups. She also needs half a kilogram of rice and two litres of water for the recipe. At the shop, she sees a bag of rice for three pounds. A pack of two bowls costs four pounds. She buys the rice and one pack of bowls.',read:Q(`How many people is lunch for?|Eight|Six|Two|There are eight colleagues.
How many extra bowls does Anita need?|Two|Eight|Six|Eight needed minus six available equals two.
How much rice does she need?|Half a kilogram|Two litres|Eight bowls|The recipe needs half a kilogram.
How much is the bag of rice?|Three pounds|Four pounds|Eight pounds|The text gives its price.
Does she need to buy cups?|No|Yes, eight|Yes, two|She already has enough cups.`),write:T(`Ask how many items are needed for a meeting.|How many chairs do we need?|Use many with a plural count noun.
Ask about an amount of a drink.|How much water is left?|Use much with the uncountable drink substance.
Write a price question and an answer.|How much is this notebook? It is two pounds.|Use is/are or do/does cost correctly.
Ask about a countable container of a substance.|How many bottles of milk do we need?|Choose many because bottles is the head noun.
Write two questions contrasting money and coins.|How much money do you have? How many coins do you have?|Use much with money and many with coins.`)},sources:quantifiers,related:['027','028','048','050']};

L['050']={intro:'Describe small unspecified quantities, ask whether anything is available and talk about large quantities. Learn the usual some/any patterns together with their important everyday exceptions.',goals:['Use some in common positive quantity statements.','Use any in neutral questions and negatives.','Use some in offers and appropriate requests.','Use a lot of with both noun types.','Choose verb agreement from the quantity noun.'],sections:[
S('Some gives an unspecified quantity','Some can introduce a plural countable noun or an uncountable noun. It says there is a quantity without giving the exact number or amount. In this lesson, focus on this quantity meaning rather than other uses such as some person.', ['There are some apples in the bowl.','There is some milk in the fridge.','Use an apple for one unspecified apple, not some apples if exactly one is intended.']),
S('Any is common in questions and negatives','Use any in a neutral question when you do not assume the answer is yes. In a negative quantity statement, not any usually means none. Keep the noun countable plural or uncountable as appropriate.', ['Are there any seats?','We do not have any bread.','There are not any cups means there are no cups.'],tb(['Context','Plural count noun','Uncountable noun'],`Positive quantity|some apples|some milk
Neutral question|any apples?|any milk?
Negative quantity|not any apples|not any milk`)),
S('Some works in offers and requests','Questions do not always require any. Some is normal when offering something or requesting a quantity, especially when availability or a positive response is expected. The speaker’s purpose matters.', ['Would you like some tea? is an offer.','Could I have some water, please? is a request.','Have you got any water? neutrally checks availability; both patterns are useful in different situations.']),
S('A lot of works with both noun types','A lot of means a large number or amount. Put of before a following noun: a lot of people, a lot of work. Lots of is a common, more informal alternative. Agreement comes from the noun, not lot.', ['There are a lot of books.','There is a lot of traffic.','Without a following noun, use a lot: I read a lot. Not I read a lot of.']),
S('Keep countability and verb agreement','Some and a lot of do not turn an uncountable noun into a plural count noun. Use some advice, some equipment and a lot of information. If you need a count, add units: two pieces of advice.', ['There is some furniture, not There are some furnitures.','There are some chairs because chairs is plural.','There is not any information about the delay.']),
S('Learn the positive any exception','Any can mean it does not matter which. You can choose any seat gives a free choice, so it is positive and can use a singular count noun. This differs from the quantity pattern Are there any seats? Avoid a rule that any is always negative.', ['Choose any colour you like: free choice.','I do not have any coloured pens: zero quantity.','Use context to distinguish free choice from a neutral availability question.'])],examples:R(`There are some apples.|An unspecified number.
There is some bread.|An unspecified amount.
I have some questions.|Questions is plural countable.
She needs some help.|Help is uncountable here.
We bought some rice.|Rice remains uncountable.
There is some equipment here.|Equipment does not take plural -s.
Have you got any milk?|A neutral availability question.
Are there any empty seats?|Ask whether seats are available.
Do you have any questions?|A neutral invitation to ask.
Is there any information?|Information is uncountable.
I do not have any cash.|Not any describes zero cash.
There are not any plates.|No plates are available.
She does not need any help.|A negative amount statement.
We have not got any bread.|Any follows a negative have got phrase.
Would you like some tea?|Some is natural in an offer.
Could I have some water?|Some is natural in a request.
Can you lend me some paper?|The speaker requests an amount.
Would you like some biscuits?|An offer can use a plural count noun.
There are a lot of people outside.|People takes are.
There is a lot of traffic.|Traffic takes is.
He has a lot of books.|A large number.
We have a lot of work.|A large amount.
She asks lots of questions.|Lots of is a common alternative.
I read a lot.|No of is needed without a noun.
Thanks a lot.|A fixed expression without of.
There is some advice in the email.|Advice is uncountable.
There are two pieces of advice.|Pieces provides a count.
You can choose any seat.|Any means free choice.
Take any colour you like.|A positive free-choice meaning.
We have some cups, but not any plates.|Positive and negative quantity patterns contrast.`),dialogues:[D('The kitchen',`Jo|Is there any milk?
Lee|Yes, there is some in the fridge.
Jo|Are there any clean cups?
Lee|Yes, there are some by the sink.`),D('An offer',`Host|Would you like some tea?
Guest|Yes, please.
Host|Would you like some biscuits too?
Guest|No, thank you.`),D('A request',`Customer|Could I have some water, please?
Server|Of course.
Customer|Do you have any ice?
Server|Sorry, we do not have any today.`),D('A busy road',`Ada|There is a lot of traffic today.
Ben|Yes, and there are a lot of people at the stop.
Ada|Have we got any time to walk?
Ben|Yes. We have plenty of time.`),D('A free choice',`Tutor|You can choose any topic for your short talk.
Learner|Have you got any suggestions?
Tutor|There are some ideas on this sheet.
Learner|Thank you. I will choose travel.`)],mistakes:R(`There are some milks in the fridge.|There is some milk in the fridge.|Milk is uncountable in this substance meaning.
I have not any informations.|I do not have any information.|Use the ordinary do negative and uncountable information.
There is a lot people here.|There are a lot of people here.|Add of and agree with people.
I read a lot of.|I read a lot.|Omit of when no noun follows.
There are some equipments.|There is some equipment.|Equipment is uncountable in ordinary use.`),practice:{mc:Q(`Complete a positive statement: There is ___ bread.|some|a|many|Some works with uncountable bread.
Complete a neutral question: Are there ___ chairs?|any|a|much|Any is common in neutral questions.
Complete a negative: We do not have ___ milk.|any|a|many|Use any for this zero quantity.
Choose a natural offer.|Would you like some tea?|Would you like many tea?|Would you like a tea water?|Some is natural in an offer.
Choose a correct large quantity.|a lot of books|a lot books|a lot of book|Use of and plural books.
Complete: There ___ a lot of traffic.|is|are|do|Traffic is uncountable.
Complete: There ___ some apples.|are|is|does|Apples is plural.
Complete: I read ___.|a lot|a lot of|many of|No noun follows, so omit of.
In Choose any seat, any means...|it does not matter which seat|there are no seats|exactly two seats|This is the positive free-choice use.
Choose the standard noun phrase.|some information|some informations|many information|Information is uncountable.`),gap:T(`There are ___ apples. Use the usual positive quantity word.|some|Some gives an unspecified positive quantity.
There is not ___ bread. Use any.|any|Any is usual after a negative.
Would you like ___ tea? Use the usual offer word.|some|Some is natural in offers.
There are a lot ___ people.|of|Of connects a lot to the noun.
There ___ some water. Use be.|is|Water takes is.
There ___ some books. Use be.|are|Books takes are.
We have some ___: advice or advices? Write the noun.|advice|Advice is uncountable.
I practise a ___. Complete the phrase without a noun.|lot|A lot has no of when nothing follows.
You can choose ___ seat. Use the free-choice word.|any|Any means it does not matter which.
Could I have ___ paper, please? Use the usual request word.|some|Some is natural in this request.`),correct:T(`Correct: There is some chairs.|There are some chairs.|Plural chairs takes are.
Correct: We have a lot rice.|We have a lot of rice.|Add of before rice.
Correct: She does not have some milk. Use the neutral zero-quantity pattern.|She does not have any milk.|Any is usual in this negative.
Correct: I have some informations.|I have some information.|Information is uncountable.
Correct: We talk a lot of.|We talk a lot.|No noun follows of, so remove it.`),order:T(`Order: some / There / milk / is|There is some milk.|Uncountable milk takes is.
Order: any / there / chairs / Are|Are there any chairs?|Are precedes there in a question.
Order: of / a / books / lot / have / We|We have a lot of books.|Keep a lot of together.
Order: like / tea / some / you / Would|Would you like some tea?|An offer often uses some.
Order: any / choose / can / seat / You|You can choose any seat.|Any expresses a free choice.`),reading:'The volunteers are preparing a small exhibition. There are some photographs on the table and a lot of information on the display boards. There is some tea in the kitchen, but there is not any coffee. The organiser asks, “Would you like some tea?” One volunteer asks for some water instead. Visitors can choose any seat for the opening talk. There are a lot of chairs, so nobody needs to stand.',read:Q(`Where are the photographs?|On the table|In a car|Under the chairs|The first sentence locates them.
What is on the display boards?|A lot of information|A lot of coffees|No information|Information is uncountable.
Is any coffee available?|No|Yes, a lot|Only outside|There is not any coffee.
What does one volunteer request?|Some water|Some coffee|A photograph|The volunteer asks for water instead.
What does any seat mean here?|Visitors have a free choice.|There are no seats.|Only one seat is available.|Any has its free-choice meaning.`),write:T(`Describe two things available in your kitchen.|There are some cups and there is some rice.|Use plural agreement and uncountable agreement appropriately.
Ask a neutral availability question.|Is there any milk?|Use any with the correct question structure.
Offer someone a drink.|Would you like some tea?|Some is natural in an offer.
Describe a large number and a large amount.|There are a lot of books and there is a lot of work.|Use a lot of with both noun types and check is/are.
Give someone a free choice with any.|You can choose any colour.|Use any to mean it does not matter which.`)},sources:quantifiers,related:['027','028','049','051']};

L['051']={intro:'Combine the English you have learnt to shop, order food and make a simple telephone call. Practise complete exchanges: begin politely, give the details, clarify uncertainty and confirm the result.',goals:['Make a clear shopping request.','Ask quantities and prices.','Order food and respond to a follow-up question.','Open a telephone call and leave a simple message.','Check important details before ending an exchange.'],sections:[
S('Build an everyday exchange','A useful exchange has a purpose and a result. Start with a greeting, state what you need, answer a follow-up question and confirm the detail that matters. You do not need a long speech; a short complete sentence is often clearer.', ['Excuse me. Could you help me, please?','I would like a blue shirt in a medium size.','Check the item, quantity, time or name before you finish.']),
S('Shop with specific details','Name the item and then add size, colour or quantity. Ask how much for price and how many for a count. If the item is unavailable, ask about a realistic alternative.', ['Have you got this shirt in a large size?','How much are these trousers? Trousers is plural.','Could I have two notebooks, please?'],tb(['Need','Useful language','Follow-up'],`Find an item|Have you got any envelopes?|What size do you need?
Ask price|How much is this bag?|It is twelve pounds.
Request a quantity|Could I have three stamps?|Certainly.`)),
S('Order in a café or restaurant','I would like + noun is a useful order. Could I have + noun is another courteous choice. Listen for practical follow-ups such as size, drink choice or whether food is for here or to take away.', ['I would like a vegetable sandwich, please.','A small tea, please. No sugar.','Ask for clarification if you need to check an ingredient; the language exercise does not replace accurate advice about dietary needs.']),
S('Open a telephone call clearly','Introduce yourself and state who you want to speak to or why you are calling. The listener cannot see you pointing at an object, so give its name. May I speak to... and Could I speak to... are useful learnt phrases.', ['Hello. This is Maya Shah. Could I speak to Alex, please?','I am calling about my appointment.','If the person is unavailable, ask to leave a message or for a suitable callback time.']),
S('Clarify and read back','Ask for slower speech, repetition or spelling when needed. Read a name, number or appointment time back to check it. Use fictional contact details for practice; you do not need to disclose a real phone number in an exercise.', ['Could you spell your surname, please?','Did you say Tuesday at ten?','So that is maya@example.com. Is that correct?']),
S('Close after confirming the outcome','A courteous closing can confirm what has been agreed and thank the other person. If you still do not understand, ask again before agreeing. Use partner practice with swapped roles to make the language flexible.', ['That is two notebooks for four pounds. Thank you.','I will come on Thursday at eleven. Thank you for your help.','In role-play, change the item, price and time on the second attempt.'])],examples:R(`Excuse me. Could you help me?|A polite opening.
Have you got any envelopes?|Check availability.
I would like two notebooks, please.|State the item and number.
Have you got this in blue?|Ask about a colour.
Do you have a larger size?|Ask for an alternative size.
How much is this jacket?|Ask a singular item's price.
How much are these trousers?|Trousers takes are.
How many stamps would you like?|Ask the quantity.
Could I have a receipt, please?|Request a purchase record.
That is four pounds altogether.|State the total.
Could I have the menu, please?|Request a menu.
I would like a vegetable sandwich.|Place an order.
A small tea, please.|Give a size and drink.
No sugar, thank you.|Answer a preference question.
Is that for here or to take away?|Clarify the order type.
For here, please.|Answer the follow-up.
Could I have some water too?|Add a request.
Could I have the bill, please?|Ask to settle a restaurant bill.
Hello. This is Maya Shah.|Identify yourself by phone.
Could I speak to Alex, please?|Ask for a person.
I am calling about an appointment.|State the call's purpose.
Could you hold for a moment?|Ask the caller to wait.
Alex is not available at the moment.|Explain unavailability.
Could I leave a message?|Offer a next step.
Could you ask Alex to call me?|Request a callback.
Could you repeat the time, please?|Clarify a detail.
Could you spell your surname?|Request spelling.
Did you say Thursday at eleven?|Read back an appointment.
Yes, that is correct.|Confirm a detail.
Thank you for your help. Goodbye.|Close the exchange.`),dialogues:[D('Buying stationery',`Customer|Have you got any notebooks?
Assistant|Yes. These are two pounds each.
Customer|Could I have two, please?
Assistant|Certainly. That is four pounds.
Customer|Could I have a receipt too?
Assistant|Of course.`),D('A different size',`Customer|Have you got this shirt in a large size?
Assistant|Yes, but only in green.
Customer|How much is it?
Assistant|Eighteen pounds.
Customer|Thank you. I will have a look.`),D('Lunch',`Server|What would you like?
Customer|A vegetable sandwich and a small tea, please.
Server|For here or to take away?
Customer|For here, please.
Server|Would you like sugar?
Customer|No, thank you.`),D('A message',`Receptionist|Good morning. City Studio.
Caller|Hello. This is Maya Shah. Could I speak to Alex?
Receptionist|Sorry, Alex is in a meeting.
Caller|Could I leave a message?
Receptionist|Of course.
Caller|Could you ask Alex to email me about the booking?`),D('Checking a time',`Caller|I am calling about my appointment.
Receptionist|It is on Thursday at eleven.
Caller|Could you repeat the day, please?
Receptionist|Thursday.
Caller|Thursday at eleven. Is that correct?
Receptionist|Yes, that is correct.`)],mistakes:R(`How many is this jacket?|How much is this jacket?|Ask about price with how much.
I would like to a sandwich.|I would like a sandwich.|A noun follows would like without to.
Could I speaking to Alex?|Could I speak to Alex?|Use a base verb after could.
I calling about my booking.|I am calling about my booking.|The continuous needs am.
The appointment is in Thursday.|The appointment is on Thursday.|Use on with a day.`),practice:{mc:Q(`You need a price. Choose the question.|How much is this bag?|How many bag?|What can this bag?|How much asks the price.
Choose a natural order.|I would like a tea, please.|I would like to a tea.|I am like a tea.|Would like can take a noun.
You want to speak to Alex.|Could I speak to Alex, please?|Could I speaking Alex?|Do I could speak Alex?|Could takes a base verb.
You missed the appointment time.|Could you repeat the time, please?|I agree to any time.|You speak time.|Ask to clarify the missing detail.
Complete: The appointment is ___ Thursday.|on|in|at|Use on with a day.
Complete: It is ___ eleven.|at|on|in|Use at with a clock time.
The assistant asks For here or to take away? You will eat inside.|For here, please.|A medium size.|Two pounds.|Answer the order-type question.
Alex is unavailable. Ask to leave information.|Could I leave a message?|Could I left a message?|I am a message.|This is a suitable next step.
Choose a phone introduction.|Hello. This is Maya Shah.|Hello. These Maya.|Hello. I calling.|This is + name is normal on the phone.
Choose a way to check a detail.|Did you say Tuesday at ten?|Tuesday is every week.|Do Tuesday ten.|Read the detail back for confirmation.`),gap:T(`How ___ is this notebook?|much|The question asks its price.
I would ___ a sandwich, please.|like|Would like + noun is a useful request.
Could I ___ (speak) to Alex?|speak|Use the base verb.
I ___ calling about my appointment.|am|Present continuous needs am with I.
Could you ___ (repeat) that?|repeat|Use the base verb after could.
The appointment is ___ Monday.|on|Use on with a day.
The call is ___ two thirty.|at|Use at with a clock time.
Could I leave a ___? Use message.|message|Leave a message is the useful phrase.
Could you ___ your surname? Use spell.|spell|Ask for the letters in the name.
Thank you ___ your help.|for|Thank someone for something.`),correct:T(`Correct: How many is this coat?|How much is this coat?|How much asks the price.
Correct: I would like to a coffee.|I would like a coffee.|Remove to before the noun phrase.
Correct: Could I to speak to Jo?|Could I speak to Jo?|Remove to after could I.
Correct: I calling about the class.|I am calling about the class.|Add am for the continuous.
Correct: The booking is at Friday.|The booking is on Friday.|Use on with the day.`),order:T(`Order: a / receipt / have / I / Could|Could I have a receipt?|Request an item.
Order: like / tea / a / would / I|I would like a tea.|Would like takes this noun phrase.
Order: speak / I / to / Could / Alex|Could I speak to Alex?|Ask for a person by phone.
Order: the / repeat / you / Could / time|Could you repeat the time?|Ask for clarification.
Order: your / for / Thank / help / you|Thank you for your help.|Close with thanks.`),reading:'Ravi calls a language centre to ask about an evening class. He introduces himself and asks to speak to Helen. Helen is not available, so Ravi leaves a message asking her to email him. The receptionist also tells him that the next open evening is on Wednesday at six thirty. Ravi first hears “Thursday”, so he asks her to repeat the day. He then reads back “Wednesday at six thirty”. She confirms that this is correct.',read:Q(`Why does Ravi call?|To ask about an evening class|To order lunch|To buy a jacket|His purpose is a class enquiry.
Who does he ask for?|Helen|Maya|Alex|He asks to speak to Helen.
What does he do when Helen is unavailable?|Leaves a message|Ends without speaking|Orders a sandwich|He requests an email through a message.
When is the open evening?|Wednesday at six thirty|Thursday at six thirty|Wednesday at three|The receptionist confirms Wednesday at six thirty.
How does Ravi check the detail?|He asks again and reads it back.|He guesses silently.|He changes the booking.|Repetition and read-back resolve the misunderstanding.`),write:T(`Write a shop request including a quantity.|Could I have three notebooks, please?|Name the item, quantity and request clearly.
Write a two-line café exchange.|What would you like? I would like a sandwich and a tea, please.|Include an order and a relevant server question.
Introduce yourself on a practice call.|Hello. This is Ana Patel. I am calling about a class.|Use an invented name if preferred and state a purpose.
Leave a short message for someone unavailable.|Could you ask Helen to email me about the class, please?|Name the person and the requested next step.
Check an appointment day and time.|Did you say Friday at two? Is that correct?|Read both details back instead of guessing.`)},sources:[['British Council: requests, offers and invitations','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/requests-offers-invitations']],related:['041','048','049','050']};
L['052']={intro:'Describe a past place, condition or situation with was and were. Learn the agreement pattern, make negatives and questions without did, and use there was or there were to describe what existed.',goals:['Choose was or were for the subject.','Make past-be negatives.','Ask past-be questions without did.','Give matching short answers.','Use there was/were and was/were born.'],sections:[
S('Be changes to was or were in the past','Use past be for a past identity, location, condition or description. I am tired describes now; I was tired yesterday describes then. The time can be stated directly or understood from the conversation.', ['I was at home last night.','The shop was closed yesterday.','We were tired after the walk.']),
S('Match the subject','Use was with I, he, she and it in ordinary past statements. Use were with you, we and they. You takes were whether it addresses one person or several. A singular noun normally takes was and a plural noun takes were.', ['My brother was here; my brothers were here.','You were early: one listener or several listeners.','If I were... belongs to a different hypothetical pattern; it does not replace I was in ordinary past reporting.'],tb(['Subject','Past be','Example'],`I / he / she / it|was|She was busy.
you / we / they|were|They were busy.
one room / two rooms|was / were|The rooms were clean.`)),
S('Put not after was or were','Make negatives with was not or were not. Wasn’t and weren’t are the usual contractions. Do not add did or a separate base verb be to these simple past-be negatives.', ['I was not late. They were not ready.','She wasn’t at the station. We weren’t hungry.','I did not was there and I did not be there are not the target past-be pattern.']),
S('Move was or were before the subject','For a yes/no question, put was/were first. For an information question, put the question word before was/were. Do not use did in these questions.', ['Was he at work? Were you busy?','Where were they yesterday? Why was the shop closed?','Who was your teacher? asks about a past identity.']),
S('Use short answers with the right perspective','Repeat was/were in the short answer, matching the person answering. Were you there? — Yes, I was. Was Mina there? — No, she wasn’t. Positive short answers normally keep the full verb.', ['Was it cold? — Yes, it was.','Were they ready? — No, they were not.','Do not copy you into your own answer when you are answering about yourself.']),
S('Describe existence and birth','There was introduces one thing or an uncountable amount in the past; there were introduces plural things. For birth, use was/were born with a place or date. Born is not an ordinary verb that takes -ed here.', ['There was a café here. There were three cafés.','There was some water in the jug.','I was born in Kandy. They were born in 1998.'])],examples:R(`I was tired yesterday.|I takes was.
He was at home.|A past location.
She was a teacher.|A past role.
It was cold last night.|A past condition.
You were early.|You takes were.
We were busy.|We takes were.
They were at the station.|They takes were.
The room was clean.|Singular room takes was.
The rooms were clean.|Plural rooms takes were.
My parents were in London.|A plural subject.
I was not late.|Not follows was.
She was not ready.|A full negative.
We were not hungry.|A plural negative.
He wasn’t at work.|A contracted negative.
They weren’t here.|Were not contracts to weren't.
Was the shop open?|Was precedes the subject.
Were you at home?|Were begins the question.
Was she tired?|No did is needed.
Where were they?|Where precedes were.
Why was he late?|Why asks for the reason.
Yes, I was.|Answer about yourself.
No, she was not.|A full negative short answer.
Yes, they were.|A plural positive answer.
No, we weren’t.|A plural contracted negative answer.
There was a café here.|One thing existed.
There were two buses outside.|Plural existence.
There was some milk in the fridge.|An uncountable amount.
Was there a queue?|An existence question.
I was born in Colombo.|Birth uses was born.
They were born in May.|Plural birth statement.`),dialogues:[D('Yesterday',`Ada|Where were you yesterday?
Ben|I was at home.
Ada|Were you ill?
Ben|No, I was just tired.`),D('A closed shop',`Customer|Was the shop open on Sunday?
Neighbour|No, it was not.
Customer|Was the café open?
Neighbour|Yes, it was.`),D('The old street',`Jo|Was there a cinema here?
Lee|Yes, there was.
Jo|Were there any cafés?
Lee|Yes, there were two.`),D('A meeting',`Manager|Were the visitors here at nine?
Assistant|Yes, they were.
Manager|Was the room ready?
Assistant|Yes. It was clean and warm.`),D('Birthplace',`Sam|Where were you born?
Kim|I was born in Galle.
Sam|Was your sister born there too?
Kim|No, she was born in Matara.`)],mistakes:R(`They was busy.|They were busy.|They takes were.
I were at home yesterday.|I was at home yesterday.|Use was in ordinary past reporting with I.
Did she was late?|Was she late?|Move was before she without did.
We did not were ready.|We were not ready.|Put not after were.
I borned in Kandy.|I was born in Kandy.|Use was born.`),practice:{mc:Q(`Complete: I ___ at home yesterday.|was|were|am|Ordinary past I takes was.
Complete: They ___ tired.|were|was|is|They takes were.
Complete: You ___ early.|were|was|be|You takes were even for one person.
Choose the question.|Was she at work?|Did she was at work?|Was she be at work?|Past be forms its own question.
Choose the negative.|We were not ready.|We did not were ready.|We not were ready.|Put not after were.
Answer: Were you there? Speak about yourself.|Yes, I was.|Yes, you were.|Yes, I did.|Change perspective to I and use was.
Complete: There ___ three chairs.|were|was|is|Plural chairs takes were.
Complete: There ___ some water.|was|were|are|Uncountable water takes was.
Choose the birth statement.|I was born in York.|I borned in York.|I were born in York.|Use was born with I.
Complete: Where ___ your parents?|were|was|did|Parents is plural; this is past be.`),gap:T(`She ___ at home last night. Use past be.|was|She takes was.
We ___ busy yesterday. Use past be.|were|We takes were.
You ___ early this morning. Use past be.|were|You takes were.
___ he tired yesterday? Use past be.|Was|Was precedes he in the question.
Where ___ they last night?|were|They takes were.
There ___ one café here. Use past be.|was|One café is singular.
There ___ two cafés here. Use past be.|were|Two cafés is plural.
I ___ born in Leeds. Use past be.|was|I was born is the pattern.
Write the contraction of was not.|wasn't|The apostrophe marks missing letters.
Write the contraction of were not.|weren't|Use weren't for were not.`),correct:T(`Correct: They was late.|They were late.|They takes were.
Correct: I were tired yesterday.|I was tired yesterday.|I takes was in ordinary past reporting.
Correct: Did he was at home?|Was he at home?|Remove did and invert was/he.
Correct: We not were hungry.|We were not hungry.|Not follows were.|We weren't hungry.
Correct: She borned in Bath.|She was born in Bath.|Use was born.`),order:T(`Order: was / I / yesterday / tired|I was tired yesterday.|Subject + past be + description.
Order: you / Were / home / at|Were you at home?|Were precedes you.
Order: they / Where / were|Where were they?|Where comes first.
Order: not / We / ready / were|We were not ready.|Not follows were.
Order: two / There / were / cafés|There were two cafés.|Plural existence uses were.`),reading:'Last Saturday, Hana and her parents were in York. The morning was cold, but the museum was warm. There were many visitors, and there was a short queue at the entrance. Hana’s brother was not with them because he was at work. In the afternoon, Hana was tired, so they were back at their hotel by four. The hotel room was quiet and comfortable.',read:Q(`Where were Hana and her parents?|In York|In Leeds|At home all day|The opening sentence names York.
What was the weather like in the morning?|Cold|Very hot|Stormy|The text describes a cold morning.
Was there a queue?|Yes, a short one|No|Yes, an all-day queue|There was a short queue at the entrance.
Why was her brother absent?|He was at work.|He was at school.|He was in the museum.|The text gives his work as the reason.
When were they back at the hotel?|By four|At midnight|Before breakfast|They returned by four.`),write:T(`Describe where you were yesterday.|I was at home yesterday.|Use was or were to match the subject.
Write a past-be negative.|I was not at work on Sunday.|Place not after was/were.
Ask where a friend was last night.|Where were you last night?|Use where + were + you.
Describe what existed in a room.|There was a table and there were four chairs.|Use was for one item and were for plural items.
Write about a birthplace using a real or fictional person.|Maya was born in Bristol.|Use was/were born with an appropriate subject.`)},sources:past,related:['011','012','013','053','055','056']};

L['053']={intro:'Talk about finished actions with regular past-simple verbs. Learn the -ed spelling families, the three common ending pronunciations and the reason the ending disappears after did or did not.',goals:['Use a regular past verb for a finished event.','Apply -ed, -d and -ied spelling.','Recognise common consonant doubling.','Distinguish the three -ed ending sounds.','Return to the base verb after did.'],sections:[
S('Locate an action in a finished past context','The past simple reports events or situations in a finished past context. Yesterday, last week and in 2020 are common time references. The time may also be understood from a story. A regular verb usually forms its past with -ed.', ['I worked yesterday. She called last night.','The same past form works with all subjects: I worked; he worked; they worked.','Be has was/were; irregular verbs such as go/went need separate learning.']),
S('Learn the basic spelling families','Most regular verbs add -ed. A verb already ending in e adds only -d. A consonant + y ending changes to -ied; a vowel + y ending keeps y and adds -ed.', ['Work → worked; close → closed.','Study → studied; carry → carried.','Play → played; enjoy → enjoyed.'],tb(['Base ending','Past spelling','Example'],`Most verbs|add -ed|work → worked
Final e|add -d|live → lived
Consonant + y|change y to i + ed|try → tried
Vowel + y|keep y + ed|stay → stayed`)),
S('Double a final consonant when appropriate','A stressed short vowel followed by one final consonant often leads to doubling before -ed: stop → stopped, plan → planned. Do not mechanically double every final consonant. Final w, x and y are not doubled in this pattern.', ['Prefer → preferred because the final syllable is stressed.','Visit → visited because the final syllable is not stressed.','British English commonly uses travel → travelled and cancel → cancelled; American spelling often has one l.']),
S('Pronounce -ed from the last sound','The ending is /ɪd/ after /t/ or /d/, adding a syllable: wanted, needed. It is /t/ after other voiceless sounds, as in worked and watched. It is /d/ after other voiced sounds, as in played and cleaned. The final sound matters more than the final letter.', ['Wanted and needed have an extra syllable for the ending.','Worked does not normally become work-ed with an extra syllable.','Loved ends in /d/ because the sound before the ending is /v/.']),
S('Did carries the past in negatives and questions','In a positive statement, the main verb has the past form. In a question or negative with did, use its base form. Did is already the past helper, so do not add a second past ending to the main verb.', ['She worked. Did she work? She did not work.','They studied. Did they study? They did not study.','Past be uses was/were instead of this did pattern.']),
S('Build a short account, not just a word list','Use a person, a past action and a useful detail. Link a few finished actions with then or after that. Regular past forms also serve as past participles in other structures, but the structure in this lesson is the past simple.', ['I finished work at five. Then I walked home.','Check the time meaning before adding -ed. I work every day is still present simple.','Keep spelling practice and pronunciation practice separate: the letters -ed can have different sounds.'])],examples:R(`I worked yesterday.|A finished past action.
She worked yesterday.|The past form does not change with she.
They worked yesterday.|The same past form works with they.
We called the office.|Most verbs add -ed.
He opened the door.|Open becomes opened.
I closed the window.|Final e takes only -d.
She lived in York in 2020.|Live becomes lived.
We arrived at six.|Arrive adds -d.
They studied English.|Consonant + y becomes -ied.
He carried the bag.|Carry becomes carried.
I tried again.|Try becomes tried.
We played tennis.|Vowel + y keeps y.
She enjoyed the film.|Enjoy keeps y.
They stayed at home.|Stay becomes stayed.
The bus stopped.|Stop doubles p.
We planned a trip.|Plan doubles n.
She preferred the blue one.|The final stressed syllable triggers doubling.
I visited my aunt.|Visit does not double t.
We travelled by train.|British spelling commonly doubles l.
They cancelled the meeting.|British spelling commonly uses double l.
I wanted a drink.|The ending adds a syllable: /ɪd/.
She needed help.|After /d/, -ed is /ɪd/.
He watched a film.|After /tʃ/, -ed is /t/.
We cleaned the room.|The ending is /d/.
I loved the music.|After /v/, -ed is /d/.
Did she work yesterday?|Did takes base work.
They did not study on Sunday.|Did not takes base study.
I finished the form and posted it.|Two completed actions.
First, we checked the address.|A sequence marker begins an account.
Then we walked to the station.|A second event follows.`),dialogues:[D('Yesterday evening',`Ada|What did you do yesterday evening?
Ben|I cooked dinner.
Ada|Did you watch television?
Ben|No, I listened to music.`),D('Travel',`Jo|How did you travel?
Lee|We travelled by train.
Jo|Did you arrive on time?
Lee|Yes. We arrived at six.`),D('Spelling',`Tutor|What is the past of study?
Learner|Studied.
Tutor|And play?
Learner|Played. The letter before y is a vowel.`),D('Ending sounds',`Tutor|Does wanted have an extra syllable in its ending?
Learner|Yes. It ends in /ɪd/.
Tutor|Does worked have the same ending sound?
Learner|No. Its ending is /t/.`),D('An account',`Manager|What happened this morning?
Assistant|I checked the list, then I called the guests.
Manager|Did everyone answer?
Assistant|No. Two people did not answer.`)],mistakes:R(`She work yesterday.|She worked yesterday.|Use the past form for this finished event.
We studyed last night.|We studied last night.|Consonant + y changes to -ied.
They plaied tennis.|They played tennis.|Vowel + y keeps y.
The bus stoped.|The bus stopped.|Stop doubles its final p.
Did he worked yesterday?|Did he work yesterday?|Use the base verb after did.`),practice:{mc:Q(`Choose the past of work.|worked|workt|worken|Regular work adds -ed.
Choose the past of live.|lived|liveed|livved|Final e takes -d.
Choose the past of study.|studied|studyed|studyd|Consonant + y changes to -ied.
Choose the past of play.|played|plaied|playd|Vowel + y keeps y.
Choose the British spelling taught here.|travelled|travellied|travelleded|Travel commonly doubles l in British English.
Choose the past of stop.|stopped|stoped|stopied|Stop doubles p.
Which ending adds a syllable?|wanted|worked|played|After /t/, -ed is /ɪd/.
What is the -ed sound in cleaned?|/d/|/ɪd/|/t/|The final base sound is voiced /n/.
Complete: Did she ___ yesterday?|work|worked|working|Did takes the base verb.
Complete: They did not ___.|study|studied|studies|Use base study after did not.`),gap:T(`Yesterday I ___ (work).|worked|Add -ed.
She ___ (live) in York in 2020.|lived|Add -d after final e.
We ___ (study) last night.|studied|Change consonant + y to -ied.
They ___ (play) on Saturday.|played|Keep y after a vowel.
The bus ___ (stop).|stopped|Double p.
We ___ (plan) a visit.|planned|Double n.
He ___ (try) again.|tried|Change y to i and add -ed.
I ___ (visit) my aunt yesterday.|visited|Do not double t in visit.
Use British spelling: We ___ (travel) by bus.|travelled|British English commonly doubles l.
Did they ___ (arrive) early?|arrive|Use base arrive after did.`),correct:T(`Correct: I work yesterday.|I worked yesterday.|A finished past action needs worked.
Correct: We studyed English.|We studied English.|Use -ied after consonant + y.
Correct: She plaied tennis.|She played tennis.|Keep y after a vowel.
Correct: The bus stoped.|The bus stopped.|Double p.
Correct: He did not called.|He did not call.|Use base call after did not.|He didn't call.`),order:T(`Order: yesterday / I / worked|I worked yesterday.|Place the completed action in the past.
Order: English / studied / She|She studied English.|The past form is studied.
Order: train / We / by / travelled|We travelled by train.|Use the British past spelling.
Order: she / Did / call|Did she call?|Did takes base call.
Order: not / They / did / wait|They did not wait.|The main verb stays base.`),reading:'Yesterday, Poppy started work at eight. She checked her messages and replied to three customers. At ten, she called a supplier and discussed a delivery. After lunch, she visited a new client. She travelled there by bus and arrived a little early. The client needed some product information, so Poppy explained the choices. She finished work at five and walked home.',read:Q(`When did Poppy start work?|At eight|At ten|At five|She started at eight.
How many customers received replies?|Three|Ten|Five|She replied to three customers.
Who did she call at ten?|A supplier|Her aunt|A bus driver|The text names a supplier.
How did she travel to the client?|By bus|By train|By bicycle|She travelled by bus.
What did she do after finishing work?|Walked home|Started a delivery|Visited another client|The final action is walking home.`),write:T(`Write a finished action from yesterday with work.|I worked at home yesterday.|Use worked and a clear past context.
Write a sentence with the past of study.|I studied English last night.|Use studied with -ied.
Write a short sequence with two regular past verbs.|I cooked dinner, then I cleaned the kitchen.|Both completed actions use past forms.
Turn a regular past statement into a question.|Did you visit the museum?|Use did + subject + base verb.
Group three endings by sound using these words: wanted, worked, played.|Wanted: /ɪd/. Worked: /t/. Played: /d/.|Classify the final sound rather than adding an extra syllable to every -ed word.`)},sources:past,related:['052','054','055','056','057']};

L['054']={intro:'Learn useful irregular past forms through real sentences. Compare base, past and participle forms, recognise unchanged verbs and avoid combining did with an irregular past form.',goals:['Use common irregular past forms.','Keep one past form across ordinary subjects.','Distinguish past forms from participles.','Use base forms after did and did not.','Recognise read and put in past contexts.'],sections:[
S('An irregular past does not follow the usual -ed rule','Go becomes went, not goed. Buy becomes bought, not buyed. These verbs are common, so practise them in small meaningful groups. Write a short past sentence with each new form rather than learning a list without context.', ['I went to the market.','She bought some bread.','The time context can be explicit or already established in a conversation.']),
S('Use the same past form with ordinary subjects','Most irregular past forms do not change with I, you, he, she, we or they. I went and she went both use went. Be remains the important exception: I was, you were. Do not add -s to an irregular past form.', ['He had a meeting, not He hads a meeting.','We saw the sign; she saw the sign.','Learn have/has → had and do/does → did as past forms.']),
S('Keep a compact three-form reference','A verb reference may show base, past simple and past participle. This lesson uses the middle form in a positive past-simple statement. The participle belongs in other structures: went is the past simple, while gone is a participle.', ['I went home is past simple; I gone home is incomplete.','I saw the film; seen is not the ordinary past-simple form.','Do not assume that the second and third forms always differ: buy/bought/bought.'],tb(['Base','Past simple','Participle'],`go|went|gone
see|saw|seen
buy|bought|bought
have|had|had
take|took|taken
write|wrote|written
eat|ate|eaten
come|came|come
get|got|got
make|made|made`)),
S('Some forms do not visibly change','Put has the same spelling and pronunciation in its base and ordinary past forms. Read keeps its spelling but changes pronunciation: present /riːd/, past /red/. The surrounding grammar and time reference make the intended time clear.', ['I put the keys here yesterday.','I read that book last month: read is pronounced /red/.','Do not invent putted or readed for these meanings.']),
S('After did, return to the base','Did and did not carry the past marking in questions and negatives. Use go, see, buy or take after them, not went, saw, bought or took. Did itself can be the past of do in a positive statement.', ['She went. Did she go? She did not go.','I bought milk. Did you buy bread?','I did the washing yesterday is a positive statement with did as its main verb.']),
S('Retell an event with a few reliable verbs','Choose a small set of verbs that fit an actual event: went, met, had, bought and came. Keep useful objects and time details. You can mix regular and irregular past verbs in one account.', ['I went to town, bought a notebook and walked home.','Check an unfamiliar verb rather than assuming an -ed form.','Get has different meanings: I got a message means I received one; I got home means I arrived home.'])],examples:R(`I went to town.|Go → went.
She went to town.|The past form does not take -s.
We saw a film.|See → saw.
He bought bread.|Buy → bought.
They had lunch.|Have → had.
I took the bus.|Take → took.
She wrote an email.|Write → wrote.
We ate at home.|Eat → ate.
He came early.|Come → came.
I got a message.|Get → got, meaning received.
We got home at six.|Got can mean arrived.
She made a cake.|Make → made.
I met a friend.|Meet → met.
They found the address.|Find → found.
He left at nine.|Leave → left.
We drank some water.|Drink → drank.
She spoke to the manager.|Speak → spoke.
I gave him the form.|Give → gave.
They knew the answer.|Know → knew.
He did the washing.|Do → did as the main verb.
I put the book on the shelf.|Put stays put.
She read the report yesterday.|Past read sounds like red.
Did you go by train?|Did takes base go.
Did she see the sign?|Did takes base see.
We did not buy anything.|Did not takes base buy.
He did not take the bus.|The main verb is base take.
I was at home.|Be has the special past form was.
They were at home.|Be changes with the subject.
I went shopping and bought fruit.|Two irregular past forms.
She came home and cooked dinner.|Irregular and regular forms can mix.`),dialogues:[D('A journey',`Ada|How did you get home?
Ben|I took the bus.
Ada|Did you get home late?
Ben|No. I got home at six.`),D('A purchase',`Jo|What did you buy?
Lee|I bought a notebook.
Jo|Did you buy a pen too?
Lee|No, I did not.`),D('A meeting',`Sam|Who did you meet?
Kim|I met our new neighbour.
Sam|Did you have a long conversation?
Kim|Yes. We spoke for twenty minutes.`),D('A book',`Tutor|Did you read the article yesterday?
Learner|Yes, I read it last night.
Tutor|How do you pronounce past read?
Learner|/red/. The spelling stays the same.`),D('Forms',`Tutor|Complete this: Yesterday I go to town.
Learner|Yesterday I went to town.
Tutor|Now make it negative.
Learner|I did not go to town yesterday.`)],mistakes:R(`I goed home.|I went home.|Go has irregular past went.
She buyed milk.|She bought milk.|Buy becomes bought.
We gone to town yesterday.|We went to town yesterday.|Use the past-simple form, not the participle.
Did he took the bus?|Did he take the bus?|Use base take after did.
I readed the report.|I read the report.|The past spelling stays read.`),practice:{mc:Q(`Choose the past of go.|went|goed|gone|Went is the past-simple form.
Choose the past of buy.|bought|buyed|buy|Buy has irregular past bought.
Complete: She ___ an email yesterday.|wrote|written|write|Wrote is past simple.
Complete: We ___ lunch at one.|had|has|haved|Had is the past of have.
Complete: Did they ___ the sign?|see|saw|seen|Use base see after did.
Choose a past-simple statement.|I went home.|I gone home.|I going home yesterday.|Went is the correct form.
Choose the past of put for placing an object.|put|putted|putten|Put stays unchanged.
How is past read pronounced?|/red/|/riːd/|/reɪd/|Past read rhymes with red.
Complete: He did not ___ the bus.|take|took|taken|Use base take after did not.
Choose the past of make.|made|maked|making|Make becomes made.`),gap:T(`Yesterday I ___ (go) to town.|went|Go becomes went.
She ___ (see) a film last night.|saw|See becomes saw.
We ___ (buy) some bread.|bought|Buy becomes bought.
He ___ (have) lunch at one.|had|Have becomes had.
They ___ (take) the train.|took|Take becomes took.
I ___ (write) a letter yesterday.|wrote|Write becomes wrote.
She ___ (eat) at home yesterday.|ate|Eat becomes ate.
We ___ (come) early yesterday.|came|Come becomes came.
He ___ (make) dinner last night.|made|Make becomes made.
Did you ___ (get) my message?|get|After did, use base get.`),correct:T(`Correct: I goed to work.|I went to work.|Use went.
Correct: She buyed a bag.|She bought a bag.|Use bought.
Correct: We seen the film yesterday.|We saw the film yesterday.|Use past-simple saw.
Correct: Did he ate lunch?|Did he eat lunch?|Use base eat after did.
Correct: They did not came.|They did not come.|Use base come after did not.|They didn't come.`),order:T(`Order: town / to / went / I|I went to town.|Use went in a positive past statement.
Order: bought / She / bread / some|She bought some bread.|Bought is the past of buy.
Order: you / Did / see / it|Did you see it?|Did takes base see.
Order: take / not / did / We / it|We did not take it.|Use base take after did not.
Order: at / six / home / got / He|He got home at six.|Got home means arrived home.`),reading:'On Saturday, Owen went to a market with his sister. They took the bus and got there at nine. Owen bought some vegetables, and his sister found a second-hand book. They met a neighbour near the fruit stall and had a short conversation. At midday, they ate lunch in a café. Owen wrote a shopping reminder on his phone before they came home. He did not buy any coffee because there was enough at home.',read:Q(`Where did Owen go?|To a market|To an airport|To an office|The opening sentence names the market.
How did they travel?|By bus|By car|On foot|They took the bus.
What did his sister find?|A second-hand book|A phone|A suitcase|She found a book.
Who did they meet?|A neighbour|Their teacher|A supplier|They met a neighbour near the fruit stall.
Why did Owen not buy coffee?|There was enough at home.|He forgot his money.|The café was closed.|The text gives the reason explicitly.`),write:T(`Write three past actions with go, buy and eat.|I went to town, bought bread and ate lunch.|Use went, bought and ate with a clear finished context.
Write a sentence with an unchanged past verb.|I put the keys on the shelf yesterday.|Use put and a past reference to clarify time.
Ask a question using the base form of take.|Did you take the bus?|Did requires base take.
Write a past negative with come.|She did not come to the meeting.|Use did not + base come.
Retell a short outing using regular and irregular verbs.|We went to the park, walked by the lake and came home at four.|Check each verb independently; past verbs do not all end in -ed.`)},sources:past,related:['052','053','055','056','057']};
L['055']={intro:'Say what did not happen in a finished past situation. Build did not + base verb with both regular and irregular verbs, use the contracted form and recognise when a past-be negative needs was not or were not instead.',goals:['Make did not + base verb negatives.','Use didn’t with regular and irregular verbs.','Keep the same did form with all subjects.','Choose was not/were not for past be.','State a negative with a clear time and meaning.'],sections:[
S('Negate a finished past action','A positive sentence says an action happened; a negative says it did not happen in the relevant situation. I called yesterday and I did not call yesterday disagree about yesterday. The negative does not necessarily say anything about every other day.', ['I did not work on Sunday.','She did not buy the coat.','A past time reference can be stated or understood from the conversation.']),
S('Let did carry the past marking','Use subject + did not + base verb. The base verb has no -ed, no irregular past change and no third-person -s. This pattern works with ordinary regular and irregular main verbs.', ['Worked → did not work. Went → did not go.','Studied → did not study. Bought → did not buy.','Do not write did not worked or did not went.'],tb(['Positive past','Negative past','Why'],`She worked.|She did not work.|Did carries the past.
He went.|He did not go.|Return went to go.
They studied.|They did not study.|Return studied to study.`)),
S('Use did not with every subject','Did does not change with the subject. I did not, she did not and they did not all use did. Don’t and doesn’t are present forms; use didn’t for the past negative in this pattern.', ['He did not call, not He does not call yesterday.','We did not see it. They did not see it.','The main verb do also becomes base do: I did not do the washing.']),
S('Use the contraction appropriately','Did not contracts to didn’t. The meaning stays the same, although full did not can sound more deliberate or formal. Include the apostrophe in ordinary writing. In conversation the contraction is very common.', ['I didn’t hear you.','She didn’t finish the report.','Full and contracted forms are both valid: choose the requested form in a controlled exercise.']),
S('Past be uses a different negative','Use was not/wasn’t or were not/weren’t for simple past be. Do not put did not before was/were. Compare an action with a state: She did not work yesterday; she was not well yesterday.', ['I was not at home. They were not ready.','There was not any milk. There were not any seats.','He did not be late is not the ordinary past-be pattern; use He was not late.']),
S('Check scope and avoid a double negative','A useful negative identifies the event, item or time being denied. I did not buy the red coat leaves other purchases possible. In standard English, avoid combining didn’t with never to express a single negative; use did not go or never went.', ['I did not go yesterday; I went on Monday.','I never went there as a child uses never with a positive-shaped past verb.','I did not buy anything and I bought nothing are alternative patterns; keep one negative pattern at this level.'])],examples:R(`I did not work yesterday.|Did not + base work.
You did not call.|The helper stays did.
He did not answer.|No -s after did.
She did not study.|Return studied to study.
We did not wait.|A regular base verb.
They did not arrive early.|Arrive follows did not.
I did not go to town.|Return went to go.
He did not see the sign.|Return saw to see.
She did not buy the coat.|Return bought to buy.
We did not take the bus.|Return took to take.
They did not eat lunch.|Return ate to eat.
I did not write the email.|Return wrote to write.
She did not have breakfast.|Use base have, not had.
He did not do the washing.|Do can be the main verb.
I didn’t hear you.|A common contraction.
She didn’t finish the form.|A contracted regular-verb negative.
We didn’t meet the manager.|A contracted irregular-verb negative.
They didn’t come on Friday.|Come stays base after didn't.
I did not buy any bread.|Any fits the negative quantity.
We did not see anyone.|A standard single-negative pattern.
I was not at home.|Past be takes not directly.
He wasn’t well.|A past-be contraction.
They were not ready.|Were agrees with they.
We weren’t late.|No did is needed.
There was not any milk.|An existence negative.
There were not any tickets.|Plural past existence.
I did not go yesterday; I went on Monday.|The negative has a limited time scope.
She did not buy the red coat.|Another purchase is still possible.
I never visited that museum as a child.|Never supplies the negative meaning.
He did not work because he was ill.|Action negative and past-be state combine.`),dialogues:[D('A call',`Ada|Did you call the office?
Ben|No, I did not.
Ada|Why not?
Ben|I did not have the number.`),D('A purchase',`Jo|Did you buy the blue coat?
Lee|No, I did not buy it.
Jo|Was it too expensive?
Lee|Yes. I bought a cheaper jacket.`),D('Yesterday',`Sam|Did Mina work yesterday?
Kim|No, she did not work.
Sam|Was she on holiday?
Kim|No. She was not well.`),D('A correction',`Tutor|Say this in the negative: I went there.
Learner|I did not go there.
Tutor|Why not went?
Learner|Did already carries the past marking.`),D('A missed message',`Colleague|I sent you a message last night.
Worker|Sorry, I did not see it.
Colleague|Were you online?
Worker|No, I was not. I checked it this morning.`)],mistakes:R(`I did not worked.|I did not work.|Use a base verb after did not.
She did not went.|She did not go.|Return went to go.
He does not call yesterday.|He did not call yesterday.|Use the past helper for this past event.
We did not were ready.|We were not ready.|Past be uses were not.
I didn't never visit it. Use a single did negative.|I did not visit it.|Use one negative pattern in standard English.`),practice:{mc:Q(`Complete: She did not ___ yesterday.|work|worked|works|Use base work after did not.
Complete: We did not ___ there.|go|went|gone|Use base go.
Choose the past negative.|He did not call.|He does not called.|He did not calls.|Did is unchanged and call is base.
Choose the contraction of did not.|didn't|did'nt|doesn't|The apostrophe follows n in didn't.
Complete: I did not ___ breakfast.|have|had|has|Use base have.
Choose a past-be negative.|They were not ready.|They did not were ready.|They did not be ready yesterday.|Use were not for past be.
Choose a standard single negative.|I did not see anyone.|I did not see nobody.|I didn't never see anyone.|Use not with anyone in this pattern.
Which is a present negative?|She does not drive.|She did not drive.|She was not there.|Does not is present simple.
Complete: He did not ___ the washing.|do|did|done|Main-verb do stays base after did not.
I did not buy the red coat means...|That coat was not bought by me in the relevant situation.|I can never buy any coat.|I bought no objects at any time.|The statement denies a specific purchase, not every possible purchase.`),gap:T(`She did not ___ (study) last night.|study|Use the base verb.
We did not ___ (take) the bus.|take|Return took to take.
I did not ___ (see) the sign.|see|Return saw to see.
He did not ___ (have) lunch.|have|Use have after did not.
They did not ___ (come) on Friday.|come|Use base come.
Write the contraction of did not.|didn't|Include the apostrophe.
I ___ not call yesterday. Use the past helper.|did|Did forms the past negative.
She ___ not at home last night. Use past be.|was|She takes was, without did.
They ___ not ready yesterday. Use past be.|were|They takes were.
We did not buy ___ bread. Use the usual neutral quantity word.|any|Any is usual in this negative.`),correct:T(`Correct: I did not worked yesterday.|I did not work yesterday.|Use base work.|I didn't work yesterday.
Correct: She did not went home.|She did not go home.|Use base go.|She didn't go home.
Correct: He did not saw it.|He did not see it.|Use base see.|He didn't see it.
Correct: They did not were late.|They were not late.|Use were not for past be.|They weren't late.
Correct: We did not had lunch.|We did not have lunch.|Use base have.|We didn't have lunch.`),order:T(`Order: not / did / work / I / yesterday|I did not work yesterday.|Did not precedes base work.
Order: go / did / She / not|She did not go.|Use base go.
Order: it / see / not / We / did|We did not see it.|Use base see.
Order: ready / not / They / were|They were not ready.|Past be takes not directly.
Order: the / do / washing / not / did / He|He did not do the washing.|The first did is the helper; do is the main verb.`),reading:'Yesterday, Grace planned to visit a museum, but she did not go. Her friend could not join her, and Grace did not want to travel alone. She stayed at home instead. She did not watch television; she read a book and cooked lunch. In the afternoon, a colleague called, but Grace did not hear her phone. She saw the missed call later and sent a message. She was not upset about the changed plan.',read:Q(`Did Grace visit the museum?|No|Yes|Only in the evening|She planned it but did not go.
Why did she stay home?|She did not want to travel alone.|The museum was closed.|She had no book.|The stated reason is not wanting to travel alone.
What did she do instead of watching television?|Read and cooked|Went shopping|Drove to work|Both activities are named.
Why did she miss the call?|She did not hear her phone.|Her phone was lost.|The caller had the wrong number.|The text says she did not hear it.
Was she upset about the changed plan?|No|Yes|The text does not say.|The final sentence says she was not upset.`),write:T(`Write a negative about a finished regular action.|I did not work on Sunday.|Use did not + base verb and a clear past context.
Write a negative with the verb go.|I did not go to town yesterday.|Use go, not went, after did not.
Write a contracted past negative.|I didn't see the message.|Use didn't + base verb.
Contrast a past-be negative and an action negative.|I was not well, so I did not go to work.|Use was not for a state and did not + base for the action.
Correct a mistaken assumption about yesterday.|I did not buy a coat yesterday. I bought shoes.|Deny one specific action and state what actually happened.`)},sources:past,related:['052','053','054','056']};

L['056']={intro:'Ask about completed past events, places, reasons and people. Practise did + subject + base verb, keep past-be questions separate and recognise the useful difference between Who called? and Who did you call?',goals:['Build did questions with base verbs.','Use question words before did.','Give appropriate short and full answers.','Ask past-be questions without did.','Recognise simple subject questions with who.'],sections:[
S('Start ordinary past questions with did','Use did + subject + base verb for yes/no questions about ordinary completed past actions. Did works with every subject. The main verb loses its positive past marking because did already carries it.', ['Did you work yesterday?','Did she go home? Not Did she went home?','Did they have lunch? uses have, not had.']),
S('Put an information phrase before did','When you need a particular detail, put what, where, when, why, how or a longer question phrase before did. Keep did + subject + base verb after that phrase.', ['Where did you stay? When did she arrive?','How many tickets did they buy?','What time did the train leave?'],tb(['Information needed','Question','Possible answer'],`Place|Where did you stay?|In York.
Time|When did she arrive?|At six.
Object|What did you buy?|A notebook.`)),
S('Use did in short answers','Answer a did yes/no question with Yes, subject + did or No, subject + did not/didn’t. The subject should match the speaker’s perspective. You may add a full sentence with an ordinary past form.', ['Did you go? — Yes, I did. I went at nine.','Did Ada call? — No, she did not.','Do not answer Yes, I went as the controlled short-answer pattern, although a full factual reply such as I went yesterday can be natural in conversation.']),
S('Be asks its own questions','For past be, move was/were before the subject instead of using did. Choose was/were from the subject. Use the same past-be form in a short answer.', ['Was the room quiet? — Yes, it was.','Where were you yesterday? — I was at home.','Did you be there? is not the ordinary past-be question.']),
S('Who can be the subject or the object','Who called? asks which person performed the call. In a simple affirmative subject question like this, use the past verb without did. Who did you call? already has you as its subject and asks whom you contacted.', ['Who helped you? — Mina helped me.','Who did you help? — I helped Mina.','Emphatic Who did call? exists in special contexts, but the neutral subject question taught here is Who called?']),
S('Ask one clear question and follow the answer','Choose the missing information before choosing the question word. Where needs a place; when needs a time; why needs a reason. Follow-up questions make a conversation useful rather than a disconnected exercise.', ['Where did you go? — To Bath. How did you travel? — By train.','For an ambiguous answer, ask a clear follow-up: Which station did you use?','Check both the helper and the main verb when proofreading.'])],examples:R(`Did you work yesterday?|Did + subject + base verb.
Did he call the office?|Call stays base.
Did she go home?|Go replaces positive went.
Did they buy the tickets?|Buy replaces positive bought.
Did we arrive early?|Did also works with we.
Did you have breakfast?|Use have after did.
Did he do the washing?|Do is the main verb after helper did.
Where did you stay?|Where asks for a place.
When did she arrive?|When asks for time.
Why did they leave?|Why asks for a reason.
How did you travel?|How asks about the method.
What did he buy?|What asks about the object.
What time did the train leave?|A time phrase begins the question.
How many tickets did she buy?|The whole quantity phrase comes first.
Which bus did you take?|Which selects from possibilities.
Yes, I did.|A positive short answer.
No, she did not.|A full negative short answer.
No, they didn’t.|A contracted negative short answer.
Yes, he did. He called at nine.|Short and full answers combine.
Was the shop open?|Past be does not use did.
Were you tired?|Were precedes you.
Where were they?|An information question with past be.
Yes, it was.|A past-be short answer.
No, we weren’t.|A negative past-be answer.
Who called you?|Who is the subject.
Who did you call?|You is the subject; who is the object.
Who helped Sam?|Who performs the action.
Who did Sam help?|Sam performs the action.
I went to Bath by train.|A full answer uses past went.
Because the shop was closed.|A reason can answer why.`),dialogues:[D('A trip',`Ada|Where did you go on Saturday?
Ben|I went to Bath.
Ada|How did you travel?
Ben|By train.`),D('A time',`Jo|What time did you arrive?
Lee|At ten.
Jo|Was the office open?
Lee|Yes, it was.`),D('A purchase',`Sam|Did you buy a ticket?
Kim|Yes, I did.
Sam|How much did it cost?
Kim|Twelve pounds.`),D('Caller and recipient',`Tutor|Who called you yesterday?
Learner|Mina called me.
Tutor|Who did you call afterwards?
Learner|I called my brother.`),D('A reason',`Manager|Why did you leave early?
Worker|I had an appointment.
Manager|Did you finish the report first?
Worker|Yes, I did. I sent it at three.`)],mistakes:R(`Did she went home?|Did she go home?|Use base go after did.
Where you stayed?|Where did you stay?|Use did + subject + base verb.
Did he had lunch?|Did he have lunch?|Use base have.
Did they were tired?|Were they tired?|Past be asks its own question.
Who did called you? Use a neutral subject question.|Who called you?|Who is the subject, so no did is needed.`),practice:{mc:Q(`Choose the question.|Did she go?|Did she went?|Did she goes?|Did takes base go.
Complete: Where ___ you stay?|did|was|were|Stay is an ordinary main verb in this past question.
Complete: Did he ___ lunch?|have|had|has|Use base have.
Answer: Did you call?|Yes, I did.|Yes, I was.|Yes, I do.|Use did in the short answer.
Choose the past-be question.|Were they ready?|Did they were ready?|Did they be ready?|Invert were and they.
You need a reason. Choose the question.|Why did she leave?|Where did she leave?|When did she leave?|Why asks for the reason.
You need a method of travel.|How did you travel?|Who travelled?|When did you travel?|How asks about the method here.
Which neutral question asks for the caller?|Who called you?|Who did you call?|Who you called?|Who called you has who as its subject.
Which question asks for the recipient of your call?|Who did you call?|Who called you?|Who was calling you now?|You is the subject in Who did you call?
Complete: What time did the train ___?|leave|left|leaves|Use base leave.`),gap:T(`___ you work yesterday? Use the past helper.|Did|Did forms an ordinary past question.
Where did she ___ (go)?|go|Use the base verb.
What did they ___ (buy)?|buy|Use the base verb.
Did he ___ (have) breakfast?|have|Use have, not had.
Did you call? Yes, I ___.|did|Repeat did in the short answer.
Did Mina leave? No, she ___. Use the full negative.|did not|Use did not in the short answer.
___ the shop open yesterday? Use past be.|Was|Shop is singular.
Where ___ you last night? Use past be.|were|You takes were.
Who ___ (call) you yesterday? Ask neutrally about the caller.|called|Who is the subject; use the past verb.
How many tickets did she ___ (need)?|need|Did requires the base verb.`),correct:T(`Correct: Did you saw the sign?|Did you see the sign?|Use base see.
Correct: Where did he went?|Where did he go?|Use base go.
Correct: What you bought yesterday?|What did you buy yesterday?|Add did and use base buy.
Correct: Did she was at home?|Was she at home?|Past be does not use did.
Correct: Who did helped you? Use a neutral subject question.|Who helped you?|Who is the subject; use helped without did.`),order:T(`Order: you / Did / work / yesterday|Did you work yesterday?|Did comes before you.
Order: stay / did / Where / she|Where did she stay?|Where + did + subject + base verb.
Order: they / What / buy / did|What did they buy?|What asks about the purchased item.
Order: ready / Were / you|Were you ready?|Past be inverts directly.
Order: you / called / Who|Who called you?|Who is the subject.`),reading:'Yesterday, Theo went to a job interview. He travelled by train and arrived at the office at nine fifteen. The receptionist showed him the waiting room. The interview started at nine thirty and lasted forty minutes. Theo spoke to two managers. After the interview, he called his sister. She asked, “Were you nervous?” Theo said he was nervous at first, but the managers were friendly. He did not receive a decision that day.',read:Q(`How did Theo travel?|By train|By bus|By car|The passage states the travel method.
When did he arrive?|At nine fifteen|At nine thirty|At ten ten|Arrival and interview start are different times.
Who showed him the waiting room?|The receptionist|His sister|A passenger|The receptionist performed the action.
Who did Theo call afterwards?|His sister|The receptionist|A manager|His sister was the recipient.
Did he receive a decision that day?|No|Yes|Before the interview|The final sentence says he did not.`),write:T(`Ask a yes/no question about a finished action.|Did you visit the museum yesterday?|Use did + subject + base verb.
Ask where someone went.|Where did you go on Saturday?|Put the question word before did.
Write a short answer and a full answer.|Yes, I did. I visited the museum at ten.|Use did in the short answer and a past verb in the full answer.
Ask a question about a past state.|Were you tired yesterday?|Use was/were without did.
Write two questions showing caller versus recipient.|Who called you? Who did you call?|Use a subject question for the caller and did + you for the recipient.`)},sources:past,related:['052','053','054','055','057']};

L['057']={intro:'Place past events on a clear timeline with yesterday, last and ago. Combine accurate time phrases with first, then and after that so a listener can follow the order of your story.',goals:['Use yesterday and last time phrases without extra prepositions.','Place ago after a period of time.','Distinguish ago from a named past date.','Sequence a short past account clearly.','Use before and after to connect events.'],sections:[
S('Yesterday is the day before today','Yesterday names a day relative to today. Use yesterday, yesterday morning, yesterday afternoon or yesterday evening without an extra at, on or in. Last night is the usual phrase for the night before today.', ['I called yesterday. I worked yesterday morning.','Yesterday can appear at the beginning or end: Yesterday, I called. I called yesterday.','Do not write on yesterday or in yesterday morning.']),
S('Last + period refers to the previous period','Use last week, last month, last year and last Monday without an added preposition. Last week refers to the previous calendar week; a week ago locates an event roughly one week before now. Context can matter for weekday references.', ['We moved last year.','She arrived last Monday.','In the last week is a different phrase about a recent interval; do not use it as an automatic replacement for last week.']),
S('Put ago after a time distance','A period + ago measures backwards from now. Use two days ago, a month ago or ten years ago. Ago normally follows the quantity phrase; it does not go before it. More than one normally needs a plural time unit.', ['I met her three days ago.','We moved a year ago.','I started this job two months ago, not ago two months.'],tb(['Kind of reference','Useful phrase','Example'],`Previous day|yesterday|I called yesterday.
Previous period|last month|We moved last month.
Distance back from now|three weeks ago|She arrived three weeks ago.
Named year|in 2020|I started in 2020.`)),
S('Named dates keep their normal prepositions','Use in with a named year or month, on with a day or date and at with a clock time. Compare last Monday with on Monday. The word last changes the structure of the time phrase.', ['We met in 2020. We met last year.','She arrived on Monday at nine.','Use a clear reference date in an exercise if you want an exact calendar answer for ago.']),
S('Show sequence with first, then and finally','Past verbs state completed events; sequence words show their relationship. First introduces the starting event, then/after that continue, and finally marks the last event in the account. You do not need a sequence marker in every sentence.', ['First, I checked the address. Then I took the bus.','After that, I walked to the office. Finally, I met the manager.','Keep the sequence logical; writing finally does not fix an unclear timeline.']),
S('Use before and after to relate events','Before and after can connect one event or time to another. After lunch, we walked home uses a noun phrase. I called before I left connects clauses. Ago usually points back from now; before can point back from a different stated event.', ['I left ten minutes ago relates leaving to now.','I arrived ten minutes before the meeting relates arrival to the meeting.','Retell only the details needed for the listener to understand what happened and when.'])],examples:R(`I called yesterday.|No preposition before yesterday.
She worked yesterday morning.|A specified yesterday phrase.
We met yesterday afternoon.|No in is added.
They arrived yesterday evening.|Yesterday evening is a complete time phrase.
I stayed at home last night.|Last night is the usual expression.
He moved last week.|No in before last week.
We travelled last month.|A previous calendar month.
She started last year.|A previous year.
They arrived last Monday.|No on before last Monday.
I saw her two days ago.|Ago follows the time distance.
We moved a month ago.|A singular unit with a.
He called ten minutes ago.|Plural minutes follows ten.
She left an hour ago.|An precedes hour.
I started this job three years ago.|A distance back from now.
We met in 2020.|In goes with a named year.
They moved in June.|In goes with a named month.
She arrived on Monday.|On goes with a day name.
The meeting started at nine.|At goes with a clock time.
First, I checked the address.|Begin the sequence.
Then I took the bus.|Continue with the next action.
After that, I walked to the office.|Add the next stage.
Finally, I met the manager.|Mark the final event.
I had breakfast before I left.|Before connects two events.
After lunch, we walked home.|After introduces a noun phrase.
I called after I arrived.|After connects clauses.
We arrived before the meeting.|Before relates arrival to a named event.
She arrived ten minutes before the meeting.|The meeting is the reference point.
She left ten minutes ago.|Now is the reference point.
Yesterday, I cooked dinner and washed up.|One time reference can cover two actions.
I worked on Friday, but I rested on Saturday.|Named days use on.`),dialogues:[D('A recent call',`Ada|When did Mina call?
Ben|Ten minutes ago.
Ada|Was she at work?
Ben|No, she was at home.`),D('A previous week',`Jo|When did you visit the museum?
Lee|Last week.
Jo|Which day?
Lee|On Thursday.`),D('A sequence',`Tutor|What happened first?
Learner|First, I checked the address.
Tutor|What happened next?
Learner|Then I took the bus to the office.`),D('A relative time',`Sam|When did you arrive?
Kim|Ten minutes before the meeting.
Sam|And when did the meeting start?
Kim|At nine, so I arrived at eight fifty.`),D('A short account',`Colleague|How was your evening?
Worker|First, I cooked dinner. Then I called my sister.
Colleague|What did you do after that?
Worker|I read a book and went to bed.`)],mistakes:R(`I called on yesterday.|I called yesterday.|Omit on before yesterday.
We moved in last year.|We moved last year.|Omit in before last year.
She left ago two hours.|She left two hours ago.|Ago follows the time distance.
I started two month ago.|I started two months ago.|Use plural months after two.
We met on 2020.|We met in 2020.|Use in with a named year.`),practice:{mc:Q(`Choose the natural phrase.|yesterday morning|in yesterday morning|on yesterday morning|Yesterday morning takes no extra preposition.
Complete: We moved ___ last year. Choose the needed addition.|No extra word|in|on|Last year is complete without a preposition.
Choose the correct ago order.|two days ago|ago two days|two ago days|Ago follows the time phrase.
Complete: We met ___ 2020.|in|on|at|Use in with a year.
Complete: She arrived ___ Monday.|on|in|at|Use on with the day name.
Choose the plural time phrase.|three weeks ago|three week ago|three weeks last ago|Three needs plural weeks.
Which usually refers back from now?|Ten minutes ago|Ten minutes before the meeting|Before lunch|Ago measures back from now.
Which marks the final event in an account?|Finally|First|Yesterday|Finally signals the last stage.
Complete: I called ___ I arrived. The arrival happened first.|after|before|ago|The call was after the arrival.
The meeting began at nine. She arrived ten minutes before it. When did she arrive?|At eight fifty|At nine ten|At ten|Subtract ten minutes from nine.`),gap:T(`I called ___. Use the word for the day before today.|yesterday|Yesterday needs no preposition.
We moved ___ year. Use the previous-period word.|last|Last year refers to the previous year.
She left two hours ___.|ago|Ago follows the time distance.
I started three ___ ago. Use month.|months|Three needs a plural unit.
We met ___ 2020.|in|Use in with a year.
She arrived ___ Friday.|on|Use on with a day.
The call began ___ nine.|at|Use at with a clock time.
___, I checked the address. Use the opening sequence word.|First|First begins the account.
I had lunch. ___ that, I walked home.|After|After that continues the sequence.
I arrived ten minutes ___ the meeting. I was early.|before|Before places arrival earlier than the meeting.`),correct:T(`Correct: I visited on yesterday.|I visited yesterday.|Omit on.
Correct: We moved in last month.|We moved last month.|Omit in before last month.
Correct: She called ago ten minutes.|She called ten minutes ago.|Put ago after the time phrase.
Correct: I started two year ago.|I started two years ago.|Two takes plural years.
Correct: We met at 2019.|We met in 2019.|Use in with the named year.`),order:T(`Order: yesterday / I / called|I called yesterday.|Yesterday can finish the sentence.
Order: last / moved / We / year|We moved last year.|Keep last year together.
Order: ago / left / two / She / hours|She left two hours ago.|Ago follows two hours.
Order: I / First / checked / address / the|First, I checked the address.|First introduces the opening event.
Order: home / lunch / walked / After / we|After lunch, we walked home.|After lunch provides the time reference.`),reading:'Yesterday, Dev visited a training centre. First, he checked the address on his phone. Then he took a bus at eight. He arrived at eight forty-five, fifteen minutes before the session. The session started at nine and finished at midday. After lunch, Dev spoke to the tutor and collected a certificate of attendance. Finally, he travelled home. He registered for the session two weeks ago.',read:Q(`What did Dev do first?|Checked the address|Collected a certificate|Had lunch|The first sequence marker identifies the address check.
When did he take the bus?|At eight|At nine|At midday|The bus time is eight.
How early did he arrive?|Fifteen minutes|Forty-five minutes|Two hours|Eight forty-five is fifteen minutes before nine.
What did he do after lunch?|Spoke to the tutor|Registered for the session|Checked the address for the first time|The text places the tutor conversation after lunch.
When did he register?|Two weeks ago|Yesterday afternoon|Last night|The final sentence gives the earlier registration time.`),write:T(`Write one sentence with yesterday.|I visited my aunt yesterday.|Do not add at/on/in before yesterday.
Write a sentence with last and a period.|We travelled last month.|Use last week/month/year without an extra preposition.
Write a sentence with ago.|I started this course two weeks ago.|Put ago after the time phrase and check unit number.
Write a three-event past account.|First, I cooked lunch. Then I washed up. Finally, I read a book.|Keep the action order clear and use past verbs.
Contrast a time measured from now with one measured from an event.|I left ten minutes ago. I arrived ten minutes before the meeting.|Use ago for now and before for the stated event reference.`)},sources:past,related:['041','053','054','056']};
L['058']={intro:'Talk about plans you have already considered and predictions based on present evidence. Build be going to + base verb, ask about intentions and distinguish this future pattern from going to a place.',goals:['Build be going to + base verb plans.','Match am/is/are to the subject.','Make negatives and questions.','Recognise an evidence-based prediction.','Distinguish future going to from movement to a place.'],sections:[
S('Express an intention or an existing plan','Be going to + base verb is common when a speaker already has an intention or plan. The decision may be recent, but it exists before the speaker announces it. A plan can change; this grammar does not guarantee that the action will happen.', ['I am going to study tonight.','We are going to visit our cousins next month.','Add a time or reason to make a plan informative.']),
S('Build all three parts','Use subject + am/is/are + going to + base verb. The form of be agrees with the subject. Going to stays the same, and the main verb has no -s or -ing ending in this pattern.', ['I am going to work. She is going to work. They are going to work.','He is going to cook, not He going to cooks.','Use be after going to when the main verb is be: It is going to be busy.'],tb(['Subject','Be','Future phrase'],`I|am|going to study
he / she / it|is|going to study
you / we / they|are|going to study`)),
S('Negatives keep not after be','Put not after am/is/are. Use contractions where appropriate: I’m not going to, she isn’t going to or she’s not going to. The intended meaning is a future plan not to act, rather than a past failure.', ['I am not going to drive tonight.','They are not going to buy the flat.','Do not use do not going to; the helper in this structure is be.']),
S('Move be for questions','Put am/is/are before the subject, then going to + base verb. Add a question word at the front when asking for information. In a short answer, use be, not going to by itself.', ['Are you going to apply? — Yes, I am.','What is she going to study?','When are they going to leave? — Tomorrow morning.']),
S('Predict from present evidence','Going to can predict what seems likely from evidence now. Look at those dark clouds. It is going to rain. The prediction is a speaker’s interpretation of evidence, not an absolute certainty. Will can also express predictions; context shapes the choice.', ['The glass is near the edge. It is going to fall.','The room is full and more people are arriving. It is going to be crowded.','Do not reduce every future choice to a single time word; tomorrow works with several future forms.']),
S('Separate future intention from movement','I am going to London uses going as movement and London as a destination. I am going to study uses going to + base verb as a future pattern. I am going to go to London is also grammatical, though a speaker may choose a shorter arrangement form.', ['Destination after to: I am going to the station.','Base verb after to: I am going to call the station.','Gonna represents informal speech in some writing; use going to in these standard written exercises.'])],examples:R(`I am going to study tonight.|An existing intention.
She is going to cook dinner.|Is agrees with she.
We are going to visit York.|Are agrees with we.
They are going to take the bus.|Take stays in the base form.
He is going to write an email.|Write follows going to.
I’m going to apply for the job.|A contracted plan statement.
She’s going to learn French.|She's means she is here.
We’re going to leave early.|A plural contraction.
It is going to be busy.|Be is the main base verb.
I am not going to drive.|Not follows am.
She is not going to buy it.|A negative plan.
They are not going to stay.|Are not agrees with they.
He isn’t going to join us.|A negative contraction.
We aren’t going to work tomorrow.|The negative uses be, not do.
Are you going to apply?|Move are before you.
Is she going to study?|Move is before she.
Are they going to come?|The main verb remains base come.
What are you going to cook?|Ask about the planned activity.
When is he going to leave?|Ask the planned time.
Where are they going to stay?|Ask the planned place.
Yes, I am.|A short answer uses be.
No, she is not.|A negative short answer.
Yes, they are.|A plural short answer.
Look at the clouds. It is going to rain.|A prediction based on present evidence.
The glass is near the edge. It is going to fall.|Visible evidence supports a prediction.
It is going to be crowded.|A prediction can use be.
I am going to London.|Going describes movement to a place.
I am going to call London.|Going to introduces the base verb call.
We are going to go to the coast.|Going to go is grammatical.
I am going to practise because I want to improve.|A reason makes the plan clear.`),dialogues:[D('Tonight',`Ada|What are you going to do tonight?
Ben|I am going to study.
Ada|Are you going to watch the match too?
Ben|No, I am not.`),D('A trip',`Jo|Where are you going to stay?
Lee|We are going to stay with friends.
Jo|How are you going to travel?
Lee|We are going to take the train.`),D('Evidence',`Sam|Look at those dark clouds.
Kim|It is going to rain.
Sam|Are you going to walk home?
Kim|No. I am going to take the bus.`),D('A plan',`Manager|Is Mina going to apply for the role?
Colleague|Yes, she is.
Manager|When is she going to send the form?
Colleague|Tomorrow morning.`),D('Two meanings',`Tutor|What does I am going to the station describe?
Learner|Movement to a destination.
Tutor|What about I am going to call the station?
Learner|A plan to make a call.`)],mistakes:R(`I going to study.|I am going to study.|The pattern needs am.
She are going to cook.|She is going to cook.|She takes is.
He is going to buys it.|He is going to buy it.|Use a base verb after going to.
Do you going to apply?|Are you going to apply?|Move are before you.
We do not going to stay.|We are not going to stay.|Use are not with this structure.`),practice:{mc:Q(`Complete: I ___ going to study.|am|is|are|I takes am.
Complete: She ___ going to cook.|is|are|do|She takes is.
Complete: They are going to ___.|leave|leaves|leaving|Use the base verb.
Choose the negative.|We are not going to stay.|We do not going to stay.|We not are going to stay.|Not follows are.
Choose the question.|Are you going to apply?|Do you going to apply?|You are going apply?|Move are before you.
Answer: Is he going to come?|Yes, he is.|Yes, he does.|Yes, he going.|Short answers use be.
Which contains going to + future base verb?|I am going to call the station.|I am going to the station.|I went to the station.|Call is the base verb after going to.
Complete: It is going to ___ busy.|be|is|being|Use base be.
Dark clouds support which prediction?|It is going to rain.|It rained last year.|It never rains.|Present evidence supports the future prediction.
Which statement is grammatical?|We are going to go to York.|We are going go York.|We going to goes York.|Going to go is allowed.`),gap:T(`I ___ going to study. Use be.|am|I takes am.
She ___ going to travel. Use be.|is|She takes is.
We ___ going to leave. Use be.|are|We takes are.
He is going to ___ (cook).|cook|Use the base verb.
They are going to ___ (buy) a car.|buy|Use the base verb.
It is going to ___ (be) cold.|be|The base form is be.
___ you going to apply? Use be.|Are|Are starts the question.
What ___ she going to do? Use be.|is|She takes is.
Are they going to come? Yes, they ___.|are|Use be in the short answer.
I am ___ going to drive. Add the negative word.|not|Not follows am.`),correct:T(`Correct: I going to work.|I am going to work.|Add am.|I'm going to work.
Correct: She are going to apply.|She is going to apply.|She takes is.|She's going to apply.
Correct: He is going to buys a ticket.|He is going to buy a ticket.|Use base buy.
Correct: Do you going to study?|Are you going to study?|Use are before you.
Correct: They do not going to stay.|They are not going to stay.|Use are not.|They aren't going to stay.~They're not going to stay.`),order:T(`Order: am / study / I / going / to|I am going to study.|Keep be going to + base verb.
Order: going / She / cook / to / is|She is going to cook.|Is agrees with she.
Order: you / going / Are / apply / to|Are you going to apply?|Move are before you.
Order: not / stay / to / We / are / going|We are not going to stay.|Put not after are.
Order: to / going / do / What / you / are|What are you going to do?|Question word + are + subject + going to + verb.`),reading:'Mira has decided to take an evening course. She is going to study bookkeeping because she wants to apply for an office job. The course begins next month. Her brother is going to help her practise using spreadsheets. Mira is not going to leave her current job yet. She is going to study on Tuesday and Thursday evenings. Today she is looking at the course website and preparing her application.',read:Q(`What has Mira decided to study?|Bookkeeping|Driving|Photography|Her course choice is bookkeeping.
Why does she want to study it?|To apply for an office job|To open a café tomorrow|To become a train driver|The text gives the office-job intention.
Who is going to help with spreadsheets?|Her brother|Her manager|Her neighbour|Her brother has that planned role.
Is she going to leave her job yet?|No|Yes, today|Yes, before applying|She is not going to leave it yet.
Which evenings is she going to study?|Tuesday and Thursday|Monday and Wednesday|Saturday and Sunday|Both evenings are stated.`),write:T(`Write a personal plan with going to.|I am going to practise English tonight.|Use the correct be form and a base verb.
Write a negative plan.|I am not going to drive tomorrow.|Put not after be.
Ask someone about a future intention.|What are you going to study next year?|Use be before the subject in the question.
Write a prediction based on visible evidence.|Look at those clouds. It is going to rain.|Include the evidence and the prediction.
Contrast movement and a future plan.|I am going to the library. I am going to borrow a book.|One to phrase ends in a place; the other introduces a base verb.`)},sources:future,related:['043','045','057','059']};

L['059']={intro:'Use will for basic predictions, decisions made in the conversation, offers and promises. Keep the modal structure simple, learn won’t and compare will with going to without treating the choice as an absolute rule.',goals:['Build will + base verb statements.','Use will not and won’t.','Ask will questions and answer briefly.','Use will for basic decisions, offers and predictions.','Compare will and going to in context.'],sections:[
S('Will is a modal with one form','Use subject + will + base verb. Will does not change with the subject. Do not add to or an -s ending to the next verb. If the main verb is be, use will be, not will is or will are.', ['I will call. She will call. They will call.','The office will be busy.','We will have time: use have, not has.']),
S('Learn contractions and the negative','I will contracts to I’ll; you will to you’ll; she will to she’ll, and so on. Will not contracts to won’t, an irregular contraction. Use the full form when clarity or emphasis requires it.', ['I will not forget. I won’t forget.','He’ll call later. They’ll arrive tomorrow.','In a positive short answer, use Yes, I will rather than Yes, I’ll.'],tb(['Full form','Contraction','Example'],`I will|I'll|I'll help.
She will|She'll|She'll call.
They will|They'll|They'll arrive.
will not|won't|I won't forget.`)),
S('Respond with a decision or an offer','Will often expresses a decision made as the speaker responds to a situation. I’ll answer it after hearing the phone is a typical example. I’ll help you carry that is an offer. The situation gives the meaning.', ['The phone is ringing. I will answer it.','Those bags look heavy. I will help you.','Use a realistic promise: I will send the form this afternoon. The grammar alone does not make a promise reliable.']),
S('Make a basic prediction','Will can express what the speaker thinks will happen. I think it will rain tomorrow is an opinion about the future. Probably and perhaps can show uncertainty. A future sentence is not automatically certain merely because it contains will.', ['She will probably arrive at six.','I think the journey will take an hour.','I do not think it will be busy is a common way to express a negative prediction.']),
S('Move will for questions','Put will before the subject and keep the base verb. A question phrase can come first. Use will/won’t in short answers, matching the subject and perspective.', ['Will you be there? — Yes, I will.','When will they arrive? — At seven.','Do you will come? is incorrect; will is already the modal helper.']),
S('Compare future choices in context','Going to often presents an existing plan or prediction from present evidence. Will often presents an immediate decision, offer, promise or opinion prediction. These are useful tendencies; real contexts allow overlap. Tomorrow alone does not decide the form.', ['I have decided: I am going to study tonight.','You need help? I will explain it.','In a future time clause, a common pattern is I will call when I arrive, using present arrive after when; a direct question When will you arrive? has different grammar.'])],examples:R(`I will call tomorrow.|Will + base verb.
She will help us.|Will does not take -s.
They will arrive at six.|Arrive stays base.
It will be cold.|Use base be.
We will have enough time.|Use base have.
I’ll send the form.|I will contracts to I'll.
You’ll enjoy the film.|A prediction with a contraction.
He’ll call later.|He'll means he will.
She’ll be ready soon.|Be follows will.
They’ll meet us outside.|A plural contraction.
I will not forget.|A full negative.
She will not be late.|Not follows will.
We won’t stay long.|Won't means will not.
He won’t need a ticket.|Need stays in the base form.
The phone is ringing. I’ll answer it.|A decision made now.
Those bags look heavy. I’ll help you.|An offer.
I’ll send it this afternoon. I promise.|A promise in context.
I think it will rain.|An opinion prediction.
She will probably arrive at six.|Probably shows uncertainty.
I do not think it will be busy.|A common negative-prediction pattern.
Will you come?|Will starts the question.
Will she be there?|Use base be.
When will they arrive?|When precedes will.
What will you do?|A future information question.
Yes, I will.|Keep the full modal in a positive short answer.
No, she will not.|A full negative short answer.
No, they won’t.|A contracted negative short answer.
I am going to study; I have already decided.|An existing intention.
I’ll explain it now.|A response or offer.
I will call when I arrive.|The time clause uses present arrive.`),dialogues:[D('A ringing phone',`Ada|The phone is ringing.
Ben|I will answer it.
Ada|Thank you.
Ben|No problem.`),D('An offer',`Jo|This box is heavy.
Lee|I will help you carry it.
Jo|Thank you. Can you take that end?
Lee|Of course.`),D('A prediction',`Sam|What do you think the weather will be like?
Kim|I think it will be cold.
Sam|Will it rain?
Kim|Perhaps. I am not sure.`),D('A promise',`Manager|Can you send the form today?
Worker|Yes. I will send it this afternoon.
Manager|Will you copy Mina in?
Worker|Yes, I will.`),D('A plan and a response',`Tutor|Have you decided what to study tonight?
Learner|Yes. I am going to study past questions.
Tutor|Do you need an example?
Learner|Yes, please.
Tutor|I will write one now.`)],mistakes:R(`She wills call.|She will call.|Will is unchanged with she.
I will to help.|I will help.|Use a base verb without to.
He will comes.|He will come.|Use base come.
They will are ready.|They will be ready.|Use base be after will.
Do you will come?|Will you come?|Move will before the subject without do.
I willn't forget.|I won't forget.|The contraction is won't.`),practice:{mc:Q(`Complete: She ___ call.|will|wills|will to|Will has one form.
Complete: He will ___ here.|be|is|are|Use base be.
Choose the contraction of will not.|won't|willn't|wont'|Won't is the standard contraction.
Choose a question.|Will you come?|Do you will come?|Will you to come?|Will precedes the subject.
Choose the positive short answer.|Yes, I will.|Yes, I'll.|Yes, I do.|Use full will in this short answer.
The phone rings. You decide to answer now.|I will answer it.|I answered it yesterday.|I am answer it.|Will suits an immediate decision.
Someone has heavy bags. Choose an offer.|I will help you.|I helped last year.|I am not any bags.|Will can make an offer.
Complete: She will probably ___ at six.|arrive|arrives|arriving|Use base arrive.
Which word shows uncertainty?|probably|certainly|definitely|Probably is less certain than certainly/definitely.
Choose the standard future time-clause pattern.|I will call when I arrive.|I will call when I will arrive.|I call when I arrived tomorrow.|Use present arrive in this future time clause.`),gap:T(`She ___ help. Use will.|will|Will does not change with the subject.
He will ___ (come).|come|Use the base verb.
It will ___ (be) cold.|be|Use base be.
We will ___ (have) time.|have|Use base have.
Write the contraction of will not.|won't|Use the irregular contraction.
Write the contraction of I will.|I'll|The apostrophe replaces letters.
___ you be there? Use will.|Will|Will starts the question.
Will she call? Yes, she ___.|will|Positive short answers keep will.
When will they ___ (arrive)?|arrive|Use the base verb.
I will call when I ___ (arrive).|arrive|Use present simple in this future time clause.`),correct:T(`Correct: She wills help.|She will help.|Will has one form.
Correct: I will to call.|I will call.|Remove to.
Correct: He will comes later.|He will come later.|Use base come.
Correct: They will are ready.|They will be ready.|Use base be.
Correct: Do you will be there?|Will you be there?|Move will before you without do.`),order:T(`Order: help / will / I|I will help.|Will takes a base verb.
Order: be / She / will / ready|She will be ready.|Be is the base form.
Order: you / Will / come|Will you come?|Will precedes you.
Order: arrive / will / When / they|When will they arrive?|Question word comes first.
Order: not / We / will / forget|We will not forget.|Not follows will.`),reading:'A delivery is due at a small office tomorrow. Arun thinks it will arrive before lunch, but he is not certain. The manager says, “If it arrives while I am out, I will deal with it when I return.” A colleague notices that the storage area is untidy and says, “I will clear some space now.” Arun has already planned his afternoon: he is going to train a new worker. He promises to send the manager an update before he leaves.',read:Q(`When is the delivery due?|Tomorrow|Yesterday|Last month|The first sentence establishes tomorrow.
Is Arun certain about the arrival time?|No|Yes, completely|He says it already arrived.|He thinks it will arrive before lunch but is not certain.
What does the colleague offer to do?|Clear some space|Cancel the delivery|Train the manager|The colleague responds to the untidy storage area.
What is Arun already planning for the afternoon?|Training a new worker|Leaving the job|Buying shelves|The existing plan uses going to.
What does Arun promise?|To send an update|To drive the delivery van|To arrive before breakfast|He promises an update before leaving.`),write:T(`Write an offer with will.|I will help you carry those bags.|Use will + base verb with a useful action.
Write an immediate decision in response to a situation.|The phone is ringing. I will answer it.|Make the trigger and response clear.
Write a prediction with uncertainty.|I think the train will probably be busy.|Use will and a suitable uncertainty phrase.
Write a will question and short answer.|Will you be there? Yes, I will.|Use base be and full will in the positive short answer.
Contrast an existing plan and a new decision.|I am going to study tonight. You need help now? I will explain this question.|Use context to make the future choices meaningful.`)},sources:future,related:['047','048','058','060']};

L['060']={intro:'Bring the A1 material together in realistic everyday situations. Check your choices across present routines, current activities, past events, future intentions, quantities and requests, then use your results to choose focused revision.',goals:['Choose a structure from the intended meaning.','Handle common everyday exchanges.','Read a passage with a clear past/present/future timeline.','Explain and correct frequent A1 errors.','Make a personal revision plan from evidence.'],sections:[
S('Use this as a learning checkpoint','This review samples the material taught so far. It is a course practice check, not an accredited CEFR examination or a certificate of A1 proficiency. A high text-exercise score does not by itself assess listening, pronunciation or spontaneous conversation.', ['Try the checked questions before looking at the explanations.','Use mistakes to identify a topic, not to label yourself as a good or bad learner.','For speaking practice, say your own answers aloud and ask a partner a follow-up question.']),
S('Match meaning to the time structure','Start by deciding whether you mean a routine, an activity in progress, a finished past event or a future plan. Time words help, but meaning and context matter. Then build the relevant verb pattern.', ['I work every weekday: routine. I am working now: current action.','I worked yesterday: finished past. I am going to work tomorrow: intention.','I will help you: an offer in the current conversation.'],tb(['Meaning','Pattern','Example'],`Routine|present simple|She works here.
Current activity|be + -ing|She is working now.
Past action|past verb / did + base|She worked. Did she work?
Existing future plan|be going to + base|She is going to work.
Offer / basic prediction|will + base|I will help.`)),
S('Check the helper before the main verb','Many errors happen because a learner adds two tense markers or forgets a required helper. Does, did, can and will take a base verb in the taught patterns. Continuous forms need be + -ing. Past be uses was/were directly.', ['Does she work? Did she work? Can she work? Will she work?','Is she working? Was she at work?','Do not use one helper pattern everywhere: Did she was...? combines two incompatible patterns.']),
S('Use nouns and quantities accurately','Choose a/an for a singular countable item, plural nouns for more than one and an uncountable form for substances or amounts. How many asks about a number; how much asks about an amount or a price. Some/any choices depend on purpose.', ['A ticket, two tickets, some information.','How many tickets? How much water? How much is a ticket?','Would you like some tea? is a natural offer, even though it is a question.']),
S('Complete an exchange, not just a sentence','An everyday task usually needs more than a correct verb. Make the request, understand the response, clarify a detail and confirm the result. Use polite words naturally and avoid pretending to understand something important.', ['Could I have two tickets, please? How much are they?','Could you repeat the time? Did you say six fifteen?','Practise a shop, café and phone exchange with different details each time.']),
S('Turn results into specific next steps','After checking, write down two recurring errors and find the relevant earlier lessons. Redo a few questions with changed details, then create your own example. Separate recognition, writing and speaking: improvement in one does not automatically prove the others.', ['Repeated did + past errors: revise Lessons 055–056.','Repeated was/were errors: revise Lesson 052; missing am/is/are in continuous forms: revise 043–044.','Compare your next attempt with this one using accuracy and clarity, not only speed.'])],examples:R(`I am a receptionist.|A present identity uses be.
She works at a hotel.|A routine takes third-person -s.
They do not work on Sundays.|Present negative with do not.
Does he live near here?|Does takes base live.
There is a café downstairs.|Singular existence.
There are two lifts.|Plural existence.
This is an old building.|An precedes a vowel sound.
These are my keys.|Plural demonstrative and be.
I need some information.|Information is uncountable.
Do you have any questions?|A neutral quantity question.
How many tickets do you need?|Countable plural quantity.
How much water is left?|Uncountable amount.
How much is this sandwich?|A price question.
The meeting is on Tuesday at ten.|Day and clock-time prepositions.
I enjoy learning English.|Enjoy takes -ing.
She can drive.|Can takes a base verb.
Could you repeat that, please?|A courteous request.
I am writing an email now.|Current activity.
He is not listening.|Continuous negative.
Are they waiting outside?|Continuous question.
I was tired yesterday.|Past be with I.
They were at home.|Past be with they.
We visited the museum last week.|Regular past action.
She bought a notebook.|Irregular past action.
I did not go yesterday.|Did not + base verb.
Did you see the sign?|Did + subject + base verb.
Who called you?|A subject question.
We moved two months ago.|Ago follows the time distance.
I am going to study tonight.|An existing intention.
I will help you carry that.|An offer.`),dialogues:[D('At a station',`Passenger|Could I have two tickets to York, please?
Clerk|Single or return?
Passenger|Return, please. How much are they?
Clerk|Twenty-four pounds altogether.
Passenger|What time does the next train leave?
Clerk|At ten fifteen.`),D('At work',`Manager|What are you doing now?
Worker|I am checking the bookings.
Manager|Did you call the supplier yesterday?
Worker|Yes, I did. She is going to send the list today.`),D('A changed routine',`Ada|Do you usually walk to work?
Ben|Yes, but I am taking the bus this week.
Ada|Why?
Ben|My leg is sore. I did not walk yesterday either.`),D('A phone check',`Caller|Hello. This is Eva. I am calling about the class.
Receptionist|The class starts on Thursday at six fifteen.
Caller|Could you repeat the time, please?
Receptionist|Six fifteen.
Caller|Thursday at six fifteen. Thank you.
Receptionist|You are welcome.`),D('A revision plan',`Tutor|Which questions were difficult?
Learner|The past negatives. I wrote went after did not.
Tutor|Which form follows did not?
Learner|The base form: go.
Tutor|What are you going to revise?
Learner|Lessons 055 and 056. Then I will write my own examples.`)],mistakes:R(`She work every day.|She works every day.|Present-simple she needs -s.
I writing now.|I am writing now.|The continuous needs am.
Did you went yesterday?|Did you go yesterday?|Did requires a base verb.
They was here.|They were here.|They takes were.
How many information do you need?|How much information do you need?|Information is uncountable.
I am going to studies.|I am going to study.|Use a base verb after going to.`),practice:{mc:Q(`Routine: She ___ here every weekday.|works|is work|working|A present routine with she takes works.
Current action: Look! They ___ for the bus.|are running|runs|ran yesterday|A visible current activity uses be + -ing.
Past action: We ___ the museum yesterday.|visited|visit|are visit|Yesterday locates a finished event.
Past question: Did she ___ the ticket?|buy|bought|buys|Did takes base buy.
Past state: They ___ tired last night.|were|was|did|They takes were.
Existing plan: I ___ study tonight.|am going to|going to|am go to|The plan pattern needs am going to.
Offer: Those bags are heavy. I ___ help you.|will|was|am help|Will can express an offer.
Quantity: How ___ rice do we need?|much|many|a|Rice is an uncountable amount.
Choose a natural request.|Could I have some water, please?|Could I has many water?|Could I to have water?|Could I have + noun is a useful request.
Preference: He enjoys ___.|cooking|to cook|cook|Enjoy takes -ing.`),gap:T(`She ___ (work) every Monday.|works|A routine with she takes -s.
I am ___ (write) now.|writing|Use the -ing form and drop final e.
We ___ (go) to York yesterday.|went|Use irregular past went.
Did you ___ (see) the sign?|see|Did requires a base verb.
They ___ at home last night. Use past be.|were|They takes were.
She did not ___ (come) yesterday.|come|Did not requires base come.
I ___ going to apply tomorrow. Use be.|am|The plan pattern needs am with I.
He will ___ (be) ready.|be|Will requires base be.
How ___ chairs are there?|many|Chairs is a plural count noun.
The meeting is ___ Friday at ten.|on|Use on with the day.`),correct:T(`Correct: Does she works here?|Does she work here?|Does requires a base verb.
Correct: I am study now.|I am studying now.|The continuous uses be + -ing.
Correct: We did not went.|We did not go.|Use base go after did not.|We didn't go.
Correct: They was late yesterday.|They were late yesterday.|They takes were.
Correct: She is going to buys a ticket.|She is going to buy a ticket.|Use base buy after going to.`),order:T(`Order: every / She / works / Monday|She works every Monday.|A routine uses present simple.
Order: writing / I / now / am|I am writing now.|Current activity uses am + -ing.
Order: you / go / Did / yesterday|Did you go yesterday?|Did takes base go.
Order: going / study / We / to / are|We are going to study.|Use be going to + base verb.
Order: you / help / will / I|I will help you.|Will takes base help.`),reading:'Sana works at a community centre from Monday to Friday. She usually walks to work, but this week she is taking the bus because the weather is wet. Yesterday, she arrived at eight thirty and prepared a meeting room. There were twelve visitors. She did not buy lunch because she brought food from home. Tomorrow, Sana is going to help with an evening class. Her colleague has just noticed a heavy box and says, “I will carry that for you.”',read:Q(`What is Sana's usual way to work?|She walks.|She always takes a train.|She drives a van.|The routine is walking.
What is she doing differently this week?|Taking the bus|Working at another centre|Cooking for visitors|The temporary change is bus travel.
How many visitors were there yesterday?|Twelve|Eight|Thirty|The passage states twelve visitors.
Why did she not buy lunch?|She brought food from home.|There was no money at the centre.|She arrived after lunch.|Her packed food explains the negative action.
What does the colleague's final sentence express?|An offer made in response to the heavy box|A report of yesterday's work|Sana's long-term routine|The colleague offers to carry the box.`),write:T(`Introduce a real or fictional adult and describe a routine.|Mina is a receptionist. She works five days a week.|Use present be and a routine with correct agreement.
Contrast a routine with a temporary activity.|I usually walk to work, but I am taking the bus this week.|Make the two meanings clear and build each structure correctly.
Describe yesterday with a past action and a negative.|I visited my aunt yesterday. I did not go shopping.|Use a past verb in the positive and did not + base in the negative.
Write a plan and an offer.|I am going to study tonight. I will help you with that question now.|Give context for an existing plan and a current offer.
Write a revision plan naming two errors and relevant lessons.|I need to revise did questions in Lesson 056 and going to in Lesson 058. I am going to write five new examples of each.|Base the plan on your own results; the model shows how to make it specific.`)},sources:[...past,...future,...quantifiers],related:['034','043','049','052','055','056','058','059']};
})();
