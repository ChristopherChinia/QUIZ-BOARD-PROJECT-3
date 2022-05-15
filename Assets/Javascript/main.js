// Getting all required elements
const startbtn = document.querySelector(".startbtn button");
const boxmodel = document.querySelector(".boxmodel");
const quitbtn = boxmodel.querySelector(".buttons .quit");
const proceedbtn = document.querySelector(".buttons .proceed");

// if start Quiz button is clicked
startbtn.onclick =()=>{
    boxmodel.classList.add("activate");
}