const questions = [
  {
    id: "q1",
    text: "Het huis is oud. ___ is mooi.",
    options: [
      { label: "A. Hij", value: "Incorrect" },
      { label: "B. Het", value: "Correct!" },
      { label: "C. De", value: "Incorrect" },
      { label: "D. Ze", value: "Incorrect" },
    ],
  },
  {
    id: "q2",
    text: "Ik heb een boek gelezen. ___ was spannend!",
    options: [
      { label: "A. Het", value: "Correct!" },
      { label: "B. Hij", value: "Incorrect" },
      { label: "C. Zij", value: "Incorrect" },
      { label: "D. De", value: "Incorrect" },
    ],
  },
  {
    id: "q3",
    text: "Waar is het kind? – ___ is in de tuin.",
    options: [
      { label: "A. Hij", value: "Incorrect" },
      { label: "B. Ze", value: "Incorrect" },
      { label: "C. Het", value: "Correct!" },
      { label: "D. Wie", value: "Incorrect" },
    ],
  },
  {
    id: "q4",
    text: 'اختر المعنى الصحيح للجملة: "Het is belangrijk om te slapen."',
    options: [
      { label: "A. الطفل يحب النوم", value: "Incorrect" },
      { label: "B. من المهم أن تنام", value: "Correct!" },
      { label: "C. هو ينام كثيرًا", value: "Incorrect" },
      { label: "D. الطفل نائم الآن", value: "Incorrect" },
    ],
  },
  {
    id: "q6",
    text: 'ما الترجمة الصحيحة لـ "Het is vijf uur."؟',
    options: [
      { label: "A. الساعة الخامسة", value: "Incorrect" },
      { label: "B. إنها الساعة الخامسة", value: "Correct!" },
      { label: "C. خمسة أشخاص", value: "Incorrect" },
      { label: "D. يوجد خمسة أطفال", value: "Incorrect" },
    ],
  },
  {
    id: "q8",
    text: "Hij begrijpt __ niet.",
    options: [
      { label: "A. hij", value: "Incorrect" },
      { label: "B. ze", value: "Incorrect" },
      { label: "C. het", value: "Correct!" },
      { label: "D. wie", value: "Incorrect" },
    ],
  },
  {
    id: "q9",
    text: "Kun je __ herhalen, alsjeblieft?",
    options: [
      { label: "A. ze", value: "Incorrect" },
      { label: "B. hij", value: "Incorrect" },
      { label: "C. het", value: "Correct!" },
      { label: "D. de", value: "Incorrect" },
    ],
  },
  {
    id: "q10",
    text: "______ boek is interessant.",
    options: [
      { label: "A. De", value: "Incorrect" },
      { label: "B. Een", value: "Incorrect" },
      { label: "C. Het", value: "Correct!" },
      { label: "D. Hij", value: "Incorrect" },
    ],
  },
  {
    id: "q11",
    text: "Ik zie ______ kind spelen in de tuin.",
    options: [
      { label: "A. Het", value: "Correct!" },
      { label: "B. De", value: "Incorrect" },
      { label: "C. Een", value: "Incorrect" },
      { label: "D. Zij", value: "Incorrect" },
    ],
  },
  {
    id: "q12",
    text: "Wat vind je van ______ idee?",
    options: [
      { label: "A. De", value: "Incorrect" },
      { label: "B. Het", value: "Correct!" },
      { label: "C. Hij", value: "Incorrect" },
      { label: "D. Een", value: "Incorrect" },
    ],
  },
  {
    id: "q13",
    text: '❶ أي جملة تحتوي على "het" كضمير يعود على اسم محايد؟',
    options: [
      { label: "A. De man is oud. Hij is moe.", value: "Incorrect" },
      { label: "B. Het huis is groot. Het is mooi.", value: "Correct!" },
      { label: "C. De kinderen spelen. Zij zijn blij.", value: "Incorrect" },
      { label: "D. De vrouw leest een كتاب. Ze leest het snel.", value: "Incorrect" },
    ],
  },
  {
    id: "q14",
    text: '❷ ما وظيفة "het" في الجملة التالية؟\nHet regent vandaag.',
    options: [
      { label: "A. ضمير يعود على اسم محايد", value: "Incorrect" },
      { label: "B. أداة تعريف", value: "Incorrect" },
      { label: "C. ضمير غير شخصي", value: "Correct!" },
      { label: "D. مفعول به", value: "Incorrect" },
    ],
  },
  {
    id: "q15",
    text: '❸ ما المقصود بـ "het" في الجملة:\nIk begrijp het niet.',
    options: [
      { label: "A. تعني 'هو' وتشير لشخص", value: "Incorrect" },
      { label: "B. تعني 'ذلك' وتشير إلى فكرة أو شيء غير عاقل", value: "Correct!" },
      { label: "C. تعني 'هي' وتشير إلى فتاة", value: "Incorrect" },
      { label: "D. أداة تعريف", value: "Incorrect" },
    ],
  },
  {
    id: "q16",
    text: '❹ في أي جملة استخدمنا "het" كضمير غير شخصي للتعبير عن فكرة عامة؟',
    options: [
      { label: "A. Het boek ligt op tafel.", value: "Incorrect" },
      { label: "B. Het is moeilijk om Nederlands te leren.", value: "Correct!" },
      { label: "C. Hij zegt het altijd.", value: "Incorrect" },
      { label: "D. Het meisje zingt een liedje.", value: "Incorrect" },
    ],
  },
  {
    id: "q17",
    text: '❺ ما السبب في استخدام "het" في الجملة:\nHet huis is groot. Het is mooi.',
    options: [
      { label: "A. لأن 'huis' اسم مذكر", value: "Incorrect" },
      { label: "B. لأن 'huis' اسم مؤنث", value: "Incorrect" },
      { label: "C. لأن 'huis' اسم يأخذ 'het' كأداة تعريف", value: "Correct!" },
      { label: "D. لأنها تعني 'ذلك الشخص'", value: "Incorrect" },
    ],
  },
];

export default questions