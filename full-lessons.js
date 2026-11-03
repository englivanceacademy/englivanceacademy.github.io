/* Original extended lessons. Preserve the study-book lesson numbering. */
(function(){
'use strict';
const lessons={};
const rows=s=>s.trim().split('\n').map(x=>x.trim().split('|').map(v=>v.trim()));
const section=(title,explain,points,table)=>({title,explain,points,table:table||null});
const quiz=s=>rows(s).map(r=>({prompt:r[0],answer:r[1],options:r.slice(1,4),why:r[4]}));
const typed=s=>rows(s).map(r=>({prompt:r[0],answer:r[1],why:r[2],accept:r[3]?r[3].split('~'):[]}));
const dialogue=(title,s)=>({title,lines:rows(s)});
const pronunciation=[['Cambridge Dictionary: UK pronunciation','https://dictionary.cambridge.org/pronunciation/'],['British Council: sound chart','https://learnenglish.britishcouncil.org/apps/learnenglish-sounds-right']];

lessons['002']={
intro:'Learn to recognise, write and say A–M. Use the letter names to spell short names, check a form and repair a misunderstanding. This is a lesson about written letters and their names; word pronunciation comes later.',
goals:['Recognise all 13 capital and lower-case letters from A to M.','Say the letter names in order and separately.','Explain the difference between a letter name and a word sound.','Spell a short name and check a letter politely.','Use capitals for names and the beginning of a sentence.'],
sections:[
section('Letters are written symbols; letter names are spoken labels','English uses 26 letters. Each has a capital form and a lower-case form. A and a are two shapes for the same letter. A letter also has a spoken name. You use that name when you spell a word aloud. You do not normally read a word by saying every letter name.',[
'Learn three things together: the capital shape, the small shape and the spoken letter name.',
'A name such as Ada is one whole spoken name. A–D–A is its spelling, using three separate letter names.',
'Do not worry if printed a or g looks different from your handwriting. Different fonts can show different accepted shapes.',
'Practise a small group first: A–B–C–D, then E–F–G, then H–I–J–K–L–M.'
]),
section('Your A–M reference table','The marks between slashes show pronunciation using the International Phonetic Alphabet, or IPA. You do not need to memorise every symbol today. Read the letter, try its name and compare it with UK dictionary audio. The example word helps you recognise the written letter; its first sound may be different from the letter name.',[
'A, H, J and K share the /eɪ/ vowel in their names.',
'B, C, D, E and G have /iː/ in their names; F, L and M begin with /e/.',
'The usual dictionary name for H is aitch /eɪtʃ/. You may also hear haitch in some communities.',
'The name of I sounds like the spoken word eye. The written pronoun I is always a capital.'
],{head:['Capital / small','Letter name','Example word'],rows:rows('A / a|/eɪ/|address\nB / b|/biː/|bank\nC / c|/siː/|city\nD / d|/diː/|doctor\nE / e|/iː/|email\nF / f|/ef/|form\nG / g|/dʒiː/|garden\nH / h|/eɪtʃ/|hospital\nI / i|/aɪ/|invoice\nJ / j|/dʒeɪ/|job\nK / k|/keɪ/|kitchen\nL / l|/el/|letter\nM / m|/em/|manager')}),
section('A letter name is not a rule for every word','The name of A is /eɪ/. The first sound in apple is normally /æ/. C is called /siː/, but C begins cat with /k/ and city with /s/. Knowing the alphabet helps spelling; it does not tell you every possible pronunciation.',[
'When somebody asks How do you spell it?, give letter names: A–D–A.',
'When somebody asks How do you say it?, say the whole name or word naturally.',
'Use a dictionary with UK audio to check an unfamiliar word.',
'Later lessons teach vowel and consonant sounds. Today, aim to recognise and name the letters.'
]),
section('Spelling names clearly, one letter at a time','Say My name is Ada. Then say A–D–A, with a short space between the letter names. If a listener is uncertain, repeat the difficult part and add a familiar word: D as in doctor. An example word is a practical clarification, not a special alphabet you must memorise.',[
'Begin with the whole name so the listener knows what you are spelling.',
'Use Could you spell that, please? to request the spelling.',
'Use Is that B or D? to identify exactly what you did not understand.',
'Read the name back after writing it. Ask Is that correct? before finishing.'
]),
section('Capitals, lower-case letters and forms','Write personal names with initial capitals: Ada, Ali, Kim. Ordinary words such as bank usually start with a lower-case letter unless they begin a sentence. A form may ask for BLOCK CAPITALS; then every letter should be a capital: ADA.',[
'A capital letter is also called an upper-case letter. A small letter is also called a lower-case letter.',
'Capitalise the first word of a sentence: My name is Ada.',
'Capitalise the pronoun I wherever it appears: Ali and I work here.',
'A–M is only the first half of the alphabet. Lesson 003 adds N–Z; do not invent spellings for unfamiliar letters.'
]),
section('A short, useful practice routine','Look at five letters, cover them, say their names and write them from memory. Then check. Keep written recognition and spoken practice together. Accuracy matters more than speed. If you practise with a partner, ask them to spell a short name and write exactly what they say.',[
'First read in order. Then point to letters in a mixed order so you recognise each one independently.',
'Practise A–D–A, A–L–I, K–I–M and E–M–M–A.',
'Ask your partner to read your spelling back. Correct one misunderstanding politely.',
'Finish by writing a three-line form: First name, Surname and Initial. Use imaginary details for public practice.'
])],
examples:rows(`A and a are the same letter.|The shapes differ; the letter name does not.
B and b are the same letter.|Recognise both upper and lower case.
C is the third letter.|A comes first, B second and C third.
D comes after C.|After means the next position here.
E comes before F.|Before means an earlier position.
F, G, H.|Say three separate letter names.
I, J, K.|Do not confuse I /aɪ/ with E /iː/.
L comes before M.|Finish this half of the alphabet with L–M.
My name is Ada: A–D–A.|Give the name first, then its spelling.
My name is Ali: A–L–I.|Three letters make this name.
Kim: K–I–M.|Listen carefully to the middle letter I.
Emma: E–M–M–A.|Say both letters M; the name contains four letters.
Could you spell that, please?|A polite request for letter names.
Could you say the first letter again?|Ask for the part you missed.
Is that B or D?|Give two possible letters to clarify.
B, as in bank.|The example word identifies B.
D, as in doctor.|The example word identifies D.
G, as in garden.|G has the name /dʒiː/.
J, as in job.|J has the name /dʒeɪ/.
The first letter is A.|First identifies position, not pronunciation.
The last letter is M.|Last identifies the final position in this example.
There are two letters M in Emma.|Repeated letters must both be written.
Please write ADA in block capitals.|All three written letters are upper case.
Please write Ada with an initial capital.|Only the first letter needs a capital in ordinary name writing.
I work at a bank.|The pronoun I is capitalised; bank is an ordinary noun.
My name begins with K.|Begins with identifies the first written letter.
The letter A has a name.|A is pronounced /eɪ/ when naming the letter.
Apple begins with a.|The sound in apple is not the name /eɪ/.
Let me read that back: A–D–A.|Repeat the spelling to check your record.
Yes, that is correct. Thank you.|Confirm successful communication politely.`),
dialogues:[
dialogue('At a reception desk',`Receptionist|What is your first name?
Visitor|Ada.
Receptionist|Could you spell that, please?
Visitor|A–D–A.
Receptionist|Ada. Is that correct?
Visitor|Yes. Thank you.`),
dialogue('Checking B and D',`Learner|Is the first letter B or D?
Teacher|B, as in bank.
Learner|B. Thank you.
Teacher|Yes, that is correct.`),
dialogue('A form with block capitals',`Learner|Should I write my name in small letters?
Receptionist|The form asks for block capitals.
Learner|So I write A–L–I in capitals?
Receptionist|Yes. ALI.`),
dialogue('Two letters the same',`Teacher|Please spell Emma.
Learner|E–M–A?
Teacher|Almost. There are two letters M: E–M–M–A.
Learner|E–M–M–A. Thank you.`),
dialogue('Practising with a colleague',`James|What comes after H?
Emily|I. Then J and K.
James|And what comes before M?
Emily|L. H–I–J–K–L–M.`)
],
mistakes:rows(`ada|Ada|Begin a personal name with a capital in ordinary writing.
i am Ada.|I am Ada.|The pronoun I is always capitalised.
A is always /eɪ/ inside words.|A is called /eɪ/, but its sound can change in words.|A letter name and a word sound are different things.
Emma: E–M–A.|Emma: E–M–M–A.|Do not miss a repeated letter.
Every word begins with a capital.|Names and sentence beginnings use capitals; ordinary words often do not.|Capitalisation depends on the word and its position.`),
practice:{
mc:quiz(`How many letters are in the whole English alphabet?|26|13|30|A–M contains 13 of the full set of 26.
Which is the lower-case form of A?|a|e|d|The same letter can have a capital and a lower-case shape.
Which letter comes after C?|D|B|F|The order is B–C–D.
Which letter comes before M?|L|K|G|The end of this group is K–L–M.
What is the usual name of the letter A?|/eɪ/|/æ/|/iː/|/eɪ/ is its name; /æ/ occurs in words such as apple.
Which spelling matches Kim?|K–I–M|K–E–M|C–I–M|Kim contains the letters K, I and M.
Which name contains two letters M?|Emma|Ada|Ali|Emma is E–M–M–A.
A form asks for BLOCK CAPITALS. What do you write?|ADA|Ada|ada|Block capitals means all capital letters.
Which question asks for spelling?|Could you spell that, please?|Where do you live?|How are you?|Spell asks for the letters in a word or name.
You did not hear one letter. What is most useful?|Is that B or D?|Thank you. Goodbye.|I am a nurse.|Identify the exact uncertainty so the speaker can clarify.`),
gap:typed(`Complete the order: A, B, __, D.|C|C is between B and D.
Complete: E, F, __, H.|G|G follows F.
Complete: H, I, __, K.|J|J is between I and K.
Complete: K, L, __.|M|M follows L.
Write the capital form of b.|B|B and b are the same letter.
Write the lower-case form of G.|g|This task checks the written shape, including case.
Complete the spelling of Ada: A–__–A.|D|Ada is A–D–A.
Complete Kim: K–__–M.|I|The middle letter is I.
Complete Emma: E–M–__–A.|M|There are two consecutive letters M.
Complete: Could you __ that, please? (give the letters)|spell|Spell means give the letters in the correct order.`),
correct:typed(`Correct the capitalisation: my name is ada.|My name is Ada.|Begin the sentence and the personal name with capitals.
Correct the capitalisation: i am ali.|I am Ali.|Use a capital for I and for Ali.
Correct this spelling of Emma: E–M–A.|E–M–M–A|Emma needs two letters M.|E-M-M-A
Correct the order: A, C, B, D.|A, B, C, D|B comes before C.|A B C D
Write kim correctly as a personal name, with an initial capital.|Kim|Only the first letter needs a capital in ordinary name writing.`),
order:typed(`Order: name / My / Ada / is|My name is Ada.|My name is introduces your name.
Order: spell / please / that / Could / you|Could you spell that, please?|Could you makes a polite request.
Order: that / correct / Is|Is that correct?|Use this question to check your record.
Order: first / is / letter / The / A|The first letter is A.|First describes the initial position.
Order: name / with / My / K / begins|My name begins with K.|Begins with tells us the first letter.`),
reading:'My name is Emma. I spell it E–M–M–A. My colleague is Ada. Her name is A–D–A. We are completing a form. It says BLOCK CAPITALS, so I write EMMA. Ada asks, “Is the second letter M?” I say, “Yes. There are two letters M.”',
read:quiz(`What is the writer’s name?|Emma|Ada|Kim|The passage begins My name is Emma.
How many letters are in Emma?|Four|Three|Five|E–M–M–A has four letters.
What is Ada’s spelling?|A–D–A|A–B–A|E–D–A|The passage gives A–D–A.
How does Emma write her name on the form?|EMMA|emma|Emma|The form requires block capitals.
Which letter occurs twice in Emma?|M|A|E|There are two consecutive letters M.`),
write:typed(`Write your first name with an initial capital, then spell it.|Ada: A–D–A.|Your name may be different. Check every letter and keep its order.
Write a polite question asking for spelling.|Could you spell your name, please?|Use Could you and please to make a polite request.
Write one question that checks B or D.|Is that B or D?|Ask about the specific letters you might confuse.
Write Ali in block capitals.|ALI|Every letter is a capital.
Explain letter name versus word sound using A.|The letter A is called /eɪ/, but apple begins with /æ/.|You may use simple words. The key idea is that names and word sounds are not always the same.`)
},sources:pronunciation,related:['003','004','006']};

lessons['003']={
intro:'Complete the alphabet with N–Z. Then combine both halves to spell names, check written details and distinguish letter names that sound similar. Use zed for Z in this British English course.',
goals:['Recognise and say the 13 letters N–Z.','Distinguish M/N, B/P, G/J and U/W.','Spell short names using the whole alphabet.','Use zed for the British name of Z.','Check a name or reference code without guessing.'],
sections:[
section('Complete the alphabet in manageable groups','Lesson 002 covered A–M. The next letter is N. Learn N–O–P–Q–R, then S–T–U–V, then W–X–Y–Z. Finally join the two halves. Reading a mixed list is useful because real names do not follow alphabet order.',[
'N–Z contains 13 letters. Together, A–M and N–Z make 26.',
'Practise capital and small forms together: N/n, O/o and so on.',
'W is one letter. Its name double-u has more than one syllable.',
'Z is called zed /zed/ in British English and usually zee /ziː/ in American English. Both name the same letter.'
]),
section('Your N–Z reference table','Use the IPA as a pronunciation guide, not as ordinary spelling. The table gives common dictionary British letter names. Regional accents vary; clear communication matters more than copying one accent exactly.',[
'N /en/ and M /em/ are different: N ends with the tongue touching behind the upper teeth; M ends with closed lips.',
'P /piː/, T /tiː/ and V /viː/ have the same vowel but different beginnings.',
'Q /kjuː/ and U /juː/ share the ending; Q starts with /k/.',
'R is often /ɑː/ in the non-rhotic British model. Many British accents pronounce an r sound.'
],{head:['Capital / small','Letter name','Example word'],rows:rows('N / n|/en/|name\nO / o|/əʊ/|office\nP / p|/piː/|paper\nQ / q|/kjuː/|question\nR / r|/ɑː/|room\nS / s|/es/|station\nT / t|/tiː/|ticket\nU / u|/juː/|uniform\nV / v|/viː/|visitor\nW / w|/ˈdʌb.əl.juː/|work\nX / x|/eks/|X-ray\nY / y|/waɪ/|year\nZ / z|/zed/|zero')}),
section('Similar letter names need deliberate checking','A short telephone connection can make letter names difficult to hear. Do not change a name because another spelling looks more familiar. Ask for the uncertain letter and use an example word. N as in name is clearer than repeating N faster.',[
'M /em/ and N /en/: listen for the last sound.',
'B /biː/ and P /piː/: listen for the first sound.',
'G /dʒiː/ and J /dʒeɪ/: the vowels in the letter names differ.',
'U is one letter; W is another letter called double-u. W is not two letters U when spelling a name.'
]),
section('Say the name, spell it, then read it back','A reliable sequence is whole name → separate letters → confirmation. For example: My name is Noor. N–O–O–R. A listener can answer N–O–O–R, Noor. Is that right? Correct the exact part if needed.',[
'Noor has two letters O. Say O–O or, when understood, double O.',
'Use Is that N as in name? when you need to distinguish N from M.',
'Pause between a first name and a surname so the listener can separate them.',
'For an important reference code, say each character individually. Do not treat the written letter O as the digit 0.'
]),
section('Use the full alphabet without confusing names and sounds','You now know all 26 written letters. They combine to represent many more spoken sounds. The name Y is /waɪ/, but Y in yes begins with /j/. The name X is /eks/, but X-ray is a whole word. Learning a letter name does not give a universal pronunciation rule.',[
'Say a word naturally when reading; say letter names when spelling.',
'Common vowel letters are A, E, I, O and U. Y can also represent vowel sounds in words.',
'When sorting names alphabetically, compare the first letters. If they match, compare the next letters.',
'Put Ali before Noor, and Noor before Zoe. Within names beginning with A, Ada comes before Ali because d comes before l.'
]),
section('Turn recognition into practical skill','Write a mixed list such as V, N, Q, W, R, Y, Z. Say each name slowly. Then cover the list and write what a partner says. Change roles. End with a short spelling conversation rather than only repeating the alphabet.',[
'Check N–O–O–R, Z–O–E and R–A–V–I.',
'Practise the complete order from A to Z once, then select five random letters.',
'Keep correction polite: Sorry, the last letter is R, not L.',
'Return to Lesson 002 for A–M and Lesson 006 for email symbols and full spelling exchanges.'
])],
examples:rows(`N comes after M.|This joins the two halves of the alphabet.
N and n are the same letter.|Practise the capital and lower-case shapes.
O is a letter; 0 is a digit.|They can look similar in some fonts.
P comes before Q.|The order is O–P–Q–R.
Q is called /kjuː/.|The letter name starts with /k/.
R is the last letter in Noor.|The spelling is N–O–O–R.
S and T are different letters.|Their names are /es/ and /tiː/.
U is called /juː/.|Its name sounds like the word you.
V is called /viː/.|Start with a voiced /v/ sound.
W is one letter.|Its spoken name is double-u.
X comes after W.|The sequence ends W–X–Y–Z.
Y is called /waɪ/.|Its name sounds like the word why.
Z is called zed in British English.|Zee is the usual American name.
My name is Noor: N–O–O–R.|Spell the two letters O separately.
My name is Zoe: Z–O–E.|Use zed when naming Z in this course.
Ravi: R–A–V–I.|The name uses both halves of the alphabet.
Could you repeat the last letter?|Ask for the exact missing part.
Is that M or N?|These names have different final consonants.
N, as in name.|An example word makes the letter clearer.
M, as in manager.|Closed lips help distinguish the ending /m/.
Did you say B or P?|Clarify a similar-sounding pair.
P, as in paper.|Say a familiar word beginning with P.
G, as in garden; J, as in job.|The letter names have different vowels.
The letter is U, not W.|U and double-u are separate letters.
Please spell both names.|Both means first name and surname in this situation.
Noor comes before Zoe alphabetically.|N comes before Z.
Ada comes before Ali.|Compare d and l after the shared initial A.
Let me check: Z–O–E.|Read the letters back in the same order.
The last letter is R, not L.|Correct the particular error politely.
Thank you. I have the correct spelling.|Finish by confirming the information.`),
dialogues:[
dialogue('Introducing Noor',`Emily|What is your name?
Noor|Noor. N–O–O–R.
Emily|Two letters O?
Noor|Yes, that is correct.`),
dialogue('British Z',`Learner|How do you say the letter Z here?
James|Zed. We use British English.
Learner|And zee?
James|That is the usual American name for the same letter.`),
dialogue('Checking M and N',`Receptionist|Is that M at the beginning?
Visitor|N, as in name.
Receptionist|N–O–O–R?
Visitor|Yes. Thank you for checking.`),
dialogue('U or W?',`Colleague|Is the letter U?
Caller|No, it is W, double-u.
Colleague|One letter W. Thank you.
Caller|Yes. That is right.`),
dialogue('A mixed alphabet check',`James|Which letter comes after V?
Emily|W. Then X, Y and Z.
James|What comes before Q?
Emily|P. Let us practise them in a mixed order now.`)
],
mistakes:rows(`W is two written letters.|W is one letter with the name double-u.|The spoken name is not the number of written letters.
Zed and zee are two letters.|Zed and zee are names for the same letter Z.|The usual choice differs between British and American English.
Noor: N–O–R.|Noor: N–O–O–R.|Keep both letters O.
The letter O and the number 0 are identical.|O is a letter; 0 is a digit.|Check confusing characters instead of guessing.
Y is always pronounced /waɪ/ in words.|Y is named /waɪ/, but its word sound varies.|Compare yes, happy and my.`),
practice:{
mc:quiz(`Which letter begins the second half of the alphabet?|N|M|O|A–M ends with M; N comes next.
Which is the lower-case form of R?|r|n|m|R and r are the same letter.
What comes after Q?|R|P|S|The order is P–Q–R.
What is the usual British name of Z?|zed|zee only|double-z|Zed is the usual British choice; zee is common in American English.
How many written letters does W represent?|One|Two|Three|Double-u is the spoken name of one written letter.
Which spells Noor correctly?|N–O–O–R|N–O–R|M–O–O–R|Noor has four letters, including two letters O.
Which letter name is /juː/?|U|W|Q|U is /juː/; W is double-u; Q begins with /k/.
Which letter comes last in the alphabet?|Z|Y|W|The ending is W–X–Y–Z.
Which name comes first alphabetically?|Ada|Noor|Zoe|A comes before N and Z.
You hear an unclear letter. What should you do?|Ask the speaker to clarify.|Guess the most common name.|Leave the letter out.|Checking is more reliable than guessing.`),
gap:typed(`Complete: M, __, O.|N|N follows M.
Complete: O, P, __, R.|Q|Q comes between P and R.
Complete: R, S, __, U.|T|T follows S.
Complete: U, __, W.|V|V is between U and W.
Complete: W, X, __, Z.|Y|Y is the penultimate letter.
Write the capital form of n.|N|Use the upper-case shape.
Write the lower-case form of T.|t|Use the lower-case shape.
Complete Noor: N–O–__–R.|O|Noor has two letters O.
Complete Zoe: Z–__–E.|O|The middle letter is O.
Write the usual British name of Z.|zed|Zed is used in this British English course.`),
correct:typed(`Correct the spelling of Noor: N–O–R.|N–O–O–R|Do not lose the second O.|N-O-O-R
Correct the order: W, Y, X, Z.|W, X, Y, Z|X comes before Y.|W X Y Z
Write zoe with correct name capitalisation.|Zoe|A personal name begins with a capital.
Correct this letter count: W is two letters.|W is one letter.|The name double-u identifies one letter.
Correct this claim: O is a number.|O is a letter.|The digit zero is written 0.`),
order:typed(`Order: name / Noor / My / is|My name is Noor.|Use My name is before the name.
Order: last / repeat / letter / the / Please|Please repeat the last letter.|Ask for the part that was unclear.
Order: N / that / Is / M / or|Is that M or N?|Either order of the alternatives is possible.|Is that N or M?
Order: before / comes / Q / P|P comes before Q.|Alphabetical order puts P before Q.
Order: W / is / letter / one|W is one letter.|One describes the number of written letters.`),
reading:'Noor and Zoe are at reception. Noor spells his name N–O–O–R. The receptionist hears M at first. Noor says, “N, as in name.” Zoe spells her name Z–O–E. She calls Z zed. The receptionist reads both names back and writes Noor before Zoe in an alphabetical list.',
read:quiz(`Which name has two letters O?|Noor|Zoe|Neither name|Noor is N–O–O–R.
Which letter did the receptionist hear at first?|M|N|Z|The passage says the receptionist hears M.
How does Noor clarify the first letter?|N, as in name.|M, as in manager.|O, as in office.|He gives a word beginning with N.
What does Zoe call Z?|zed|double-u|why|She uses the British name zed.
Which name is first in the alphabetical list?|Noor|Zoe|They have the same position.|N comes before Z.`),
write:typed(`Write a name that uses N–Z and spell it.|Noor: N–O–O–R.|Use your own or an imaginary name and keep the correct order.
Write a sentence explaining W.|W is one letter called double-u.|Mention the difference between the written letter and its spoken name.
Write a question checking M or N.|Is that M or N?|It should identify the exact letter problem.
Write a polite correction from L to R.|Sorry, the last letter is R, not L.|Correct only the unclear part and keep your tone polite.
Write three names in alphabetical order.|Ada, Noor, Zoe.|Other names are possible. Compare letters from left to right.`)
},sources:pronunciation.concat([['Cambridge: Z / zed','https://dictionary.cambridge.org/pronunciation/english/z']]),related:['002','005','006']};

lessons['004']={
intro:'Hear how vowel sounds change meaning. Begin with a small set of useful British English contrasts, understand the IPA and practise inside real words. The aim is clear, understandable speech, with room for natural accent differences.',
goals:['Distinguish a vowel letter from a vowel sound.','Recognise the contrasts in ship/sheep, full/fool and bed/bad.','Read a few useful IPA symbols and the long-vowel mark.','Explain why spelling alone does not predict pronunciation.','Use a repeat–compare–record routine with UK dictionary audio.'],
sections:[
section('Five vowel letters do not mean five vowel sounds','A, E, I, O and U are the main vowel letters. These are written symbols. A vowel sound is made with a relatively open passage through the mouth. English uses more vowel sounds than these five letters can represent. Y also represents vowel sounds in my, gym and happy.',[
'A single letter can represent several sounds: compare a in cat, cake and about.',
'Several letters can represent one vowel sound: ee in sheep represents /iː/.',
'Different spellings can share a sound: see and sea both have /iː/ in the usual dictionary model.',
'Read IPA between slashes as a pronunciation guide. It is not ordinary English spelling.'
]),
section('Begin with a small, useful sound map','These are common dictionary British English examples. They are a starting set, not every English vowel. A colon-like symbol /ː/ marks length. The difference between two vowels often involves tongue position and mouth shape as well as duration.',[
'For /iː/, the tongue is relatively high and forward. For /ɪ/, it is slightly lower and more relaxed.',
'For /uː/, many speakers use rounded lips; /ʊ/ has a different tongue position and quality, not only a shorter duration.',
'For /æ/ in bad, the jaw is generally more open than for /e/ in bed.',
'Do not make every long vowel simply louder. Listen to the sound quality.'
],{head:['Sound','Example words','Compare'],rows:rows('/ɪ/|ship, sit, live|Not /iː/\n/iː/|sheep, seat, leave|Different from /ɪ/\n/ʊ/|full, pull, foot|Not /uː/\n/uː/|fool, pool, food|Different from /ʊ/\n/e/|bed, pen, ten|Not /æ/\n/æ/|bad, pan, man|Different from /e/\n/ʌ/|cup, bus, luck|Different from /æ/ in the model\n/ɑː/|car, start, calm|Regional British pronunciations vary\n/ə/|first syllable of about|A common unstressed vowel')}),
section('Minimal pairs: a small sound change can change a word','A minimal pair contains two words that differ in one sound. Ship and sheep differ in the vowel. Full and fool do too. Practise each pair slowly, then in a sentence. This helps you connect pronunciation with meaning rather than only producing an isolated sound.',[
'ship /ʃɪp/ is a boat; sheep /ʃiːp/ is an animal.',
'full /fʊl/ means containing as much as possible; fool /fuːl/ can mean a foolish person.',
'bed /bed/ is furniture for sleeping; bad /bæd/ means not good.',
'In a phrase, vowel duration changes with the surrounding sounds. Do not judge a vowel only by counting time.'
]),
section('Spelling patterns help, but have exceptions','A final written e often changes the vowel in pairs such as cap/cape and kit/kite. The final e is usually not pronounced in those words. This is a useful spelling pattern, not a rule for every word ending in e: have does not rhyme with save.',[
'ee often represents /iː/: see, green, sheep.',
'ea has several pronunciations: sea /siː/, head /hed/ and great /ɡreɪt/.',
'oo differs in food /fuːd/ and good /ɡʊd/; do not apply one sound to every oo word.',
'When a word is unfamiliar, check the whole word and its UK audio.'
]),
section('Schwa, weak syllables and natural rhythm','Schwa /ə/ is a relaxed vowel found in many unstressed syllables. The first syllable of about is /ə/. In many non-rhotic British pronunciations, the final syllable of teacher ends in /ə/. Not every written vowel needs equal strength.',[
'In about /əˈbaʊt/, the stress mark comes before the stronger second syllable.',
'A diphthong is one vowel sound whose quality moves: /eɪ/ in day and /əʊ/ in go are useful examples.',
'British accents differ. Some pronounce r after vowels, while the non-rhotic model often does not.',
'For now, recognise schwa and stress; you do not need to force weak forms into every sentence.'
]),
section('Practise listening honestly and speaking clearly','First listen to a real UK dictionary recording. Look at the word and its meaning. Listen again without reading. Say it slowly, then in a short phrase. Record yourself and compare. Device-generated speech is useful for practice, but it may not provide the exact target accent or IPA contrast.',[
'For a true listening check, ask a partner to say one word from a pair while you cannot see the written choice.',
'If studying alone, shuffle dictionary words and replay them before revealing the spelling.',
'The written questions below check recognition and meaning. They do not automatically measure your spoken pronunciation.',
'Repeat difficult pairs in short sessions. Clear meaning is the goal, not an identical copy of one speaker.'
])],
examples:rows(`ship /ʃɪp/ — sheep /ʃiːp/|Changing the vowel changes a boat into an animal.
sit /sɪt/ — seat /siːt/|The first is an action; the second can be a place to sit.
live /lɪv/ — leave /liːv/|Here live is the verb meaning reside; live has another pronunciation in live music.
fill /fɪl/ — feel /fiːl/|Compare both vowel quality and length.
bin /bɪn/ — bean /biːn/|A bin holds rubbish; a bean is food.
full /fʊl/ — fool /fuːl/|The vowels differ in quality as well as typical duration.
pull /pʊl/ — pool /puːl/|One is an action; the other can be a swimming place.
look /lʊk/ — Luke /luːk/|Luke is a personal name.
foot /fʊt/ — food /fuːd/|These differ in the final consonant too; they are not a minimal pair.
bed /bed/ — bad /bæd/|The vowel changes the meaning.
pen /pen/ — pan /pæn/|A pen is for writing; a pan is for cooking.
men /men/ — man /mæn/|These words differ in vowel and in number meaning.
cup /kʌp/ — cap /kæp/|The first can hold a drink; the second is a hat.
luck /lʌk/ — lack /læk/|The contrast is /ʌ/ versus /æ/ in the teaching model.
cap /kæp/ — cape /keɪp/|Final e changes the vowel in this spelling pattern.
kit /kɪt/ — kite /kaɪt/|The final e is not pronounced as a separate syllable here.
not /nɒt/ — note /nəʊt/|Compare a short vowel and a moving vowel.
see /siː/ — sea /siː/|Different spellings can have the same pronunciation.
food /fuːd/ — good /ɡʊd/|The spelling oo does not always have the same sound.
head /hed/ — great /ɡreɪt/|The written letters ea represent different vowels.
about /əˈbaʊt/|The first syllable has a weak schwa.
day /deɪ/|/eɪ/ is a diphthong; its quality moves.
go /ɡəʊ/|/əʊ/ is a common British dictionary pronunciation.
happy /ˈhæp.i/|The final y represents a vowel sound.
my /maɪ/|Y represents the diphthong /aɪ/.
gym /dʒɪm/|Y represents /ɪ/ in this word.
The ship is near the port.|Use ship when you mean a boat.
The sheep is in the field.|Use sheep when you mean the animal.
Please take a seat.|Seat has /iː/ in this expression.
The room is full.|Full has /ʊ/ in the usual model.`),
dialogues:[
dialogue('Ship or sheep?',`Emily|Did you say ship or sheep?
Learner|Ship. A boat.
Emily|Thank you. Please use it in a sentence.
Learner|The ship is near the port.`),
dialogue('At a swimming centre',`Visitor|Where is the pool?
Receptionist|The swimming pool is through that door.
Visitor|Pool, /puːl/. Thank you.
Receptionist|You are welcome.`),
dialogue('A writing request',`James|Could I have a pen, please?
Emily|A pen for writing?
James|Yes, a pen, not a pan.
Emily|Of course. Here you are.`),
dialogue('Checking a dictionary',`Learner|Does oo always sound the same?
Teacher|No. Compare food and good.
Learner|So I should check the whole word?
Teacher|Yes. Listen to its UK recording too.`),
dialogue('Practising without the text',`Emily|Close your eyes. I will say ship or sheep.
Learner|All right. I will point to the boat or the animal.
Emily|Then we can change roles.
Learner|Good. Let us check meaning as well as sound.`)
],
mistakes:rows(`English has only five vowel sounds.|English has five main vowel letters and more vowel sounds.|Written letters and speech sounds are different systems.
Long vowels are just louder short vowels.|Vowels can differ in mouth shape, quality and duration.|Volume alone will not make the contrast.
Every oo word has /uː/.|Compare food /uː/ with good /ʊ/.|Spelling patterns have exceptions.
The final e in cape is a separate spoken syllable.|Cape normally has one syllable.|The e affects the spelling pattern without adding a syllable.
All British accents pronounce every vowel identically.|British accents vary; the table uses a common dictionary model.|Use the model as a guide, not a claim about every speaker.`),
practice:{
mc:quiz(`Which list contains the five main vowel letters?|A, E, I, O, U|A, B, C, D, E|B, C, D, F, G|The main written vowel letters are A, E, I, O and U.
Which word usually has /iː/?|sheep|ship|sit|Sheep has the vowel /iː/.
Which word usually has /ɪ/?|ship|sheep|seat|Ship has /ɪ/ in the model.
Which word means a place to sleep?|bed|bad|bud|Bed names the furniture; bad has a different vowel and meaning.
Which word usually has /ʊ/?|full|fool|pool|Full has /ʊ/; fool and pool have /uː/.
What does /ː/ indicate in the IPA?|Vowel length|A capital letter|A question|The length mark is used in symbols such as /iː/.
Which pair has the same pronunciation in the model?|see / sea|ship / sheep|full / fool|See and sea are homophones.
Which word begins with a weak schwa?|about|cat|sheep|The first syllable of about is /ə/.
Which statement is accurate?|A vowel letter can represent different sounds.|Every vowel has one fixed spelling.|All oo words have /uː/.|Compare a in cat and cake.
Which task is a real listening discrimination task?|Hear a hidden word and choose its meaning.|Copy a visible word.|Count written letters.|Listening discrimination requires hearing without the answer already visible.`),
gap:typed(`Write the word meaning an animal: ship / sheep.|sheep|Sheep names the animal.
Write the word meaning a boat: ship / sheep.|ship|Ship names a boat.
Write the word meaning a writing tool: pen / pan.|pen|A pen is used for writing.
Write the word meaning a cooking container: pen / pan.|pan|A pan is used for cooking.
Complete the word for a place to sit: s__t. Use seat or sit.|seat|Seat has /iː/ and names a place to sit.
Choose full or fool: The bus has no empty seats. It is __.|full|Full means no more space is available.
Choose pool or pull: I swim in the __.|pool|Pool is the swimming place.
Name the weak vowel /ə/.|schwa|Schwa occurs in many unstressed syllables.
Write the vowel letter in the middle of gym.|y|Y represents /ɪ/ in gym.
Which spelling completes this pair with /iː/: see / __ (the ocean)?|sea|See and sea have the same pronunciation.`),
correct:typed(`Correct the number claim: English has only five vowel sounds.|English has more than five vowel sounds.|There are five main vowel letters, but more spoken vowel sounds.
Correct the word: The sheep carries passengers across the sea.|The ship carries passengers across the sea.|A boat is a ship, not a sheep.
Correct the word: I write with a pan.|I write with a pen.|A pen is the writing tool.
Correct the word: Please take a sit. (Use a noun.)|Please take a seat.|Seat is the noun in this expression.
Correct the word: We swim in the pull.|We swim in the pool.|Pool names a swimming place.`),
order:typed(`Order: a / seat / take / Please|Please take a seat.|This is a polite invitation to sit.
Order: full / room / The / is|The room is full.|Full has the vowel /ʊ/.
Order: the / word / to / Listen|Listen to the word.|Use listen to before its object.
Order: ship / a / is / This|This is a ship.|Ship means a boat.
Order: dictionary / Check / the / audio|Check the dictionary audio.|Use audio to check the spoken word.`),
reading:'Emily practises three pairs: ship/sheep, pen/pan and full/fool. She first checks the meaning of each word. Then she listens to UK dictionary recordings. Her partner says one word while the spelling is hidden. Emily points to the matching picture. She records her own words afterwards. She knows this written lesson cannot automatically assess her accent.',
read:quiz(`How many pairs does Emily practise?|Three|Five|Ten|The passage names three pairs.
What does she check first?|Meaning|Her speaking speed|The alphabet order|She first checks what each word means.
Why is the spelling hidden?|To test listening.|To practise handwriting.|To count letters.|She must identify the spoken word without seeing its spelling.
What does she use as a pronunciation reference?|UK dictionary recordings|Only written letters|Random spellings|The passage specifies UK dictionary recordings.
Can the written lesson automatically assess her accent?|No|Yes, perfectly|Only if she types quickly|Written answers do not measure pronunciation quality.`),
write:typed(`Explain the difference between ship and sheep.|Ship is a boat. Sheep is an animal. They have different vowel sounds.|Include both the meaning and the vowel contrast.
Write one sentence using pen and one using pan.|I write with a pen. I cook with a pan.|Use each word with its correct meaning.
Give one example showing that spelling does not always predict sound.|Food and good both contain oo, but their vowels differ.|Other accurate pairs are possible.
Describe a listening activity without visible answers.|My partner says ship or sheep, and I choose a picture before seeing the spelling.|Hearing should determine the response.
Write a three-step pronunciation routine.|I listen to UK audio, repeat the word and compare my recording.|Do not judge success only by written scores.`)
},sources:pronunciation.concat([['Oxford: pronunciation guide','https://www.oxfordlearnersdictionaries.com/about/english/pronunciation_english']]),related:['002','003','005']};

lessons['005']={
intro:'Build clear consonants with your lips, tongue, airflow and voice. Practise useful contrasts at the beginning and end of words, then use them in sentences. You do not need to remove your accent to communicate clearly.',
goals:['Explain how consonant letters differ from consonant sounds.','Feel the difference between voiced and voiceless consonants.','Practise /p–b/, /f–v/, /t–d/ and /s–z/ in words.','Recognise /θ/, /ð/, /ʃ/, /tʃ/ and /ŋ/.','Keep final consonants and simple consonant groups clear.'],
sections:[
section('Consonant sounds involve a narrowing or closure','A consonant sound is made with some narrowing or closing in the speech passage. Your lips, tongue, teeth and voice work together. The written letter is not the sound itself. Two letters can represent one sound: sh in shop is /ʃ/. One letter can represent different sounds: c in cat differs from c in city.',[
'Do not add the full letter name when making a sound. B is called /biː/, but the initial sound in bag is /b/.',
'A sound can occur at the start, middle or end: /t/ in tea, water and cat varies with accent and position.',
'Learn a sound inside a useful word and a short phrase.',
'The IPA helps show pronunciation without depending only on spelling.'
]),
section('Voice: feel the vibration','Place your fingertips lightly on the front of your throat. Say a long /ssss/, then /zzzz/. You will usually feel stronger voice vibration for /z/. Many useful pairs have similar mouth positions but differ in voicing. Context can change the exact sound, so practise whole words as well.',[
'For /p/ and /b/, close both lips, then release. /b/ is the voiced partner.',
'For /f/ and /v/, let air pass between your lower lip and upper teeth. /v/ is voiced.',
'For /t/ and /d/, the tongue contacts the ridge behind the upper teeth. /d/ is voiced.',
'For /s/ and /z/, air passes through a narrow channel. /z/ is voiced. Do not add a separate vowel after the sound.'
],{head:['Voiceless','Voiced','Word contrast'],rows:rows('/p/|/b/|pat / bat\n/t/|/d/|ten / den\n/k/|/ɡ/|coat / goat\n/f/|/v/|fan / van\n/s/|/z/|sip / zip\n/θ/|/ð/|thin / this (different words, not a minimal pair)')}),
section('Useful contrasts that can change meaning','Fan and van differ in the first sound. Rice and rise differ in the last sound: /s/ versus /z/. A small consonant difference can affect the meaning even when the vowel is clear. Use the meaning to help you notice which word you need.',[
'fan: an object that moves air; van: a road vehicle.',
'coat: an item of clothing; goat: an animal.',
'rice: a food; rise: move upwards or an increase.',
'Practise final sounds in cap/cab and back/bag. A final voiced consonant may be partly devoiced; the vowel before it often helps listeners recognise the word.'
]),
section('TH, SH, CH and NG need more than letter names','For /θ/ in thin, let air pass at the tongue tip near or between the teeth without strong voice vibration. For /ð/ in this, use a similar tongue position with voice. For /ʃ/ in shop, the airflow is continuous; /tʃ/ in chip begins with a closure then a release.',[
'thin /θɪn/ and tin /tɪn/ differ at the start. Avoid replacing every th with /t/.',
'this /ðɪs/ and think /θɪŋk/ begin with different th sounds.',
'ship /ʃɪp/ and chip /tʃɪp/ differ at the start.',
'The final sound in sing /sɪŋ/ is /ŋ/. In the usual model, sing does not end with a separate /ɡ/. Finger does contain /ŋɡ/.'
]),
section('Word endings and consonant groups','An ending may distinguish a noun from another word or show grammar. Keep the last sound clear in desk, help and next. A consonant group has more than one consonant sound together. Practise it slowly without inserting an extra syllable: desk, not desk-uh.',[
'Build a difficult group gradually: /s/, /sk/, then desk.',
'Compare cap and caps: final /s/ changes the number meaning.',
'A final /t/ or /d/ may not have a strong audible release in natural speech. Clarity does not require exaggerating every release.',
'Use a short phrase such as the next stop after practising the individual words.'
]),
section('Spelling surprises and a practical routine','Not every written consonant is spoken. K is silent in know; b is silent in lamb. Letter combinations also vary: ch is /tʃ/ in chair but /k/ in chemistry. Check unfamiliar words rather than reading every letter separately.',[
'Listen to a UK recording, watch your mouth in a mirror, repeat, record and compare.',
'Practise five words carefully, not fifty words too quickly.',
'Ask a partner to choose a word from a hidden pair and identify it by meaning.',
'The exercises below assess written understanding. Use the spoken practice separately; no automatic pronunciation score is claimed.'
])],
examples:rows(`pat /pæt/ — bat /bæt/|Both begin with a lip closure; voicing differs.
pack /pæk/ — back /bæk/|Changing /p/ to /b/ changes the word.
pear /peə/ — bear /beə/|A fruit and an animal in the common non-rhotic model.
ten /ten/ — den /den/|The first consonant differs.
coat /kəʊt/ — goat /ɡəʊt/|Clothing and an animal.
cold /kəʊld/ — gold /ɡəʊld/|The initial sound changes meaning.
fan /fæn/ — van /væn/|Use lower lip and upper teeth for both first sounds.
fine /faɪn/ — vine /vaɪn/|Voice distinguishes /f/ and /v/.
safe /seɪf/ — save /seɪv/|The contrast occurs at the end.
sip /sɪp/ — zip /zɪp/|The initial /s/ is voiceless; /z/ is voiced.
rice /raɪs/ — rise /raɪz/|The final sound changes the word.
bus /bʌs/ — buzz /bʌz/|Listen to the final /s/ or /z/.
cap /kæp/ — cab /kæb/|Keep the final consonant difference clear.
back /bæk/ — bag /bæɡ/|The ending is /k/ or /ɡ/.
thin /θɪn/ — tin /tɪn/|The tongue position at the start differs.
three /θriː/ — tree /triː/|Both contain a consonant group, but the first sound differs.
this /ðɪs/|Th represents the voiced /ð/ here.
think /θɪŋk/|Th represents /θ/, and the ending contains /ŋk/.
ship /ʃɪp/ — chip /tʃɪp/|Continuous /ʃ/ differs from the closure-and-release /tʃ/.
shop /ʃɒp/ — chop /tʃɒp/|Compare the first sounds in useful words.
sing /sɪŋ/|The last sound is /ŋ/, without a separate /ɡ/ in the model.
finger /ˈfɪŋ.ɡə/|Unlike sing, this word includes /ɡ/ after /ŋ/ in the model.
desk /desk/|Keep the final /sk/ group without an added vowel.
help /help/|The word ends with /lp/.
next /nekst/|The word has a final consonant group.
cap — caps|Adding /s/ marks the regular plural here.
know /nəʊ/|The written k is silent.
lamb /læm/|The written b is silent.
chair /tʃeə/|Ch represents /tʃ/ in this word.
chemistry /ˈkem.ɪ.stri/|Ch represents /k/ here; check the word, not just the letters.`),
dialogues:[
dialogue('A vehicle or a fan?',`Emily|Did you say fan or van?
Learner|Van. The vehicle is outside.
Emily|Thank you. I understand.
Learner|I will practise the /v/ sound again.`),
dialogue('Choosing food',`Customer|Could I have rice, please?
Server|Rice with vegetables?
Customer|Yes, rice.
Server|Of course. One moment, please.`),
dialogue('Feeling voice',`James|Put your hand lightly on your throat. Say sss, then zzz.
Learner|I can feel vibration with zzz.
James|Good. Now try sip and zip.
Learner|Sip. Zip.`),
dialogue('Practising a final group',`Learner|I find desk difficult.
Emily|Try the ending /sk/, then the whole word desk.
Learner|Desk. The book is on the desk.
Emily|Good. Keep it one syllable.`),
dialogue('A silent letter',`Learner|Do I pronounce the k in know?
Teacher|No. The word begins with /n/.
Learner|So I should check dictionary audio?
Teacher|Yes. Written consonants are not always spoken.`)
],
mistakes:rows(`The name of B and the sound /b/ are identical.|B is named /biː/; /b/ is a consonant sound.|Do not add /iː/ to every word beginning with b.
Van and fan mean the same thing.|Van and fan differ in sound and meaning.|Voice helps distinguish /v/ from /f/.
Sing always ends with /ŋɡ/.|Sing usually ends with /ŋ/ in the dictionary model.|Do not add /ɡ/ to sing; compare finger.
Every th is /θ/.|Compare thin /θ/ with this /ð/.|The spelling th represents more than one sound.
Every written consonant must be pronounced.|Some consonants are silent, as in know and lamb.|Check whole-word pronunciation.`),
practice:{
mc:quiz(`Which consonant is normally voiced?|/v/|/f/|/s/|/v/ uses voice vibration.
Which pair differs in its first consonant?|fan / van|ship / sheep|full / fool|Fan and van contrast /f/ with /v/.
Which word is a vehicle?|van|fan|fine|A van is a road vehicle.
What is the last sound in rice?|/s/|/z/|/ʃ/|Rice ends with voiceless /s/.
What is the last sound in rise?|/z/|/s/|/t/|Rise ends with voiced /z/.
Which word begins with /θ/?|thin|tin|this|Thin begins with voiceless /θ/.
Which word begins with /ð/?|this|think|three|This begins with voiced /ð/.
What does sh represent in shop?|One consonant sound /ʃ/|Two letter names|A vowel sound|Two written letters represent one sound.
Which written letter is silent in know?|k|n|w only|Know begins with /n/; the k is not pronounced.
Which statement about pronunciation assessment is accurate?|Written quizzes do not measure spoken clarity.|Typing proves a perfect accent.|Only spelling matters.|Listening and speaking need their own practice.`),
gap:typed(`Choose fan or van: The delivery __ is outside.|van|The context requires the road vehicle.
Choose rice or rise: I would like __ with my meal.|rice|Rice is food.
Choose coat or goat: Put on your __; it is cold.|coat|A coat is clothing.
Choose cap or cab: We took a __ to the station.|cab|A cab is a taxi.
Write the silent first letter of know.|k|The spoken word begins with /n/.
Write the silent final letter of lamb.|b|Lamb normally ends with /m/.
Complete the pair with the voiced partner: /f/ and __.|/v/|/v/ is the voiced partner of /f/.|v
Complete the pair: /s/ and its voiced partner __.|/z/|/z/ is voiced.|z
Choose ship or chip: A large __ carries people across the sea.|ship|A ship is a boat.
Write the usual final IPA sound of sing.|/ŋ/|The model has /ŋ/ without an added /ɡ/.|ŋ`),
correct:typed(`Correct the noun: The delivery fan is outside.|The delivery van is outside.|A delivery vehicle is a van.
Correct the noun: I put on my goat because it was cold.|I put on my coat because it was cold.|Coat is clothing; goat is an animal.
Correct the food word: I eat rise with vegetables.|I eat rice with vegetables.|Rice is food; rise has a different final consonant.
Correct the claim: Every th has the same sound.|Th can have different sounds.|Compare thin /θ/ with this /ð/.
Correct the claim: The k in know is pronounced.|The k in know is silent.|The word begins with /n/ in the model.`),
order:typed(`Order: van / outside / The / is|The van is outside.|Van begins with /v/.
Order: rice / please / have / Could / I|Could I have rice, please?|Rice ends in /s/.
Order: desk / the / on / book / is / The|The book is on the desk.|Practise the final /sk/ in desk.
Order: word / again / the / Say|Say the word again.|Repeat after checking a model.
Order: coat / your / on / Put|Put on your coat.|Coat begins with /k/.|Put your coat on.`),
reading:'Ravi is practising consonants. He confuses fan and van. Emily shows him how /f/ and /v/ use the lower lip and upper teeth. Ravi feels voice vibration with /v/. He practises “The van is outside.” He then practises desk without adding a vowel at the end. Finally, he checks know in a dictionary and learns that k is silent.',
read:quiz(`Which pair causes Ravi difficulty?|fan / van|ship / sheep|bed / bad|The passage names fan and van.
Which sound uses voice vibration in this pair?|/v/|/f/|Both are always voiceless.|/v/ is voiced.
Which sentence does he practise?|The van is outside.|The fan is broken.|The goat is outside.|This is the sentence in the passage.
What does he avoid adding after desk?|An extra vowel|A capital letter|A full stop|Desk should not gain a separate final vowel syllable.
What does he learn about know?|K is silent.|Every letter is spoken.|It begins with /k/.|He checks the word in a dictionary.`),
write:typed(`Describe how you distinguish /f/ and /v/.|I use my lower lip and upper teeth for both. I add voice for /v/.|Mention mouth position and voicing.
Write sentences showing fan and van have different meanings.|The fan moves air. The van carries boxes.|Choose contexts that make the words clear.
Give a word with a silent consonant and identify it.|The k in know is silent.|Lamb with silent b is another example.
Describe a final-consonant practice routine.|I practise /sk/, then desk, then the book is on the desk.|Build the group without adding a vowel syllable.
Write a polite question to check an unclear consonant.|Did you say fan or van?|Ask about the exact pair you did not hear clearly.`)
},sources:pronunciation,related:['004','006','019']};

lessons['006']={
intro:'Give names and email addresses accurately. Learn what to say for symbols, repeated letters and confusing characters. Use a complete conversation: ask, spell, clarify, read back and confirm.',
goals:['Distinguish first name, surname and initials.','Spell a name at a useful speed and check repeated letters.','Say at, dot, underscore and hyphen clearly.','Read a simple email address without adding spaces.','Correct and confirm a detail politely.'],
sections:[
section('Start with the information the listener needs','Your first name is a given name. Your surname is a family name. People can have several given names or a name structure that differs from a British form. Follow the form’s labels and do not assume that every name has exactly two parts.',[
'What is your first name? asks for the given name requested by the form.',
'What is your surname? asks for the family name requested by the form.',
'An initial is the first letter of a name: A for Ada.',
'Say the whole name first, then spell it: My surname is Khan. K–H–A–N.'
]),
section('Spelling is a sequence, not a fast performance','Say one letter at a time. Leave a short pause between the first name and surname. If a name has a repeated letter, say each letter separately or use double when the listener understands it. For a critical detail, individual letters are the safest starting point.',[
'Emma: E–M–M–A. You may also say E, double M, A.',
'Noor: N–O–O–R. Do not shorten it to N–O–R.',
'Use B as in bank or M as in Monday to explain a difficult letter.',
'The listener should read the spelling back rather than only saying OK.'
]),
section('Email symbols and what to say aloud','Read an email address in small chunks. In ada.khan@example.com, say ada dot khan, at example dot com. The address is written without spaces. Say the symbols; do not write the spoken words dot and at in place of the symbols.',[
'@ is at. The full stop inside an email address is dot.',
'An underscore _ is different from a hyphen -. Do not substitute one for the other.',
'A plus sign + may occur in an address. Say plus and confirm it.',
'Examples in this lesson use example.com for demonstration. Practise with imaginary details rather than publishing a private address.'
],{head:['Written item','Say','Example'],rows:rows('@|at|ada at example dot com\n.|dot|ada dot khan\n_|underscore|ada underscore khan\n-|hyphen|ada hyphen khan\n+|plus|ada plus work\n77|seven seven / double seven|Confirm each digit if necessary')}),
section('Read an address in chunks, then confirm every character','First identify the name part, then @, then the domain. A domain is the part after @, such as example.com. If the name part is unfamiliar, spell it with letter names. A listener should not guess the spelling of a name from how it sounds.',[
'For emma_lee@example.com, say emma underscore lee at example dot com.',
'For ravi-7@example.com, say ravi hyphen seven at example dot com.',
'If the listener asks how to spell Lee, say L–E–E.',
'Confirm the complete address after correction, not only the corrected character.'
]),
section('Clarify O and zero, I and one, and similar letters','The written letter O and the digit 0 can look alike. So can capital I, lower-case l and the digit 1 in some fonts. For a code or address, explicitly say the letter O or the number zero. This is more reliable than hoping the listener recognises a familiar word.',[
'Is that the letter O or the number zero? is a precise clarification question.',
'Sorry, it is an underscore, not a hyphen. corrects one symbol politely.',
'Could you repeat the part before at? asks for a specific chunk.',
'Do not read a reference code as an ordinary word when that would hide its individual characters.'
]),
section('A complete spelling exchange has five steps','Begin by asking for the detail. Give or request its spelling. Check any uncertainty. Read the full detail back. Finally, confirm or correct it. This method is useful at reception, on a telephone call and when completing an application.',[
'Ask: Could you spell your surname, please?',
'Spell: K–H–A–N. Clarify: H, as in hospital.',
'Read back: K–H–A–N, Khan. Is that correct?',
'Confirm: Yes, that is correct. Or correct the exact character, then read the complete spelling again.'
])],
examples:rows(`My first name is Ada.|First name is the given name requested here.
My surname is Khan.|Surname means family name on this form.
My initials are A. K.|The initials come from Ada Khan.
Khan: K–H–A–N.|Give four separate letter names.
Emma: E–M–M–A.|Keep the repeated M.
Lee: L–E–E.|Keep both letters E.
Could you spell your surname, please?|Ask politely for the written letters.
Could you say that more slowly?|Ask for a manageable speaking speed.
Could you repeat the second letter?|Identify the exact position you missed.
H, as in hospital.|An example word helps identify H.
M, as in Monday.|Use a familiar word beginning with M.
Is that B or P?|Check similar letter names.
My email is ada@example.com.|Say ada at example dot com.
ada.khan@example.com|Say ada dot khan at example dot com.
ada_khan@example.com|Say ada underscore khan at example dot com.
ada-khan@example.com|Say ada hyphen khan at example dot com.
ada+work@example.com|Say ada plus work at example dot com.
emma77@example.com|Say emma seven seven at example dot com.
The address has an underscore.|An underscore is _, not -.
There is no space before at.|The written email address has no spaces.
Is that the letter O or the number zero?|Clarify the type of character.
Is that a lower-case L or the number one?|Check similar written shapes.
Could you repeat the part after at?|Ask for the domain again.
It ends with dot com.|Name the final part clearly.
Sorry, it is a hyphen, not an underscore.|Correct the symbol politely.
The first letter is N, not M.|Correct a specific letter.
Let me read the address back.|Introduce a full confirmation.
Is that correct?|Check whether your record matches.
Yes, that is correct.|Confirm accurate information.
Thank you for checking the spelling.|Finish the exchange politely.`),
dialogues:[
dialogue('Spelling a surname',`Receptionist|What is your surname?
Visitor|Khan. K–H–A–N.
Receptionist|H, as in hospital?
Visitor|Yes. That is correct.`),
dialogue('An email with a dot',`Administrator|Could I have your email address?
Ada|Ada dot khan at example dot com.
Administrator|Ada dot khan, then at example dot com?
Ada|Yes. Please write it without spaces.`),
dialogue('Underscore or hyphen?',`Caller|My address starts ada underscore khan.
Worker|Is that a hyphen?
Caller|An underscore, the low line, not a hyphen.
Worker|Thank you. I will read the full address back.`),
dialogue('A repeated letter',`Worker|Could you spell Lee?
Visitor|L–E–E.
Worker|L, then two letters E?
Visitor|Yes. L–E–E.`),
dialogue('A confusing code',`Worker|Is the last character O or zero?
Caller|The number zero.
Worker|So the code ends in seven, zero?
Caller|Yes. Seven, zero. Thank you.`)
],
mistakes:rows(`ada at example dot com (written as the email address)|ada@example.com|Use @ and dots in the written address; at and dot are spoken labels.
ada khan@example.com|ada.khan@example.com|In this example the speaker specified dot, not a space.
An underscore and a hyphen are the same.|An underscore is _; a hyphen is -.|These characters are different.
Lee: L–E.|Lee: L–E–E.|Do not omit repeated letters.
The character O must be zero.|Ask whether it is the letter O or the digit 0.|A familiar-looking shape is not enough to decide.`),
practice:{
mc:quiz(`On this form, surname means which detail?|Family name|Telephone number|Age|Surname is the family-name field here.
Which symbol is at?|@|_|-|Say at for @ in an address.
Which symbol is underscore?|_|-|.|The underscore is the low line.
Which symbol is hyphen?|-|_|@|A hyphen is different from an underscore.
How do you say the full stop in an email address?|dot|stop only|space|Dot is the usual spoken label inside an address.
Which spelling is Lee?|L–E–E|L–E|L–I|Lee contains two letters E.
Which written address matches ada dot khan at example dot com?|ada.khan@example.com|ada khan@example.com|adadotkhan@example.com|Replace the spoken labels with symbols.
What should you do after correcting one email character?|Read the whole address back.|End the call immediately.|Assume the rest is correct.|Full read-back checks that the complete record is accurate.
Which question best checks O and 0?|Is that the letter O or the number zero?|Is your name common?|Where do you live?|Name the two possibilities precisely.
Which detail should you use in public practice?|An imaginary address|A private password|Someone else’s confidential address|Imaginary details are enough for language practice.`),
gap:typed(`Write the symbol for the spoken word at.|@|An email uses @, not the written word at.
Write the symbol for underscore.|_|The underscore is a low horizontal line.
Write the symbol for hyphen.|-|A hyphen is different from an underscore.
Write the symbol for dot.|.|Use a full stop in the address.
Write: ada at example dot com.|ada@example.com|Use @ and a dot with no spaces.
Write: ada dot khan at example dot com.|ada.khan@example.com|The dot separates ada and khan.
Write: ada underscore khan at example dot com.|ada_khan@example.com|Use an underscore in the name part.
Write: ravi hyphen seven at example dot com.|ravi-7@example.com|Use a hyphen followed by the digit 7.
Complete Lee: L–E–__.|E|Keep the repeated E.
Complete: Could you __ your surname, please? (give the letters)|spell|The request asks for the spelling.`),
correct:typed(`The speaker said ada dot khan at example dot com. Correct: ada-khan@example.com.|ada.khan@example.com|Dot means a full stop, not a hyphen.
The speaker said emma underscore lee at example dot com. Correct: emma-lee@example.com.|emma_lee@example.com|Use the specified underscore.
The speaker said ravi seven at example dot com. Correct: ravi 7@example.com.|ravi7@example.com|Do not add a space.
Correct the spelling of Lee: L–E.|L–E–E|The name contains three letters.|L-E-E
The speaker said number zero. Correct the last character: A7O.|A70|The digit zero is 0, not the letter O.`),
order:typed(`Order: spell / surname / your / Could / please / you|Could you spell your surname, please?|Could you introduces a polite request.
Order: slowly / more / that / say / Please|Please say that more slowly.|Ask for a slower pace.
Order: letter / first / is / The / N|The first letter is N.|This identifies one position.
Order: back / address / the / read / Let / me|Let me read the address back.|Read-back checks the full detail.
Order: correct / that / Is|Is that correct?|Use this after reading the detail back.`),
reading:'Ada Khan is completing a form. She spells Khan K–H–A–N. Her practice email address is ada_khan@example.com. The receptionist first writes a hyphen between ada and khan. Ada says, “Sorry, it is an underscore.” The receptionist changes it and reads the complete address back. Ada confirms it. These are imaginary details for a lesson.',
read:quiz(`What is Ada’s surname?|Khan|Ada|Lee|The passage names Ada Khan and spells Khan.
Which symbol should separate ada and khan?|Underscore|Hyphen|Space|The correct address is ada_khan@example.com.
What mistake does the receptionist make?|Writes a hyphen|Misses the @ symbol|Changes the surname to Lee|The passage specifies a hyphen instead of underscore.
What happens after correction?|The complete address is read back.|The form is discarded.|Only the first letter is checked.|Full confirmation follows the correction.
Are these real private contact details?|No; they are imaginary practice details.|Yes, an official business address.|The lesson says they are passwords.|The passage explicitly identifies them as imaginary.`),
write:typed(`Write a polite request for a surname spelling.|Could you spell your surname, please?|Ask for the letters, not only the whole spoken name.
Create an imaginary address at example.com and write how to say it.|nina_lee@example.com: nina underscore lee at example dot com.|Make the spoken labels match the symbols exactly.
Correct a hyphen to an underscore politely.|Sorry, it is an underscore, not a hyphen.|State the correct symbol and identify the mistaken one.
Write a question checking O against zero.|Is that the letter O or the number zero?|The question should distinguish letter from digit.
Write a four-line spelling dialogue with confirmation.|A: What is your name? B: Ada. A–D–A. A: A–D–A, correct? B: Yes, thank you.|Include a request, spelling, read-back and confirmation.`)
},sources:[['Cambridge Dictionary: spell','https://dictionary.cambridge.org/dictionary/english/spell'],['Cambridge Dictionary: underscore','https://dictionary.cambridge.org/dictionary/english/underscore']],related:['002','003','007']};

lessons['007']={
intro:'Use numbers for quantities, phone digits and prices. Learn the difficult spellings, distinguish -teen from -ty, and understand common British ways of saying pounds and pence. Confirm important numbers instead of guessing.',
goals:['Read and write the main number words from zero to one hundred.','Distinguish thirteen/thirty, fourteen/forty and fifteen/fifty.','Give phone digits in clear groups.','Read simple prices in pounds and pence.','Use and and hyphens in useful British number forms.'],
sections:[
section('Build number words in small groups','Learn zero to twelve first because their forms need individual practice. Then learn thirteen to nineteen and the tens. Combine a tens word and a unit for numbers such as twenty-one. Reading numbers and understanding spoken numbers are different skills, so practise both.',[
'0–12: zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve.',
'13–19: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen.',
'20, 30, 40, 50: twenty, thirty, forty, fifty. Notice forty, not fourty.',
'60, 70, 80, 90, 100: sixty, seventy, eighty, ninety, one hundred.'
],{head:['Figure','Word','Notice'],rows:rows('13 / 30|thirteen / thirty|Different endings\n14 / 40|fourteen / forty|No u in forty\n15 / 50|fifteen / fifty|fif- in both\n18 / 80|eighteen / eighty|No second t\n21|twenty-one|Hyphen in the written compound\n100|one hundred|No plural s here\n105|one hundred and five|British and before the final part\n125|one hundred and twenty-five|Combine hundred, and, tens and unit')}),
section('-teen and -ty: spelling, stress and confirmation','Thirteen and thirty are different numbers. In isolation, thirteen commonly has stronger stress at the end, while thirty has first-syllable stress. Connected speech and contrast can change stress, so do not use stress alone as a guaranteed test. Listen for the ending and confirm the meaning.',[
'thirTEEN = 13; THIRty = 30 is a helpful practice pattern, not a rule for every sentence.',
'Fifteen has a final /n/ in the usual model; fifty does not.',
'Ask Did you say fifteen or fifty? if the number matters.',
'You can confirm a quantity by saying the digits: Fifteen — one five, correct?'
]),
section('Phone numbers use digits, not ordinary quantities','Read a phone number as a sequence of digits, usually with pauses between groups. Zero may be called zero or oh in British speech. For clear international communication, zero is useful. Double five means 55, but individual digits may be clearer on a poor connection.',[
'For a sequence ending 420, say four, two, zero; do not turn it into four hundred and twenty.',
'For 5580, say five five eight zero or double five eight zero.',
'Repeat the groups back to check them. Never omit a repeated digit.',
'Use an imaginary short digit sequence for practice; real phone numbers have location-specific formats.'
]),
section('Prices: pounds and pence','The symbol £ means pounds sterling. One pound contains 100 pence. One penny is singular; pence is the usual plural in amounts. For £4.50, you can say four pounds fifty or four pounds and fifty pence. In a clear price context, four fifty is also common.',[
'£1 = one pound; £2 = two pounds. The noun changes after two.',
'£0.50 = fifty pence; 1p = one penny.',
'£12.05 = twelve pounds and five pence. The zero after the decimal matters: this is not £12.50.',
'As a decimal number, 4.50 can be read four point five zero. In a shop, use the price form when the currency is clear.'
],{head:['Written price','Full reading','Common shorter reading'],rows:rows('£3.00|three pounds|three pounds\n£3.50|three pounds and fifty pence|three pounds fifty\n£12.05|twelve pounds and five pence|twelve pounds five\n£18.50|eighteen pounds and fifty pence|eighteen pounds fifty\n£0.75|seventy-five pence|seventy-five p')}),
section('Quantities, ages and written number forms','Use a number with a plural countable noun when the amount is more than one: two tickets. After an exact number, hundred does not normally take s: two hundred, not two hundreds. Write compounds from twenty-one to ninety-nine with a hyphen when the unit is included.',[
'I am forty years old. In normal age statements, use be, not have.',
'There are twenty-four seats. Twenty-four has a hyphen in writing.',
'We have one hundred and five forms. British speech commonly includes and before the final tens or units.',
'Hundreds of people is a different pattern: no exact number comes before hundreds.'
]),
section('Check numbers in real situations','A wrong quantity or price can change the whole message. Say the number, give the context and ask for confirmation. The exercises below cover quantities, digits and prices; later lessons develop dates, times, fractions and larger numbers.',[
'Ask How much is it? for a price and How many tickets? for a count.',
'Say One five or five zero? when fifteen and fifty are unclear.',
'Read a written price carefully before saying it aloud; keep pounds and pence separate.',
'Listen to a partner saying hidden numbers, write them and compare. Written number matching alone is not a listening assessment.'
])],
examples:rows(`zero, one, two, three|Learn the first number names individually.
four, five, six, seven|Use these as quantities or separate phone digits.
eight, nine, ten, eleven, twelve|Twelve has a special form.
thirteen — thirty|13 and 30 are different numbers.
fourteen — forty|40 is spelled forty, without u.
fifteen — fifty|Listen for the ending and final n in fifteen.
sixteen — sixty|16 and 60 need careful listening.
seventeen — seventy|Practise both in a quantity phrase.
eighteen — eighty|18 and 80 differ in their endings.
nineteen — ninety|Ninety has no extra e after nin-.
twenty-one|A written compound with a hyphen.
thirty-six|30 plus 6.
forty-two|40 plus 2; keep the spelling forty.
ninety-nine|The highest two-digit whole number.
one hundred|Do not add s after one.
one hundred and five|A common British form for 105.
two hundred and twenty|A common British form for 220.
I am forty years old.|Use am with an age.
Two tickets, please.|Ticket becomes plural after two.
The code is four, two, zero.|This is a digit sequence: 420.
The number ends in double five.|Double five means 55.
Did you say fifteen or fifty?|Ask for a precise clarification.
Fifteen — one five.|The digits confirm 15.
£1 — one pound|Use the singular pound.
£2 — two pounds|Use the plural pounds.
50p — fifty pence|There are 100 pence in one pound.
£4.50 — four pounds fifty|A common price reading.
£12.05 — twelve pounds and five pence|The pence amount is five, not fifty.
How much is the ticket?|Ask about price.
How many tickets do you need?|Ask about quantity.`),
dialogues:[
dialogue('At a ticket office',`Customer|Two tickets, please. How much are they?
Clerk|Eighteen pounds fifty in total.
Customer|Eighteen pounds and fifty pence?
Clerk|Yes, that is correct.`),
dialogue('Fifteen or fifty?',`Worker|We need fifteen forms.
Colleague|Did you say fifteen or fifty?
Worker|Fifteen. One five.
Colleague|Thank you. I will prepare fifteen.`),
dialogue('Checking digits',`Caller|The last four digits are five, five, eight, zero.
Worker|Double five, eight, zero?
Caller|Yes, five five eight zero.
Worker|Thank you. I have checked the digits.`),
dialogue('A small price',`Customer|How much is this notebook?
Shop assistant|Four pounds fifty.
Customer|£4.50. Thank you.
Shop assistant|You are welcome.`),
dialogue('An age on a form',`Receptionist|How old are you?
Visitor|I am forty years old.
Receptionist|Forty, four zero?
Visitor|Yes. Forty.`)
],
mistakes:rows(`fourty|forty|The number 40 has no u.
I have forty years.|I am forty years old.|Use be for age in this pattern.
two hundredS tickets|two hundred tickets|An exact number before hundred normally leaves hundred singular.
£12.05 means twelve pounds fifty.|£12.05 means twelve pounds and five pence.|Five pence is 05 after the decimal; fifty pence is 50.
Double five means 5.|Double five means 55.|A repeated digit must be recorded twice.`),
practice:{
mc:quiz(`Which word means 40?|forty|fourty|fourteen|Forty is the correct spelling.
Which figure is thirteen?|13|30|3|Thirteen is 13, not thirty.
Which figure is fifty?|50|15|5|Fifty is 50.
What does double five mean?|55|5|555|Double means repeat the digit twice.
Which is a clear reading of phone digits 420?|four two zero|four hundred and twenty|forty-two only|Read phone digits as a sequence.
Which price is twelve pounds and five pence?|£12.05|£12.50|£12.55|Five pence is written 05 after the decimal.
How many pence are in one pound?|100|10|50|One pound equals 100 pence.
Which sentence gives an age naturally?|I am forty years old.|I have forty years.|I is forty years.|Use am with I for this age pattern.
Which question asks about price?|How much is it?|How many tickets?|What is your surname?|How much asks for the amount of money here.
Which written form is correct for 21?|twenty-one|twentyone|twenty and one|Use a hyphen in this compound number.`),
gap:typed(`Write 12 as a word.|twelve|Twelve is an irregular-looking number word.
Write 13 as a word.|thirteen|Do not confuse it with thirty.
Write 30 as a word.|thirty|The ending is -ty.
Write 40 as a word.|forty|There is no u.
Write 50 as a word.|fifty|The first part is fif-.
Write 80 as a word.|eighty|Eighty has one t.
Write twenty-four as figures.|24|Twenty plus four is 24.
Write fifteen as figures.|15|Fifteen has the -teen ending.
Write the last four digits: double five, eight, zero.|5580|Double five supplies two fives.
Write four pounds fifty as a price with £.|£4.50|The decimal part is fifty pence.|4.50`),
correct:typed(`Correct the spelling: fourty.|forty|40 is spelled forty.
Correct: I have forty years.|I am forty years old.|Use be for an age.
Correct: We need two hundredS forms.|We need two hundred forms.|Do not add s after an exact number.
Correct the noun: It costs two pound.|It costs two pounds.|Use plural pounds after two.
The speaker said twelve pounds and five pence. Correct: £12.50.|£12.05|Five pence is .05, not .50.|12.05`),
order:typed(`Order: old / years / forty / am / I|I am forty years old.|Use subject + be + age.
Order: tickets / Two / please|Two tickets, please.|Use plural tickets after two.
Order: much / is / How / it|How much is it?|Ask about the price.
Order: fifty / fifteen / or / say / you / Did|Did you say fifteen or fifty?|Either order of the alternatives is possible.|Did you say fifty or fifteen?
Order: pounds / total / The / is / ten|The total is ten pounds.|Give the amount with its currency.`),
reading:'Ada buys two tickets. The total is £18.50, not £80.50. She checks, “Eighteen pounds fifty?” The clerk confirms it. Later, Ada gives a reference code ending in 5580. She says, “Five, five, eight, zero.” The clerk reads back “Double five, eight, zero.” Ada confirms the digits before leaving.',
read:quiz(`How many tickets does Ada buy?|Two|Ten|Eighteen|The passage says two tickets.
What is the total price?|£18.50|£80.50|£18.05|The passage explicitly contrasts £18.50 with £80.50.
Which spoken price does she use?|Eighteen pounds fifty|Eighty pounds fifty|Eighteen pounds five|Her confirmation matches £18.50.
What are the final four code digits?|5580|580|55580|Five five eight zero gives 5580.
Why does the clerk read the digits back?|To check accuracy|To change the code|To calculate the ticket total|Read-back confirms the recorded detail.`),
write:typed(`Write your age or an imaginary age in a full sentence.|I am forty years old.|Use I am plus the age; a different age is fine.
Write a short quantity request.|Three tickets, please.|Use a plural countable noun after a number above one.
Write £12.05 in words.|Twelve pounds and five pence.|Distinguish five pence from fifty pence.
Create a four-digit practice code and write how to say it.|7044: seven zero four four.|Keep every digit and its order. Use imaginary details.
Write a clarification question for 13 and 30.|Did you say thirteen or thirty?|Name both possibilities so the speaker can confirm.`)
},sources:[['Cambridge Dictionary: forty','https://dictionary.cambridge.org/dictionary/english/forty'],['Cambridge Dictionary: pence','https://dictionary.cambridge.org/dictionary/english/pence']],related:['006','023','040']};

lessons['008']={
intro:'Start and finish everyday conversations politely. Ask for help in class or at work, respond naturally and repair misunderstandings. Learn the situation for a phrase, not just its translation.',
goals:['Choose suitable greetings and farewells.','Respond to introductions, thanks and apologies.','Distinguish excuse me from sorry.','Ask for repetition, meaning and spelling.','Use could, can, please and a friendly tone appropriately.'],
sections:[
section('Choose a greeting for the situation','Hello is useful in most situations. Hi is more informal. Good morning, good afternoon and good evening are polite greetings connected with the time of day. Their exact boundaries vary; they are social conventions rather than fixed worldwide clock rules.',[
'Use Good morning at the start of the day, Good afternoon later in the day and Good evening in the evening.',
'Good night normally ends an evening conversation or comes before sleep. It is not the usual greeting on arrival.',
'Nice to meet you is for a first introduction. Nice to see you again is for someone you already know.',
'Use a person’s preferred name. Titles such as Mr, Ms or Dr depend on context; do not guess marital status or professional titles.'
]),
section('Greetings work as exchanges','After How are you?, a brief friendly answer is often enough: I am well, thank you. And you? This question may be a social greeting, but a genuine conversation can also include a fuller answer. Match your response to the relationship and situation.',[
'How are you? — I am well, thank you. And you?',
'Nice to meet you. — Nice to meet you too.',
'Thank you. — You are welcome. No problem is a common less formal response.',
'Have a good day. — Thank you. You too. Do not use You too after every phrase; it must make sense.'
],{head:['Situation','Useful phrase','Natural response'],rows:rows('First introduction|Nice to meet you.|Nice to meet you too.\nSomeone helps you|Thank you for your help.|You are welcome.\nYou are leaving|Have a good day.|Thank you. You too.\nYou apologise|Sorry I am late.|That is all right.\nYou arrive in the evening|Good evening.|Good evening.')}),
section('Excuse me and sorry have different main jobs','Use Excuse me to attract attention, interrupt politely or get past someone. Use Sorry to apologise for something, such as arriving late or making a mistake. Sorry can also introduce a request for repetition. The situation tells the listener which meaning you intend.',[
'Excuse me, is this seat free? attracts a stranger’s attention before a question.',
'Excuse me, could I get past? asks for space politely.',
'Sorry I am late. apologises for a delay.',
'Sorry, could you repeat that? repairs a listening problem. You are not necessarily admitting a serious fault.'
]),
section('Make requests with a clear pattern','Could you + base verb asks another person to do something: Could you repeat that? Could I + base verb asks permission or requests something for yourself: Could I have a pen? Can you and Can I are also common and acceptable; could often sounds more tentative.',[
'Could you speak more slowly, please? asks the listener to change their speaking speed.',
'Could I have the form, please? requests an object for you.',
'Please can go before a request or towards its end. Tone also affects politeness.',
'A direct instruction such as Open your book is normal in some teaching contexts. It is not automatically rude; learn how context and tone work.'
]),
section('Ask for learning help instead of pretending to understand','A good learner needs phrases for unclear instructions. Identify the problem when possible. I do not understand the last word is more specific than I do not understand. Ask for an example, spelling or a slower explanation depending on what you need.',[
'What does appointment mean? asks for meaning.',
'How do you spell appointment? asks for letters.',
'How do you say this word? asks for pronunciation.',
'Could you give me an example? asks for a model. Could you write it down? asks for a written form.'
]),
section('Finish politely and practise a complete exchange','Goodbye works in most situations. Bye and See you are less formal. See you tomorrow is useful when a meeting tomorrow is expected. End a help exchange with thanks and a suitable response rather than stopping after the request.',[
'At work: Thank you for your help. Have a good day.',
'After a class: Thank you. See you next lesson.',
'Before bed or at the end of an evening visit: Good night.',
'Practise roles: visitor and receptionist, learner and teacher, customer and shop assistant. Change one detail and repeat naturally.'
])],
examples:rows(`Hello. My name is Ada.|A useful opening in many situations.
Hi, Ravi.|An informal greeting to someone you know.
Good morning. How are you?|A polite morning opening.
Good afternoon. Welcome.|A polite greeting later in the day.
Good evening. Nice to see you.|Use on arrival in the evening.
Good night. Sleep well.|A farewell or a phrase before sleep.
Nice to meet you.|Use during a first introduction.
Nice to meet you too.|A natural reply to an introduction.
It is nice to see you again.|Use for someone you have met before.
I am well, thank you. And you?|A brief reply that returns the question.
Excuse me, is this seat free?|Attract attention before asking.
Excuse me, could I get past?|Ask for space politely.
Sorry I am late.|Apologise for arriving after the agreed time.
I am sorry about the mistake.|Apologise for an error.
Sorry, could you repeat that?|Ask for something you did not hear.
Could you speak more slowly, please?|Request a slower speaking speed.
Could you write it down, please?|Ask for a written version.
Could I have a pen, please?|Request an object for yourself.
Can I ask a question?|A common permission request.
What does this word mean?|Ask about meaning, not spelling.
How do you spell appointment?|Ask for the sequence of letters.
How do you say this word?|Ask about pronunciation.
Could you give me an example?|Ask for a practical model.
I do not understand the last sentence.|Identify the unclear part.
Thank you for your help.|Thank someone for assistance.
You are welcome.|A standard response to thanks.
That is all right.|A possible response to an apology.
Have a good day.|A friendly parting wish.
Thank you. You too.|Return a suitable wish.
Goodbye. See you tomorrow.|Use when you expect to meet tomorrow.`),
dialogues:[
dialogue('A first introduction',`James|Good morning. I am James.
Ada|Hello. My name is Ada. Nice to meet you.
James|Nice to meet you too. How are you?
Ada|I am well, thank you. And you?`),
dialogue('An unclear instruction',`Teacher|Please complete the second section.
Learner|Sorry, could you repeat that more slowly?
Teacher|Complete the second section, here.
Learner|Thank you. I understand now.`),
dialogue('Asking for a pen',`Learner|Excuse me, could I have a pen, please?
Receptionist|Of course. Here you are.
Learner|Thank you for your help.
Receptionist|You are welcome.`),
dialogue('Meaning and spelling',`Learner|What does appointment mean?
Emily|It is an arranged time to meet someone.
Learner|Thank you. How do you spell it?
Emily|A–P–P–O–I–N–T–M–E–N–T.`),
dialogue('Ending an evening visit',`Visitor|Thank you for a lovely evening.
Host|You are welcome. Have a safe journey home.
Visitor|Thank you. Good night.
Host|Good night. See you again soon.`)
],
mistakes:rows(`Good night! (when arriving at an evening class)|Good evening!|Good night is usually a farewell, not an arrival greeting.
Nice to meet you. (to an old friend you met yesterday)|Nice to see you again.|Meet normally marks a first introduction in this phrase.
Could you to repeat that?|Could you repeat that?|Use the base verb after could, without to.
What means this word?|What does this word mean?|Use does before the subject in this question pattern.
Thank you. — Yes.|Thank you. — You are welcome.|Choose a natural response to thanks; yes alone does not complete this exchange.`),
practice:{
mc:quiz(`You arrive at an evening class. Choose a greeting.|Good evening.|Good night.|Sleep well.|Good evening is the arrival greeting.
You meet Ada for the first time. What fits?|Nice to meet you.|Nice to see you again.|Good night only.|This is a first introduction.
You want to get a stranger’s attention. What fits?|Excuse me.|Good night.|You are welcome.|Excuse me politely introduces the interruption.
You arrive late. What fits?|Sorry I am late.|Nice to meet you too.|You too.|Apologise for the delay.
You need the speaker to repeat. What fits?|Could you say that again, please?|Have a good day.|My surname is Khan.|The request identifies the listening problem.
Which phrase asks for meaning?|What does this word mean?|How do you spell it?|How old are you?|Meaning is different from spelling or age.
Which phrase asks for spelling?|How do you spell that?|How are you?|Where is the room?|Spell asks for letters.
Which response fits Thank you for your help?|You are welcome.|I am forty.|Good morning too.|This completes a thanks exchange.
Which phrase requests a pen for yourself?|Could I have a pen, please?|Could you to pen?|I a pen?|Could I have requests the object.
Which response fits Have a good day?|Thank you. You too.|Nice to meet you too.|My name is Ada.|You too returns the same wish.`),
gap:typed(`Complete the morning greeting: Good __.|morning|Use morning for this time of day.
Complete: Nice to __ you. (first introduction)|meet|Meet fits a first introduction.
Complete: Nice to see you __. (you have met before)|again|Again signals a repeated meeting.
Complete: Excuse __, is this seat free?|me|Excuse me attracts attention.
Complete: Could you __ that, please? (say it again)|repeat|Repeat asks for the same information again.
Complete: Could I __ a pen, please?|have|Could I have is a useful request pattern.
Complete: What does this word __?|mean|The question asks for meaning.
Complete: How do you __ that? (give the letters)|spell|Spell asks for the letter sequence.
Complete: Thank you __ your help.|for|Thank someone for something.
Complete the response: You are __.|welcome|You are welcome responds to thanks.`),
correct:typed(`Correct: Could you to repeat that?|Could you repeat that?|Could takes the base verb without to.
Correct: What means this word?|What does this word mean?|Use does + subject + base verb.
Correct the arrival greeting: Good night, welcome to the evening class.|Good evening, welcome to the evening class.|Good evening greets someone on arrival.
Correct the phrase: Thanks you for your help.|Thank you for your help.|Use Thank you, or Thanks without you.
Correct the question: How you spell that?|How do you spell that?|Use do before you in this question.`),
order:typed(`Order: meet / Nice / you / to|Nice to meet you.|A first-introduction phrase.
Order: repeat / Could / please / that / you|Could you repeat that, please?|Use could + subject + base verb in the question.
Order: your / for / help / Thank / you|Thank you for your help.|For introduces what you appreciate.
Order: this / mean / word / does / What|What does this word mean?|The base verb mean follows does.
Order: good / Have / day / a|Have a good day.|A friendly farewell wish.`),
reading:'Ada arrives at her first English class in the evening. She says, “Good evening. My name is Ada.” James replies, “Nice to meet you.” During class, Ada misses an instruction. She asks, “Could you repeat that more slowly, please?” James repeats it. Ada thanks him. At the end, she says, “Goodbye. See you next lesson.”',
read:quiz(`When does Ada arrive?|In the evening|Early morning|At midnight after class|The passage states that the class is in the evening.
Why does Nice to meet you fit?|It is their first introduction.|They are saying good night.|Ada is asking a price.|It is Ada’s first class and introduction.
What problem does Ada have?|She misses an instruction.|She loses her ticket.|She cannot find a price.|She asks for repetition because she missed an instruction.
What does she request?|Slower repetition|A new surname|A telephone number|She asks James to repeat more slowly.
How does she end the conversation?|Goodbye. See you next lesson.|Good morning.|What does it mean?|The final line is a farewell.`),
write:typed(`Write a suitable greeting for an evening arrival.|Good evening. Nice to see you.|Do not use good night as the ordinary arrival greeting.
Write a request for a slower explanation.|Could you explain that more slowly, please?|Could you + base verb makes the request.
Write a short thanks-and-response exchange.|A: Thank you for your help. B: You are welcome.|Give both sides of the exchange.
Write one question asking meaning and one asking spelling.|What does this word mean? How do you spell it?|The questions ask for different kinds of information.
Write a four-line conversation including a request and farewell.|A: Excuse me, could I have the form? B: Of course. A: Thank you. Goodbye. B: Goodbye.|Other natural adult situations are possible.`)
},sources:[['Cambridge Dictionary: good night','https://dictionary.cambridge.org/dictionary/english/good-night'],['Cambridge Dictionary: excuse me','https://dictionary.cambridge.org/dictionary/english/excuse-me']],related:['001','006','023']};

lessons['009']={
intro:'Understand what nouns do, not only a list of noun labels. Recognise people, places, things and ideas; distinguish common and proper nouns; and begin building useful noun phrases in everyday sentences.',
goals:['Find nouns that name people, places, things and ideas.','Distinguish common from proper nouns.','Explain concrete and abstract meanings with examples.','Recognise simple noun phrases and noun positions.','Notice singular, plural and uncountable patterns without false rules.'],
sections:[
section('A noun names something we can talk about','A noun can name a person, place, animal, thing, activity, feeling or idea. Nurse, station, cat, laptop and kindness are nouns. A noun does not have to be something you can touch. Look at the meaning and the way a word works in a sentence.',[
'Person: teacher, neighbour, customer. Place: office, city, London.',
'Thing or animal: phone, door, cat. Idea or quality: honesty, freedom, patience.',
'Do not decide that a word is a noun only because it is long or has a certain ending.',
'The same spelling can have different jobs: I work here uses work as a verb; My work is interesting uses work as a noun.'
]),
section('Common and proper nouns answer different questions','A common noun names a general type, such as city or teacher. A proper noun gives a particular name, such as London or Ada. Proper names normally begin with a capital. A common noun can also have a capital at the start of a sentence; that does not make it a proper noun.',[
'city → London; country → Sri Lanka; person → Ada.',
'Monday is a proper name for a day. English is capitalised as a language name.',
'The word Teacher at the start of a sentence is not automatically a person’s name.',
'Some proper names contain small connecting words. Learn the established writing of the complete name.'
],{head:['General type','Particular name','Capitalisation'],rows:rows('city|London|Capital L\ncountry|Sri Lanka|Capitals in the name\nwoman|Ada|Capital A\nlanguage|English|Capital E\nday|Monday|Capital M')}),
section('Concrete and abstract nouns describe another distinction','Concrete nouns refer to physical people, animals or things we can perceive, such as a table, dog or flower. Abstract nouns refer to ideas, qualities, feelings or situations, such as honesty or friendship. This distinction is separate from common versus proper.',[
'Table is a common noun and a concrete noun.',
'Kindness is a common noun and an abstract noun.',
'Ada is a proper name for a person; the person is physical.',
'The categories can overlap. Do not try to choose only one label when two different distinctions apply.'
]),
section('Singular, plural and uncountable: a first look','A singular countable noun names one item: a chair. A plural countable noun names more than one: two chairs. Many plurals add -s, but some change form: person → people. Uncountable nouns such as information usually do not take a plural in their basic meaning.',[
'Use a or an with a singular countable noun when the context needs it: a nurse, an office.',
'Do not normally say an information or two informations. Say some information or two pieces of information.',
'Do not assume every noun is countable just because you can describe an amount.',
'Some nouns have different countable and uncountable meanings. This lesson introduces the idea; Lessons 025–027 develop the rules.'
]),
section('Noun phrases: build around the main noun','A noun phrase can be one noun or a group built around a noun. In the blue folder, folder is the main noun. The word blue describes it, and the identifies it. In our new manager, manager is the main noun. Learning the phrase helps you put information together naturally.',[
'a folder → a blue folder → the blue folder on the desk.',
'The main noun is often called the head. Describing words are not automatically nouns.',
'In the office door, office modifies door. Both words are nouns, but door is the head of the whole phrase.',
'Pronouns such as she can replace a noun phrase when the reference is clear; Lesson 010 develops subject pronouns.'
]),
section('Find the noun’s job inside a sentence','A noun phrase can be the subject, the object or follow a preposition. In The nurse checks the form, the nurse is the subject and the form is the object. In The form is on the desk, the desk follows the preposition on. These jobs are different from the noun’s type.',[
'Subject: The teacher arrived. The sentence tells us something about the teacher.',
'Object: Ada opened the door. Door names what she opened.',
'After a preposition: The keys are on the table. Table follows on.',
'Practise by finding the main nouns first. Then say what each refers to and where its phrase appears.'
])],
examples:rows(`The nurse works here.|Nurse names a person and heads the subject phrase.
The teacher opened the door.|Teacher and door are nouns with different sentence jobs.
My neighbour owns a shop.|Neighbour names a person; shop names a place or business.
The customer needs a receipt.|Customer and receipt are nouns.
The cat is sleeping.|Cat names an animal.
The dog is near the gate.|Dog and gate refer to physical things.
London is a city.|London is proper; city is common.
Sri Lanka is a country.|Sri Lanka is a proper name; country is common.
Ada studies English.|Ada is a personal name; English names the language.
The meeting is on Monday.|Meeting names an event; Monday is a day name.
The phone is on the desk.|Phone and desk are concrete common nouns.
The folder is blue.|Folder is a noun; blue is an adjective here.
The blue folder is on the desk.|Folder is the head of the blue folder.
Our new manager is here.|Manager is the main noun of the subject phrase.
The office door is open.|Office modifies door; door is the head.
Kindness matters.|Kindness names a quality, not a physical object.
Honesty is important.|Honesty is an abstract noun.
Friendship takes time.|Friendship names a relationship or idea.
Patience helps at work.|Patience names a quality.
Freedom is important to them.|Freedom is an abstract idea.
I have a chair.|Chair is a singular countable noun.
We have two chairs.|Chairs is a regular plural.
Three people are waiting.|People is the usual plural of person in this sense.
I need some information.|Information is normally uncountable in this meaning.
She gave me a piece of advice.|Piece makes a countable unit; advice stays uncountable.
The table is clean.|The subject phrase names what is being described.
Ada opened the window.|Window is the object of opened.
The keys are in the bag.|Bag follows the preposition in.
I work in an office.|Work is a verb; office is a noun.
My work is interesting.|Work is a noun in this sentence.`),
dialogues:[
dialogue('Finding nouns at work',`James|Look around the room. Name three things.
Learner|A desk, a chair and a phone.
James|Good. Those words are nouns.
Learner|They name physical things.`),
dialogue('Common or proper?',`Emily|Is city a proper noun?
Learner|No. It is a general type of place.
Emily|What about London?
Learner|London is a particular name, so it is a proper noun.`),
dialogue('An idea is a noun too',`Learner|Can kindness be a noun? I cannot touch it.
Teacher|Yes. It names a quality.
Learner|So it is abstract?
Teacher|Exactly. Nouns can name ideas and qualities.`),
dialogue('Building a noun phrase',`James|Which folder do you need?
Ada|The blue folder on the desk.
James|Which word is the main noun?
Ada|Folder. The other words help identify it.`),
dialogue('Some information',`Customer|Could I have some information about the course?
Receptionist|Of course. Here is the course guide.
Customer|Thank you. Is information countable here?
Receptionist|No. We say some information, not an information.`)
],
mistakes:rows(`Every noun names something you can touch.|Nouns can also name feelings, qualities and ideas.|Honesty and friendship are abstract nouns.
london is a city.|London is a city.|A proper place name begins with a capital.
Teacher is a proper noun whenever it begins a sentence.|A sentence-initial capital does not turn a common noun into a proper noun.|Meaning and naming function matter.
I need an information.|I need some information.|Information is normally uncountable in this use.
In the blue folder, blue is the head noun.|In the blue folder, folder is the head noun.|Blue describes the folder; it is an adjective here.`),
practice:{
mc:quiz(`Which word names a person?|nurse|quickly|open (as a command)|Nurse is a noun naming a person.
Which is a proper noun?|London|city|office|London names a particular city.
Which noun names a quality?|honesty|chair|window|Honesty is abstract.
Which statement about capitals is correct?|A common noun can have a capital at a sentence beginning.|Every capitalised word is a proper noun.|Common nouns never start sentences.|Sentence position can require a capital.
What is the head noun in the blue folder?|folder|blue|the|Folder is the main noun.
Which phrase is standard in this meaning?|some information|an information|two informations|Information is normally uncountable here.
Which is the usual plural of person for three individuals?|people|persons only|peoples in every context|People is the usual everyday plural in this meaning.
In Ada opened the door, which noun phrase is the object?|the door|Ada|opened|The door names what Ada opened.
In My work is interesting, what is work?|A noun|A preposition|An article|It names the activity or job being described.
Can a noun be both common and concrete?|Yes|No|Only if capitalised|The two labels describe different distinctions.`),
gap:typed(`Name the noun in: A nurse arrived. (Ignore the article.)|nurse|Nurse names the person.
Name the noun for a thing in: She opened the window.|window|Window names what she opened.
Write the proper name in: London is a city.|London|London names a particular place.
Write the abstract noun in: Kindness helps.|Kindness|Kindness names a quality.
Write the head noun in: the new manager.|manager|New describes the manager.
Write the head noun in: a blue folder.|folder|Folder is what the phrase is about.
Complete the regular plural: one chair, two __.|chairs|Add -s to chair.
Complete: one person, three __.|people|People is the usual plural here.
Complete: I need some __. (information / informations)|information|Do not add plural s in this use.
Write the noun after the preposition in: The keys are in the bag.|bag|Bag follows in.`),
correct:typed(`Correct the capitalisation: london is a city.|London is a city.|Use a capital for the proper name London.
Correct: I need an information.|I need some information.|Information is normally uncountable here.
Correct: We have two chair.|We have two chairs.|Use the plural after two.
Correct: Three person are waiting.|Three people are waiting.|People is the usual plural in this context.
Correct the capitalisation: ada studies english.|Ada studies English.|Capitalise the personal name and language name.`),
order:typed(`Order: a / is / London / city|London is a city.|A proper name can be described with a common noun.
Order: folder / the / blue / need / I|I need the blue folder.|Adjective blue comes before the head noun here.
Order: important / is / Honesty|Honesty is important.|An abstract noun can be the subject.
Order: on / desk / is / phone / the / The|The phone is on the desk.|Phone is the subject noun; desk follows on.
Order: information / some / need / I|I need some information.|Some fits the uncountable noun here.`),
reading:'Ada works in an office in London. Her manager gives her a blue folder and some information about a course. Ada puts the folder on the desk. The course begins on Monday. Ada values kindness and patience at work. She writes a note for two colleagues before leaving.',
read:quiz(`Which word is a proper place name in the passage?|London|office|desk|London names a particular city.
What is the head noun in a blue folder?|folder|blue|a|Folder is the main noun.
Which phrase contains an uncountable noun in its usual meaning?|some information|two colleagues|a folder|Information is uncountable here.
Which word is abstract?|patience|desk|folder|Patience is a quality.
Which word is a proper day name?|Monday|course|note|Monday names a particular day of the week.`),
write:typed(`Write five nouns for things near you.|desk, chair, phone, book, door|Choose naming words, not only describing or action words.
Write two common nouns and a matching proper name for each.|city — London; person — Ada|The proper name identifies a particular example.
Write a sentence using an abstract noun.|Kindness is important at work.|Choose an idea, feeling or quality and use it naturally.
Expand folder into a noun phrase with a describing word.|the blue folder|Keep folder as the main noun.
Write a sentence with a noun phrase after a preposition.|The keys are in the bag.|Identify the preposition and the noun that follows it.`)
},sources:[['Cambridge Grammar: types of nouns','https://dictionary.cambridge.org/grammar/british-grammar/nouns-types-of-nouns'],['British Council: grammar reference','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference']],related:['010','025','026','027']};

lessons['010']={
intro:'Choose I, you, he, she, it, we or they as the subject of a sentence. Make the reference clear, understand who is speaking and begin matching each pronoun with a suitable verb form.',
goals:['Choose a subject pronoun for a clear person or thing.','Distinguish the speaker, listener and people being discussed.','Use you for one or more listeners and we for a group including the speaker.','Use singular they appropriately with plural-form agreement.','Avoid missing subjects, unnecessary repetition and unclear reference.'],
sections:[
section('A subject tells us who or what the clause is about','In Ada works here, Ada is the subject. If Ada is already known in the conversation and uses she, we can say She works here. The pronoun avoids repeating the full name. In an ordinary statement, the subject normally comes before the verb. Questions can have a different order.',[
'I refers to the current speaker. You refers to the person or people being addressed.',
'He, she and they can refer to people being discussed, according to the reference and the person’s pronouns.',
'It commonly refers to a singular object, animal in a general context or situation.',
'Use a clear name first when the listener would not know who a pronoun refers to.'
]),
section('The seven core subject pronouns','Learn the pronouns as a practical reference. They are not interchangeable with possessive words such as my or object forms such as me. The verb be has different present forms; learn these combinations as useful chunks even before the full be lesson.',[
'I am; he, she and it are commonly used with is; you, we and they use are.',
'You can address one listener or several listeners. The form remains you.',
'We includes the speaker and at least one other person. The listener may or may not be included.',
'They refers to plural people or things, and it can also refer to one person in appropriate contexts.'
],{head:['Subject','Reference','Example with be'],rows:rows('I|The speaker|I am ready.\nyou|The listener or listeners|You are ready.\nhe|A person referred to with he|He is ready.\nshe|A person referred to with she|She is ready.\nit|A singular thing or situation|It is ready.\nwe|A group including the speaker|We are ready.\nthey|Plural people/things, or singular they|They are ready.')}),
section('The speaker changes, so I and you change reference','When James says I am James, I means James. When Ada says I am Ada, I means Ada. In a dialogue, follow the speaker rather than assuming I always refers to the learner. If James asks Ada Are you ready?, Ada answers I am ready, not You are ready.',[
'James to Ada: You are early. Here you means Ada.',
'Ada to James: You are early. Here you means James.',
'Ada and I are colleagues → We are colleagues. The speaker is part of the group.',
'Ada and Ravi are colleagues → They are colleagues, when the speaker is outside that named group.'
]),
section('Singular they and respectful, clear reference','They can refer to one person whose gender is unknown or irrelevant, or to a person who uses they. Use the usual they verb forms: They are ready, not They is ready. Do not choose a pronoun from a job title; a nurse can be a man, woman or another person.',[
'A visitor is waiting. They are at reception. The visitor is one person; singular they is natural when further identity is not given.',
'Alex uses they. They are our new colleague.',
'For a named person with known pronouns, use those pronouns. If you do not know, their name or appropriate singular they can avoid an assumption.',
'When a test asks for one answer, the context must identify the reference clearly. Several pronouns can otherwise be grammatically possible.'
]),
section('It can name a thing or fill a subject position','Use it for a known singular object: The printer is new. It works well. English also uses it without a concrete noun reference in time and weather expressions: It is late. It is raining. This is sometimes called a dummy subject.',[
'The bag is heavy → It is heavy. Do not choose he or she for an ordinary bag.',
'The bags are heavy → They are heavy. They can refer to things as well as people.',
'It is cold today and It is three o’clock are useful whole patterns.',
'Pets may be he or she when known, and other contexts have special uses. Avoid the false rule that every animal must always be it.'
]),
section('Subject forms, agreement and common repairs','Use I, not me, as the subject of a simple standard sentence: I am ready. Capitalise I everywhere. Do not repeat a noun and subject pronoun unnecessarily: Ada is here, not Ada she is here in the ordinary pattern taught here. Later lessons explore special spoken structures.',[
'Ordinary full statements need a subject: She is ready, not Is ready.',
'Commands are an exception: Please sit down normally has no expressed you.',
'With ordinary present-simple verbs, he/she/it often takes an -s form: She works; they work. Lessons 034–035 teach this fully.',
'Keep reference clear. Ada spoke to Emily. She was tired can be unclear; repeat the name if the listener would not know which person you mean.'
])],
examples:rows(`I am a learner.|I refers to the speaker and is always capitalised.
You are my colleague.|You addresses one listener in this example.
You are all welcome.|You can address several listeners.
Ravi uses he. He is a nurse.|The context gives Ravi’s pronoun; the job does not determine it.
Ada uses she. She is a manager.|She refers back to Ada.
The printer is new. It works well.|It refers to a singular object.
Ada and I are colleagues. We work together.|We includes the speaker.
Ada and Ravi are here. They are ready.|They refers to the two named people.
The folders are blue. They are on the desk.|They can refer to plural things.
I am ready.|Use am with I.
You are ready.|Use are with you.
He is ready.|Use is with he.
She is ready.|Use is with she.
It is ready.|Use is with it.
We are ready.|Use are with we.
They are ready.|Use are with they, including singular they.
A visitor is waiting. They are at reception.|Singular they avoids an unsupported gender assumption.
Alex uses they. They are our new colleague.|Use the pronoun the person uses.
It is raining.|It fills the subject position in this weather pattern.
It is late.|No concrete object needs to be named for this time expression.
The bag is heavy. It is full.|The singular reference is clear.
The bags are heavy. They are full.|Plural bags requires they.
James says, “I am James.”|I refers to James because he is speaking.
Ada says, “I am Ada.”|The reference of I changes with the speaker.
James asks Ada, “Are you ready?”|You refers to Ada in this question.
Ada answers, “I am ready.”|Ada refers to herself with I.
She works in an office.|Present-simple works agrees with she.
They work in an office.|Use work with they in the present simple.
Please sit down.|A normal command can omit the subject you.
Ada is tired. Emily is not.|Repeating names can remove an unclear pronoun reference.`),
dialogues:[
dialogue('I and you change with the speaker',`James|Are you ready, Ada?
Ada|Yes, I am ready. Are you ready?
James|Yes. I am ready too.
Ada|Then we are both ready.`),
dialogue('Introducing a colleague',`Emily|Who is Ravi?
James|He is our new nurse. Ravi uses he.
Emily|Does the job tell us which pronoun to choose?
James|No. We follow the person and the context.`),
dialogue('One bag or several?',`Learner|The bag is blue. They are on the desk?
Teacher|For one bag, say It is on the desk.
Learner|And for two bags?
Teacher|They are on the desk.`),
dialogue('A visitor at reception',`Receptionist|A visitor is waiting.
Worker|Where are they?
Receptionist|They are at the front desk.
Worker|Thank you. I will speak to them.`),
dialogue('Avoiding unclear reference',`James|Ada spoke to Emily. She was tired.
Learner|Who was tired, Ada or Emily?
James|Ada was tired.
Learner|That is clearer. Use the name when the pronoun is uncertain.`)
],
mistakes:rows(`i am ready.|I am ready.|The pronoun I is always a capital.
Me am ready.|I am ready.|Use the subject form I before am.
She are ready.|She is ready.|She takes is in the present of be.
They is ready.|They are ready.|Use are with plural and singular they.
The folders are new. It is blue.|The folders are new. They are blue.|A plural reference needs they here.
Ada she is here.|Ada is here.|Avoid doubling the subject in the ordinary sentence pattern.
Is ready. (ordinary statement about Ada)|She is ready.|A complete ordinary statement needs the subject.`),
practice:{
mc:quiz(`Ada uses she. Replace Ada in Ada is ready.|She|It|We|The context identifies Ada’s pronoun.
Replace Ada and I when I am the speaker.|We|They|He|The group includes the speaker.
Replace the plural noun the folders.|They|It|He|They refers to plural things too.
Which pronoun can address one or several listeners?|you|I|it|You has singular and plural uses.
Which form follows I in the present of be?|am|is|are|The combination is I am.
Alex uses they. Which sentence is standard?|They are ready.|They is ready.|Them are ready.|Singular they takes are.
Which statement is accurate?|A person’s job does not determine their pronoun.|Every nurse is she.|They can never refer to one person.|Use the person and context, not a job stereotype.
Which sentence has a weather subject?|It is raining.|Is raining.|Me raining.|It fills the subject position.
Which is a normal command?|Please sit down.|You is sit.|Me sit please.|An imperative normally has no expressed subject.
Why might you repeat a name instead of using she?|To remove an unclear reference.|Because pronouns are never useful.|Because all names are plural.|Repeat the name when two people could be the reference.`),
gap:typed(`Replace the speaker’s name: Ada says, “__ am ready.”|I|The current speaker refers to herself with I.
Replace the printer: __ is new.|It|A singular object normally takes it.
Replace Ada and I: __ are colleagues.|We|The group includes the speaker.
Replace the books: __ are on the desk.|They|Books is plural.
Complete: You __ welcome.|are|You takes are, singular or plural.
Complete: I __ ready.|am|I takes am.
Complete: She __ here.|is|She takes is.
Complete: Alex uses they. They __ ready.|are|Singular they takes are.
Supply the weather subject: __ is raining.|It|The full weather pattern needs it.
Ravi uses he. Replace Ravi: __ is a nurse.|He|The context supplies the person’s pronoun.`),
correct:typed(`Correct: i am ready.|I am ready.|Capitalise the pronoun I.
Correct: Me am a learner.|I am a learner.|Use subject I, not object me.
Correct: She are my colleague.|She is my colleague.|Use is with she.
Correct: Alex uses they. They is ready.|Alex uses they. They are ready.|Singular they still takes are.
Correct the pronoun: The folders are blue. It is on the desk.|The folders are blue. They are on the desk.|Use they and are for plural folders.`),
order:typed(`Order: ready / am / I|I am ready.|The subject precedes am in this statement.
Order: colleagues / are / We|We are colleagues.|We includes the speaker.
Order: nurse / is / a / He|He is a nurse.|The singular countable job noun uses a here.
Order: desk / the / are / They / on|They are on the desk.|They can refer to plural people or things.
Order: raining / is / It|It is raining.|Do not omit the weather subject.`),
reading:'Ada and Ravi work in an office. Ada uses she; Ravi uses he. They are colleagues. Their printer is new. It is on a small desk. A visitor arrives, but Ada does not know the visitor’s name or pronouns. She says, “They are at reception.” James asks Ada, “Are you ready?” Ada replies, “Yes, I am.”',
read:quiz(`Who does they refer to in They are colleagues?|Ada and Ravi|The printer|Only James|The immediately stated pair is Ada and Ravi.
What does it refer to in It is on a small desk?|The printer|Ada|The visitor|Printer is the singular object just introduced.
Why is they used for the visitor?|Further identity and pronouns are unknown.|The visitor must be two people.|It is a spelling error.|Singular they is appropriate in this context.
Who does I refer to in Ada’s reply?|Ada|James|The printer|I refers to the person speaking.
Which be form appears with singular they?|are|is|am|Singular they keeps the usual they agreement.`),
write:typed(`Write two sentences about yourself using I.|I am a learner. I work in an office.|Your facts may differ. Keep I capitalised and use a suitable verb.
Write about yourself and another person using we.|Ada and I are colleagues. We work together.|We must include the speaker.
Introduce an object, then replace its noun phrase with it.|The printer is new. It is on the desk.|Make the singular reference clear.
Write a sentence with singular they and are.|A visitor is waiting. They are at reception.|Give a context for one person and keep are.
Repair an unclear reference: Ada spoke to Emily. She was tired.|Ada spoke to Emily. Ada was tired.|If you mean Emily, repeat Emily instead. The aim is clear reference.`)
},sources:[['British Council: personal pronouns','https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/personal-pronouns'],['Cambridge Grammar: personal pronouns','https://dictionary.cambridge.org/grammar/british-grammar/subject-and-object-pronouns']],related:['009','011','012','028']};

window.EVA_FULL_LESSONS=lessons;
})();
