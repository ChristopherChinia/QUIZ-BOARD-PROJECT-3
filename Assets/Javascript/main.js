// Getting all required elements
const proceedbtn = document.querySelector(".proceed");
const quizbox = document.querySelector(".quizbox");

// if proceed clicked
proceedbtn.onclick = ()=>{
    boxmodel.classList.remove("activeBoxmodel");  // hide the boxmodel 
    quizbox.classList.add("activeQuiz");  // show the quizbox
}

