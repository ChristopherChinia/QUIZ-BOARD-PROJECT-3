const quiz = [
    {
        "question":"What is JavaScript?",
        "answers":{
        "a":"JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language.",
        "b":"JavaScript is a language that provides the structure of a web page by giving extra instructions to the content using tags to make it more than just a plain text.",
        "c":"JavaScript is a stylistic feature used to make the User interface more appealing.",
        "d":"JavaScript is a general purpose, high-level, object-oriented, cross-platform programming language .",
        "correct":"JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language.",
        }
    },
    {
        "question":"Which of the following is not a Primitive type of Javascript?",
        "answers":{
        "a":"String",
        "b":"Boolean",
        "c":"Bigint.",
        "d":"Arrays.",
        "correct":"Arrays.",
        }
    },
    {
        "question":"Which one of the following is not a looping structure in JavaScript?",
        "answers":{
        "a":"For.",
        "b":"Else if.",
        "c":"While.",
        "d":"Do While loops.",
        "correct":"Else if",
        }
    },
    {
        "question": "Which of the following keywords are used to define a varibale in Javascript?",
        "answers": {
            "a":"var",
            "b":"let",
            "c":"Both of the above",
            "d":"None of the above",
            "correct":"c"
        }
    },
    {
        "question":"Which one of the following is not a JavaScipt Array method?",
        "answers":{
        "a":"Length Property.",
        "b":"pull method.",
        "c":"Reverse method.",
        "d":"shift method.",
        "correct":"pull method.",
        }
    }
]

let count = 0;
let score = 0;
const loadQuestions = () => {
    const listOfQuestions = quiz[count];
    quizquestion.innerHTML = listOfQuestions.question;
    opt1.innerHTML = listOfQuestions.answers.a;
    opt2.innerHTML = listOfQuestions.answers.b;
    opt3.innerHTML = listOfQuestions.answers.c;
    opt4.innerHTML = listOfQuestions.answers.d;
}
loadQuestions();
const getAnswer = () => {
    let ans;
    answers1.forEach(currentAnswer => {
        if (currentAnswer.checked) {
            ans = currentAnswer.class;
        }
    });
    const corAnswer = {ans1:'a', ans2:'b', ans3:'c', ans4:'d'};
    return corAnswer[ans];
}

