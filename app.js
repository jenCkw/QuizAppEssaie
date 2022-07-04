class Quiz {
    constructor(question) {
        this.score = 0;
        this.question = question;
        this.questionIndex = 0;
    }
    
    getQuestionIndex(){
        return this.question[this.questionIndex];  
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
}
}

//create a question class

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choice = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

//display question
function displayquestion() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questioneElement = document.getElementById("question");
        questioneElement.innerHTML = quiz.getQuestionIndex().text;
    }
}
   