# Engli Vance Academy — Course Publication & Editorial Status

Last updated: 3 November 2026

## Public site

- Homepage: https://englivanceacademy.github.io/
- All 240 lessons: https://englivanceacademy.github.io/catalog.html
- Grammar Topic Finder (64 linked topics): https://englivanceacademy.github.io/grammar.html
- Fully hand-developed Lesson 001: https://englivanceacademy.github.io/lesson.html
- Lessons 002–240: `https://englivanceacademy.github.io/study.html?lesson=NNN`

## Full curriculum

All 240 lesson pages follow the existing Academy study guide, with 29 modules and seven broad learning bands (Pre-A1 through C2-oriented). The legacy study-page editions provide ten core worked examples (including editorially corrected replacements when a recycled book sentence was off-topic), flashcards and 40 practice activities, with 20 automatically checked and 20 open-ended. Browser-local progress and print are supported.

Lesson numbers and sequence follow the PDF `Easy_Learning_English_240_Lessons_Clickable_Module_Lesson_Finder.pdf`. Some earlier Facebook lesson numbers differ. Do not silently merge the two numbering systems.

## Current teaching-depth distinctions

| Lessons | Count | What is actually published |
| --- | ---: | --- |
| 001 | 1 | Existing individually written extended lesson, with 40 examples, five dialogues, varied practice and review |
| 002–060 | 59 | New full extended editions: each has five specific goals, six teaching sections, comparison/reference tables where useful, 30 explained examples, five dialogues, at least five common-confusion corrections, 30 flashcards, one reading passage and 40 individually written tasks with reasons |
| Other topic-specific grammar workshops | 52 | Original focused workshops remain available outside Lessons 001–060; these are not yet full extended editions |
| Other study-guide editions | 128 | Existing notes, examples and template-based practice remain available; deep editorial expansion is pending |

**Latest batch (041–060):** 20 independently written full lessons, 600 explained examples, 100 dialogues and 800 original activities. Together, the full editions for 002–060 contain 1,770 worked examples, 295 dialogues and 2,360 original activities. Each practice set contains 10 multiple-choice questions, 10 short answers, five corrections, five word-order tasks, five reading questions and five open tasks. Questions 1–35 have answer checks; 36–40 have model responses for self-assessment. Scores do not assess pronunciation. Device speech is optional and accent-dependent; reference links support UK recorded pronunciation.

**Status:** Lessons 001–060 have full extended editions. The remaining 180 lessons (061–240) do not yet have the same teaching depth. Do not describe publication of 240 pages as completion of 240 extended lessons.

**Progress:** New lesson answers, checked scores and specific goal ticks are saved locally under `eva-full-NNN-v1`. Existing legacy progress remains unchanged under its original keys. No account or cross-device sync is provided.

**Source safety:** The canonical syllabus and all existing lesson IDs are unchanged. `full-lessons.js`, `foundation-lessons.js`, `a1-lessons.js` and `a1-completion.js` add original lesson content; `full-lessons-ui.js` renders these editions; `full-lessons.css` provides responsive styling. The renderer falls back to the existing study-guide/workshop view for other lessons.

## Grammar workshop coverage (64 lessons in 12 topic families)

- Nouns, articles and determiners — 009, 025, 026, 027, 067, 121, 123, 161, 219
- Verbs, tense/aspect and verb patterns — 034, 035, 073, 075, 089, 097, 103, 124, 137
- Adjectives and comparison — 016, 030, 061, 062, 126, 163, 164
- Adverbs — 031, 039, 064, 165
- Prepositions — 022, 041, 068, 167, 198
- Conjunctions, discourse and cohesion — 091, 111, 129, 169, 202, 216
- Conditionals — 086, 088, 109, 148
- Relative clauses and indirect questions — 090, 113, 114, 130, 132
- Reported speech — 115, 116, 117, 156, 157
- Passive voice — 094, 118, 119, 153, 154, 200
- Phrasal verbs — 127, 168
- Agreement and British/American differences — 218, 224

## Editorial expansion roadmap (scope: the full English language)

1. Continue with Lesson 061 onward in the existing 240-lesson sequence. A total of 180 lessons remain below the full extended-edition target.
2. Enrich the remaining 52 grammar workshops to the Lesson 001 target: more adult-use examples (aim for 30 where pedagogically useful), at least five natural dialogues/situational exchanges when appropriate, genuinely varied practice and fully reviewed answer keys.
3. Strengthen foundational grammar gaps: determiners, noun phrases, verb types, irregular forms, articles, question word order, pronoun types and subject–verb agreement; create targeted practice.
4. Deepen pronunciation/phonology beyond letter names: IPA reference, vowel and consonant contrasts, syllables, stress, rhythm, intonation, connected speech, weak forms, schwa, listening discrimination and British accent awareness.
5. Deepen prepositions, conjunctions, adjectives, adverbs, reported speech, passives, conditionals, relative and non-finite clauses, modal verbs, tense/aspect, inversion, hedging and register.
6. Extend vocabulary and lexical topics: collocations, phrasal verbs, prefixes/suffixes, compounds, idioms, connotation, figurative language, British/American distinctions.
7. Integrate reading, listening, speaking, writing, professional scenarios, discourse cohesion, punctuation, pragmatic meaning, accessibility and level-appropriate assessments.
8. Review accuracy and actual exercise variety rather than deriving all assessments mechanically from the ten textbook examples.

The list is a roadmap, **not** a claim of completed coverage. English is open-ended; “every part” means systematic broad coverage of standard grammar and communication competencies, not a finite promise to list every word or idiom.

## Source structure

- `course-data.js` — canonical book-derived syllabus, 240 lesson records and alphabet supplements.
- `grammar-expansions.js` — 64 individually authored topic-specific workshops; each has two sections, rules, worked examples, common errors and three scored quiz questions.
- `full-lessons.js` — original full extended lessons 002–010.
- `foundation-lessons.js` — original full extended lessons 011–024, including the integrated foundation review.
- `a1-lessons.js` — original full A1 editions for Lessons 025–040: noun patterns, articles, pronouns, descriptions, adverbs, workplace practice, present simple, questions, frequency and time.
- `a1-completion.js` — original full editions for Lessons 041–060: time prepositions, present continuous, preferences, can/could, quantities, everyday exchanges, past simple, future forms and an integrated A1 review.
- `scripts/validate-lessons.cjs` — dependency-free checks for data completeness, correct and accepted answers, word-order models, referenced assets and lesson links. Run with `node scripts/validate-lessons.cjs`.
- `full-lessons-ui.js` — detailed lesson rendering, 40 varied activities, marking, complete answer keys, audio, flashcards and saved responses.
- `full-lessons.css` — extended-edition responsive and print presentation.
- `study.html` — routes 002–060 to the full renderer and preserves the original study-guide/workshop renderer elsewhere.
- `grammar.html` — searchable topic finder across 12 families.
- `lesson.html` — extended Lesson 001.
- `catalog.html` — all 240 lessons with accurate edition badges.
- `index.html` — academy homepage.

## Editorial principles

- Write all teaching and narration in **clear English** for adult beginners and advancing learners. Talk to the user in Sinhala when helpful, but keep actual lessons in English.
- Use British conventions consistently, while identifying valid differences and exceptions. Avoid false blanket rules.
- Never make up a grammatical rule or promise that one answer is always the only correct one when legitimate alternatives exist.
- Preserve numbering, link to related levels and keep explanation → example → comparison → exercise → answer rationale.
- Expand practice with meaningful tasks, not repetitive filler; distinguish auto-marked questions from open-ended self-assessment.
- Provide usable mobile typography, accessible labels, reading/print functionality and accurate publication status.
- Do not claim official accreditation, examination equivalence or guaranteed fluency.
- Verify source syntax, quiz answers, lesson navigation, live publication and caches after each batch.


## Validation for the 011–024 batch

- Verified six sections, 30 examples, five dialogues and 40 tasks in each new lesson.
- Audited all 560 model answers and listed alternatives against the answer checker.
- Audited all 70 word-order tasks for exact supplied-word coverage.
- Checked multiple-choice options for three distinct choices and a valid correct answer.
- Confirmed the curriculum numbering and existing lesson content are preserved.
- Browser checked all 14 new lesson pages, representative marking and alternative answers, saved responses after reload, the unchanged Lesson 025 fallback, and a 375-pixel content viewport without page overflow.

## Validation for the 025–040 batch

- Verified six sections, 30 explained examples, five dialogues and 40 tasks in each of the 16 new lessons.
- Checked all new model answers and listed alternatives; checked three distinct options in each choice question.
- Audited all 80 new word-order tasks against the exact supplied words.
- Checked every extended lesson’s table widths, correction/example/dialogue fields, curriculum IDs, related lesson links and referenced scripts.
- Added explicit numeric-time separator preservation in marking, alongside the existing email-symbol and case-sensitive-letter checks.
- Confirmed the practice calendar example: 15 June 2026 is a Monday.
- Browser verified all 16 new lesson pages; representative clock-time, apostrophe and spelling checks; saved writing, scores and goal ticks after reload; the unchanged Lesson 041 fallback; and the updated catalogue badge.
- A phone preview with a 375-pixel content viewport showed no page overflow; its tables scroll within their containers.


## Validation for the 041–060 batch

- Verified all 20 authored editions: six teaching sections, 30 explained examples, five dialogues and 40 activities each.
- Checked all 800 new answer/model records and listed alternatives, plus all 100 new word-order tasks against their supplied words.
- Verified all full-edition datasets, linked lesson IDs, table dimensions, distinct multiple-choice options and referenced scripts with the dependency-free validator.
- Browser verified every new page; checked rejection of incorrect past spelling and did + past forms, acceptance of correct British spelling and contracted alternatives, and saved writing, scores and goal ticks after reload.
- Confirmed Lesson 061 still uses its existing study-guide/workshop view and the catalogue marks Lesson 060 as a full extended edition.
- Reviewed a 375-pixel mobile content viewport with no page overflow.
