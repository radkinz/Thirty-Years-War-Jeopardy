window.addEventListener("load", function () {
    // score
    var data = [
        ["200", "200", "200"],
        ["400", "400", "400"],
        ["600", "600", "600"]
    ];

    // Add cells to board
    let container = document.getElementById("board");
    for (let i = 0; i < 3; i++) {
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
var questionkey200 = ["What did the people of Prague do with Ferdinand's representives?", "b", "What year was the Peace of Westphalia created?"];
var questionkey400 = ["What religion did Ferdinand want the people to become?", "e", "Who rose to power after the Thirty Years' War?"];
var questionkey600 = ["What group initially declared war on Ferdinand?", "h", "How do we see a political shift in the War?"];

//answers
var answerkey200 = ["Throw em out the window, babe;)", "2", "1648"];
var answerkey400 = ["Catholic", "5", "France"];
var answerkey600 = ["Czechs", "8", "Catholic France fights with Protestant Sweden"];

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
    }  else {
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
    if (questioncell.innerHTML == "What did the people of Prague do with Ferdinand's representives?" || questioncell.innerHTML == "b" || questioncell.innerHTML == "What year was the Peace of Westphalia created?") {
        answercell.innerHTML = answerkey200[questionkey200.indexOf(questioncell.innerHTML)];
    } else if (questioncell.innerHTML == "What religion did Ferdinand want the people to become?" || questioncell.innerHTML == "e" || questioncell.innerHTML == "Who rose to power after the Thirty Years' War?") {
        answercell.innerHTML = answerkey400[questionkey400.indexOf(questioncell.innerHTML)];
    } else if (questioncell.innerHTML == "What group initially declared war on Ferdinand?" || questioncell.innerHTML == "h" || questioncell.innerHTML == "How do we see a political shift in the War?") {
        answercell.innerHTML = answerkey600[questionkey600.indexOf(questioncell.innerHTML)];
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