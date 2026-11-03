/* Independently authored A1 lessons. Keep the original course numbering. */
(function(){'use strict';
const L=window.EVA_FULL_LESSONS=window.EVA_FULL_LESSONS||{};
const R=s=>s.trim().split('\n').map(r=>r.trim().split('|').map(x=>x.trim()));
const S=(title,explain,points,table)=>({title,explain,points,table:table||null});
const Q=s=>R(s).map(r=>({prompt:r[0],answer:r[1],options:r.slice(1,4),why:r[4]}));
const T=s=>R(s).map(r=>({prompt:r[0],answer:r[1],why:r[2],accept:r[3]?r[3].split('~'):[]}));
const D=(title,s)=>({title,lines:R(s)});
const table=(head,s)=>({head,rows:R(s)});
const presentSource=[['British Council: present simple','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-simple']];

L['025']={intro:'Learn useful plurals that do not simply add -s. Compare changing vowels, special endings and unchanged forms, then use the nouns with correct verbs and clear number information.',
goals:['Use people, children, men, women, feet and teeth accurately.','Recognise sheep, deer and aircraft as unchanged plurals.','Match singular and plural nouns with is/are.','Distinguish everyday people from formal persons.','Check specialist or variable plurals without inventing a universal rule.'],
sections:[
S('An irregular plural changes the usual pattern','Most countable nouns have an -s or -es plural, but some common nouns use different forms. Learn the singular and plural together. One child becomes two children, not two childs. A plural still describes more than one even when it has no final -s.',[
'Use a singular noun after one and an appropriate plural after two or more.',
'Do not add another regular ending to an already irregular form: children, not childrens.',
'Change related grammar too: This child is here → These children are here.',
'An irregular noun plural is different from an irregular verb past; compare child/children with write/wrote.'
]),
S('Common vowel changes and special endings','Several everyday nouns change an internal vowel. Others add an unusual ending or use a substantially different word. Practise the meaning in sentences rather than only reciting a list. Women also changes its first vowel in normal pronunciation; check recorded dictionary audio.',[
'man/men and woman/women refer to people. Use the words appropriately to the people being discussed.',
'foot/feet and tooth/teeth describe body parts; mouse/mice is another common pair.',
'child/children has a special ending; person/people uses a different everyday form.',
'Ox/oxen is a useful less common example, not a model for making every animal noun plural.'
],table(['One','More than one','Example'],`person|people|Three people are waiting.
child|children|The children are here.
man|men|Two men work here.
woman|women|Three women joined the class.
foot|feet|My feet are cold.
tooth|teeth|Her teeth are healthy.
mouse|mice|Two mice are in the picture.
ox|oxen|The farmer has two oxen.`)),
S('Some nouns keep the same written form','One sheep and four sheep use the same noun. Number comes from the context and surrounding grammar. One aircraft is ready; three aircraft are ready. Do not add -s merely because a number is plural if the noun has an unchanged plural.',[
'one sheep → several sheep; one deer → two deer.',
'one aircraft → three aircraft; one species → several species.',
'Fish is the usual everyday plural for several individual fish. Fishes can occur, especially for different species or in specialist use.',
'A dictionary can distinguish an unchanged countable plural from an uncountable noun. They are not the same category.'
]),
S('People, persons and peoples have different uses','People is the normal everyday plural of person: Two people are at reception. Persons is also a valid plural, especially in official or formal contexts such as a capacity notice. Peoples can refer to different communities or nations, rather than simply several individuals.',[
'Use people as your first choice for ordinary conversation about several individuals.',
'A notice saying maximum six persons is not automatically a grammatical error.',
'Do not call people singular because it lacks an ordinary -s ending: the people are waiting.',
'Learn a word’s meaning and register as well as its spelling.'
]),
S('Other patterns need a dictionary and a useful context','Some Greek- or Latin-origin words have special plurals: criterion/criteria, analysis/analyses and phenomenon/phenomena. Other words allow more than one accepted plural, such as indexes/indices. You do not need every specialist form today; know how to check.',[
'One criterion is one standard for judging; two criteria are two standards.',
'Analysis/analyses changes the ending and pronunciation. Check UK audio when practising.',
'Some words vary by field: a mathematical context may prefer indices, while a book context often uses indexes.',
'News ends in s but is normally uncountable and singular: The news is good. Do not decide number from the last letter alone.'
]),
S('Check the whole noun phrase and sentence','Use these, those, many and numbers with plural countable nouns as appropriate. Use are for an ordinary plural subject in the present of be. Adjectives do not gain plural endings. Do not confuse a possessive ending with a plural: children’s books means books associated with children.',[
'This person is ready → These people are ready.',
'One small child → two small children. Small stays unchanged.',
'For practice, say the singular, the plural and a complete sentence, then change the sentence into a question.',
'Review regular endings in Lesson 019 and countability in Lesson 026 when deciding which pattern applies.'
])],
examples:R(`one person — two people|People is the usual everyday plural.
one child — three children|Do not add -s to children.
one man — two men|The vowel changes.
one woman — three women|Spelling and pronunciation both need attention.
one foot — two feet|An internal vowel changes.
one tooth — several teeth|Use the irregular plural.
one mouse — two mice|Do not use mouses for the animal in this basic pattern.
one ox — two oxen|A less common special ending.
one sheep — four sheep|The noun stays unchanged.
one deer — two deer|The number word shows plurality.
one aircraft — three aircraft|No final -s is needed.
one species — several species|Singular and plural share the written form.
one fish — six fish|The usual everyday plural.
Different fishes live in these waters.|Fishes can identify different kinds or species.
Three people are waiting.|People takes plural agreement.
This person is ready.|A singular noun phrase takes is.
These people are ready.|Plural these and are match people.
The children are at school.|Children is plural.
My feet are cold.|Feet is plural; cold is unchanged.
Her teeth are healthy.|Healthy does not gain a plural ending.
Two women work here.|Use women with the plural number.
One woman works here.|The singular subject changes the verb form too.
The sheep is near the gate.|This context refers to one sheep.
The sheep are near the gate.|This context refers to several sheep.
Are the aircraft ready?|Aircraft can be a plural subject.
A notice says maximum six persons.|Persons can be valid formal usage.
Several peoples have different traditions.|Peoples can refer to distinct communities.
one criterion — two criteria|A common specialist singular/plural pair.
one analysis — two analyses|The plural changes the ending.
The news is good.|News is not an ordinary plural countable noun.`),
dialogues:[D('At reception',`Worker|How many people are waiting?
Ada|Three people.
Worker|Are the children with them?
Ada|Yes, two children are here too.`),D('One or several sheep?',`Learner|Does sheep always mean one?
Teacher|No. One sheep, four sheep.
Learner|How can I show the difference?
Teacher|Use context: The sheep is here or The sheep are here.`),D('A formal sign',`Ada|This lift notice says six persons. Is that wrong?
Ravi|No. Persons is used in formal notices.
Ada|What would you say in conversation?
Ravi|Six people.`),D('Changing a sentence',`Emily|This child is ready. Make it two.
Learner|These children are ready.
Emily|Does ready change?
Learner|No. The noun, demonstrative and verb change.`),D('Checking an unfamiliar form',`James|The report mentions two criteria.
Ada|What is the singular?
James|Criterion.
Ada|I will check its pronunciation in the dictionary.`)],
mistakes:R(`two childs|two children|Use the special plural.
three childrens|three children|Do not add another plural ending.
two womans|two women|Use the vowel-changing form.
four sheeps|four sheep|The usual plural is unchanged.
The people is ready.|The people are ready.|People is plural in this ordinary meaning.
The news are good.|The news is good.|News is normally singular and uncountable.`),
practice:{mc:Q(`Choose the ordinary plural of person.|people|peoples for any group of individuals|persones|People is the normal everyday plural.
Choose the plural of child.|children|childs|childrens|Children is already plural.
Choose the plural of woman.|women|womans|womens|Use the irregular vowel-changing form.
Choose the plural of foot.|feet|foots|feets|Feet is already plural.
Choose the usual plural of sheep.|sheep|sheeps|sheepen|The noun does not change.
Choose the sentence about several people.|The people are ready.|The people is ready.|The peoples am ready.|People takes plural are.
Which statement about persons is accurate?|It can be valid formal usage.|It is never English.|It always means nations.|Register matters.
Choose the singular of criteria.|criterion|criterias|criterium in this course pattern|Criterion is the singular taught here.
Which sentence is standard?|The news is good.|The news are good.|These news are good.|News is normally uncountable and singular.
What shows plural meaning with aircraft?|Context and surrounding grammar|An obligatory final s|An apostrophe|Three aircraft are ready is plural.`),gap:T(`Write the plural of child.|children|Use the special ending.
Write the ordinary plural of person.|people|Use the everyday form.
Write the plural of man.|men|The internal vowel changes.
Write the plural of woman.|women|Learn the spelling and pronunciation together.
Write the plural of foot.|feet|Use the irregular vowel.
Write the plural of tooth.|teeth|Use the irregular vowel.
Write the plural of mouse for animals.|mice|Use the usual animal plural.
Write the plural of deer.|deer|The form is unchanged.
Complete: These children __ ready.|are|Children is plural.
Complete: The news __ good.|is|News is normally singular.`),correct:T(`Correct: two childs.|two children|Use the irregular plural.
Correct: three childrens.|three children|Do not add s.
Correct: four sheeps.|four sheep|The noun stays unchanged.
Correct: The people is here.|The people are here.|Use plural agreement.
Correct: My foots are cold.|My feet are cold.|Use feet.`),order:T(`Order: waiting / are / people / Three|Three people are waiting.|People is plural.
Order: ready / children / are / The|The children are ready.|Use are with children.
Order: cold / feet / are / My|My feet are cold.|The adjective stays unchanged.
Order: here / are / aircraft / Three|Three aircraft are here.|Aircraft has an unchanged plural.
Order: good / is / news / The|The news is good.|News takes singular agreement.`),reading:'Three people arrive at reception with two children. One child has cold feet after a walk. Ada gives the family directions. Outside, two sheep are in a field near the gate. A notice inside the building says “Maximum six persons.” Ada knows that people is usual in conversation, while persons can appear in formal notices.',read:Q(`What number is used in the opening phrase Three people arrive?|Three|Two|Six|The passage begins with three people.
Which word is the plural of child?|children|childs|childrens|The passage uses the irregular plural.
What is cold?|One child’s feet|The gate|Ada’s teeth|Feet is used as the plural body-part noun.
Why is are used with two sheep?|The reference is plural.|Sheep is always singular.|The noun must end in s.|Two establishes the plural meaning.
Is persons necessarily an error on the notice?|No|Yes|Only sheep can be plural.|It can be appropriate formal usage.`),write:T(`Give five irregular singular/plural pairs.|person/people; child/children; foot/feet; tooth/teeth; mouse/mice|Check the spellings without adding unnecessary s.
Write a singular and plural sentence with sheep.|The sheep is here. The sheep are here.|Context and agreement show the number.
Change This child is tired to a plural sentence.|These children are tired.|Change the noun, demonstrative and be form.
Explain people versus persons in simple English.|People is usual in conversation. Persons can occur in formal notices.|Do not call every use of persons wrong.
Write one unfamiliar plural you checked and use it.|One criterion is useful. Two criteria are useful.|Other accurate dictionary-checked examples are welcome.`)},sources:[['Cambridge: singular and plural nouns','https://dictionary.cambridge.org/grammar/british-grammar/plural-nouns'],['Cambridge: person, persons or people','https://dictionary.cambridge.org/grammar/british-grammar/person-persons-or-people']],related:['009','019','026']};

L['026']={intro:'Choose noun phrases by countability and meaning. Learn when to use a/an, some, any, much or many, how to count units of a substance, and why words such as information normally have no plural s.',
goals:['Distinguish countable items from uncountable meanings.','Use a/an with a singular countable noun.','Use some/any and much/many in clear contexts.','Count units with a piece of, a bottle of or another measure.','Recognise meaning changes such as coffee/two coffees.'],
sections:[
S('Countability is a grammar pattern, not only physical reality','A countable noun can normally be singular or plural: a chair, two chairs. An uncountable noun is treated as an amount, material or general idea in that meaning: water, advice. We can measure water, but its ordinary noun form does not directly combine with two as two waters unless a serving meaning is intended.',[
'Learn a new noun with a phrase: a ticket, two tickets; some information.',
'Singular countable nouns normally need a determiner in ordinary sentences.',
'Uncountable nouns usually take singular agreement: The information is useful.',
'The same word can have different countable and uncountable meanings.'
]),
S('Build the correct noun phrase','Use a/an for one countable item: a document, an email. Use numbers or suitable plural quantifiers with several: two documents, some emails. With an uncountable amount, use some, a little or another suitable expression, not a/an directly before the amount noun.',[
'a chair → two chairs; some furniture, not a furniture in the ordinary meaning.',
'some advice; some equipment; some luggage.',
'An adjective does not make an uncountable noun countable: useful information, not a useful information.',
'The can identify either type: the chairs, the information on this page.'
],table(['Meaning','Natural phrase','Agreement'],`One countable item|a chair|The chair is here.
Plural items|two chairs|The chairs are here.
Uncountable amount|some water|The water is here.
Uncountable information|some advice|The advice is useful.`)),
S('Ask about number with many and amount with much','How many asks for a count of items: How many chairs? How much asks for an amount: How much water? In everyday positive statements, a lot of is often more natural than much. A lot of can occur with both plural countable and uncountable nouns.',[
'How many tickets do we need? — Three.',
'How much milk is left? — About a litre.',
'There are a lot of books. There is a lot of water.',
'Not many chairs and not much time are useful negatives. Much in a positive formal context can still be grammatical.'
]),
S('Some and any depend on the message','Some is common in positive statements; any is common in neutral questions and negatives about amounts. However, questions offering or requesting something often use some. Do not learn the false rule that every question must use any.',[
'There is some milk. Is there any milk? There isn’t any milk.',
'There are some chairs. Are there any chairs? There aren’t any chairs.',
'Would you like some water? offers water. Could I have some water? requests it.',
'Later lessons develop more meanings of any. Here, practise neutral amount questions and friendly offers.'
]),
S('Count a unit, container or piece','To count an uncountable amount, choose a countable unit. A bottle of water is one bottle; two bottles of water are two containers. The countable head changes and controls agreement. Not every noun takes the same unit naturally, so learn common combinations.',[
'a piece of advice; two pieces of information; an item of equipment.',
'a loaf of bread; two slices of bread; a cup of tea.',
'One bottle of water is on the desk. Two bottles of water are on the desk.',
'Do not change the amount noun unnecessarily: two pieces of advice, not two pieces of advices.'
]),
S('Meaning can change the countability','Coffee can mean the drink generally; two coffees in a café can mean two cups or servings. Glass can mean a material or a drinking container. Paper can mean material, while a paper may mean a document or article. The context supplies the intended meaning.',[
'Some coffee is left. Two coffees, please.',
'The table is made of glass. There are two glasses on it.',
'I need some paper to write on. The researcher published a paper.',
'Check the dictionary’s meaning labels when unsure. Do not assume a word is always uncountable or always countable in every context.'
])],
examples:R(`a chair — two chairs|Countable singular and plural.
an email — three emails|A singular countable item can take an.
a ticket — four tickets|Numbers normally use the plural above one.
some water|Water is an amount noun here.
some advice|Advice normally has no plural s in this meaning.
useful information|An adjective does not make information countable.
new equipment|Equipment is normally uncountable.
some luggage|Use a unit if you need to count bags or cases.
The information is useful.|Singular agreement with this uncountable noun.
The documents are useful.|Plural agreement with documents.
How many chairs do we need?|Ask for a number of items.
How much water is left?|Ask for an amount.
There are many books.|Many goes with plural countable books.
There isn’t much time.|Much goes with uncountable time here.
There are a lot of chairs.|A lot of can modify plural items.
There is a lot of water.|A lot of can modify an uncountable amount.
There is some milk.|Some is common in positive amount statements.
Is there any milk?|Any is common in neutral amount questions.
There isn’t any milk.|Any is common in negatives.
Would you like some water?|Some is natural in an offer.
Could I have some water?|Some is natural in a request.
a piece of advice|Piece is countable; advice is not pluralised.
two pieces of information|Pluralise the unit pieces.
an item of equipment|Item supplies a countable unit.
two bottles of water|Bottles is the plural head.
a slice of bread|A natural unit for bread.
Some coffee is left.|Coffee means the drink as an amount.
Two coffees, please.|A café serving interpretation.
The table is made of glass.|Glass names a material.
Two glasses are on the table.|Glasses names countable drinking containers.`),
dialogues:[D('A room for class',`Emily|How many chairs do we need?
Ada|Six chairs.
Emily|How much water do we need?
Ada|Two bottles should be enough.`),D('Some advice',`Learner|Could you give me an advice?
Teacher|Say some advice or a piece of advice.
Learner|And two pieces of advice?
Teacher|Yes. Pluralise pieces, not advice.`),D('An offer',`Ravi|Would you like some water?
Ada|Yes, please.
Ravi|Is there any ice?
Ada|No, there isn’t.`),D('Two meanings of coffee',`Customer|Two coffees, please.
Learner|Is coffee countable here?
Server|Here it means two servings.
Learner|So the meaning changes the pattern.`),D('Counting equipment',`Ada|How many items of equipment are listed?
Ravi|Three items.
Ada|Is the equipment new?
Ravi|Yes, it is.`)],
mistakes:R(`an advice|some advice|Advice is normally uncountable in this meaning.
three informations|three pieces of information|Count pieces rather than adding s to information.
many water|much water / a lot of water|Water is uncountable here.
How much chairs?|How many chairs?|Chairs are countable plural items.
two bottle of waters|two bottles of water|Pluralise the container noun.
Every question must use any.|Offers and requests often use some.|The communicative meaning affects the choice.`),
practice:{mc:Q(`Which noun is countable in this meaning?|chair|advice|equipment|A chair can have a direct singular/plural contrast.
Choose the natural phrase.|some information|an information|three informations|Information is normally uncountable.
Choose the question.|How many chairs?|How much chairs?|How many water?|Many asks for a count of plural items.
Choose the amount question.|How much water?|How many water?|How much tickets?|Water is uncountable in this meaning.
Choose a natural offer.|Would you like some water?|Would you like a water material only?|Would you like many water?|Some is common in offers.
Choose the correct unit phrase.|two pieces of advice|two advices|two piece of advices|Pluralise pieces, not advice.
Choose the correct agreement.|The information is useful.|The information are useful.|The informations is useful.|Uncountable information takes is.
Which expression can modify both types?|a lot of|many in every case|a/an in every case|A lot of works with books and water.
What does two coffees usually mean in a café?|Two servings|Two abstract substances with no context|A grammatical impossibility|A serving meaning makes the noun countable.
Which statement is accurate?|Countability can depend on meaning.|A noun has only one possible pattern forever.|Only physical objects can be countable.|Context and dictionary meanings matter.`),gap:T(`Complete: __ chair. (a/an)|a|Chair begins with a consonant sound.
Complete: __ email. (a/an)|an|Email begins with a vowel sound.
Complete: How __ chairs do we need?|many|Use many with plural countable items.
Complete: How __ water is left?|much|Use much with an uncountable amount.
Complete: There __ some information.|is|Information takes singular agreement.
Complete: There __ three documents.|are|Documents is plural.
Complete: two __ of advice.|pieces|Count pieces, not advices.
Complete: three bottles of __. (water/waters)|water|Keep the amount noun unchanged.
Complete: There isn’t __ milk. (some/any, neutral amount negative)|any|Any is the usual neutral choice here.
Complete: Would you like __ water? (some/any, ordinary offer)|some|Some is natural in an offer.`),correct:T(`Correct: I need an information.|I need some information.|Information is normally uncountable.
Correct: She gave me two advices.|She gave me two pieces of advice.|Count units.
Correct: How much chairs do we need?|How many chairs do we need?|Use many with countable plural chairs.
Correct: The equipment are new.|The equipment is new.|Equipment takes singular agreement.
Correct: two bottle of waters.|two bottles of water|Pluralise bottles.`),order:T(`Order: information / some / need / I|I need some information.|Use a natural amount phrase.
Order: need / chairs / many / do / How / we|How many chairs do we need?|Ask for a number of items.
Order: left / is / water / much / How|How much water is left?|Ask about an amount.
Order: of / bottles / two / water / are / There|There are two bottles of water.|Bottles controls plural agreement.
Order: water / some / like / you / Would|Would you like some water?|Some fits the offer.`),reading:'Ada prepares a class. There are six chairs and three tables. She needs some information about the learners. Ravi brings two bottles of water and a loaf of bread. At the café, they order two coffees. Back at the room, Ada says, “The equipment is new, but there isn’t much space.”',read:Q(`How many chairs are there?|Six|Three|Two|The passage counts six chairs.
Which noun is uncountable in some information?|information|learners|chairs|The meaning uses an uncountable noun phrase.
What is counted in two bottles of water?|Bottles|Waters|An adjective|The container noun supplies the unit.
What does two coffees mean here?|Two servings|Two rooms|Two pieces of equipment|The café context gives the serving meaning.
Why is is used with equipment?|Equipment is uncountable here.|Equipment is always plural.|Every word ending in t uses is.|The noun’s grammar controls agreement.`),write:T(`Give three countable and three usually uncountable examples.|chairs, tickets, documents; water, advice, information|Use the stated meanings.
Write a question with how many and one with how much.|How many books do you need? How much time is left?|Match each phrase to the noun type.
Write two natural unit phrases.|a piece of advice; two bottles of water|Keep the amount noun in its natural form.
Use coffee in an amount and a serving meaning.|Some coffee is left. Two coffees, please.|Make the contexts clear.
Write a request using some.|Could I have some water, please?|Questions are not limited to any.`)},sources:[['British Council: countable and uncountable nouns','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable']],related:['009','015','018','025','067']};

L['027']={intro:'Choose a, an, the or no article from the noun’s meaning and the listener’s knowledge. Build on Lesson 015 with first mention, shared reference, general statements and common names or fixed expressions.',
goals:['Use a/an for an appropriate singular countable introduction.','Use the for a reference the listener can identify.','Use general plural and uncountable nouns without an article where appropriate.','Distinguish a job noun from a language or country name.','Explain article choice from context rather than a first-mention shortcut alone.'],
sections:[
S('Ask three questions before choosing an article','First, is the noun singular countable, plural or uncountable in this meaning? Second, can the listener identify which one or which group? Third, is there already another determiner, such as my or this? Article choice follows the whole phrase and situation.',[
'Singular countable: usually use a determiner in an ordinary full noun phrase.',
'A/an introduces one member of a type when it is not identified for the listener.',
'The identifies a particular reference that the listener can work out.',
'No article is sometimes the correct choice; it is not automatically a missing word.'
]),
S('A/an: one item or a member of a group','I bought a book introduces a book. I am a nurse gives group membership, not one specific named nurse. Choose a/an by the next sound: a useful book, an interesting book. Do not put a/an directly before plural nouns or ordinary uncountable amounts.',[
'a room, an office, an hour, a university.',
'A singular job noun usually takes a/an: an engineer, a driver.',
'We are nurses uses a plural job noun without a/an.',
'A can refer to a particular item in the speaker’s mind even if the listener cannot identify it; identified-for-the-listener is the important distinction.'
]),
S('The: the listener can work out the reference','The often refers back to something introduced earlier, but that is not its only use. Please close the door can be a first mention if both speakers know which door is relevant. A following phrase can identify an item: the book on your desk.',[
'I bought a book. The book is useful: first introduction, then an identifiable reference.',
'The keys on the table identifies a particular set, not all keys in general.',
'The sun is a familiar shared reference in everyday contexts.',
'The works with singular, plural and uncountable nouns: the chair, the chairs, the water in this bottle.'
],table(['Purpose','Model','Reason'],`Introduce one|I need a pen.|No identified pen yet
Refer back|The pen is blue.|The pen is now identifiable
Identify by phrase|The pen on your desk is blue.|The place phrase identifies it
General plural|Pens are useful.|Pens as a general category
General amount|Water is important.|Water in general
Particular amount|The water in this bottle is cold.|An identified amount`)),
S('General plural and uncountable statements','Books are useful speaks about books as a general category. The books are useful refers to an identified group. Water is important is general; The water in my bottle is cold identifies an amount. Do not automatically add the because the noun feels important.',[
'Teachers help learners: a general plural statement.',
'The teachers at this centre are helpful: an identified group.',
'I like music: general uncountable interest. I like the music in this film: identified music.',
'General singular statements have other patterns, such as A teacher needs patience. This lesson starts with the clearer plural/uncountable contrast.'
]),
S('Names and common routine expressions','Personal names, most city/country names and language names normally have no article in basic uses: Ada, Doha, Sri Lanka, English. Some country names include the, such as the United Kingdom. Learn names as established phrases rather than inventing one universal name rule.',[
'I live in Qatar. I speak English.',
'I have breakfast at seven. Ordinary meal names often have no article in routine expressions.',
'At home and at work are common no-article expressions.',
'In British English, in hospital can refer to being a patient; in the hospital can identify a particular building or location. Context changes the meaning.'
]),
S('Other determiners and a practical checking method','My phone and this phone already identify the noun. Do not normally say the my phone or a this phone. When checking a paragraph, underline the nouns, identify their type and ask whether the reader knows the reference. Then check sound-based a/an choices.',[
'I bought a phone. My phone is blue. The phone is on the desk can all occur with a clear context.',
'Do not use first mention = a as an absolute rule; shared knowledge can license the immediately.',
'For a no-article answer in the exercises, type none where the prompt requests it.',
'Later lessons develop geographic names, institutional uses and subtle article meanings in more detail.'
])],
examples:R(`I need a pen.|Introduce one suitable pen.
She is an engineer.|A singular job noun uses an.
He is a driver.|A singular job noun uses a.
I bought a book. The book is useful.|Refer back to an introduced item.
Please close the door.|The shared situation can identify the door.
The book on your desk is mine.|A phrase identifies which book.
The chairs in this room are new.|A particular plural group.
The water in my bottle is cold.|An identified uncountable amount.
Books are useful.|A general plural statement.
Water is important.|A general uncountable statement.
I like music.|Music is a general interest here.
I like the music in this film.|The film identifies the music.
Teachers need patience.|General plural and uncountable nouns.
The teachers at this centre are helpful.|The group is identified.
We are nurses.|A plural job noun does not use a/an.
I speak English.|No article with the language in this pattern.
I live in Qatar.|No article with this country name.
Ada works in Doha.|Personal and city names normally need no article here.
She lives in the United Kingdom.|This established country name uses the.
I have breakfast at seven.|A routine meal expression.
I am at home.|A common no-article place expression.
They are at work.|A common routine-location expression.
an hour|The h is silent.
a university|The initial sound is /j/.
an interesting book|Choose the article from interesting.
a useful book|Useful begins with /j/.
This is my phone.|My already identifies the noun.
This phone is new.|This is the determiner.
She is in hospital as a patient.|A common British institutional use.
She is in the hospital café.|The identified building helps locate the café.`),
dialogues:[D('Introducing and referring back',`Ada|I bought a book yesterday.
Ravi|Is the book useful?
Ada|Yes. It explains articles clearly.
Ravi|Could I read it later?`),D('The first mention can use the',`Learner|You said Close the door, but it is the first mention.
Teacher|We can both identify the door in this room.
Learner|So the is not only for a second mention?
Teacher|Correct.`),D('General or particular?',`Emily|Do you like music?
James|Yes. I also like the music in this film.
Emily|The first is general; the second is identified?
James|Exactly.`),D('A job and a language',`Ada|I’m a nurse. I speak Sinhala and English.
Learner|Why a nurse but no a before English?
Ada|Nurse is a singular job noun. English names a language here.
Learner|I understand.`),D('Another determiner',`Learner|This is the my phone?
Teacher|Say This is my phone.
Learner|My already identifies it?
Teacher|Yes.`)],
mistakes:R(`I am nurse.|I am a nurse.|The singular countable job noun needs a determiner.
I speak an English.|I speak English.|Do not add a/an before the language in this pattern.
The water is important. (intended general statement)|Water is important.|Use no article for the general amount meaning here.
the my phone|my phone|Do not stack these identifying determiners.
First mention always requires a/an.|A shared or otherwise identifiable reference can use the immediately.|Context matters.
an useful book|a useful book|Choose by sound.`),
practice:{mc:Q(`Introduce one suitable object: I need __ pen.|a|an|none|Pen is singular countable and begins with a consonant sound.
Refer back: I bought a book. __ book is useful.|The|A always|None|The listener can now identify the book.
Choose a general plural statement.|Books are useful.|A books are useful.|An books are useful.|General plural nouns can have no article.
Choose a general uncountable statement.|Water is important.|A water is important.|An water is important.|No article is natural for the general meaning.
Choose the job phrase.|an engineer|engineer alone in I am engineer|a engineers|Use an with a singular countable job noun.
Choose the language phrase.|I speak English.|I speak an English.|I speak a English.|No article in this language pattern.
Choose the ordinary phrase.|my phone|the my phone|a my phone|My already occupies the identifying determiner position.
Which phrase is identified by a following location?|the book on your desk|books in a general statement|a pen with no identifying context|The phrase tells the listener which book.
Which established country name uses the?|the United Kingdom|the Qatar in an ordinary country-name phrase|the Sri Lanka in this ordinary phrase|Learn the established form of names.
Can the occur on first mention?|Yes, if the listener can identify the reference.|No, never.|Only after an adjective.|Shared context can identify the noun.`),gap:T(`Complete: I need __ umbrella.|an|Umbrella begins with a vowel sound.
Complete: I need __ useful book.|a|Useful begins with /j/.
Complete: It takes __ hour.|an|The h in hour is silent.
Complete: I bought a pen. __ pen is blue.|The|The second phrase identifies the same pen.
General statement: __ books are useful. Type none for no article.|none|No article is natural for this general plural statement.
General statement: __ water is important. Type none for no article.|none|Water is used generally.
Complete: She is __ nurse.|a|Nurse is a singular countable job noun.
Complete: I speak __ English. Type none for no article.|none|English is a language name in this pattern.
Complete: She lives in __ United Kingdom.|the|The established name includes the.
Complete: This is __ phone. (my/the my)|my|Do not combine the and my here.`),correct:T(`Correct: I am nurse.|I am a nurse.|Add a with the singular job noun.
Correct: I speak an English.|I speak English.|Use no article with the language name here.
Correct: This is the my bag.|This is my bag.|Remove the extra determiner.
Correct: an useful book.|a useful book|Useful begins with /j/.
Make this intended general statement natural: The books are useful. (books as a whole category)|Books are useful.|No article signals the general plural meaning.`),order:T(`Order: pen / a / need / I|I need a pen.|Introduce a singular countable object.
Order: useful / is / book / The|The book is useful.|The reference is identified.
Order: are / useful / Books|Books are useful.|A general plural statement.
Order: English / speak / I|I speak English.|No article with the language here.
Order: my / is / This / phone|This is my phone.|My identifies the noun.`),reading:'Ada buys a notebook and a pen. The notebook is blue. She puts the pen on her desk. She says, “Notebooks are useful for learning.” She studies English after work and has dinner at seven. Ravi asks her to close the door; both can see which door he means.',read:Q(`Why is a used before notebook at the start?|It introduces one item.|Notebook is plural.|All blue objects take a.|It is a singular countable introduction.
Why does the next sentence use the notebook?|The same notebook is now identifiable.|It names a country.|It is an uncountable noun.|The listener can refer back.
What does Notebooks are useful mean here?|Notebooks generally|Only one named notebook|An instruction to close a door|No article helps express the general category.
Why is there no article before English?|It names the language in a study pattern.|English is always plural.|The word is a verb.|This ordinary language-name phrase uses no article.
Why can Ravi say the door without earlier mention?|The shared situation identifies it.|The first mention must always use the.|Door is a language name.|Shared knowledge can license the.`),write:T(`Write two sentences introducing an object and referring back.|I bought a book. The book is useful.|Keep the reference to the same object clear.
Write a general plural and a particular plural statement.|Books are useful. The books on this desk are new.|Explain how the reference changes.
Write a general and a particular water sentence.|Water is important. The water in my bottle is cold.|The second phrase identifies an amount.
Write a job introduction and a language fact.|I am an engineer. I speak English.|Use articles according to the noun pattern.
Explain a first mention where the is possible.|Please close the door can use the if both people know which door.|Do not rely on mention order alone.`)},sources:[['British Council: a, an and the','https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the'],['Cambridge: articles','https://dictionary.cambridge.org/grammar/british-grammar/a-an-and-the']],related:['015','020','026','121']};

L['028']={intro:'Use me, you, him, her, it, us and them as objects. Compare subject and object roles, use the right form after a preposition and keep the reference clear when giving, calling or helping.',
goals:['Match subject forms with their object forms.','Use an object pronoun after a suitable verb.','Use an object pronoun after a preposition.','Keep I/me and we/us accurate in coordinated phrases.','Explain that a pronoun’s role matters more than its position alone.'],
sections:[
S('A pronoun can have a subject role or an object role','Ada called Ravi can become She called him when the references are clear and those are the people’s pronouns. She is the subject; him is the object of called. Reversing the roles changes the forms: He called her. Do not choose a pronoun only from the person’s name or job.',[
'Subject forms include I, he, she, we and they.',
'Object forms include me, him, her, us and them.',
'You and it have the same spelling in subject and object uses.',
'The reference should be clear from context; introduce a name or noun phrase when needed.'
],table(['Subject','Object','Model'],`I|me|Please call me.
you|you|I can help you.
he|him|I know him.
she|her|Please ask her.
it|it|Please open it.
we|us|The teacher helps us.
they|them|Please invite them.`)),
S('Use the object form after the verb when it is the object','In I know her, her receives the verb’s reference. In Please email me, me identifies the recipient. An imperative often has no expressed subject, but its object still needs the object form. Avoid Please call I in the standard pattern.',[
'I can help him. They invited us. She knows them.',
'Please give me the form: me is the recipient, and the form is what is given.',
'Not every verb takes a direct object. Listen to me uses the preposition to.',
'Be can also have an object-form complement in ordinary conversation: It’s me. Do not replace that with a false rule that every word after any verb must be a direct object.'
]),
S('After a preposition, choose the object form','Common prepositions include to, for, with, about, at and between. A pronoun following one normally uses its object form in the patterns taught here: to her, for me, with us. The preposition carries part of the meaning, so do not omit it when the verb needs it.',[
'Please send it to me. Can you come with us?',
'The manager spoke to them. This message is for you.',
'Listen to him, not Listen him in the ordinary verb pattern.',
'Between you and me is the standard phrase: both pronouns belong to the preposition between.'
]),
S('Two people joined by and still need the correct forms','Ada and I work here uses subject I. The manager called Ada and me uses object me. To check, temporarily remove the other person: I work here; the manager called me. The added name does not automatically change me into I.',[
'Subject: Ravi and I are colleagues.',
'Object: Please help Ravi and me.',
'After a preposition: The teacher spoke to Ravi and me.',
'You may hear different forms in casual speech. Practise the standard subject/object distinction for careful writing.'
]),
S('Them can refer to people, things or one person','Use them for plural objects: I have the keys. I can bring them. Them can also refer to a single person who uses they or whose gender is unknown or irrelevant. The pronoun’s referent must fit the context, not a stereotype.',[
'The forms are ready. Please collect them.',
'Alex uses they. Please call them.',
'A visitor is waiting. Could you help them?',
'When two possible people could be meant, repeat the name rather than leaving an unclear him or her.'
]),
S('Giving, sending and speaker perspective','Give me the form and Give the form to me express the recipient in different patterns. With two pronouns, give it to me is the safest ordinary learner pattern. If a speaker asks Can you help me?, the listener may answer Yes, I can help you: me/you change reference with the speaker.',[
'Please give it to her. Please send them to us.',
'Do not use my as an object: call me, not call my.',
'Do not confuse her as an object with her before a noun: I know her; I know her manager.',
'Practise complete exchanges and identify who each pronoun refers to before changing a sentence.'
])],
examples:R(`Please call me.|Me is the object form for the speaker.
I can help you.|You has the same subject/object spelling.
I know him.|Him is the object form of he.
Please ask her.|Her is an object here.
Please open it.|It refers to a singular thing.
The teacher helps us.|Us includes the speaker’s group.
Please invite them.|Them can refer to the identified group.
She called him.|Subject she; object him.
He called her.|The roles and forms are reversed.
They invited us.|They is the subject; us is the object.
We invited them.|We is the subject; them is the object.
This message is for you.|You follows a preposition.
Please send it to me.|Me follows to.
Can you come with us?|Us follows with.
The manager spoke to them.|Them follows to.
Please listen to him.|Listen normally needs to before this object.
I am talking about her.|Her follows about.
Between you and me, this is difficult.|Use object forms after between.
Ravi and I work here.|I is part of a coordinated subject.
Please help Ravi and me.|Me is part of the coordinated object.
The teacher spoke to Ravi and me.|Me follows a preposition as part of the phrase.
The keys are here. I can bring them.|Them can refer to things.
Alex uses they. Please call them.|Singular them can refer to Alex.
A visitor is waiting. Could you help them?|No unsupported gender assumption is needed.
Please give me the form.|Me identifies the recipient.
Please give the form to me.|To introduces the recipient.
Please give it to her.|A useful pattern with two pronouns.
Please send them to us.|Them identifies the items; us identifies the recipients.
It’s me.|A natural ordinary conversational complement.
Can you help me? Yes, I can help you.|Pronoun reference changes when the speaker changes.`),
dialogues:[D('Help with a form',`Ada|Could you help me with this form?
Ravi|Of course. Please give it to me.
Ada|Thank you.
Ravi|I can explain the first question to you.`),D('A visitor',`Receptionist|A visitor is waiting.
Worker|Could you ask them to wait a moment?
Receptionist|Yes. I will speak to them.
Worker|Thank you.`),D('I or me?',`Learner|The manager called Ravi and I?
Teacher|For the object, use Ravi and me.
Learner|Like The manager called me?
Teacher|Exactly.`),D('People or things?',`Emily|The keys are on the desk. Can you bring them?
James|Yes. Them means the keys?
Emily|Yes, plural things.
James|I will bring them to you.`),D('Whose perspective?',`Ada|Can you help me?
Ravi|Yes, I can help you.
Ada|Me became you because you are now speaking?
Ravi|That is right.`)],
mistakes:R(`Please call I.|Please call me.|Use the object form.
I know she.|I know her.|Her is the object form.
Come with we.|Come with us.|Use an object form after with.
Listen him.|Listen to him.|This verb pattern needs to.
Please help Ravi and I.|Please help Ravi and me.|The coordinated phrase is an object.
Give it to my.|Give it to me.|My needs a noun; me is the object form.`),
practice:{mc:Q(`Choose the object form of I.|me|my|mine|Me is the personal object form.
Choose the object form of we.|us|our|ours|Us is the personal object form.
Complete: I know __. (she)|her|she|hers|Use the object form after know.
Complete: Come with __. (we)|us|we|our|Use the object form after with.
Which phrase is standard careful usage?|between you and me|between you and I|between your and mine for these people|Both pronouns follow between.
Choose the coordinated object.|Please help Ravi and me.|Please help Ravi and I.|Please help Ravi and my.|Remove Ravi to check: help me.
Which is a natural conversational expression?|It’s me.|It’s my.|It’s mine person.|Me can be a complement after be in ordinary speech.
Which statement about them is accurate?|It can refer to plural things or an appropriate singular person.|It only refers to men.|It can never refer to objects.|Context determines the referent.
Choose the ordinary learner pattern.|Give it to her.|Give it to she.|Give it to hers.|Her is the object after to.
Which sentence uses her before a noun?|I know her manager.|I know her.|Please call her.|Her is a possessive determiner before manager.`),gap:T(`Write the object form of I.|me|Use me as an object.
Write the object form of he.|him|Use him as an object.
Write the object form of she.|her|Use her as an object.
Write the object form of we.|us|Use us as an object.
Write the object form of they.|them|Use them as an object.
Complete: Please send it to __. (I)|me|Use the object form after to.
Complete: Can you come with __? (we)|us|Use the object form after with.
Complete: Please listen __ him.|to|Listen takes to in this pattern.
Complete: The keys are here. Bring __.|them|Them refers to plural keys.
Complete: Ravi and I work here. The manager called Ravi and __.|me|The second coordinated phrase is an object.`),correct:T(`Correct: Please call I.|Please call me.|Use the object form.
Correct: I know she.|I know her.|Her is the object form of she.
Correct: Come with we.|Come with us.|Use the object form after with.
Correct: Listen him.|Listen to him.|Keep to in the verb pattern.
Correct: Please help Ravi and I.|Please help Ravi and me.|Use the object form even after and.`),order:T(`Order: me / call / Please|Please call me.|The object follows call.
Order: it / her / to / give / Please|Please give it to her.|To introduces the recipient.
Order: us / with / come / Can / you|Can you come with us?|Us follows with.
Order: them / invited / We|We invited them.|We is subject; them is object.
Order: Ravi / help / me / and / Please|Please help Ravi and me.|Use me in the coordinated object.|Please help me and Ravi.`),reading:'Ada has a form. She asks Ravi, “Could you help me?” Ravi says, “Please give it to me.” Later, the manager calls Ravi and Ada. She speaks to them about the course. A visitor is waiting, so Ada goes to help them. The visitor’s name and pronouns are not yet known.',read:Q(`What does it refer to in give it to me?|The form|Ravi|The visitor|The form is the singular object just introduced.
Who does me refer to when Ada asks for help?|Ada|Ravi|The manager|Me identifies the current speaker.
Who does me refer to in Ravi’s reply?|Ravi|Ada|The form|The speaker has changed.
Who does them refer to after the manager calls Ravi and Ada?|Ravi and Ada|Only the form|The unnamed visitor at that point|The pair is the identified object group.
Why is them appropriate for the visitor?|Identity and pronouns are not yet known.|The visitor must be several people.|Every singular person is it.|Singular them avoids an unsupported assumption.`),write:T(`Write three sentences with different object pronouns.|Please call me. I know her. They invited us.|Keep the references clear.
Write a sentence with an object pronoun after a preposition.|Please come with us.|Identify the preposition.
Use I and me correctly with a second person’s name.|Ravi and I work here. The manager called Ravi and me.|Check the role of each coordinated phrase.
Write an exchange where me changes to you.|A: Can you help me? B: Yes, I can help you.|Follow the speaker’s point of view.
Use them once for things and once for one person.|The keys are here; bring them. Alex uses they; please call them.|Give clear contexts for both meanings.`)},sources:[['British Council: personal pronouns','https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/personal-pronouns'],['Cambridge: subject and object pronouns','https://dictionary.cambridge.org/grammar/british-grammar/subject-and-object-pronouns']],related:['010','020','029']};

L['029']={intro:'Identify whose things you mean using Ada’s bag, the learners’ books and possessive pronouns such as mine or yours. Learn where the apostrophe goes and why a noun plural, a possessive and a contraction are different patterns.',
goals:['Form a basic singular possessive with apostrophe + s.','Place an apostrophe after a regular plural ending in s.','Use children’s for an irregular plural possessive.','Choose mine/yours/hers/ours/theirs without a following noun.','Distinguish possessive ’s from is/has contractions and ordinary plurals.'],
sections:[
S('Possessive ’s links people and things','Ada’s bag means a bag associated with Ada. The link may be ownership, a family relationship or another association: Ravi’s sister, the teacher’s desk. The possessive phrase identifies the noun, so do not add a second article directly before the same identified noun.',[
'Ada’s phone is blue. My colleague’s office is upstairs.',
'The manager’s desk means the desk associated with one manager.',
'The article in the manager’s desk belongs to the manager phrase; do not add another the before desk.',
'A possession phrase is not automatically a legal ownership statement; context supplies the relationship.'
]),
S('One owner, several owners and irregular plurals','With a normal singular owner, add ’s. With a regular plural already ending in s, add an apostrophe after that s. With an irregular plural that does not end in s, add ’s. Find the owner first, then choose the spelling.',[
'one learner → the learner’s book.',
'several learners → the learners’ books.',
'children → the children’s books; people → people’s ideas.',
'The number of owned items does not decide the apostrophe position. One manager can have several desks.'
],table(['Owner','Possessive phrase','Meaning'],`one manager|the manager’s desk|A desk associated with one manager
one manager|the manager’s desks|Several desks associated with one manager
several managers|the managers’ desks|Desks associated with several managers
children|the children’s books|Books associated with the children
Ada|Ada’s bag|A bag associated with Ada`)),
S('Names and longer owner phrases','Names ending in s can show style variation: James’s book is common, while James’ book is also used in some styles. Both can be legitimate. In a compound owner phrase, the possessive ending normally attaches to the end of the owner phrase: my sister-in-law’s car.',[
'For your own writing, use a consistent style rather than claiming every alternative is wrong.',
'Ada and Ravi’s office can identify a shared office.',
'Ada’s and Ravi’s offices can identify their separate offices; context clarifies the arrangement.',
'An of phrase is also useful: the door of the building. Not every relationship is best expressed with ’s.'
]),
S('Possessive determiners need a noun; pronouns replace it','This is my bag uses my before the noun. This bag is mine uses mine on its own. The independent forms are mine, yours, his, hers, ours and theirs. His has the same form in both positions. Standalone its is not a normal beginner alternative to a complete its + noun phrase.',[
'my book → mine; your phone → yours; her ticket → hers.',
'our office → ours; their keys → theirs.',
'Do not put mine directly before a noun in this pattern: my bag, not mine bag.',
'Possessive pronouns have no apostrophe: yours, hers, ours, theirs.'
],table(['Before a noun','Without the noun'],`my bag|mine
your bag|yours
his bag|his
her bag|hers
our bag|ours
their bag|theirs`)),
S('Three different jobs of s and apostrophes','Books is an ordinary plural: more than one book. Ada’s book uses a possessive ending. Ada’s ready contracts Ada is ready. Ada’s got a book contracts Ada has got a book. Look at the next words and the meaning; the symbol alone does not tell you the grammar.',[
'The learners are ready: plural learners, no apostrophe.',
'The learner’s bag is here: one learner is the owner.',
'The learners’ bags are here: multiple learners are the owners.',
'It’s is a contraction; possessive its has no apostrophe. Review Lesson 020 for this exception.'
]),
S('Ask whose and answer clearly','Whose asks about ownership or association: Whose bag is this? — It’s Ada’s. It’s hers. Who’s means who is or who has in a suitable contraction, not whose. In a spoken exchange, confirm which object is meant before deciding the owner.',[
'Whose keys are these? — They’re mine.',
'Is this your coat? — Yes, it’s mine.',
'Do not choose a possessive only from the object’s colour or number; it refers to the owner.',
'When checking writing, underline the owner, identify singular/plural, then check whether a noun follows the possessive word.'
])],
examples:R(`Ada’s bag is blue.|One named owner.
Ravi’s sister is here.|The possessive can express a family relationship.
the manager’s desk|One manager is the owner.
the manager’s desks|One manager can be associated with several desks.
the managers’ desks|The owners are plural managers.
the learner’s book|One learner is the owner.
the learners’ books|Several learners are the owners.
the children’s books|Children is an irregular plural without final s.
people’s ideas|People is already plural; add ’s.
James’s book|A common possessive spelling for a name ending in s.
James’ book|An accepted alternative in some styles.
my sister-in-law’s car|Attach the ending to the end of the owner phrase.
Ada and Ravi’s office|This can identify a shared office.
Ada’s and Ravi’s offices|This can identify their separate offices.
the door of the building|An of phrase can express a relationship.
This is my bag.|My has a following noun.
This bag is mine.|Mine stands alone.
Is this your ticket?|Your goes before a noun.
This ticket is yours.|Yours stands alone and has no apostrophe.
The phone is his.|His can be an independent possessive.
The suitcase is hers.|Hers has no apostrophe.
The office is ours.|Ours identifies the speaker’s group.
Those keys are theirs.|Theirs identifies another group.
The learners are ready.|The s in learners is an ordinary plural.
Ada’s ready.|Here ’s means is.
Ada’s got a book.|Here ’s means has.
The dog is in its bed.|Possessive its has no apostrophe.
Whose bag is this?|Ask who the owner is.
Whose keys are these?|Plural keys changes the be form.
Who’s ready?|Who’s means who is here, not whose.`),
dialogues:[D('A coat',`Worker|Whose coat is this?
Ada|It’s mine.
Worker|Is that bag yours too?
Ada|No. That is Ravi’s bag.`),D('One or several managers?',`Learner|What changes between manager’s and managers’?
Teacher|The first owner is singular; the second is plural.
Learner|Can one manager have two desks?
Teacher|Yes: the manager’s desks.`),D('An irregular plural',`Emily|How do you write books belonging to the children?
Learner|The children’s books.
Emily|Why not childrens’?
Learner|Children is already plural and does not end in s.`),D('My or mine?',`James|This is my phone. This phone is mine.
Learner|Does mine have a following noun?
James|Not in this ordinary pattern.
Learner|So mine phone should be my phone.`),D('Whose or who’s?',`Ada|Who’s ready?
Ravi|I am. Whose books are these?
Ada|They’re ours.
Ravi|Good. We can start.`)],
mistakes:R(`the childrens’ books|the children’s books|Children is an irregular plural without final s.
the managers desk (intended one owner)|the manager’s desk|Mark the singular possessive.
This is mine bag.|This is my bag.|Use the determiner before the noun.
This phone is your’s.|This phone is yours.|The possessive pronoun has no apostrophe.
Who’s bag is this?|Whose bag is this?|Whose asks ownership; who’s is a contraction.
Every ’s means possession.|’s can also contract is or has.|Use the following words and context.`),
practice:{mc:Q(`Choose one manager as the owner.|the manager’s desk|the managers’ desk necessarily one owner|the managers desk with no possessive mark|Singular manager takes ’s.
Choose several learners as owners.|the learners’ books|the learner’s books necessarily several owners|the learners books with no possessive mark|Regular plural learners takes a final apostrophe.
Choose the irregular plural possessive.|the children’s books|the childrens’ books|the childrens books|Children already means more than one.
Which pronoun replaces my bag?|mine|my|me|Mine stands without a noun.
Which spelling is correct?|yours|your’s|yours’ for this pronoun|Possessive pronouns have no apostrophe.
In Ada’s ready, what does ’s mean?|is|possession of ready|a plural ending|The full sentence is Ada is ready.
In Ada’s got a phone, what does ’s mean?|has|is|a plural noun ending|The full phrase is Ada has got.
Which asks about ownership?|Whose bag is this?|Who’s bag is this?|Who bag this?|Whose is the ownership question word.
Does the number of desks decide manager’s versus managers’?|No; the number of owners matters.|Yes, always.|Only the desk colour matters.|Identify the owner first.
Which statement about James’s/James’ is accurate?|Both can occur according to style.|Only one can ever be English.|Names ending in s cannot be possessive.|Use a consistent accepted style.`),gap:T(`Make a possessive phrase for one manager and a desk: the __ desk.|manager’s|Singular owner takes ’s.|manager's
Make a possessive phrase for several managers and their desks: the __ desks.|managers’|The regular plural ends in s.|managers'
Complete: the __ books. (belonging to the children)|children’s|Add ’s to children.|children's
Complete: This is my bag. This bag is __.|mine|Use the independent possessive.
Complete: This is your phone. This phone is __.|yours|No apostrophe is needed.
Complete: That is her coat. That coat is __.|hers|Use the independent possessive.
Complete: That is our office. That office is __.|ours|Use ours without a noun.
Complete: Those are their keys. Those keys are __.|theirs|Use theirs without an apostrophe.
Choose whose or who’s: __ bag is this?|Whose|Ask about ownership.
Expand Ada’s in Ada’s ready.|Ada is|Here ’s means is.`),correct:T(`Correct: the childrens’ books.|the children’s books|Use ’s after irregular plural children.|the children's books
Correct: This is mine phone.|This is my phone.|My is the form before a noun.
Correct: This ticket is your’s.|This ticket is yours.|No apostrophe in yours.
Correct: Who’s bag is this?|Whose bag is this?|Whose asks ownership.
Correct: These keys are their.|These keys are theirs.|Use the independent possessive.`),order:T(`Order: mine / coat / is / This|This coat is mine.|Mine stands alone.
Order: bag / this / Whose / is|Whose bag is this?|Use whose to ask ownership.
Order: keys / these / yours / Are|Are these keys yours?|Yours replaces your keys.
Order: her / is / phone / This|This is her phone.|Her goes before a noun.
Order: ours / office / is / The|The office is ours.|Ours identifies the speaker’s group.`),reading:'Ada and Ravi share an office. They call it Ada and Ravi’s office. Ada has a blue coat; the coat is hers. Ravi has two bags; the bags are his. The children’s books are on a shelf. Two managers have desks upstairs, so a sign identifies the managers’ desks. Ada asks, “Whose keys are these?” Ravi answers, “They’re mine.”',read:Q(`What does Ada and Ravi’s office mean in this passage?|Their shared office|Two separate offices in this stated scene|An office belonging to nobody|The passage explicitly says they share it.
Whose coat is blue?|Ada’s|Ravi’s|The managers’|The coat is hers refers to Ada.
Which independent possessive refers to Ravi’s bags?|his|him|he|His has the same determiner and pronoun spelling.
Why is children’s spelled with ’s?|Children is an irregular plural without final s.|Children is singular.|All nouns use apostrophe only.|The owner phrase is already plural.
Who owns the keys in the reply?|Ravi|Ada|The shelf|Mine refers to Ravi, the current speaker.`),write:T(`Write a possessive for one owner and several objects.|Ada’s books are here.|The owned objects can be plural while the owner is singular.
Write a regular plural owner phrase.|the learners’ bags|Put the apostrophe after plural s.
Write an irregular plural owner phrase.|the children’s books|Use ’s after children.
Show your versus yours.|This is your ticket. This ticket is yours.|Only your has a following noun.
Write an ownership question and answer.|Whose coat is this? It’s mine.|Distinguish whose from who’s.`)},sources:[['Cambridge: possession','https://dictionary.cambridge.org/grammar/british-grammar/possession-john-s-car-a-friend-of-mine'],['British Council: possessive pronouns','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/possessives-pronouns']],related:['019','020','025','028']};

L['030']={intro:'Describe people and places accurately with useful adjectives. Extend basic adjective position with practical vocabulary, simple adjective order, -ed/-ing meaning contrasts and clear, respectful descriptions.',
goals:['Choose adjectives for size, condition, personality and atmosphere.','Use adjective + noun and be + adjective patterns.','Keep adjectives unchanged with plural nouns.','Distinguish interested/interesting and tired/tiring.','Describe a place or person using relevant facts and a clear point of view.'],
sections:[
S('Choose the kind of information the listener needs','A useful description helps a listener imagine or identify something. A large room gives size; a clean room gives condition; a quiet room gives atmosphere. For people, friendly or helpful describes behaviour or qualities. Choose relevant, specific language instead of guessing a person’s character from appearance.',[
'Places: spacious, crowded, quiet, noisy, clean, modern, comfortable.',
'People and work: friendly, patient, helpful, experienced, careful.',
'Some descriptions are opinions: comfortable may differ between people.',
'Support an opinion with an example: The staff are helpful; they explain the forms clearly.'
]),
S('Use two core positions confidently','Most everyday describing adjectives can appear before a noun or after a suitable linking verb. A comfortable chair becomes The chair is comfortable. The adjective does not take a plural ending: comfortable chairs, not comfortables chairs.',[
'a friendly colleague → The colleague is friendly.',
'two quiet offices → The offices are quiet.',
'Determiner + adjective + noun: our new office, an experienced nurse.',
'Not every adjective works in every position. For example, asleep is normally after a verb in this beginner use: The child is asleep, not an asleep child.'
]),
S('Use a manageable order when adding adjectives','When several adjectives come before a noun, English often follows a preferred order. A small modern office is natural for size before age/style. Opinion often comes before a more factual description: a lovely small café. This is a tendency affected by meaning and emphasis, not a reason to build very long lists.',[
'Start with one or two useful adjectives rather than crowding the noun phrase.',
'Useful beginner sequence: opinion → size → age → colour → noun, where relevant.',
'a comfortable large room; a small modern office; an old blue bag.',
'If the phrase becomes awkward, use another sentence: The room is large. It is clean and quiet.'
],table(['Purpose','Phrase','Sentence alternative'],`Size + age/style|a small modern office|The office is small and modern.
Age + colour|an old blue bag|The bag is old and blue.
Opinion + size|a lovely small café|The café is small. I like it.
Condition|two clean rooms|The rooms are clean.`)),
S('-ed often describes a feeling; -ing often describes its cause','An interested learner feels interest; an interesting lesson produces interest. A tired person feels tired; a tiring journey causes tiredness. This is a useful meaning contrast, not a claim that every word ending in -ed or -ing is an adjective.',[
'I am bored because the activity is boring.',
'She is interested in the course because the topic is interesting.',
'The instructions are confusing, so I am confused.',
'People can be described with -ing too: a boring speaker causes boredom. Choose according to the meaning you intend.'
]),
S('Degree and useful adjective combinations','Very strengthens many gradable adjectives: very busy, very quiet. Really also strengthens many descriptions. Some adjectives describe an extreme or complete state and combine more naturally with words such as absolutely: absolutely exhausted. Learn common phrases rather than adding very to every adjective.',[
'a very helpful colleague; a really comfortable chair.',
'Use interested in, good at and ready for as useful adjective + preposition combinations.',
'She looks tired uses a linking verb and an adjective; She works carefully uses an adverb for the action.',
'Comparatives such as larger and more comfortable receive dedicated treatment later; this lesson focuses on clear basic description.'
]),
S('Build a description with structure','Name the person or place, give two or three useful details and add a reason or example. Our office is small but comfortable. It is quiet in the morning. The staff are helpful gives a clearer picture than a disconnected adjective list.',[
'Choose the audience: a visitor may need location and accessibility information; a colleague may need atmosphere and facilities.',
'Be specific and respectful when describing people. Ask or observe relevant facts rather than assuming nationality or ability.',
'Use and for compatible details and but for a contrast.',
'Check a/an, singular/plural agreement and the adjective’s meaning before finishing.'
])],
examples:R(`a large room|Large describes size.
a clean room|Clean describes condition.
a quiet room|Quiet describes atmosphere.
a crowded station|Crowded means many people in the available space.
a modern office|Modern describes style or relative age.
a comfortable chair|Comfortable describes how it feels to use.
a friendly colleague|Friendly describes a social quality.
a helpful receptionist|Helpful describes behaviour that assists people.
an experienced nurse|Experienced describes relevant practice or knowledge.
a patient teacher|Patient can be an adjective meaning able to wait calmly.
The room is spacious.|Spacious describes available room or space.
The street is noisy.|The adjective follows be.
The offices are quiet.|Quiet does not gain plural s.
Our colleagues are friendly.|Friendly is unchanged for a plural subject.
our new office|The possessive comes before the adjective.
an old blue bag|Age comes before colour in this ordinary phrase.
a small modern office|A useful size-before-age/style order.
a lovely small café|Opinion precedes size in this phrase.
The room is clean and quiet.|Two compatible descriptions are linked.
The office is small but comfortable.|But presents a contrast.
I am interested in the lesson.|The learner feels interest.
The lesson is interesting.|The lesson causes interest.
I am bored.|This describes the feeling.
The activity is boring.|This describes the cause of boredom.
She is tired.|This describes her condition.
The journey is tiring.|This describes the cause of tiredness.
I am confused.|The speaker does not understand clearly.
The instructions are confusing.|The instructions cause confusion.
He looks tired.|Tired describes the subject after a linking verb.
She is very helpful.|Very strengthens a gradable adjective.`),
dialogues:[D('Describing a workplace',`Visitor|What is your office like?
Ada|It is small but comfortable.
Visitor|Is it noisy?
Ada|No. It is usually quiet.`),D('A person’s qualities',`Emily|What is the new receptionist like?
Ravi|She is helpful and patient.
Emily|What makes you say that?
Ravi|She explains the forms clearly and gives people time.`),D('Feeling or cause?',`Learner|I am interesting in the lesson?
Teacher|Say interested in the lesson.
Learner|The lesson is interesting, and I am interested?
Teacher|Exactly.`),D('Avoiding a long list',`James|A quiet modern small clean office?
Emily|You can say a small modern office. It is clean and quiet.
James|Two sentences are clearer here.
Emily|Yes. Choose useful details.`),D('A useful contrast',`Ada|The journey is tiring.
Ravi|Are you tired now?
Ada|Yes, I am. But the course is interesting.
Ravi|I’m interested in the next lesson too.`)],
mistakes:R(`two comfortables chairs|two comfortable chairs|The adjective has no plural ending.
I am interesting in the course.|I am interested in the course.|Use interested for the feeling in this phrase.
The instructions are confused. (intended: they cause confusion)|The instructions are confusing.|Confusing describes the cause.
a blue old bag|an old blue bag|Age usually precedes colour here; choose an from old.
She is a very helpfuls colleague.|She is a very helpful colleague.|Do not pluralise the adjective.
an asleep child|a sleeping child|Asleep is normally after a linking verb in this use.`),
practice:{mc:Q(`Which adjective describes size?|large|friendly|patient|Large gives size information.
Which phrase is standard?|two comfortable chairs|two comfortables chairs|two comfortably chairs for this noun phrase|The adjective remains unchanged.
Choose the feeling phrase.|I am interested in the course.|I am interesting in the course.|I am interest in course.|Interested describes the learner’s feeling.
Choose the cause of boredom.|The activity is boring.|The activity is bored in this meaning.|The activity is bore.|Boring describes what produces boredom.
Which phrase has natural basic order?|an old blue bag|a blue old bag as the neutral model|an blue bag old|Age normally precedes colour here.
Which sentence uses a linking verb?|He looks tired.|He looks tiredly as the intended description.|He tired.|Tired describes he.
Which is a useful adjective-preposition pair?|interested in|interested on in this pattern|interested at the course in this pattern|Learn the common combination.
Which description supports its opinion?|The staff are helpful; they explain forms clearly.|The staff are helpful because of their appearance.|All people from that country are helpful.|A relevant behaviour supports the description.
Which is a natural contrast?|The office is small but comfortable.|The office small but is comfortable without a clear subject pattern.|The office is smalls comfortable.|But connects contrasting descriptions.
Which sentence is the usual learner pattern?|The child is asleep.|The asleep child is the only standard basic phrase.|The child asleep without a verb.|Asleep commonly follows a linking verb.`),gap:T(`Choose clean or cleanly: The room is __.|clean|An adjective describes the room.
Choose comfortable or comfortables: two __ chairs.|comfortable|Adjectives normally do not pluralise.
Choose interested or interesting: I am __ in the course.|interested|Describe the feeling.
Choose interested or interesting: The course is __.|interesting|Describe what causes interest.
Choose tired or tiring: The long journey is __.|tiring|The journey causes tiredness.
Choose tired or tiring: I am __ after the journey.|tired|Describe the person’s condition.
Choose confused or confusing: These instructions are __. They are difficult to understand.|confusing|Describe the cause of confusion.
Complete: She is interested __ the topic.|in|The common combination is interested in.
Complete: __ experienced nurse. (a/an)|an|Experienced begins with a vowel sound.
Complete: The offices __ quiet.|are|The subject is plural.`),correct:T(`Correct: two comfortables chairs.|two comfortable chairs|Keep the adjective unchanged.
Correct: I am interesting in the course.|I am interested in the course.|Use the feeling adjective.
Correct the intended cause meaning: The lesson is bored.|The lesson is boring.|Boring causes boredom.
Correct: The offices is quiet.|The offices are quiet.|Use plural agreement.
Correct: an blue old bag.|an old blue bag|Age precedes colour in this neutral model.`),order:T(`Order: small / office / modern / a / in / work / We|We work in a small modern office.|Use a manageable adjective order.
Order: comfortable / is / chair / The|The chair is comfortable.|The adjective follows be.
Order: the / in / interested / am / course / I|I am interested in the course.|Use interested in.
Order: friendly / are / colleagues / Our|Our colleagues are friendly.|Keep friendly unchanged.
Order: but / small / comfortable / is / office / The|The office is small but comfortable.|But introduces contrast.`),reading:'Ada works in a small modern office. It is clean and quiet, but sometimes crowded. Her colleagues are friendly and helpful. The new course is interesting, so Ada is interested in it. The journey to class is tiring, and she is tired afterwards. She describes the staff as helpful because they explain the forms clearly.',read:Q(`Which phrase describes the office?|small and modern|always noisy|old and dirty|The opening gives these descriptions.
What does crowded mean here?|Many people in the available space|Completely empty|Made of wood|It describes how full the place is.
Why is Ada interested?|The course is interesting.|The course is interested.|Her chair is blue.|The cause and feeling are distinguished.
What causes her tiredness?|The tiring journey|The word interested|A plural noun ending|The journey is described as tiring.
What supports helpful as a staff description?|They explain forms clearly.|Their appearance alone|Their nationality|A relevant behaviour supports the opinion.`),write:T(`Describe an imaginary workplace with three useful adjectives.|Our office is small, clean and quiet.|Use complete sentences and relevant details.
Describe a person’s helpful behaviour respectfully.|Our receptionist is patient. She explains the form slowly.|Support the description with an example.
Use interested and interesting in two sentences.|The topic is interesting. I am interested in it.|Distinguish the cause from the feeling.
Make a noun phrase with age and colour.|an old blue bag|Choose the article from the first following sound.
Write a two-sentence description instead of a long adjective list.|We work in a small modern office. It is clean and quiet.|Keep the description readable.`)},sources:[['Cambridge: adjective order','https://dictionary.cambridge.org/grammar/british-grammar/adjectives-order'],['Cambridge: adjective position','https://dictionary.cambridge.org/grammar/british-grammar/adjective-phrases-position']],related:['016','027','031','061','126']};

L['031']={intro:'Use very, really and well accurately, and recognise how basic adverbs describe actions or strengthen descriptions. Compare good/well, hard/hardly and late/lately without assuming that every adverb ends in -ly.',
goals:['Distinguish a description of a noun from a description of an action.','Use well for how an action is performed.','Place very before a suitable adjective or adverb.','Use really with a verb or description in natural patterns.','Recognise common exceptions to -ly formation and meaning.'],
sections:[
S('What does an adverb modify?','An adverb can give information about a verb, an adjective, another adverb or a wider message. She speaks clearly describes how she speaks. A very useful book strengthens useful. She speaks very clearly strengthens the adverb clearly. Ask which word or action the extra information belongs to.',[
'Adjective: a careful driver. Adverb: she drives carefully.',
'A manner adverb often answers how: How does she explain? Clearly.',
'Time and frequency adverbs have other jobs: early, often, usually.',
'Position depends on the adverb’s job, so one position rule cannot cover every adverb.'
]),
S('Good and well: description versus performance','Good is usually an adjective: a good worker, the work is good. Well is commonly an adverb for performance: she works well. However, well can also be an adjective meaning healthy: I am well. Choose by meaning, not by a false rule that well can never follow be.',[
'She is a good speaker. She speaks well.',
'The system works well means its performance is satisfactory.',
'I am well can describe health; I am good can have other context-dependent meanings.',
'After linking verbs describing a subject, use a suitable adjective: The soup smells good.'
],table(['Description','Action performance'],`a good speaker|She speaks well.
a careful driver|She drives carefully.
a clear explanation|He explains clearly.
a quiet room|They work quietly.`)),
S('Very strengthens a description, not an ordinary verb directly','Very normally comes before a suitable gradable adjective or another adverb: very useful, very clearly. Do not use I very like it. For an ordinary verb such as like, use really like or like very much.',[
'The lesson is very useful. She speaks very clearly.',
'I really like this lesson. I like this lesson very much.',
'Very is not the default intensifier for every adjective: absolutely exhausted is often more natural than very exhausted.',
'Learn natural combinations and register rather than adding a strength word automatically.'
]),
S('Really can strengthen verbs as well as descriptions','I really like the course strengthens like. The course is really useful strengthens useful. She speaks really clearly strengthens clearly. Really can also express surprise in a response: Really? Tone and context tell the listener which use is intended.',[
'Before a main verb in the common pattern: I really enjoy it.',
'Before an adjective: really helpful, really busy.',
'Before a manner adverb: really well, really slowly.',
'Do not confuse real as an adjective with the standard adverb really in these learner patterns.'
]),
S('Many manner adverbs use -ly, but check exceptions','Careful becomes carefully; clear becomes clearly. Easy becomes easily and happy becomes happily. Fast, hard and early can be adverbs without -ly. Friendly is normally an adjective, so in a friendly way is often the needed manner phrase.',[
'She works hard means she makes a strong effort. She hardly works means she does almost no work.',
'He arrived late means after the expected time. Lately usually means recently.',
'A fast train; the train moves fast. Do not invent fastly in the ordinary pattern.',
'The suffix is a clue, not a complete word-class or meaning test.'
]),
S('Use natural position and keep the message clear','Manner adverbs often follow the verb and its object: She explained the rule clearly. Avoid separating a short verb and its direct object in an unnatural way. Frequency adverbs such as usually have a different common position: She usually explains the rule clearly.',[
'He speaks slowly. She explains the rule well.',
'She is very helpful uses an adjective after be; she helps willingly describes the action.',
'Some adverbs can move for emphasis, but begin with the neutral patterns.',
'Read the sentence without the adverb, check the basic structure, then add the adverb where it naturally belongs.'
])],
examples:R(`She is a careful driver.|Careful describes the driver.
She drives carefully.|Carefully describes driving.
He gives a clear explanation.|Clear describes the noun.
He explains clearly.|Clearly describes the action.
She is a good speaker.|Good is an adjective.
She speaks well.|Well describes performance.
The system works well.|Well describes how it functions.
I am well, thank you.|Well can be an adjective for health.
The soup smells good.|Good describes the soup after a linking verb.
The lesson is very useful.|Very strengthens the adjective useful.
She speaks very clearly.|Very strengthens another adverb.
The office is very quiet.|Very modifies quiet, not office directly.
I really like this course.|Really strengthens the main verb.
I like this course very much.|Very much is a natural strength phrase here.
This idea is really helpful.|Really strengthens helpful.
She explains it really well.|Really strengthens well.
Really? That is useful.|Really can express a reaction.
careful — carefully|A common -ly formation.
easy — easily|Change y to i before -ly.
happy — happily|Another y-to-i formation.
The train moves fast.|Fast can be an adverb without -ly.
He works hard.|Hard means with strong effort.
He hardly works.|Hardly means almost not in this context.
She arrived early.|Early can be an adverb.
He arrived late.|Late means after the expected time.
I have been busy lately.|Lately means recently.
They are friendly.|Friendly is an adjective here.
She answered in a friendly way.|Use a manner phrase for this adjective.
She explained the rule clearly.|The adverb follows the verb and object.
She usually explains the rule clearly.|Frequency and manner have different positions.`),
dialogues:[D('Good or well?',`Learner|She speaks English good?
Teacher|For performance, say She speaks English well.
Learner|And She is a good speaker?
Teacher|Yes. Good describes the person.`),D('Very and a verb',`Ada|I very like this course?
Ravi|Say I really like this course, or I like it very much.
Ada|But the course is very useful?
Ravi|Yes. Very can strengthen useful.`),D('Hard and hardly',`Emily|He works hard.
James|So he makes a lot of effort?
Emily|Yes. He hardly works would mean almost the opposite.
James|The -ly changes the meaning.`),D('A friendly manner',`Learner|She answered friendly?
Teacher|A useful standard phrase is She answered in a friendly way.
Learner|Friendly is an adjective?
Teacher|Yes, in this use.`),D('A useful explanation',`Ada|The teacher explains the rules very clearly.
Ravi|Does she explain the exercises well too?
Ada|Yes. I really like her examples.
Ravi|That sounds helpful.`)],
mistakes:R(`She speaks good.|She speaks well.|Use well for action performance here.
I very like it.|I really like it.|Very does not directly modify like in this pattern.
The train moves fastly.|The train moves fast.|Fast is the ordinary adverb.
He works hardly. (intended: with strong effort)|He works hard.|Hardly means almost not in this use.
She is a carefully driver.|She is a careful driver.|Use an adjective before driver.
Every adverb ends in -ly.|Fast, hard and early can be adverbs.|Suffix alone is not enough.`),
practice:{mc:Q(`Choose the performance sentence.|She speaks well.|She speaks good.|She speaks a good.|Well describes how she speaks.
Choose the noun description.|a careful driver|a carefully driver|a care driver in this meaning|Use an adjective before the noun.
Choose the strength pattern with like.|I really like it.|I very like it.|I like very it.|Really can strengthen the verb.
Which is correct?|The lesson is very useful.|The lesson very is useful in the neutral model.|The lesson is very usefully as a noun description.|Very precedes the adjective.
Which sentence means strong effort?|He works hard.|He hardly works.|He works fastly.|Hard is the intended manner adverb.
What does hardly mean here: She hardly works?|Almost not|With great effort|Always very quickly|It has a different meaning from hard.
Choose the ordinary adverb.|fast|fastly|fastness for manner|Fast already functions as an adverb.
Which statement about well is accurate?|It can also be an adjective meaning healthy.|It can never follow be.|It is always a noun.|I am well is a normal health statement.
Which phrase is a natural manner alternative for friendly?|in a friendly way|friendlily is required in every case|friendlys|Use a clear phrase in this learner pattern.
Which neutral order is natural?|She explained the rule clearly.|She explained clearly the rule as the only neutral pattern.|She clearly rule explained.|The manner adverb often follows the object.`),gap:T(`Choose good or well: She speaks __.|well|Describe the action’s performance.
Choose careful or carefully: a __ driver.|careful|Describe the person.
Choose careful or carefully: She drives __.|carefully|Describe the action.
Complete: The lesson is __ useful. (very/fastly)|very|Very strengthens the adjective.
Complete: I __ like the course. (really/very)|really|Really can strengthen like.
Complete: I like it very __.|much|Very much is natural with like.
Write the usual adverb from easy.|easily|Change y to i before -ly.
Choose hard or hardly for strong effort: He works __.|hard|Hardly has a different meaning.
Choose fast or fastly: The train moves __.|fast|Fast is the normal adverb.
Choose late or lately meaning recently: I have been busy __.|lately|Lately refers to recent time.`),correct:T(`Correct: She speaks good.|She speaks well.|Use well for performance.
Correct: I very like it.|I really like it.|Really can modify the verb.|I like it very much.
Correct: The train moves fastly.|The train moves fast.|Use fast as the adverb.
Correct: She is a carefully driver.|She is a careful driver.|Use an adjective before driver.
Correct intended strong effort: He works hardly.|He works hard.|Do not confuse hard with hardly.`),order:T(`Order: well / speaks / She|She speaks well.|Well follows the action.
Order: useful / very / is / lesson / The|The lesson is very useful.|Very strengthens useful.
Order: course / really / this / like / I|I really like this course.|Really commonly goes before like.
Order: clearly / rule / explained / the / She|She explained the rule clearly.|The manner adverb follows the object.
Order: hard / works / He|He works hard.|Hard means with strong effort.`),reading:'Ada really likes her new course. The teacher explains the rules very clearly and gives good examples. Ravi studies hard, but he does not study fast. He prefers to understand slowly and accurately. Ada says the website works well. Their colleague hardly uses it because he has little free time.',read:Q(`What does really strengthen in the first sentence?|likes|course as a plural ending|new only|It modifies the verb likes.
What does very strengthen?|clearly|teacher|rules as a noun|Very modifies another adverb.
What does studies hard mean?|Studies with effort|Almost never studies|Studies only recently|Hard expresses effort.
What does works well describe?|The website’s performance|Its colour|Its owner’s age|Well modifies works.
What does hardly uses mean in this passage?|Uses it very little|Uses it with strong effort|Uses it very quickly|Hardly means almost not.`),write:T(`Use good and well in two sentences.|She is a good speaker. She speaks well.|Distinguish description from performance.
Write a sentence with very and an adjective.|The lesson is very useful.|Choose a natural gradable adjective.
Write a sentence with really and a verb.|I really like this course.|Do not use very directly before like.
Explain hard versus hardly with examples.|He works hard means effort. He hardly works means almost no work.|The meanings differ strongly.
Write a manner sentence with an object.|She explains the rule clearly.|Keep a natural verb–object relationship.`)},sources:[['Cambridge: adverbs','https://dictionary.cambridge.org/grammar/british-grammar/adverbs'],['Cambridge: hard and hardly','https://dictionary.cambridge.org/grammar/british-grammar/hardly']],related:['016','030','039','064']};

L['032']={intro:'Give clear instructions with a base verb, make negative instructions with don’t and choose a suitable polite form. Practise directions, forms and everyday requests, including don’t be and let’s.',
goals:['Start a basic imperative with the base verb.','Use don’t/do not for negative instructions.','Use don’t be before a suitable adjective.','Choose a direct instruction or a softer request for the situation.','Use let’s for a suggestion including the speaker.'],
sections:[
S('An imperative tells someone what to do','Open the book and Please take a seat are imperatives. The verb is in its base form, and the subject you is normally not expressed. This is a normal exception to the full subject pattern in ordinary statements. The listener is understood from the situation.',[
'Read the instructions. Write your name. Wait here.',
'Do not add -s because the listener is one person: Open, not Opens.',
'The form can address one person or a group without changing the verb.',
'An imperative can be an instruction, an invitation, advice or an urgent warning; meaning and tone matter.'
]),
S('Negative imperatives use don’t or do not','Put don’t before the base verb: Don’t open that file. Do not is the full form and is common in formal notices. Unlike ordinary be negatives, the negative imperative uses don’t even with be: Don’t be late.',[
'Don’t leave the door open. Do not touch that button.',
'Don’t be late. Don’t be worried about every small error.',
'Do not use not open or don’t opens as the ordinary pattern.',
'Please can occur in a negative instruction too: Please don’t write in this box.'
],table(['Positive','Negative'],`Open the window.|Don’t open the window.
Write your name.|Don’t write your address here.
Be careful.|Don’t be careless.
Wait here.|Don’t leave yet.`)),
S('Politeness comes from context, wording and tone','Please helps, but it does not make every command equally suitable. A direct instruction is natural on a form, in a recipe or in a clear urgent situation. A question may be better when asking a colleague for a favour: Could you close the window, please?',[
'Instruction: Sign your name here. Softer request: Could you sign here, please?',
'Please can come near the beginning or end: Please wait here; Wait here, please.',
'A harsh tone can still sound rude with please. A calm, clear tone matters.',
'Do not assume a direct imperative is always rude or that could is always required.'
]),
S('Make the action and object clear','A useful instruction tells the listener what to do, where to do it and sometimes why. Write your surname in this box is clearer than Do it there when the task is unfamiliar. Use object pronouns only after the reference is clear.',[
'Read this page. Then answer the questions.',
'Put the form on the desk. Please give it to the receptionist.',
'For directions, Turn left after the bank and Go straight ahead are useful chunks.',
'Use one manageable action at a time when the learner or visitor needs extra clarity.'
]),
S('Let’s makes a suggestion including the speaker','Let’s means let us in this suggestion pattern. Let’s practise includes the speaker and at least one other person. The negative is Let’s not start yet. Do not add to before the next verb. This is different from a request for someone to allow us to do something.',[
'Let’s read the first example together.',
'Let’s take a short break. Let’s not rush.',
'Use an apostrophe in let’s for this contraction.',
'Do not confuse lets in She lets him use it with the suggestion Let’s use it.'
]),
S('Check understanding and respond naturally','After an instruction, a listener can say Of course, All right or Could you repeat that, please? A teacher or worker can check the meaning with a specific question. Practise a full exchange rather than repeating commands without a response.',[
'Please write your name here. — In capital letters? — Yes, please.',
'Could you close the door? — Of course.',
'For a negative, confirm the intended action: So I should leave this box empty?',
'When an instruction is unclear, ask before guessing. Clear language is part of a useful adult conversation.'
])],
examples:R(`Please take a seat.|A polite invitation.
Open your book.|Use the base verb.
Read the first paragraph.|A clear learning instruction.
Write your name here.|The object and place are specified.
Sign your name in this box.|A form instruction.
Wait here, please.|Please can come at the end.
Please speak slowly.|A manner adverb makes the request clearer.
Close the window.|A direct instruction; context controls tone.
Could you close the window, please?|A softer question request.
Please give it to me.|Use a clear pronoun reference.
Put the form on the desk.|Specify the object and location.
Read the instructions first.|A sequence word helps organise the task.
Then answer the questions.|Continue the sequence.
Turn left after the bank.|A useful direction.
Go straight ahead.|A useful direction chunk.
Don’t open that file.|A negative imperative.
Do not touch that button.|A full-form instruction or notice.
Don’t leave the door open.|Don’t is followed by a base verb.
Please don’t write in this box.|A polite negative instruction.
Don’t be late.|Negative imperative of be.
Be careful.|Positive imperative with be.
Don’t be careless.|Don’t be plus adjective.
Let’s practise together.|A suggestion including the speaker.
Let’s take a break.|The next verb is a base form.
Let’s not rush.|A negative suggestion.
Let’s read the example first.|Keep the apostrophe in let’s.
Of course.|A natural acceptance of a suitable request.
All right. I’ll do that.|A natural response.
Could you repeat the instruction, please?|Ask for clarification.
Should I use capital letters?|Check a specific detail.`),
dialogues:[D('A form',`Worker|Please write your surname in this box.
Ada|Should I use capital letters?
Worker|Yes, please. Leave the next box empty.
Ada|All right. Thank you.`),D('A request at work',`Ravi|Could you close the window, please?
Ada|Of course. Is it too cold?
Ravi|Yes, a little. Thank you.
Ada|You’re welcome.`),D('Simple directions',`Visitor|Where is the meeting room?
Receptionist|Go straight ahead. Turn left after the lift.
Visitor|Left after the lift?
Receptionist|Yes. The room is on your right.`),D('Don’t be',`Learner|Not be late?
Teacher|For the instruction, say Don’t be late.
Learner|And the positive is Be on time?
Teacher|Yes.`),D('A joint suggestion',`Emily|Let’s read the example together.
James|Good idea. Let’s not rush.
Emily|Then we can check the answers.
James|All right.`)],
mistakes:R(`Opens your book.|Open your book.|Use the base verb in the imperative.
Not open the file.|Don’t open the file.|Use don’t plus the base verb.
Don’t opens the door.|Don’t open the door.|Do not add -s after don’t.
Not be late.|Don’t be late.|The negative imperative of be uses don’t.
Let’s to practise.|Let’s practise.|Use the base verb without to.
Every imperative is rude.|Context and tone determine whether a direct instruction is suitable.|Forms and directions naturally use imperatives.`),
practice:{mc:Q(`Choose the positive imperative.|Open your book.|Opens your book.|You is open book.|Use the base verb.
Choose the negative imperative.|Don’t open the file.|Not open the file.|Don’t opens the file.|Use don’t plus base verb.
Choose the negative instruction with be.|Don’t be late.|Not is late.|Don’t are late.|Use don’t be.
Which is a softer request to a colleague?|Could you close the window, please?|Close window you.|Closes the window.|A polite question can soften the request.
Which statement about please is accurate?|Tone and context still matter.|It makes every possible command polite.|It must only occur at the end.|Politeness involves more than one word.
Which instruction is clearest on a form?|Write your surname in this box.|Do it somewhere.|That thing, now.|Name the action, object and location.
Which includes the speaker in a suggestion?|Let’s practise.|You practise alone.|She practises.|Let’s normally includes the speaker.
Choose the negative suggestion.|Let’s not rush.|Let’s don’t rush.|Let’s to not rush.|Use let’s not plus base verb.
Which is an appropriate clarification?|Should I use capital letters?|Your name mine.|Yes no maybe all forms.|Ask about the unclear detail.
Which statement about the subject is accurate?|The imperative normally leaves you unexpressed.|Every imperative needs I.|Every instruction has no verb.|The listener is understood.`),gap:T(`Complete: __ your book. (open/opens)|Open|Use the base verb.
Complete: Please __ your name. (write/writes)|write|Use the base verb.
Complete: __ open the file. (negative contraction)|Don’t|Don’t begins the negative instruction.|Don't
Complete: Don’t __ late.|be|Use be after don’t.
Complete: __ careful. (be/is)|Be|The imperative uses base be.
Complete: Could you __ the window? (close/closes)|close|Use the base verb after could.
Complete: Let’s __ together. (practise/to practise)|practise|No to after let’s in this pattern.
Complete: Let’s __ rush. (negative)|not|Use let’s not.
Complete: Put the form __ the desk. (surface)|on|The preposition specifies the location.
Complete: Turn __ after the bank. (left/lefts)|left|Left is the direction word.`),correct:T(`Correct: Opens your book.|Open your book.|Use the base form.
Correct: Not open the file.|Don’t open the file.|Use a negative imperative.|Do not open the file.~Don't open the file.
Correct: Don’t opens the door.|Don’t open the door.|Use base open after don’t.|Don't open the door.~Do not open the door.
Correct: Not be late.|Don’t be late.|Use don’t be.|Don't be late.~Do not be late.
Correct: Let’s to practise.|Let’s practise.|Remove to.|Let's practise.`),order:T(`Order: seat / take / a / Please|Please take a seat.|Use the base verb.
Order: file / the / open / Don’t|Don’t open the file.|Use don’t plus base verb.|Don't open the file.
Order: here / name / your / Write|Write your name here.|Give action, object and place.
Order: together / practise / Let’s|Let’s practise together.|Let’s includes the speaker.|Let's practise together.
Order: late / be / Don’t|Don’t be late.|Use the negative imperative of be.|Don't be late.`),reading:'At reception, a worker says, “Please write your name in this box. Don’t write in the next box.” Ada asks whether she should use capital letters. The worker says yes. Later, Emily suggests, “Let’s read the first example together.” Ravi asks Ada, “Could you close the window, please?” Ada agrees.',read:Q(`What should Ada write?|Her name|A price only|Nothing anywhere|The worker specifies the name.
What should she not do?|Write in the next box|Use a pen at all|Ask a question|The negative instruction identifies the next box.
What does Ada clarify?|Whether to use capitals|The teacher’s nationality|A train date|She asks about the writing format.
What does let’s signal?|A suggestion including the speaker|A singular noun plural|A past tense|Emily proposes a shared activity.
Which form does Ravi choose?|A polite question request|An incorrect past tense|A plural noun instruction|Could you softens the request.`),write:T(`Write three clear classroom instructions.|Open your book. Read the example. Write your answer.|Use base verbs and relevant objects.
Make a negative imperative with be.|Don’t be late.|Use don’t be.
Turn Close the window into a softer request.|Could you close the window, please?|Keep the action clear.
Write a positive and negative suggestion with let’s.|Let’s practise. Let’s not rush.|Include the apostrophe and base verb.
Write a request and clarification exchange.|A: Write your name here, please. B: Should I use capitals? A: Yes, please.|Check a specific detail rather than guessing.`)},sources:[['Cambridge: imperatives','https://dictionary.cambridge.org/grammar/british-grammar/imperative']],related:['008','011','014','028','033']};

L['033']={intro:'Use your first grammar skills in a realistic workplace conversation. Introduce a colleague, explain your role and workplace, ask a useful follow-up question and check a location or instruction politely.',
goals:['Introduce yourself and another colleague clearly.','Describe a role and workplace with suitable patterns.','Ask a follow-up question based on the other person’s answer.','Explain simple locations and facilities.','Repair a misunderstood name, place or instruction politely.'],
sections:[
S('Begin with the useful basics','A first workplace conversation often needs a name, a role and a friendly greeting. Hi, I’m Noor. I work in accounts gives two useful facts. If introducing somebody else, say This is my colleague, Ada. Do not assume that a long memorised speech is necessary.',[
'Name: My name is Noor. Role: I’m an administrator.',
'Department: I work in accounts. Location: My office is on the second floor.',
'At a first introduction, Nice to meet you is appropriate.',
'Names, job titles and departments are different kinds of information. Keep the facts relevant to the listener.'
]),
S('Use be for a role and work for an activity','I am a receptionist uses be and a singular countable job noun. I work at reception uses an ordinary action verb and a workplace phrase. She works in accounts is another useful chunk; Lessons 034–035 develop present-simple agreement.',[
'I’m a nurse; I work in a clinic.',
'I’m an engineer; I work on the third floor.',
'Do not say I am work or I am receptionist in the ordinary patterns.',
'A department name may be an established phrase, such as accounts or customer services. Learn the wording used in the organisation.'
]),
S('Describe the workplace in a clear order','Start with the general setting, then give useful details. Our office is small but comfortable. There are two desks. The meeting room is next to reception gives a practical picture. Distinguish introducing a facility from locating one already known.',[
'Existence: There is a small kitchen. Location: The kitchen is behind the meeting room.',
'Use adjectives unchanged with plural nouns: two quiet rooms.',
'Use is for one room and are for several rooms.',
'Floor numbering can vary across countries. In British usage the ground floor is usually the street-level floor, with the first floor above; clarify if it matters.'
],table(['Need','Useful question','Useful reply'],`Role|What do you do?|I’m an administrator.
Work location|Where do you work?|On the second floor.
Facility|Is there a kitchen?|Yes, there is.
Known place|Where is the meeting room?|Next to reception.
Resource|Have you got a pen?|Yes, I have.`)),
S('Listen, then choose a follow-up','A conversation should respond to what the other person actually says. If someone says I work in accounts, Where is your office? follows naturally. Repeating What do you do? immediately after that answer does not advance the exchange.',[
'Ask one clear question, listen and respond before moving on.',
'Use What about you? when the same topic applies to the other speaker.',
'Acknowledge useful information: Thank you. That’s helpful.',
'Avoid pressing for private details that are not relevant to the situation. Language practice can use imaginary identities.'
]),
S('Give a practical request or instruction','A new colleague may need a form, a room or an explanation. Use Could you…? for a favour and a clear imperative when giving ordinary directions. Include the object and location so the listener does not need to guess what it means.',[
'Could you show me the meeting room, please?',
'Please put the form on the desk. Give it to the receptionist.',
'Could you explain the first question? is more specific than I don’t understand everything.',
'After a direction, confirm the landmark: Next to reception, is that right?'
]),
S('Repair a misunderstanding and end well','Ask for repetition when a name or detail is unclear. Spell the part that matters and read it back. Correct a misunderstanding without blaming the listener. Finish with thanks or a natural next step: Thank you. I’ll see you at the meeting.',[
'Sorry, was that Noor or Nora?',
'Could you spell your surname, please?',
'My office is on the second floor, not the third.',
'Practise once with notes, then change roles and ask one unplanned follow-up question.'
])],
examples:R(`Hi, I’m Noor.|A simple name introduction.
I’m a new member of the team.|Give the relevant role in the situation.
Nice to meet you.|A first-meeting phrase.
This is my colleague, Ada.|Introduce another person clearly.
These are our colleagues.|A plural introduction.
I’m an administrator.|Use an before the vowel sound.
I work in accounts.|Work introduces the activity or department.
I’m a nurse. I work in a clinic.|Separate the job and workplace patterns.
My office is on the second floor.|Give a work location.
The ground floor is at street level here.|Clarify the local numbering convention.
Our office is small but comfortable.|A useful contrast in a description.
Our colleagues are friendly.|The adjective stays unchanged.
There are two clean desks.|Introduce plural facilities.
There is a small kitchen.|Introduce a singular facility.
The kitchen is behind the meeting room.|Locate the known kitchen.
The meeting room is next to reception.|A useful landmark.
What do you do?|Ask about a role in this context.
Where do you work?|Ask about work location.
Where is your office?|A natural follow-up to a department answer.
What about you?|Return the same topic.
Is there a printer nearby?|Ask whether a resource exists.
Have you got a pen?|Check possession of a resource.
Could you show me the meeting room?|Ask for practical help.
Please put the form on the desk.|A clear action and location.
Could you explain the first question?|Identify the unclear part.
Sorry, was that Noor or Nora?|Check a name precisely.
Could you spell your surname, please?|Request the letter sequence.
My office is on the second floor, not the third.|Correct the specific misunderstanding.
Thank you. That’s helpful.|Acknowledge the information.
I’ll see you at the meeting.|A useful closing chunk.`),
dialogues:[D('A first meeting',`Noor|Hi, I’m Noor. I work in accounts.
Ada|Nice to meet you. I’m Ada, the new administrator.
Noor|Welcome to the team. Where is your office?
Ada|On the second floor.`),D('Introducing a colleague',`James|Emily, this is my colleague, Ada.
Emily|Nice to meet you, Ada. What do you do?
Ada|I’m an administrator. I help with the course forms.
Emily|That’s useful to know. Welcome.`),D('Finding a facility',`Ada|Is there a kitchen nearby?
Ravi|Yes, there is. It is behind the meeting room.
Ada|Where is the meeting room?
Ravi|Next to reception.`),D('A name check',`Noor|My surname is Khan.
Ada|Could you spell that, please?
Noor|K–H–A–N.
Ada|K–H–A–N. Thank you.`),D('A useful request',`Ada|Could you explain the first question on this form?
Noor|Of course. Write your department here.
Ada|Accounts, is that right?
Noor|Yes. Put the form on my desk when you finish.`)],
mistakes:R(`I am work in accounts.|I work in accounts.|Use the ordinary work pattern without am.
I am administrator.|I am an administrator.|A singular countable job noun needs a determiner.
The meeting room are upstairs.|The meeting room is upstairs.|Room is singular.
There is two desks.|There are two desks.|Desks is plural.
Where your office?|Where is your office?|The full question needs be.
A useful follow-up ignores the previous answer.|A useful follow-up responds to the information just given.|Listen before choosing the next question.`),
practice:{mc:Q(`Choose the natural introduction.|Hi, I’m Noor. I work in accounts.|I am work accounts.|My name Noor work.|Use complete basic patterns.
Choose the job sentence.|I’m an administrator.|I’m administrator.|I work an administrator without another pattern.|The singular job noun needs an.
Someone says I work in accounts. Choose a useful follow-up.|Where is your office?|What do you do? repeated immediately|What is your exact private address?|A location question builds on the answer.
Choose the facility question.|Is there a kitchen?|Does there is a kitchen?|Are there a kitchen?|A singular facility takes is there.
Choose the location statement.|The room is next to reception.|The room are next reception.|The room next reception.|Use the full be and place phrase.
Choose the plural description.|There are two clean desks.|There is two cleans desks.|There are two clean desk.|Use plural agreement and unchanged adjective.
Which is a precise clarification?|Was that Noor or Nora?|I understand everything when you do not.|Tell me all details again always.|Name the uncertainty.
Which is a polite favour request?|Could you show me the meeting room?|Could you shows me room?|Shows room now you.|Use could you plus base verb.
What should you do with floor numbering internationally?|Clarify the local convention when it matters.|Assume every country numbers floors identically.|Use only colours.|Ground/first-floor conventions vary.
Which closes the exchange naturally?|Thank you. That’s helpful.|No response after help in every situation.|Repeat your own name only.|Acknowledge the assistance.`),gap:T(`Complete: I __ in accounts. (work/am work)|work|Use the simple action pattern.
Complete: I am __ administrator.|an|Administrator begins with a vowel sound.
Complete: This __ my colleague, Ada.|is|A singular introduction uses is.
Complete: Our colleagues __ friendly.|are|The subject is plural.
Complete: There __ two desks.|are|Desks is plural.
Complete: The meeting room is next __ reception.|to|Keep to in next to.
Complete: Where __ your office?|is|Office is singular.
Complete: Could you __ me the room? (show/shows)|show|Use the base verb after could.
Complete: Could you __ your surname? (letters)|spell|Spelling gives the letters.
Complete: Thank you __ your help.|for|Thank someone for something.`),correct:T(`Correct: I am work in accounts.|I work in accounts.|Remove am.
Correct: I am administrator.|I am an administrator.|Add an.
Correct: There is two desks.|There are two desks.|Use plural agreement.
Correct: Where your office?|Where is your office?|Add the missing be form.
Correct: The room is next reception.|The room is next to reception.|Use the complete place phrase.`),order:T(`Order: accounts / in / work / I|I work in accounts.|Use work without am.
Order: colleague / my / is / This / Ada|This is my colleague, Ada.|Introduce the person with a name.
Order: office / your / is / Where|Where is your office?|Use be question order.
Order: two / are / desks / clean / There|There are two clean desks.|The adjective precedes the plural noun.
Order: reception / next / is / to / room / The|The room is next to reception.|Use the full location phrase.`),reading:'Noor works in accounts. Ada is a new administrator. Her office is on the second floor. Noor introduces her to Emily and shows her the meeting room next to reception. There is a small kitchen behind it. Ada asks Noor to spell Khan, then reads the surname back. She thanks Noor for the help.',read:Q(`What is Ada’s role?|Administrator|Driver|Reception building|She is identified as a new administrator.
Where is Ada’s office?|On the second floor|Behind the kitchen|On the street|The passage gives the floor.
Where is the meeting room?|Next to reception|Inside a bag|Opposite the city|The passage gives the landmark.
What does Ada check by spelling?|Noor’s surname Khan|The price of a pen|The date|She asks for the surname’s letters.
What does Ada do at the end?|Thanks Noor|Refuses to listen|Repeats the same question without responding|She acknowledges the help.`),write:T(`Write a short workplace introduction.|Hi, I’m Ada. I’m an administrator. I work on the second floor.|Use your own or imaginary details.
Introduce another colleague.|This is my colleague, Ravi.|Make the name and relationship clear.
Describe two facilities and their locations.|There is a kitchen behind the meeting room. The printer is next to reception.|Distinguish existence and location.
Write a follow-up to I work in accounts.|Where is your office?|Respond to the given information.
Write a six-line workplace conversation with a clarification.|A: Hi, I’m Noor. B: Nice to meet you. Where is your office? A: On the second floor. B: Second, not third? A: Yes. B: Thank you.|Other natural conversations are welcome.`)},sources:[['British Council: meeting new people','https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people']],related:['008','023','028','032','034']};

L['034']={intro:'Use the present simple with I, you, we and they for routines, general facts and stable situations. Build positive statements with the base verb, then recognise the matching do/don’t question and negative patterns.',
goals:['Use base verbs with I/you/we/they in positive statements.','Describe habits, facts and states with present simple.','Add suitable routine and frequency expressions.','Distinguish present simple from an action happening right now.','Recognise do/don’t and avoid adding unnecessary be.'],
sections:[
S('Present simple is useful beyond this exact moment','I work in a clinic describes a regular activity or stable situation. It does not necessarily mean I am working at the moment of speaking. We live near the station describes residence. They need help describes a current state. Meaning and context decide the use.',[
'Routine: I start work at eight every weekday.',
'General fact or stable situation: We live in Doha.',
'State: I know the address. They like the course.',
'The tense also appears in schedules and other uses. Begin with clear routine, fact and state examples.'
]),
S('Use the base form with these subjects','With I, you, we and they, an ordinary positive present-simple verb normally has the base form: work, live, study, have. Do not add the he/she/it ending. Plural noun subjects follow the same pattern: The learners study English.',[
'I work; you work; we work; they work.',
'I have a phone; we have phones. Have is the base form here.',
'Do not put to before the main verb in an ordinary statement: I work, not I to work.',
'Be has its own forms: I am, you/we/they are. It does not follow the ordinary base-form pattern.'
],table(['Subject','Positive statement','Base verb'],`I|I work in a clinic.|work
you|You live nearby.|live
we|We study English.|study
they|They travel by train.|travel
the learners|The learners read every day.|read`)),
S('Time expressions make the routine clear','Every day, every week, on Mondays and at weekends can show a repeated routine. They often come at the end of the sentence, though some can go at the beginning. Every day is two words when it means each day; everyday is an adjective as in everyday English.',[
'I check my emails every morning.',
'We study on Mondays. On Mondays, we study after work.',
'At weekends is a common British phrase; on weekends is common in other varieties.',
'Use a time phrase because it helps the message, not because every present-simple sentence requires one.'
]),
S('Frequency words fit a common middle position','Usually, often and sometimes can describe how regularly something happens. The neutral position is often before an ordinary main verb: We usually arrive early. Be has a different common position: We are usually early. Lesson 039 develops these patterns.',[
'I always check the details. They often travel by train.',
'Sometimes can also occur at the beginning or end in suitable contexts.',
'Never already has negative meaning: I never smoke is a positive-form clause with negative meaning.',
'Do not assign a rigid universal percentage to words such as often or usually.'
]),
S('Recognise the negative and question families','Ordinary present-simple negatives use do not/don’t plus the base verb: We don’t work on Sundays. Questions use Do + subject + base verb: Do they live nearby? Short answers match do. Lessons 036–037 develop both systems in detail.',[
'I work here → I don’t work here → Do you work here?',
'Do you study English? — Yes, I do. No, I don’t.',
'Do not use am/are directly before the base action verb: I am work is not the ordinary pattern.',
'Be stays separate: Are you ready? is correct, not Do you are ready?'
]),
S('Simple versus an action in progress','I work every day gives a routine. I am working now presents an action in progress. Do not replace every present-time message with an -ing form; many state meanings normally use simple forms. Use this contrast as a map, then study the continuous pattern in its own lesson.',[
'I study English after work: a routine. I am studying now: an activity in progress.',
'I know the answer is a normal state pattern.',
'An arrangement such as a train leaves at six can use present simple even for a future scheduled event.',
'Practise a five-sentence routine using only clear subjects and appropriate base verbs before adding more detail.'
])],
examples:R(`I work in a clinic.|An ordinary routine or stable work situation.
You work nearby.|Use base work with you.
We work together.|Use base work with we.
They work on Fridays.|Use base work with they.
I live in Doha.|A stable residence statement.
We live near the station.|A plural subject takes base live.
They study English.|No -s ending with they.
I have a phone.|Have is the base form.
You need a ticket.|A state of need.
We know the address.|A state of knowledge.
They like the course.|A preference or feeling.
I start work at eight.|A routine start time.
I finish at five.|A routine finish time.
We take the bus to work.|A repeated travel habit.
They travel by train.|A general travel pattern.
I check emails every morning.|The time phrase marks repetition.
We study on Mondays.|A repeated day expression.
On Mondays, we study after work.|A time phrase can start the sentence.
I practise English every day.|Every day means each day.
I use everyday English at work.|Everyday is an adjective here.
We usually arrive early.|Usually comes before the main verb.
They often work from home.|Often describes frequency.
I sometimes take the train.|A common neutral frequency position.
I never smoke.|Never already gives negative meaning.
We don’t work on Sundays.|Use don’t plus base work.
Do you live nearby?|A do question.
Yes, I do.|A matching short answer.
I study after work.|A routine.
I am studying now.|An activity in progress, a different pattern.
The trains leave at six.|A plural schedule statement.`),
dialogues:[D('A work routine',`Ada|I start work at eight. What about you?
Ravi|I start at nine.
Ada|Do you take the bus?
Ravi|Yes, I do.`),D('A study habit',`Emily|We study English on Mondays.
James|Do you practise every day too?
Emily|Yes. We read a little after work.
James|That sounds useful.`),D('Routine or now?',`Learner|I study every day. Does that mean right now?
Teacher|Not necessarily. It describes your routine.
Learner|For right now, I can say I am studying?
Teacher|Yes, for an activity in progress.`),D('No extra be',`Learner|I am work in a clinic?
Ada|Say I work in a clinic.
Learner|But I am a nurse is correct?
Ada|Yes. The patterns differ.`),D('A shared schedule',`Ravi|Do the learners meet after work?
Emily|Yes, they do. They meet on Mondays.
Ravi|Do they work on Sundays?
Emily|No, they don’t.`)],
mistakes:R(`I works here.|I work here.|Use the base form with I.
They studies English.|They study English.|No third-person singular ending with they.
I am work in a clinic.|I work in a clinic.|Do not insert be before the base action verb.
We to live nearby.|We live nearby.|No to before this finite main verb.
I practise everyday. (intended each day)|I practise every day.|The time phrase is two words.
Do you are ready?|Are you ready?|Be makes its own question.`),
practice:{mc:Q(`Choose the positive form with I.|I work here.|I works here.|I am work here.|Use base work.
Choose the positive form with they.|They study English.|They studies English.|They to study English.|Use the base form.
Which sentence describes a routine?|I check emails every morning.|I am checking an email now.|Checking an email as a fragment|The repeated time phrase supports routine meaning.
Which sentence expresses a state?|We know the address.|We are knowing the address in the ordinary meaning.|We knowing address.|Know normally uses the simple form here.
Choose the ordinary negative.|We don’t work on Sundays.|We aren’t work on Sundays.|We don’t works on Sundays.|Use don’t plus base work.
Choose the ordinary question.|Do you live nearby?|Are you live nearby?|Do you lives nearby?|Use do and base live.
Which phrase means each day?|every day|everyday as an adverb here|everydays|Every day is the time phrase.
Which neutral frequency position is natural?|We usually arrive early.|We arrive usually early as the only model.|Usually we are arrive.|Usually often goes before the main verb.
Does every present-simple sentence need an explicit routine phrase?|No|Yes|Only sentences with I do.|Context may supply the meaning.
Which question correctly uses be?|Are you ready?|Do you are ready?|Are you be ready?|Be follows its own question pattern.`),gap:T(`Complete: I __ in a clinic. (work/works)|work|Use the base form.
Complete: You __ nearby. (live/lives)|live|You takes base live.
Complete: We __ English. (study/studies)|study|We takes base study.
Complete: They __ by train. (travel/travels)|travel|They takes base travel.
Complete: I __ a phone. (have/has)|have|Use have with I.
Complete: We __ the address. (know/knows)|know|Use base know with we.
Complete: I practise English every __. (day/days)|day|Every day uses singular day.
Complete: We study __ Mondays.|on|Use on with the repeated day here.
Complete: __ you live nearby?|Do|Use do in the ordinary question.
Complete: We __ work on Sundays. (don’t/doesn’t)|don’t|Use don’t with we.|don't`),correct:T(`Correct: I works here.|I work here.|Use the base form with I.
Correct: They studies English.|They study English.|Use study with they.
Correct: I am work in a clinic.|I work in a clinic.|Remove am.
Correct: We to live nearby.|We live nearby.|Remove to in this ordinary statement.
Correct intended each day: I practise everyday.|I practise every day.|The time phrase is two words.`),order:T(`Order: clinic / a / in / work / I|I work in a clinic.|Use an ordinary subject–verb pattern.
Order: English / study / We|We study English.|Use base study.
Order: train / by / travel / They|They travel by train.|Give the travel pattern.
Order: morning / every / emails / check / I|I check emails every morning.|The time phrase goes at the end here.
Order: arrive / early / usually / We|We usually arrive early.|The adverb precedes the main verb.`),reading:'Ada and Ravi work in the same building. They live near the station and usually take the train. Ada says, “I start work at eight.” Ravi starts later. After work, they study English on Mondays. They practise every day, but they don’t attend a class every day. Their class meets once a week.',read:Q(`What travel habit is given for Ada and Ravi?|They usually take the train.|They always drive.|They never travel.|Usually describes their habit.
What does I start work at eight describe?|Ada’s routine|An unfinished verb phrase|A phone number|The time belongs to a routine.
When do they study together after work?|On Mondays|Only Sundays|Every hour|The passage gives Mondays.
Is daily practice the same as daily class attendance here?|No|Yes|The passage says no practice.|They practise daily but attend weekly.
Which base-form pattern is used with they?|They study|They studies|They is study|They takes base study.`),write:T(`Write five true or imaginary I routines.|I start at eight. I take the train. I check emails. I study after work. I read every day.|Use base verbs with I.
Describe a shared routine using we.|We study English on Mondays.|Give a clear repeated activity.
Describe a group using they.|They travel by train.|Do not add the he/she/it ending.
Write a present-simple statement and its negative.|We work on Saturdays. We don’t work on Sundays.|Use don’t plus a base verb.
Contrast a routine with an action in progress.|I study after work. I am studying now.|Explain the meaning difference.`)},sources:presentSource,related:['011','012','035','036','037','039']};

L['035']={intro:'Match ordinary present-simple verbs with he, she, it, a single name or a singular noun phrase. Learn -s/-es/-ies, the important irregular forms and why the main verb loses its ending after does or doesn’t.',
goals:['Add a suitable present-simple ending with he/she/it.','Apply common -es and consonant + y spelling patterns.','Use has, goes, does and is correctly.','Recognise the main -s ending pronunciations.','Return to the base form after does/doesn’t.'],
sections:[
S('Find the subject before changing the verb','He, she and it normally take an -s/-es form for ordinary positive present-simple verbs. A single person’s name or singular noun phrase follows the same pattern: Ada works; the shop opens. Plural subjects do not take that ending: the shops open.',[
'I work → she works; they live → he lives.',
'The learner studies. The learners study.',
'You takes the base verb even when it addresses one person.',
'Be is irregular and modal verbs follow another pattern: she is ready; she can help, not she cans help.'
]),
S('Usually add -s; use common -es spellings','Work becomes works and read becomes reads. Verbs ending in s, sh, ch, x and similar spellings often take -es: passes, washes, watches, fixes. This often supports an extra spoken syllable after a sibilant sound.',[
'work/works, live/lives, read/reads.',
'pass/passes, wash/washes, watch/watches, fix/fixes.',
'Some words have special spelling details. Check an unfamiliar form rather than assuming every ending behaves identically.',
'This ending shows grammatical agreement; it does not itself mean the action is plural.'
],table(['Base','He/she/it form','Pattern'],`work|works|add -s
watch|watches|add -es
wash|washes|add -es
fix|fixes|add -es
study|studies|consonant + y → -ies
play|plays|vowel + y keeps y
have|has|irregular
go|goes|add -es`)),
S('Check the letter before final y','After a consonant letter before y, change y to i and add -es: study/studies, try/tries. After a vowel letter before y, keep y and add -s: play/plays, enjoy/enjoys. Do not change every y ending to -ies.',[
'She studies English. He tries again.',
'She plays tennis. He enjoys the class.',
'These spelling patterns resemble noun plurals, but here they mark a verb’s agreement, not several objects.',
'Keep the original base form for I/you/we/they and after does/doesn’t.'
]),
S('Learn the important irregular and spoken forms','Have becomes has. Go becomes goes. Do becomes does, with a vowel change in its usual pronunciation: /dʌz/. Be uses is with he/she/it. The -s ending generally sounds /s/, /z/ or an extra syllable /ɪz/, depending on the preceding sound.',[
'works ends /s/; lives ends /z/; watches adds /ɪz/ in a common dictionary model.',
'says has the usual pronunciation /sez/, not simply say plus an unchanged vowel.',
'Goes is /ɡəʊz/ in a common British dictionary model; does is /dʌz/.',
'Listen to whole-word UK audio. Written endings alone do not guarantee accurate pronunciation.'
]),
S('Does carries the agreement in questions and negatives','She works is positive. Does she work? has does before the subject and the base verb work. She doesn’t work uses the same base form after the negative helper. Do not mark the third-person ending twice: does she works is not the standard pattern.',[
'He has a car → Does he have a car? → He doesn’t have a car.',
'She studies → Does she study? → She doesn’t study.',
'The shop opens → Does the shop open? → The shop doesn’t open.',
'Be and modals are separate: Is she ready? Can she help? Do not add does to those basic questions.'
]),
S('Use meaning and agreement together','A correct ending should support a clear message. Describe a colleague’s routine, a shop schedule or a stable fact. Check the actual subject, not merely the nearest noun: My brother’s colleagues work here has a plural head, colleagues. More complex agreement is developed later.',[
'Ada checks the reports every morning.',
'The office opens at nine. The offices open at nine.',
'Someone is waiting uses a singular form; they work can then use singular they with its usual base-verb agreement.',
'Practise a three-part sequence: she works → she doesn’t work → does she work?'
])],
examples:R(`I work. She works.|The positive verb changes with the subject.
They live nearby. He lives nearby.|Use lives with he.
Ada reads every day.|A single name takes the third-person form.
The shop opens at nine.|A singular noun subject takes opens.
The shops open at nine.|A plural noun subject uses the base form.
She watches the news.|Add -es after this ch ending.
He washes the cups.|Add -es after sh.
The bus passes the hotel.|Add -es after s.
He fixes computers.|Add -es after x.
She studies English.|Consonant + y becomes -ies.
He tries again.|Consonant + y pattern.
The bird flies.|Consonant + y pattern.
She plays tennis.|Vowel + y keeps y.
He enjoys the course.|Vowel + y keeps y.
She has a phone.|Have changes to has.
He goes to work by train.|Go becomes goes.
She does the filing.|Do becomes does.
He is ready.|Be is irregular.
She can help.|Do not add an ending to can or help here.
She works hard.|Works normally ends with /s/.
He lives nearby.|Lives normally ends with /z/.
She watches carefully.|Watches adds an ending syllable.
He says hello.|Says normally has /sez/.
Does she work here?|Base work follows does.
She doesn’t work here.|Base work follows doesn’t.
Does he have a car?|Has changes back to have after does.
He doesn’t have a car.|Use have after doesn’t.
Does she study English?|Use base study after does.
She doesn’t study on Sundays.|Use base study after doesn’t.
My brother’s colleagues work here.|The head subject colleagues is plural.`),
dialogues:[D('A colleague’s routine',`Ada|Ravi starts at nine.
Emily|Does he take the train?
Ada|Yes. He lives near the station.
Emily|That is convenient.`),D('Study or studies?',`Learner|She study English?
Teacher|For the positive statement, say She studies English.
Learner|And Does she study English?
Teacher|Yes. Does takes the agreement, so study is the base form.`),D('A shop schedule',`Visitor|Does the shop open at eight?
Worker|No. It opens at nine.
Visitor|Does it close at five?
Worker|Yes, it does.`),D('A special form',`Learner|Is it she haves a phone?
James|Use she has a phone.
Learner|But Does she have a phone?
James|Correct.`),D('Pronunciation',`Emily|Listen to works, lives and watches.
Learner|The endings sound different.
Emily|Yes. Check the sound before the ending.
Learner|I will compare the UK dictionary recordings.`)],
mistakes:R(`She work here.|She works here.|Add the positive third-person ending.
He studys English.|He studies English.|Consonant + y changes to -ies.
She plaies tennis.|She plays tennis.|Keep y after a vowel letter.
She haves a phone.|She has a phone.|Have is irregular.
Does she works here?|Does she work here?|Use the base verb after does.
She doesn’t studies.|She doesn’t study.|Use the base verb after doesn’t.`),
practice:{mc:Q(`Choose the positive form.|She works here.|She work here.|She to work here.|She takes works.
Choose the spelling.|He studies English.|He studys English.|He studyes English.|Consonant + y changes to -ies.
Choose the spelling.|She plays tennis.|She plaies tennis.|She playes tennis.|Vowel + y keeps y.
Choose the form of have.|He has a phone.|He haves a phone.|He have a phone in this positive statement.|Use has.
Choose the question.|Does she work here?|Does she works here?|Do she works here?|Use base work after does.
Choose the negative.|She doesn’t study.|She doesn’t studies.|She don’t studies.|Use base study.
Which positive subject uses opens?|the shop|the shops|they|The singular head takes the ending.
Which phrase is standard with a modal?|She can help.|She cans help.|She can helps.|Modals follow a different agreement pattern.
Which pronunciation is usual for does?|/dʌz/|/dəʊz/ as the normal model|/duːes/|Learn the whole irregular form.
What controls the verb in My brother’s colleagues work here?|Plural colleagues|Singular brother as the owner|The word here|Identify the head of the subject.`),gap:T(`Complete: She __ here. (work)|works|Add -s in the positive statement.
Complete: He __ the news. (watch)|watches|Add -es.
Complete: She __ the cups. (wash)|washes|Add -es.
Complete: He __ computers. (fix)|fixes|Add -es.
Complete: She __ English. (study)|studies|Change consonant + y to -ies.
Complete: He __ tennis. (play)|plays|Keep y after a vowel letter.
Complete: She __ a phone. (have)|has|Use the irregular form.
Complete: He __ to work. (go)|goes|Go adds -es.
Complete: Does she __ here? (work)|work|Use the base form after does.
Complete: He doesn’t __ a car. (have)|have|Use the base form after doesn’t.`),correct:T(`Correct: She work here.|She works here.|Positive she takes works.
Correct: He studys English.|He studies English.|Use -ies after consonant + y.
Correct: She plaies tennis.|She plays tennis.|Keep y after a vowel.
Correct: He haves a phone.|He has a phone.|Have changes to has.
Correct: Does she works here?|Does she work here?|Use the base form after does.`),order:T(`Order: bank / a / in / works / She|She works in a bank.|She takes works.
Order: English / studies / He|He studies English.|Use the positive third-person form.
Order: nine / at / opens / shop / The|The shop opens at nine.|The singular shop takes opens.
Order: here / work / she / Does|Does she work here?|Use base work after does.
Order: doesn’t / a / have / car / He|He doesn’t have a car.|Use base have after doesn’t.|He doesn't have a car.`),reading:'Ravi lives near the station. He works in a bank and starts at nine. He goes to work by train. His sister studies English and enjoys the course. She has a new phone. She doesn’t study on Sundays, but she reads a little every day. Their colleagues work in another building.',read:Q(`Where does Ravi work?|In a bank|In a library|In a shop|The passage identifies a bank.
What form of go appears with he?|goes|go|goies|The positive third-person form is goes.
Which form follows his sister?|studies|study|studys|A singular subject takes studies.
Which form follows doesn’t?|study|studies|studied|The helper takes agreement, leaving the base form.
Why is work used with colleagues?|The subject is plural.|The owner is singular.|The tense has no verbs.|The head noun controls the verb.`),write:T(`Describe three routines of an imaginary colleague.|She starts at nine. She takes the train. She checks reports.|Use third-person endings.
Give a consonant + y and vowel + y verb example.|He studies English. She plays tennis.|Explain the spelling difference.
Write have as a positive, question and negative with he.|He has a car. Does he have a car? He doesn’t have a car.|Use base have after does/doesn’t.
Use a singular and plural shop subject.|The shop opens at nine. The shops open at nine.|Match the verb to the subject.
Give one example for each spoken ending.|works /s/; lives /z/; watches /ɪz/|Check whole-word pronunciation with UK audio.`)},sources:presentSource.concat([['Cambridge: UK pronunciation','https://dictionary.cambridge.org/pronunciation/']]),related:['011','019','034','036','037','218']};

L['036']={intro:'Make ordinary present-simple negatives with don’t or doesn’t plus a base verb. Keep agreement on the helper, choose natural contractions and distinguish action negatives from be, have got and modal patterns.',
goals:['Choose don’t with I/you/we/they and doesn’t with he/she/it.','Keep the main verb in its base form after the helper.','Use full and contracted negatives appropriately.','Distinguish doesn’t work from isn’t ready and hasn’t got.','Give a clear correction or contrast after a negative.'],
sections:[
S('Use a helper to negate most ordinary present-simple verbs','I work here becomes I do not work here. She works here becomes She does not work here. The helper do/does carries present-simple agreement. The main verb stays in its base form. Do not insert not directly before an ordinary positive verb as the normal beginner negative.',[
'I do not work; you do not work; we do not work; they do not work.',
'He does not work; she does not work; it does not work.',
'Single names and singular noun phrases normally follow does not: Ada does not work here.',
'The word not changes the statement’s meaning; it does not make the subject plural.'
]),
S('Contract do not and does not naturally','Do not becomes don’t; does not becomes doesn’t. These contractions are common in conversation and much informal writing. Full forms can be useful for emphasis or formal instructions. Both versions have the same basic negative grammar.',[
'I don’t drive. She doesn’t drive.',
'Keep the apostrophe in writing: don’t, doesn’t.',
'Don’t use a contraction that changes the helper: she don’t is not the standard pattern taught here.',
'Do not and don’t can also begin negative imperatives, but their subject pattern differs; review Lesson 032.'
],table(['Subject','Full negative','Contracted negative'],`I/you/we/they|do not work|don’t work
he/she/it|does not work|doesn’t work
Ada|does not study|doesn’t study
the shops|do not open|don’t open`)),
S('Remove the positive ending after doesn’t','She studies becomes She doesn’t study. He has becomes He doesn’t have. The shop opens becomes The shop doesn’t open. Do not keep the positive -s/-es/-ies after does not or doesn’t.',[
'She doesn’t work, not She doesn’t works.',
'He doesn’t go, not He doesn’t goes.',
'She doesn’t study, not She doesn’t studies.',
'The verb does itself can follow the helper in a different role: He doesn’t do the filing. The first does is inside doesn’t; do is the main verb.'
]),
S('Be, have got and modals have their own patterns','She isn’t ready uses be and not. She hasn’t got a car uses have got. She can’t drive uses a modal. Do not force every negative into do/does. Ordinary possession have can use does not: She doesn’t have a car.',[
'Action: She doesn’t work today. Description: She isn’t busy.',
'Possession: She doesn’t have a car = She hasn’t got a car.',
'Modal: She cannot drive / She can’t drive.',
'A longer sentence can contain be later: She doesn’t want to be late is correct. The warning concerns using does directly to negate the basic be clause.'
]),
S('Choose time and amount expressions that fit','A present-simple negative can describe a habit, a stable situation or a state. I don’t drink coffee does not necessarily mean only this minute. Any is common in neutral negative amount phrases: We don’t have any tickets. Never already has a negative meaning, so avoid adding don’t unnecessarily in the standard pattern.',[
'They don’t work on Sundays: a routine.',
'We don’t live in this city: a stable situation.',
'I don’t know the answer: a state of knowledge.',
'I never smoke is the normal standard pattern, not I don’t never smoke for the intended simple negative meaning.'
]),
S('A negative can give a useful contrast','I don’t work in a bank. I work in a clinic corrects a misunderstanding. Use but to connect a contrast: She doesn’t drive, but she takes the bus. Be precise about what is denied and avoid adding extra assumptions.',[
'He doesn’t work on Sundays does not mean he never works.',
'I don’t like tea does not tell us whether I like coffee.',
'When changing a positive sentence, keep the same subject and intended time meaning.',
'Practise positive → negative → a useful correction, and explain why the main verb is base form.'
])],
examples:R(`I do not work here.|Full negative with I.
I don’t work here.|The contraction has the same basic meaning.
You don’t need a ticket.|You takes don’t.
We don’t live nearby.|We takes don’t.
They don’t open on Sundays.|They takes don’t.
He does not drive.|Full negative with he.
He doesn’t drive.|Contract does not.
She doesn’t work here.|Base work follows doesn’t.
It doesn’t work.|It takes doesn’t with base work.
Ada doesn’t study on Sundays.|A single name follows the singular pattern.
The shops don’t open early.|Plural subject takes don’t.
The shop doesn’t open early.|Singular subject takes doesn’t.
She studies. She doesn’t study.|Return to the base form.
He goes. He doesn’t go.|Remove the positive ending.
He has a car. He doesn’t have a car.|Use base have after doesn’t.
She doesn’t do the filing.|Do is the main verb after the negative helper.
I don’t know the answer.|An ordinary negative state.
They don’t like loud music.|A preference or feeling.
We don’t have any tickets.|Any is common in a negative amount phrase.
She isn’t ready.|Be uses a different negative pattern.
She hasn’t got a car.|Have got uses a different pattern.
She can’t drive.|A modal negative.
She doesn’t want to be late.|Be can appear later inside a longer structure.
I never smoke.|Never already gives negative meaning.
I don’t drink coffee.|A habit or preference, not necessarily one moment.
They don’t work on Sundays.|A repeated-day negative.
We don’t live in this city.|A stable situation.
I don’t work in a bank. I work in a clinic.|A useful correction.
She doesn’t drive, but she takes the bus.|A clear contrast.
He doesn’t work on Sundays, but he works on Mondays.|A negative does not deny every time.`),
dialogues:[D('A routine day off',`Ada|Do you work on Sundays?
Ravi|No, I don’t. I work on Mondays.
Ada|Does Emily work on Sundays?
Ravi|No, she doesn’t.`),D('The base verb',`Learner|She doesn’t studies English?
Teacher|Use She doesn’t study English.
Learner|The helper carries the agreement?
Teacher|Yes. The main verb is base form.`),D('Correcting a workplace',`Visitor|You work in a bank, is that right?
Ada|No. I don’t work in a bank. I work in a clinic.
Visitor|Thank you for explaining.
Ada|You’re welcome.`),D('Different negatives',`Emily|Is she ready?
James|No, she isn’t.
Emily|Does she need more time?
James|Yes. She doesn’t understand the last question yet.`),D('A useful contrast',`Ravi|Ada doesn’t drive.
Emily|How does she get to work?
Ravi|She takes the bus.
Emily|So doesn’t drive does not mean she cannot travel.`)],
mistakes:R(`She don’t work.|She doesn’t work.|Use doesn’t with she.
She doesn’t works.|She doesn’t work.|Use the base form.
He doesn’t has a car.|He doesn’t have a car.|Has returns to have after the helper.
I not know.|I don’t know.|Use do not with this ordinary verb.
She doesn’t is ready.|She isn’t ready.|Basic be negatives do not use does.
I don’t never smoke. (intended standard simple negative)|I never smoke.|Never already gives negative meaning.`),
practice:{mc:Q(`Choose the negative with I.|I don’t work here.|I doesn’t work here.|I not work here.|Use don’t with I.
Choose the negative with she.|She doesn’t work here.|She don’t works here.|She doesn’t works here.|Use doesn’t and base work.
Choose the base form after doesn’t.|study|studies|studied for this present pattern|The helper carries agreement.
Choose the negative of He has a car.|He doesn’t have a car.|He doesn’t has a car.|He don’t has a car.|Use base have after doesn’t.
Choose the negative with plural shops.|The shops don’t open early.|The shops doesn’t open early.|The shops don’t opens early.|Plural shops takes don’t.
Choose a basic be negative.|She isn’t ready.|She doesn’t is ready.|She don’t ready.|Be has its own pattern.
Choose a have got negative.|She hasn’t got a car.|She doesn’t has got a car.|She isn’t got a car.|Keep the have got system.
Choose the standard never pattern.|I never smoke.|I don’t never smoke for the intended simple negative.|I doesn’t never smoke.|Never already has negative meaning.
What does He doesn’t work on Sundays deny?|Work on Sundays|All work forever|Every Monday too|The time phrase limits the statement.
Which longer sentence is correct?|She doesn’t want to be late.|She doesn’t wants to be late.|She doesn’t is want late.|Base want follows doesn’t; be can occur later.`),gap:T(`Complete: I __ work here. (don’t/doesn’t)|don’t|I takes don’t.|don't
Complete: They __ live nearby. (don’t/doesn’t)|don’t|They takes don’t.|don't
Complete: She __ drive. (don’t/doesn’t)|doesn’t|She takes doesn’t.|doesn't
Complete: He doesn’t __ a car. (has/have)|have|Use the base form.
Complete: She doesn’t __ on Sundays. (study/studies)|study|Use the base form.
Complete: The shop doesn’t __ early. (open/opens)|open|Use the base form.
Expand don’t.|do not|The apostrophe marks missing letters.
Expand doesn’t.|does not|Use the full negative helper.
Complete: We don’t have __ tickets. (any/a, plural neutral negative)|any|Any fits this negative amount phrase.
Complete the basic be negative: She __ ready. (isn’t/doesn’t is)|isn’t|Be takes not directly.|isn't`),correct:T(`Correct: She don’t work.|She doesn’t work.|Use doesn’t with she.|She doesn't work.~She does not work.
Correct: She doesn’t studies.|She doesn’t study.|Use the base form.|She doesn't study.~She does not study.
Correct: He doesn’t has a car.|He doesn’t have a car.|Use base have.|He doesn't have a car.~He does not have a car.
Correct: I not know.|I don’t know.|Use do not.|I don't know.~I do not know.
Correct: She doesn’t is ready.|She isn’t ready.|Use the be negative.|She isn't ready.~She is not ready.`),order:T(`Order: work / don’t / I / here|I don’t work here.|Use don’t with I.|I don't work here.
Order: drive / doesn’t / She|She doesn’t drive.|Use base drive.|She doesn't drive.
Order: a / doesn’t / car / have / He|He doesn’t have a car.|Use base have.|He doesn't have a car.
Order: nearby / live / don’t / They|They don’t live nearby.|Use don’t with they.|They don't live nearby.
Order: Sundays / work / on / doesn’t / Ada|Ada doesn’t work on Sundays.|A single name takes doesn’t.|Ada doesn't work on Sundays.`),reading:'Ada works in a clinic. She doesn’t work in a bank. She doesn’t drive, but she takes the bus. Ravi and Emily don’t work on Sundays. Ravi doesn’t have a car either. He knows the route, but he doesn’t know the new bus timetable. Ada gives him some information.',read:Q(`Where does Ada not work?|In a bank|In a clinic|On a bus as a location only|The passage gives the bank as the denied workplace.
How does she travel?|By bus|She never travels|By her own car|She takes the bus despite not driving.
Who do not work on Sundays?|Ravi and Emily|Only Ada in the stated sentence|The bus timetable|The plural pair takes don’t.
Which verb follows doesn’t in the car sentence?|have|has|haves|Use the base form.
What does Ravi not know?|The new bus timetable|The route|Ada’s job in this passage|The passage distinguishes these two facts.`),write:T(`Write three I negatives about imaginary routines.|I don’t drive. I don’t work on Sundays. I don’t drink coffee.|Use don’t plus base verbs.
Change She studies on Sundays to a negative.|She doesn’t study on Sundays.|Remove the positive ending.
Write a negative and a useful correction.|I don’t work in a bank. I work in a clinic.|Keep the meaning specific.
Contrast an action negative and a be negative.|She doesn’t work today. She isn’t busy.|Use the two systems appropriately.
Write a negative with but and a positive alternative.|She doesn’t drive, but she takes the bus.|Do not infer more than the negative says.`)},sources:presentSource,related:['013','021','034','035','037']};

L['037']={intro:'Ask ordinary present-simple yes/no questions with do or does, keep the main verb in its base form and answer from the correct speaker’s perspective. Compare these questions with be, can and have got.',
goals:['Choose do or does from the subject.','Use helper + subject + base verb order.','Give complete positive and negative short answers.','Distinguish ordinary do questions from be/modal/have got questions.','Add a useful follow-up after a yes/no answer.'],
sections:[
S('Build the question with a helper','You work here becomes Do you work here? She works here becomes Does she work here? For most ordinary present-simple verbs, put do/does before the subject and use the base main verb. A question mark finishes the written sentence.',[
'I/you/we/they and plural nouns normally use do.',
'He/she/it and singular noun phrases normally use does.',
'Do the shops open early? Does the shop open early?',
'A rising statement can have a special conversational checking use, but this lesson teaches the basic neutral question structure.'
]),
S('Do not mark the agreement twice','The helper does carries the third-person singular agreement. The main verb returns to its base form: Does she study?, not Does she studies? The same applies to has/have and goes/go.',[
'She has a car → Does she have a car?',
'He goes by train → Does he go by train?',
'The office opens at nine → Does the office open at nine?',
'Do can also be the main verb: Does she do the filing? The first word is the helper; the second do gives the activity.'
],table(['Positive statement','Question'],`You work here.|Do you work here?
She works here.|Does she work here?
They have tickets.|Do they have tickets?
He has a ticket.|Does he have a ticket?
The shop opens early.|Does the shop open early?`)),
S('Short answers match the helper and the reference','Answer with Yes/No + pronoun + do/does or don’t/doesn’t. You do not need to repeat the main verb when the question makes it clear. The pronoun may change because the listener becomes the speaker.',[
'Do you work here? — Yes, I do. No, I don’t.',
'Does Ada work here? — Yes, she does. No, she doesn’t.',
'Do the shops open early? — Yes, they do.',
'Do we have time? can receive Yes, we do or Yes, you do depending on whether the answerer belongs to the group.'
]),
S('Keep be, modal and have got systems separate','Be makes its own question: Are you ready? A modal comes before the subject: Can you help? Have got has its own question pattern: Have you got a pen? Ordinary possession have uses do: Do you have a pen? Do not mix the helpers.',[
'Does she work here? but Is she ready?',
'Can he drive? not Does he can drive?',
'Do you have a car? — Yes, I do.',
'Have you got a car? — Yes, I have. Match the short answer to the chosen system.'
]),
S('Ask about routines, facts, needs and schedules','Do/does questions can check repeated actions, stable situations and states. Do you need help? asks about a state of need. Does the shop open at nine? checks a schedule. Context decides whether a routine or present state is intended.',[
'Do you usually take the bus? asks about a habit.',
'Does your colleague live nearby? asks about residence.',
'Do you understand the question? checks understanding.',
'Any can be useful for neutral amount questions: Do you have any tickets?'
]),
S('A yes/no question can start a longer conversation','A short answer is often followed by helpful information. Do you work nearby? — Yes, I do. I work next to the bank gives the listener something to respond to. Ask a suitable follow-up, rather than repeating the same question.',[
'Do you need a pen? — No, I don’t. I’ve got one.',
'Does the shop open on Sundays? — No, it doesn’t. It opens Monday to Saturday.',
'For a request, Can/Could you help me? is often more useful than a literal ability or habit question with do.',
'Practise both roles, checking the helper, subject, base verb and matching answer.'
])],
examples:R(`Do you work here?|Do comes before you.
Yes, I do.|The listener answers about themself.
No, I don’t.|A matching negative answer.
Do they live nearby?|They takes do.
Yes, they do.|The answer matches do.
Do we have enough time?|We takes do.
Does she work here?|She takes does; work is base form.
Yes, she does.|A matching positive answer.
No, she doesn’t.|A matching negative answer.
Does he drive?|Use base drive after does.
Does Ada study English?|A single name takes does.
Does your brother work here?|The subject phrase is singular.
Do your colleagues work here?|The subject phrase is plural.
Does the shop open early?|A singular shop takes does.
Do the shops open early?|Plural shops takes do.
Does she have a car?|Use base have, not has.
Does he go by train?|Use base go, not goes.
Does she do the filing?|The helper and main verb have separate jobs.
Do you need a receipt?|A question about a need.
Do you understand the question?|A state of understanding.
Do you usually take the bus?|The frequency word follows the subject here.
Do you have any tickets?|A neutral amount question.
Are you ready?|Be makes its own question.
Can you help?|A modal question.
Have you got a pen?|A have got question.
Do you have a pen?|An ordinary have question.
Yes, I have.|Matches Have you got…?
Yes, I do.|Matches Do you have…?
No, I don’t. I’ve got one.|Add useful information after a negative.
No, it doesn’t. It opens at nine.|A schedule answer with a correction.`),
dialogues:[D('A work location',`Ada|Do you work nearby?
Ravi|Yes, I do. I work next to the bank.
Ada|Do you take the bus?
Ravi|No, I don’t. I walk.`),D('A singular colleague',`Emily|Does Ada study English?
James|Yes, she does.
Emily|Does she study on Sundays?
James|No, she doesn’t.`),D('A shop schedule',`Visitor|Does the shop open at eight?
Worker|No, it doesn’t. It opens at nine.
Visitor|Do the other shops open then too?
Worker|Yes, they do.`),D('Have or have got?',`Learner|Do you have a pen?
Teacher|Yes, I do.
Learner|Have you got a notebook?
Teacher|Yes, I have.`),D('Not every question uses do',`Learner|Does she is ready?
Emily|Use Is she ready? Be makes its own question.
Learner|And Can she help?
Emily|Yes. Can also comes before the subject without does.`)],
mistakes:R(`Does she works here?|Does she work here?|Use the base verb after does.
Do he drive?|Does he drive?|He takes does.
Does she has a car?|Does she have a car?|Has returns to have after does.
Does she is ready?|Is she ready?|Be makes its own question.
Does he can help?|Can he help?|A modal question does not add does.
Do you work here? — Yes, I am.|Do you work here? — Yes, I do.|Match the helper in the answer.`),
practice:{mc:Q(`Choose the helper with she.|does|do|are for every verb|She takes does for ordinary present-simple verbs.
Choose the helper with they.|do|does|is for every verb|They takes do.
Choose the question.|Does she work here?|Does she works here?|Do she works here?|Use does and a base verb.
Choose the question with have.|Does he have a car?|Does he has a car?|Do he has a car?|Use base have after does.
Which answer matches Do you work here?|Yes, I do.|Yes, I am.|Yes, I have in this matching task|The helper is do.
Which answer matches Does Ada study?|No, she doesn’t.|No, she isn’t.|No, she don’t.|Match does and the singular reference.
Which question uses be correctly?|Is she ready?|Does she is ready?|Do she ready?|Be makes its own question.
Which is a correct modal question?|Can he help?|Does he can help?|Do he can helps?|No do/does is added.
Which question has a plural subject?|Do the shops open early?|Does the shop open early?|Does your brother work?|Shops is plural.
What is the second do in Does she do the filing?|The main verb|Another subject|A plural marker|The first does is the helper.`),gap:T(`Complete: __ you work here?|Do|Use do with you.
Complete: __ she work here?|Does|Use does with she.
Complete: __ they live nearby?|Do|Use do with they.
Complete: __ the shop open early?|Does|The singular subject takes does.
Complete: __ the shops open early?|Do|The plural subject takes do.
Complete: Does he __ a car? (have/has)|have|Use base have.
Complete: Does she __ English? (study/studies)|study|Use base study.
Complete: Do you work here? Yes, I __.|do|Match the helper.
Complete: Does she drive? No, she __.|doesn’t|Use the matching negative helper.|doesn't
Complete the be question: __ she ready?|Is|Use be directly.`),correct:T(`Correct: Does she works here?|Does she work here?|Use the base verb.
Correct: Do he drive?|Does he drive?|He takes does.
Correct: Does she has a car?|Does she have a car?|Use base have.
Correct: Does she is ready?|Is she ready?|Do not add does to basic be.
Correct: Do you work here? Yes, I am.|Do you work here? Yes, I do.|Match do in the short answer.`),order:T(`Order: work / here / you / Do|Do you work here?|Helper before subject, then base verb.
Order: English / study / she / Does|Does she study English?|Use base study.
Order: a / have / car / he / Does|Does he have a car?|Use base have.
Order: shops / open / early / the / Do|Do the shops open early?|Plural shops takes do.
Order: need / receipt / a / you / Do|Do you need a receipt?|Ask about a need.`),reading:'Ada asks Ravi, “Do you work nearby?” He replies, “Yes, I do.” She then asks, “Does your sister work in the same building?” Ravi answers, “No, she doesn’t. She works in a bank.” At reception, Ada asks whether the office opens at eight. The worker says it opens at nine.',read:Q(`Which helper does Ada use with you?|Do|Does|Is|The ordinary verb question uses do.
Who does I refer to in Ravi’s answer?|Ravi|Ada|The sister|Ravi is speaking.
Why does the sister question use does?|The subject is singular.|The building is large.|Every question uses does.|Your sister is a singular subject phrase.
What does the sister do?|Works in a bank|Works in the same building in this passage|Opens at eight|The negative is followed by the correct workplace.
What is the stated office opening time?|Nine|Eight|Seven|The worker corrects the time.`),write:T(`Write a do question and short answer about yourself.|Do you work nearby? Yes, I do.|Change the answer perspective appropriately.
Write a does question about a colleague.|Does she study English?|Use a base main verb.
Turn He has a car into a question.|Does he have a car?|Change has back to have.
Write one be question and one ordinary verb question.|Is she ready? Does she work here?|Use the correct helper system.
Add useful information after a negative answer.|No, she doesn’t. She works in another building.|Answer the actual question and clarify.`)},sources:presentSource,related:['014','021','034','035','036','038']};

L['038']={intro:'Ask for the information you need with what, where, when and why. Compare ordinary verb and be questions, add what time or how often when needed, and recognise the important difference between subject and object questions.',
goals:['Choose a question word from the information needed.','Use question word + do/does + subject + base verb.','Use question word + be + subject where appropriate.','Distinguish Who works here? from Who do you know?','Give an answer that matches the question’s meaning.'],
sections:[
S('Question words ask for different information','What asks about a thing, activity or type of information. Where asks about place. When asks about time. Why asks about a reason. How and its phrases ask about manner, condition, amount or frequency. These are often grouped as wh-questions even though how does not begin with wh.',[
'What do you need? — A pen.',
'Where do you live? — In Doha.',
'When does the course start? — On Monday.',
'Why do you study English? — Because I need it for work.'
],table(['Question phrase','Information','Model answer'],`what|thing or activity|A notebook.
where|place|Near the station.
when|time/day/date|On Monday.
what time|clock time|At nine.
why|reason|Because I need it.
how often|frequency|Twice a week.`)),
S('Ordinary present-simple questions use do/does','For the basic non-subject question pattern, put the question phrase before do/does, then the subject and a base verb. Where does she work? keeps work in its base form. Do not use statement order after the question word in this ordinary direct question.',[
'What do you do? can ask about a job in an introduction.',
'Where does your sister work? asks for a workplace.',
'When do they leave? asks about time.',
'Why does he leave early? asks for a reason. The whole question phrase can be longer: What time does he leave?'
]),
S('Be questions use be, not an added do','If be is the main verb in the basic clause, place am/is/are before the subject: Where is the office? Why are you worried? The question word normally comes first. Do not add do/does directly before this be pattern.',[
'Where are the keys? — In my bag.',
'When is the meeting? — On Tuesday.',
'What is your name? — Ada.',
'Modal questions also have their own helper: Where can I sit? No extra do is needed.'
]),
S('Who can be the subject or the object','Who works here? asks which person does the working. Who is the subject, so the ordinary positive subject-question pattern does not need do/does. Who do you know here? asks about the object of know: you is already the subject. The roles, not the word who alone, decide the structure.',[
'Who calls Ada? — Ravi calls Ada. Who replaces the subject Ravi.',
'Who does Ada call? — Ada calls Ravi. Who replaces the object Ravi.',
'The ordinary singular default in Who works here? is useful, though an answer may identify several people.',
'Emphatic do questions have other uses. Learn the neutral distinction before advanced emphasis.'
]),
S('Choose a precise phrase and answer the right question','When may receive a day, date or clock time depending on context. What time asks specifically for clock time. How often asks frequency, not one appointment time. Why normally needs a reason, and because introduces a clause in a useful beginner answer.',[
'What time do you start? — At eight. When does the course start? — On 15 June.',
'How often do you practise? — Every day.',
'Why are you tired? — Because I worked late.',
'Because of is followed by a noun phrase: because of the traffic. Do not combine because of directly with a full subject–verb clause in this pattern.'
]),
S('Ask politely and check an unclear answer','A direct information question can be polite with a suitable greeting and tone: Excuse me, where is reception? If the answer is unclear, ask a focused follow-up: Which floor? Did you say Tuesday or Thursday? More elaborate indirect questions are taught later.',[
'Use a full question first, then recognise natural short follow-ups in conversation.',
'Where are you from? asks origin in an introduction; where do you live? asks residence.',
'Do not answer every wh-question with yes/no only; provide the requested information.',
'Check the question word, helper, subject and base verb as separate steps.'
])],
examples:R(`What do you need?|Ask about an object or requirement.
I need a pen.|A matching answer.
Where do you live?|Ask about residence.
I live in Doha.|A place answer.
Where does she work?|Does is followed by base work.
She works in a bank.|The positive answer regains the -s form.
When do they leave?|Ask about time.
They leave on Monday.|A day answer.
What time do you start?|Ask for clock time.
I start at eight.|A matching clock-time answer.
Why do you study English?|Ask for a reason.
Because I need it for work.|A reason clause.
What does he do?|Often asks about a job in an introduction.
He is a driver.|A job answer.
Where is the office?|Be question without do.
The office is upstairs.|A place answer.
Where are the keys?|Plural subject takes are.
They are in my bag.|A matching location answer.
When is the meeting?|Be comes before the subject.
It is on Tuesday.|A day answer.
Why are you worried?|Be question about a state.
Because the form is difficult.|A suitable reason.
Who works here?|Who is the subject.
Ravi works here.|The answer identifies the subject.
Who do you know here?|Who is the object; you is the subject.
I know Ada.|The answer identifies the object.
Who does Ada call?|Does supports an object question.
Ada calls Ravi.|The answer identifies the called person.
How often do you practise?|Ask about frequency.
Every day.|A natural short frequency answer.`),
dialogues:[D('Finding a place',`Visitor|Excuse me, where is reception?
Worker|On the ground floor.
Visitor|Which room?
Worker|The first room on your left.`),D('A work routine',`Ada|What time do you start?
Ravi|At nine.
Ada|Why do you arrive early?
Ravi|Because I like to prepare before work.`),D('Subject or object?',`Learner|Why is there no does in Who works here?
Teacher|Who is the subject.
Learner|But Who does Ada know has Ada as the subject?
Teacher|Exactly. Who is the object there.`),D('A date clarification',`Emily|When does the course start?
James|On Thursday.
Emily|Sorry, Tuesday or Thursday?
James|Thursday.`),D('Origin and residence',`Ravi|Where are you from?
Ada|Sri Lanka.
Ravi|Where do you live now?
Ada|In Doha.`)],
mistakes:R(`Where you live?|Where do you live?|Add the ordinary present-simple helper.
Where does she works?|Where does she work?|Use the base verb after does.
Where does the office is?|Where is the office?|Be makes its own question.
Who does works here? (neutral subject question)|Who works here?|Who is the subject in the ordinary pattern.
Why do you study? — Yes.|Why do you study? — Because I need English for work.|Answer the requested reason.
because of I am tired|because I am tired|Because takes the clause; because of normally takes a noun phrase.`),
practice:{mc:Q(`Which word asks about place?|where|why|when|Where requests a location.
Which word asks about a reason?|why|where|whose|Why requests a reason.
Which phrase asks specifically for clock time?|what time|how often|whose|What time narrows the time question.
Choose the ordinary verb question.|Where do you live?|Where you live?|Where are you live?|Use do with live.
Choose the singular verb question.|Where does she work?|Where does she works?|Where do she works?|Use does and base work.
Choose the be question.|Where is the office?|Where does the office is?|Where do is the office?|Be makes its own question.
Which is a neutral subject question?|Who works here?|Who does works here?|Who do works here?|Who is the subject.
Which is an object question?|Who do you know?|Who knows Ada? as an object question|Who works here?|You is the subject; who is the object.
Which answer matches How often do you practise?|Every day.|At nine today only.|In my bag.|The question asks frequency.
Which answer matches Why are you tired?|Because I worked late.|Yes.|At the station.|A reason answers why.`),gap:T(`Complete with the place question word: __ do you live?|Where|Ask about residence.
Complete with the reason question word: __ do you study English?|Why|Ask for a reason.
Complete with the time question word: __ does the course start?|When|Ask about when it happens.
Complete: Where __ she work?|does|Use does with she.
Complete: What __ you need?|do|Use do with you.
Complete: Where does he __? (live/lives)|live|Use base live after does.
Complete the be question: Where __ the office?|is|Office is singular.
Complete the be question: Where __ the keys?|are|Keys is plural.
Complete: Who __ here? (works/does works, neutral subject question)|works|Who is the subject.
Complete: __ often do you practise?|How|How often asks frequency.`),correct:T(`Correct: Where you live?|Where do you live?|Add do.
Correct: Where does she works?|Where does she work?|Use base work.
Correct: Where does the office is?|Where is the office?|Use the be question pattern.
Correct the neutral subject question: Who does works here?|Who works here?|No do/does is needed in this ordinary subject question.
Correct: because of I am tired.|because I am tired|Use because before a clause.`),order:T(`Order: live / do / you / Where|Where do you live?|Question word, helper, subject, base verb.
Order: she / work / does / Where|Where does she work?|Use base work.
Order: meeting / is / the / When|When is the meeting?|Use be before the subject.
Order: here / works / Who|Who works here?|Who is the subject.
Order: practise / often / you / do / How|How often do you practise?|Keep the full question phrase together.`),reading:'Ada asks Ravi where he works. He says he works in a bank. She asks what time he starts, and he answers “At nine.” Ravi asks why Ada studies English. She says she needs it for work. Emily asks, “Who works in accounts?” Noor replies, “I do.” Later, Ada asks, “Who do you know here?” Ravi names Emily.',read:Q(`Which place does Ravi name?|A bank|A clinic|A university|His workplace answer identifies a bank.
Which phrase requests the clock time?|What time|How often|Whose|What time asks specifically for clock time.
Why does Ada study English?|She needs it for work.|She starts at nine.|She knows a bank.|The answer gives a reason.
In Who works in accounts?, what role does who have?|Subject|Object of a preposition|Possessive determiner|Who asks for the person doing the work.
In Who do you know here?, what role does who have?|Object|Subject replacing you|A time phrase|You is already the subject.`),write:T(`Write one question each with what, where, when and why.|What do you need? Where do you live? When does the course start? Why do you study?|Use the correct helper for each clause.
Write a be question and a matching answer.|Where is the office? It is upstairs.|Do not add do to the basic be pattern.
Write a subject who question and an object who question.|Who works here? Who do you know here?|Explain the roles.
Write a question asking frequency and answer it.|How often do you practise? Every day.|Do not answer only with a one-time appointment.
Write a why question and reason answer.|Why do you arrive early? Because I like to prepare.|Give the requested reason.`)},sources:[['British Council: questions and negatives','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/questions-negatives'],['Cambridge: wh-questions','https://dictionary.cambridge.org/grammar/british-grammar/questions-wh']],related:['014','023','034','037','039','040']};

L['039']={intro:'Say how often something happens using always, usually, often, sometimes, rarely and never. Place frequency words naturally with ordinary verbs, be, helpers and questions, then use exact frequency phrases when precision matters.',
goals:['Choose a frequency expression that fits the intended meaning.','Place a common frequency adverb before an ordinary main verb.','Place it after be in a neutral statement.','Ask How often…? and answer with a useful phrase.','Avoid fixed percentages and unnecessary double negatives.'],
sections:[
S('Frequency describes repeated occasions','A frequency word tells us how regularly an action or situation occurs in the relevant set of occasions. Always means on all relevant occasions; never means on none. Usually, often, sometimes and rarely describe less exact patterns. Their interpretation depends on the activity and context.',[
'Always → usually → often → sometimes → rarely/hardly ever → never is a useful approximate learning scale.',
'Do not assign a rigid percentage such as often = exactly 70%. Speakers do not use these words that precisely.',
'Rarely and hardly ever both describe low frequency, not an exact number.',
'Always can have other emphatic or complaint uses in different structures; today focus on ordinary routine statements.'
]),
S('Before an ordinary main verb; after be','The common neutral position is before an ordinary main verb: She often works late. With be as the main verb, the adverb commonly follows it: She is often busy. The subject’s agreement still matters: He usually goes; they usually go.',[
'I always check the details. We usually arrive early.',
'She sometimes takes the bus. They rarely eat out.',
'He is usually ready. The office is often busy.',
'The adjective after be does not become an adverb simply because a frequency word appears before it.'
],table(['Pattern','Model'],`Ordinary verb|She usually arrives early.
Be|She is usually early.
Modal|She can usually help.
Question with do|Do you usually walk?
Question with be|Are you usually early?
Exact frequency|We meet twice a week.`)),
S('Helpers and questions affect the position','With a modal or helper, the adverb commonly follows the first helper: She can usually help. In a do/does question, it often follows the subject and precedes the main verb: Does she often work late? In a be question, the subject comes before the adverb: Is she usually ready?',[
'Do you always check the form? Does he usually drive?',
'Are they often busy? Is the room usually quiet?',
'With longer verb phrases, meaning and emphasis can affect position. Use the neutral models first.',
'Do not add an -s ending after does merely because usually or often separates the helper from the main verb.'
]),
S('Sometimes and other adverbs can move','Sometimes appears naturally at the beginning, middle or end of many clauses: Sometimes I walk; I sometimes walk; I walk sometimes. Often and usually also have alternatives in suitable contexts. The neutral middle-position rule is a useful starting point, not a complete ban on movement.',[
'A fronted time/frequency phrase can set the topic: Sometimes, we study at home.',
'End position may emphasise the frequency or fit the conversation.',
'Avoid moving every word in the same way. Never at the start of certain formal sentences triggers a special pattern taught later.',
'When an exercise requests the neutral middle position, follow that instruction rather than assuming other grammatical orders are impossible.'
]),
S('Never, rarely and the scope of not','Never already has negative meaning in the standard clause: I never smoke. Do not add don’t for the intended simple meaning. Not always means not on every occasion, not the same as never. I don’t usually drive means driving is not my normal pattern, not that it never happens.',[
'I never work on Sundays: no relevant Sunday work.',
'I don’t always work on Sundays: some Sundays may be free.',
'She doesn’t usually drive: driving is not her normal routine.',
'Use a clear alternative if the negative could be misunderstood: I usually take the bus.'
]),
S('Use exact phrases when the listener needs a count','Once means one time; twice means two times; three times gives three occasions. Once a week, every day and on Mondays can be more useful than often for a schedule. Put these phrases at the end or beginning as appropriate.',[
'How often do you study? — Every day / Three times a week.',
'We meet once a month. She checks the list twice a day.',
'Every day is a two-word time phrase; everyday is an adjective.',
'Describe a real or imaginary routine, then ask a partner a follow-up question about what the frequency means in that context.'
])],
examples:R(`I always check the details.|All relevant occasions in this routine.
She usually takes the bus.|Her normal pattern.
We often study together.|A frequent but not exact pattern.
He sometimes works from home.|Some occasions, not a fixed percentage.
They rarely eat out.|Low frequency.
I hardly ever watch television.|Another low-frequency expression.
I never smoke.|Never already has negative meaning.
She often works late.|Adverb before an ordinary main verb.
She is often busy.|Adverb after main-verb be.
He usually goes by train.|The positive third-person ending remains.
They usually go by train.|Plural they uses base go.
We are usually early.|Neutral be position.
The office is often busy.|The adjective follows the frequency word.
She can usually help.|Adverb after the modal.
Do you usually walk?|Adverb after the subject in this question.
Does he often drive?|Use base drive after does.
Are they usually ready?|A be question.
Is the room often noisy?|A singular be question.
Sometimes I walk to work.|Front position is possible.
I sometimes walk to work.|A neutral middle position.
I walk to work sometimes.|End position can be natural.
I don’t always work on Sundays.|Not every Sunday, not necessarily never.
I don’t usually drive.|Driving is not the normal pattern.
I usually take the bus.|A clearer positive alternative.
How often do you study?|Ask about frequency.
I study every day.|A more exact routine phrase.
We meet once a week.|One occasion per week.
She checks it twice a day.|Two occasions per day.
They practise three times a week.|A counted frequency.
Every day, I read a little.|A time phrase can begin the sentence.`),
dialogues:[D('A study habit',`Emily|How often do you practise?
Ada|Every day. I usually read after work.
Emily|Do you always read for an hour?
Ada|No. Sometimes I read for ten minutes.`),D('Be or action?',`Learner|She usually is early?
Teacher|The neutral model here is She is usually early.
Learner|And She usually arrives early?
Teacher|Yes. The main verb is arrive there.`),D('No exact percentage',`Ravi|Does often always mean exactly 70 percent?
Ada|No. It depends on the activity and context.
Ravi|What should I say for a precise schedule?
Ada|For example, three times a week.`),D('Never versus not always',`James|I don’t always work on Sundays.
Emily|So you never work on Sundays?
James|No. I work on some Sundays, but not all.
Emily|Thank you for clarifying.`),D('A work question',`Ada|Does Ravi usually drive?
Emily|No. He usually takes the train.
Ada|Is he often late?
Emily|No. He is usually early.`)],
mistakes:R(`She often work late.|She often works late.|The adverb does not remove third-person agreement.
Does she usually drives?|Does she usually drive?|Use the base form after does.
I don’t never smoke. (intended standard simple negative)|I never smoke.|Never already gives negative meaning.
Often means exactly 70 percent.|Often has no fixed universal percentage.|Use exact frequency phrases for precision.
Not always means never.|Not always means not on every occasion.|Some occasions can still occur.
I practise everyday. (intended each day)|I practise every day.|The time phrase is two words.`),
practice:{mc:Q(`Which word means no relevant occasions?|never|usually|often|Never gives negative frequency.
Which phrase gives an exact counted schedule?|twice a week|often|sometimes|Twice means two times per week.
Choose the neutral ordinary-verb order.|She often works late.|She works late often is the only possible order.|She often work late.|Use the middle position and correct agreement.
Choose the neutral be order.|She is usually early.|She usually are early.|She is earlys usually.|The adverb commonly follows be.
Choose the question.|Does he usually drive?|Does he usually drives?|Do he usually drives?|Use base drive after does.
Choose the standard never pattern.|I never smoke.|I don’t never smoke for the intended simple negative.|I doesn’t never smoke.|Do not add an unnecessary negative helper.
What does not always mean?|Not on every occasion|Never|Exactly once forever|It allows some occurrences.
Does often have one exact universal percentage?|No|Yes, exactly 70 percent.|Yes, exactly 50 percent.|Context affects interpretation.
Which statement about sometimes is accurate?|It can occur in more than one position.|It can only begin a clause.|It always goes after be even with an action verb.|Position can vary naturally.
Which phrase means one occasion per month?|once a month|twice a month|three times a month|Once means one time.`),gap:T(`Complete: I __ smoke. (zero occasions: never/usually)|never|Never expresses no relevant occurrences.
Use usually in the neutral middle position: She __ takes the bus.|usually|Before the ordinary main verb.
Use usually in the neutral be position: She is __ early.|usually|After be.
Complete: Does he usually __? (drive/drives)|drive|Use base drive after does.
Complete: She often __ late. (work/works)|works|Positive she still takes works.
Complete: How __ do you practise?|often|How often asks frequency.
One time per week: __ a week.|once|Once means one time.
Two times per day: __ a day.|twice|Twice means two times.
Complete: three __ a week.|times|Use plural times after three.
Complete: I read every __. (day/days)|day|Every day uses singular day.`),correct:T(`Correct: She often work late.|She often works late.|Use third-person agreement.
Correct: Does she usually drives?|Does she usually drive?|Use the base form.
Correct the intended standard simple negative: I don’t never smoke.|I never smoke.|Never already gives negative meaning.
Correct intended each day: I practise everyday.|I practise every day.|Separate the time phrase.
Correct the meaning claim: Not always means never.|Not always means not on every occasion.|It does not deny every occurrence.`),order:T(`Use the neutral middle position. Order: often / late / works / She|She often works late.|Before the ordinary main verb.
Use the neutral be position. Order: usually / early / is / She|She is usually early.|After be.
Order: usually / drive / he / Does|Does he usually drive?|After the subject, before base drive.
Order: a / twice / meet / We / week|We meet twice a week.|The counted phrase gives frequency.|Twice a week we meet.
Order: often / practise / you / do / How|How often do you practise?|Ask about frequency.`),reading:'Ada practises English every day. She usually reads after work, but sometimes she studies in the morning. Ravi attends class twice a week. He is usually early. He doesn’t always take the train: on some days he walks. Emily never drives to this class. She usually takes the bus.',read:Q(`How often does Ada practise?|Every day|Only twice a month|Never|The passage gives daily practice.
When does she usually read?|After work|Only at midnight|Before every train|This is her normal pattern.
How often does Ravi attend class?|Twice a week|Every hour|Once a year|The passage gives an exact counted frequency.
Does doesn’t always take the train mean Ravi never takes it?|No|Yes|Only if he is early.|He takes it on some occasions and walks on others.
Who never drives to this class?|Emily|Ada in the stated passage|Ravi in the stated passage|The final part identifies Emily.`),write:T(`Describe a routine with usually and one with sometimes.|I usually read after work. I sometimes study in the morning.|Make the repeated activity clear.
Use a frequency adverb with be.|She is usually early.|Use the neutral position after be.
Ask how often and give an exact answer.|How often do you attend? Twice a week.|Use a counted schedule.
Explain never versus not always.|Never means no relevant occasions. Not always allows some occasions.|Do not treat them as equivalent.
Write a neutral does question with usually.|Does she usually take the bus?|Use the base verb after does.`)},sources:[['British Council: how often','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/how-often'],['Cambridge: often','https://dictionary.cambridge.org/grammar/british-grammar/often']],related:['031','034','035','037','040','064']};

L['040']={intro:'Read and say days, dates and clock times clearly. Use common British date order, compare digital and past/to time expressions, distinguish morning/evening and confirm a schedule when a number could be misunderstood.',
goals:['Write days and months with initial capitals.','Read common British dates using suitable ordinal forms.','Convert simple digital times to past/to expressions and back.','Use at/on/in with basic time references.','Clarify 12-hour/24-hour times and internationally ambiguous dates.'],
sections:[
S('Days, months and calendar order','The seven days are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday. Days and months have capital initials in English. A date can combine a day number, month and year. In common British writing, the order is day–month–year: 14 May 2026.',[
'Months: January, February, March, April, May, June, July, August, September, October, November, December.',
'Day names refer to positions in a weekly cycle; a date identifies a calendar day.',
'Use clear spellings, especially Wednesday, February and September.',
'Numeric dates can be ambiguous internationally: 05/06 may mean 5 June or 6 May. Write the month name when clarity matters.'
]),
S('Ordinal numbers help you say dates','In British speech, 14 May is commonly the fourteenth of May. In ordinary date writing, 14 May is enough; 14th May is also used in some styles. Learn the irregular ordinals and the compound pattern. Do not put th after every number.',[
'1st first, 2nd second, 3rd third; 4th fourth.',
'5th fifth, 8th eighth, 9th ninth, 12th twelfth.',
'20th twentieth; 21st twenty-first; 22nd twenty-second; 23rd twenty-third.',
'11th, 12th and 13th all use th. In 2026, twenty twenty-six and two thousand and twenty-six are both possible year readings.'
],table(['Written','Common spoken British form'],`1 May|the first of May
2 June|the second of June
3 July|the third of July
12 August|the twelfth of August
21 September|the twenty-first of September
14 May 2026|the fourteenth of May, twenty twenty-six`)),
S('Digital times, o’clock and the 24-hour clock','At 3:00, say three o’clock or three. At 3:10, three ten is a clear digital reading. Do not add o’clock after minutes: three ten o’clock is not the ordinary pattern. A 24-hour timetable avoids some morning/evening ambiguity: 15:10 is 3:10 p.m.',[
'09:00 = nine in the morning; 21:00 = nine in the evening.',
'For 07:05, seven oh five is common; seven zero five is also clear when checking digits.',
'Noon is 12 in the middle of the day; midnight is the boundary between days. Specify the date for a midnight deadline or booking if needed.',
'12 a.m. usually means midnight and 12 p.m. noon, but the words noon/midnight can avoid confusion.'
]),
S('Past and to use the hour as a reference','Ten past three is 3:10: ten minutes after three. Ten to four is 3:50: ten minutes before four. Quarter means fifteen minutes; half past means thirty minutes after the stated hour. With to, name the upcoming hour, not the previous one.',[
'3:15 = quarter past three / a quarter past three.',
'3:30 = half past three.',
'3:45 = quarter to four / a quarter to four.',
'Both digital readings and past/to readings are useful. Use the clearer option for the listener.'
],table(['Time','Digital reading','Past/to reading'],`03:10|three ten|ten past three
03:15|three fifteen|quarter past three
03:30|three thirty|half past three
03:45|three forty-five|quarter to four
03:50|three fifty|ten to four`)),
S('Use at, on and in for basic time phrases','Use at with a clock time, on with a day or date, and in with a month or year in these basic patterns. On Monday morning combines a day and part of day; in the morning is the general part-of-day phrase. Some common expressions have their own conventions.',[
'at nine; on Tuesday; on 14 May; in June; in 2026.',
'in the morning, in the afternoon, in the evening; at night.',
'Every Monday, next Tuesday and last week normally need no extra at/on/in in these ordinary patterns.',
'At weekends is common British usage. Lesson 041 develops time prepositions and exceptions further.'
]),
S('Confirm the whole schedule, not just one number','An appointment needs a clear date and time, and sometimes a location or time zone. Ask What time? or What date? according to what is missing. Read it back using another clear form: Half past three in the afternoon — 15:30, correct?',[
'Did you say Tuesday or Thursday? Is that 14 May or 14 March?',
'Morning or afternoon? Which time zone? These questions can matter in international arrangements.',
'For a timetable, present simple is useful: The course starts at nine.',
'The dates and times in this lesson are language-practice examples, not actual event announcements.'
])],
examples:R(`Monday, Tuesday, Wednesday|Days begin with capital letters.
Thursday, Friday, Saturday, Sunday|Keep the standard day spellings.
January, February, March|Months also take capital initials.
April, May, June|Three month names.
July, August, September|Three more month names.
October, November, December|The final months of the year.
14 May 2026|Common British day–month–year order.
the fourteenth of May|A common spoken date form.
1st — first|An irregular ordinal.
2nd — second|An irregular ordinal.
3rd — third|An irregular ordinal.
5th — fifth|Notice the spelling change.
12th — twelfth|A common irregular spelling.
21st — twenty-first|The final part determines this ordinal ending.
11th, 12th, 13th|These all use th.
three o’clock|Use o’clock for an exact hour.
07:05 — seven oh five|A common digital reading.
15:10 — three ten in the afternoon|Convert 24-hour time to a clear 12-hour phrase.
21:00 — nine in the evening|The same hour number can occur in different parts of the day.
3:15 — quarter past three|Fifteen minutes after three.
3:30 — half past three|Thirty minutes after three.
3:45 — quarter to four|Fifteen minutes before the next hour.
3:50 — ten to four|Ten minutes before four.
The meeting starts at nine.|Use at with clock time.
The course starts on Monday.|Use on with a day.
My appointment is on 14 May.|Use on with a date.
I study in June.|Use in with a month.
I study in the evening.|Use in the evening.
I study every Monday.|No extra on is needed before every Monday.
Half past three in the afternoon — 15:30, correct?|Confirm the complete time unambiguously.`),
dialogues:[D('Confirming a clock time',`Worker|The lesson starts at half past three.
Ada|In the afternoon?
Worker|Yes.
Ada|So 15:30. Thank you.`),D('An ambiguous numeric date',`Ravi|The note says 05/06.
Emily|Do you mean 5 June or 6 May?
Ravi|5 June.
Emily|I’ll write the month name to make it clear.`),D('Quarter to',`Learner|Quarter to four means 4:15?
Teacher|No. It means 3:45, fifteen minutes before four.
Learner|Quarter past four would be 4:15?
Teacher|Exactly.`),D('A day check',`Ada|When does the course start?
James|On Thursday, at nine in the morning.
Ada|Thursday, not Tuesday?
James|Yes, Thursday.`),D('A remote appointment',`Emily|The call is at nine.
Ravi|Morning or evening, and which time zone?
Emily|Nine in the morning in Doha.
Ravi|Thank you. I will confirm the date too.`)],
mistakes:R(`monday|Monday|Day names have capital initials.
3th May|3rd May|Third uses rd.
twelveth|twelfth|Learn the standard ordinal spelling.
three ten o’clock|three ten|Do not add o’clock after the minutes.
3:45 = quarter to three|3:45 = quarter to four|With to, name the upcoming hour.
at Monday|on Monday|Use on with the day in this basic pattern.`),
practice:{mc:Q(`Choose common British date order.|14 May 2026|May 14 as the only possible international form|2026 May 14 as the required British model|Day–month–year is the taught British convention.
Which spelling is correct?|Wednesday|Wensday|Wednesdaey|Use the standard day spelling.
Choose the ordinal for 3.|third|threeth|thirth|Third is irregular.
Choose the ordinal for 12.|twelfth|twelveth|twelvth|Learn the standard spelling.
What is half past three?|3:30|2:30|3:15|Half past means thirty minutes after.
What is quarter to four?|3:45|4:15|4:45|It is fifteen minutes before four.
What is 21:00 in 12-hour language?|nine in the evening|nine in the morning|one in the afternoon|Subtract twelve from the hour after noon.
Choose the basic day phrase.|on Monday|at Monday|in Monday|Use on with a day.
Choose the month phrase.|in June|on June with no date in this pattern|at June|Use in with a month.
What is best when 05/06 is ambiguous?|Write the month name and confirm.|Guess the reader’s convention.|Assume one order is universal.|International conventions can differ.`),gap:T(`Write Monday with correct capitalisation: monday.|Monday|Day names start with capitals.
Write the ordinal word for 1.|first|First is irregular.
Write the ordinal word for 2.|second|Second is irregular.
Write the ordinal word for 3.|third|Third is irregular.
Write the ordinal word for 12.|twelfth|Use the standard spelling.
Write half past three as a 12-hour digital time.|3:30|Thirty minutes after three.|03:30~3.30~03.30
Write quarter to four as a 12-hour digital time.|3:45|Fifteen minutes before four.|03:45~3.45~03.45
Complete: The meeting starts __ nine.|at|Use at with clock time.
Complete: The course starts __ Monday.|on|Use on with a day.
Complete: I study __ June.|in|Use in with a month.`),correct:T(`Correct the day capitalisation: monday.|Monday|Day names need capitals.
Correct the ordinal spelling: twelveth.|twelfth|The standard form is twelfth.
Correct: three ten o’clock.|three ten|Do not add o’clock after minutes.
Correct: The meeting is at Monday.|The meeting is on Monday.|Use on with the day.
Correct the stated equivalence: 3:45 = quarter to three.|3:45 = quarter to four|With to, use the upcoming hour.`),order:T(`Order: at / starts / meeting / nine / The|The meeting starts at nine.|Use at with clock time.
Order: Monday / on / starts / course / The|The course starts on Monday.|Use on with a day.
Order: June / in / study / I|I study in June.|Use in with a month.
Order: three / half / is / past / It|It is half past three.|Half past names thirty minutes after the hour.
Order: start / does / time / What / course / the|What time does the course start?|Ask for the clock time.`),reading:'In this practice schedule, a course begins on Monday 15 June 2026. The morning session starts at 09:00 and ends at 10:30. An afternoon practice group meets at 15:45. Ada confirms that this is quarter to four in the afternoon. Ravi sees a separate note saying 05/06 and asks which month and day it means instead of guessing.',read:Q(`What date begins the practice course?|15 June 2026|5 June 2026|6 May 2026|The passage writes the month name clearly.
What time does the morning session start?|Nine in the morning|Nine in the evening|Ten thirty|09:00 is morning.
What does 10:30 mean in a past expression?|Half past ten|Quarter to ten|Half past nine|Thirty minutes after ten.
What is 15:45 in a to expression?|Quarter to four in the afternoon|Quarter past four|Quarter to three|It is fifteen minutes before 16:00.
Why does Ravi clarify 05/06?|The numeric order can be ambiguous.|It is always invalid.|It must mean a price.|Different conventions can reverse month and day.`),write:T(`Write an imaginary appointment with a clear written date and time.|My appointment is on 14 May 2026 at 3:30 p.m.|Include enough information to avoid ambiguity.
Give a digital and past/to version of one time.|3:45 is quarter to four.|Make the equivalence accurate.
Write three basic time-preposition phrases.|at nine; on Monday; in June|Match at/on/in to the type of reference.
Write a clarification for an unclear numeric date.|Do you mean 5 June or 6 May?|Name the possible interpretations.
Write a short schedule confirmation exchange.|A: The call is at nine. B: Morning or evening, and which time zone? A: Nine in the morning in Doha. B: Thank you. What date?|Confirm all relevant parts rather than one number only.`)},sources:[['Cambridge: time','https://dictionary.cambridge.org/grammar/british-grammar/time'],['Cambridge: saying the time','https://dictionaryblog.cambridge.org/2018/02/14/what-time-is-it-how-to-say-the-time/']],related:['007','034','037','038','039','041']};

})();
