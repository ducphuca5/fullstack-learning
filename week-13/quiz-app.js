let quizData = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'High Text Markup Language', correct: false },
      { text: 'Hyper Tabular Markup Language', correct: false },
      { text: 'None of these', correct: false },
    ],
  },
  {
    question: 'Which language runs in a web browser?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'C', correct: false },
      { text: 'Python', correct: false },
      { text: 'JavaScript', correct: true },
    ],
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Central Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Cascading Simple Sheets', correct: false },
      { text: 'Cars SUVs Sailboats', correct: false },
    ],
  },
  {
    question: 'What year was JavaScript launched?',
    answers: [
      { text: '1996', correct: false },
      { text: '1995', correct: true },
      { text: '1994', correct: false },
      { text: 'none of the above', correct: false },
    ],
  },
  {
    question: 'Which tool can you use to ensure code quality?',
    answers: [
      { text: 'Angular', correct: false },
      { text: 'jQuery', correct: false },
      { text: 'RequireJS', correct: false },
      { text: 'ESLint', correct: true },
    ],
  },
];

let newQuestion = document.querySelector('[data-component="question"]');
let newAnswer = document.querySelector('[data-component="answers"]');
let nextButton = document.querySelector('[data-component="next"]');
