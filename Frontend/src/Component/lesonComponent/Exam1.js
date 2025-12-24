const questions = [
  {
    id: "q1",
    text: "Het huis is oud. ___ is mooi.",
    correctAnswer: "Het",
    options: [
      { label: "A. Hij", value: "Hij" },
      { label: "B. Het", value: "Het" },
      { label: "C. De", value: "De" },
      { label: "D. Ze", value: "Ze" },
    ],
  },
  {
    id: "q2",
    text: "Ik heb een boek gelezen. ___ was spannend!",
    correctAnswer: "Het",
    options: [
      { label: "A. Het", value: "Het" },
      { label: "B. Hij", value: "Hij" },
      { label: "C. Zij", value: "Zij" },
      { label: "D. De", value: "De" },
    ],
  },
  {
    id: "q3",
    text: "Waar is het kind? – ___ is in de tuin.",
    correctAnswer: "Het",
    options: [
      { label: "A. Hij", value: "Hij" },
      { label: "B. Ze", value: "Ze" },
      { label: "C. Het", value: "Het" },
      { label: "D. Wie", value: "Wie" },
    ],
  },
  {
    id: "q4",
    text: 'اختر المعنى الصحيح للجملة: "Het is belangrijk om te slapen."',
    correctAnswer: "من المهم أن تنام",
    options: [
      { label: "A. الطفل يحب النوم", value: "الطفل يحب النوم" },
      { label: "B. من المهم أن تنام", value: "من المهم أن تنام" },
      { label: "C. هو ينام كثيرًا", value: "هو ينام كثيرًا" },
      { label: "D. الطفل نائم الآن", value: "الطفل نائم الآن" },
    ],
  },
  {
    id: "q5",
    text: 'ما الترجمة الصحيحة لـ "Het is vijf uur."؟',
    correctAnswer: "إنها الساعة الخامسة",
    options: [
      { label: "A. الساعة الخامسة", value: "الساعة الخامسة" },
      { label: "B. إنها الساعة الخامسة", value: "إنها الساعة الخامسة" },
      { label: "C. خمسة أشخاص", value: "خمسة أشخاص" },
      { label: "D. يوجد خمسة أطفال", value: "يوجد خمسة أطفال" },
    ],
  },
  {
    id: "q6",
    text: "Hij begrijpt __ niet.",
    correctAnswer: "het",
    options: [
      { label: "A. hij", value: "hij" },
      { label: "B. ze", value: "ze" },
      { label: "C. het", value: "het" },
      { label: "D. wie", value: "wie" },
    ],
  },
  {
    id: "q7",
    text: "Kun je __ herhalen, alsjeblieft?",
    correctAnswer: "het",
    options: [
      { label: "A. ze", value: "ze" },
      { label: "B. hij", value: "hij" },
      { label: "C. het", value: "het" },
      { label: "D. de", value: "de" },
    ],
  },
  {
    id: "q8",
    text: "______ boek is interessant.",
    correctAnswer: "Het",
    options: [
      { label: "A. De", value: "De" },
      { label: "B. Een", value: "Een" },
      { label: "C. Het", value: "Het" },
      { label: "D. Hij", value: "Hij" },
    ],
  },
  {
    id: "q9",
    text: "Ik zie ______ kind spelen in de tuin.",
    correctAnswer: "Het",
    options: [
      { label: "A. Het", value: "Het" },
      { label: "B. De", value: "De" },
      { label: "C. Een", value: "Een" },
      { label: "D. Zij", value: "Zij" },
    ],
  },
  {
    id: "q10",
    text: "Wat vind je van ______ idee?",
    correctAnswer: "Het",
    options: [
      { label: "A. De", value: "De" },
      { label: "B. Het", value: "Het" },
      { label: "C. Hij", value: "Hij" },
      { label: "D. Een", value: "Een" },
    ],
  },
  {
    id: "q11",
    text: '❶ أي جملة تحتوي على "het" كضمير يعود على اسم محايد؟',
    correctAnswer: "Het huis is groot. Het is mooi.",
    options: [
      { label: "A. De man is oud. Hij is moe.", value: "De man is oud. Hij is moe." },
      { label: "B. Het huis is groot. Het is mooi.", value: "Het huis is groot. Het is mooi." },
      { label: "C. De kinderen spelen. Zij zijn blij.", value: "De kinderen spelen. Zij zijn blij." },
      { label: "D. De vrouw leest een كتاب. Ze leest het snel.", value: "De vrouw leest een كتاب. Ze leest het snel." },
    ],
  },
  {
    id: "q12",
    text: '❷ ما وظيفة "het" في الجملة التالية؟\nHet regent vandaag.',
    correctAnswer: "ضمير غير شخصي",
    options: [
      { label: "A. ضمير يعود على اسم محايد", value: "ضمير يعود على اسم محايد" },
      { label: "B. أداة تعريف", value: "أداة تعريف" },
      { label: "C. ضمير غير شخصي", value: "ضمير غير شخصي" },
      { label: "D. مفعول به", value: "مفعول به" },
    ],
  },
  {
    id: "q13",
    text: '❸ ما المقصود بـ "het" في الجملة:\nIk begrijp het niet.',
    correctAnswer: "تشير إلى فكرة أو شيء غير عاقل",
    options: [
      { label: "A. تعني 'هو' وتشير لشخص", value: "تعني هو وتشير لشخص" },
      { label: "B. تعني 'ذلك' وتشير إلى فكرة أو شيء غير عاقل", value: "تشير إلى فكرة أو شيء غير عاقل" },
      { label: "C. تعني 'هي' وتشير إلى فتاة", value: "تعني هي وتشير إلى فتاة" },
      { label: "D. أداة تعريف", value: "أداة تعريف" },
    ],
  },
  {
    id: "q14",
    text: '❹ في أي جملة استخدمنا "het" كضمير غير شخصي للتعبير عن فكرة عامة؟',
    correctAnswer: "Het is moeilijk om Nederlands te leren.",
    options: [
      { label: "A. Het boek ligt op tafel.", value: "Het boek ligt op tafel." },
      { label: "B. Het is moeilijk om Nederlands te leren.", value: "Het is moeilijk om Nederlands te leren." },
      { label: "C. Hij zegt het altijd.", value: "Hij zegt het altijd." },
      { label: "D. Het meisje zingt een liedje.", value: "Het meisje zingt een liedje." },
    ],
  },
  {
    id: "q15",
    text: '❺ ما السبب في استخدام "het" في الجملة:\nHet huis is groot. Het is mooi.',
    correctAnswer: "لأن 'huis' اسم يأخذ 'het' كأداة تعريف",
    options: [
      { label: "A. لأن 'huis' اسم مذكر", value: "لأن huis اسم مذكر" },
      { label: "B. لأن 'huis' اسم مؤنث", value: "لأن huis اسم مؤنث" },
      { label: "C. لأن 'huis' اسم يأخذ 'het' كأداة تعريف", value: "لأن huis اسم يأخذ het كأداة تعريف" },
      { label: "D. لأنها تعني 'ذلك الشخص'", value: "لأنها تعني ذلك الشخص" },
    ],
  },
];

export default questions;
