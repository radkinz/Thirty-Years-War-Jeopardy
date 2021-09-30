window.addEventListener("load", function () {
    // score
    var data = [
        ["200", "200", "200"],
        ["400", "400", "400"],
        ["600", "600", "600"],
        ["800", "800", "800"],
    ];

    // Add cells to board
    let container = document.getElementById("board");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("div");
            cell.innerHTML = data[i][j];
            cell.className = "cell";
            cell.id = j;
            container.appendChild(cell);
            cell.onclick = showQuestion;
        }
    }
});

//questions
var questionkey200 = ["a", "b", "c"];
var questionkey400 = ["d", "e", "f"];
var questionkey600 = ["g", "h", "i"];
var questionkey800 = ["j", "k", "l"];

//answers
var answerkey200 = ["1", "2", "3"];
var answerkey400 = ["4", "5", "6"];
var answerkey600 = ["7", "8", "9"];
var answerkey800 = ["10", "11", "12"];

function showQuestion() {
    //display question container
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("questioncontainer").style.visibility = "visible";

    //display question
    let questioncell = document.getElementById("questiontext");

    //connect cell to question location
    if (this.innerHTML == "200") {
        questioncell.innerHTML = questionkey200[parseInt(this.id)];
    } else if (this.innerHTML == "400") {
        questioncell.innerHTML = questionkey400[parseInt(this.id)];
    } else if (this.innerHTML == "600") {
        questioncell.innerHTML = questionkey600[parseInt(this.id)];
    } else if (this.innerHTML == "800") {
        questioncell.innerHTML = questionkey800[parseInt(this.id)];
    } else {
        return;
    }

    //change font color to red to know user already played square
    this.style.color = "red";
}

function showAnswer() {
    let questioncell = document.getElementById("questiontext");
   
    //add answer toggle box
    let answercell = document.getElementById("questionanswertext");
    //connect cell to answer location
    if (questioncell.innerHTML == "a" || questioncell.innerHTML == "b" || questioncell.innerHTML == "c") {
        answercell.innerHTML = answerkey200[questionkey200.indexOf(questioncell.innerHTML)];
    } else if (questioncell.innerHTML == "d" || questioncell.innerHTML == "e" || questioncell.innerHTML == "f") {
        answercell.innerHTML = answerkey400[questionkey400.indexOf(questioncell.innerHTML)];
    } else if (questioncell.innerHTML == "g" || questioncell.innerHTML == "h" || questioncell.innerHTML == "i") {
        answercell.innerHTML = answerkey600[questionkey600.indexOf(questioncell.innerHTML)];
    } else if (questioncell.innerHTML == "j" || questioncell.innerHTML == "k" || questioncell.innerHTML == "l") {
        answercell.innerHTML = answerkey800[questionkey800.indexOf(questioncell.innerHTML)];
    } else {
        return;
    }
}

function closeAnswer() {
    //hide question & answer
    document.getElementById("questioncontainer").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";

    //revert innerhtml
    let answercell = document.getElementById("questionanswertext");
    answercell.innerHTML = "Click to Reveal Answer";
}