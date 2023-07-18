
var question_bank = [];
var question_data;
var score = 0;
var quiz;
createDataBank();

class Question {
  constructor(q_text, q_answer) {
    this.text = q_text;
    this.answer = q_answer;
  }
}

function createDataBank() {
  getQuestionsData().then(() => {
    question_data.forEach((question) => {
      let question_text = question["question"];
      let question_answer = question["correct_answer"];
      let new_question = new Question(question_text, question_answer);
      question_bank.push(new_question);
    });
  });
}

async function getQuestionsData() {
  const apiUrl = `https://opentdb.com/api.php?amount=20&difficulty=medium&type=boolean`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Não foi possível conectar com o servidor");
    }
    const data = await response.json();
    question_data = data.results;
  } catch (error) {
    console.error(error);
  }
}

class QuizBrain {
  constructor(q_list) {
    this.question_number = 0;
    this.score = 0;
    this.question_list = q_list;
    this.current_question = []
  }

  still_has_questions() {
    return this.question_number < this.question_list.length;
  }

  next_question() {
    this.current_question = this.question_list[this.question_number];
    this.question_number++;
    let question_txt = `Q.${this.question_number
      } ${this.current_question.text.toLocaleUpperCase()}`;
    return question_txt;
  }

  check_answer(user_answer) {
    let correct_answer = this.current_question.answer;
    if (user_answer == correct_answer.toLocaleLowerCase()) {
      this.score++;
    }
  }
}

function check_true() {
  quiz.check_answer("true");
  if (score < quiz.score) {
    score = quiz.score;
    updateScore(score);
  }
  next_();
}

function updateScore(score) {
  var scoreUI = document.getElementById("score");
  scoreUI.innerHTML = score;
}

function next_() {
  if (quiz.still_has_questions()) {
    updateUIQuestion();
  } else {
    document.getElementById("true").remove();
    document.getElementById("false").remove();
    document.getElementById("question-title").remove();
    document.getElementById("question").innerHTML = "FIM DO JOGO";
  }
}

function check_false() {
  quiz.check_answer("false");
  if (score < quiz.score) {
    score = quiz.score;
    updateScore(score);
  }
  next_();
}

function updateUIQuestion() {
  var question_textUI = document.getElementById("question");
  question_textUI.innerHTML = quiz.next_question();
}

function starter() {
  quiz = new QuizBrain(question_bank);
  updateUIQuestion();
}
setTimeout(starter, 2000);

function handleKeyDown(event) {
  if (event.key === "t" || event.key === "T" || event.key === "ArrowLeft") {
    event.preventDefault();
    document.getElementById('true').focus()
  }
  if (event.key === "f" || event.key === "F" || event.key === "ArrowRight") {
    event.preventDefault();
    document.getElementById('false').focus()
  }
}

