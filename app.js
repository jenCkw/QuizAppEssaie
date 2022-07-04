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
}