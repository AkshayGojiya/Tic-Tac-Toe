let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msg = document.querySelector(".msg");
let msgheading = document.querySelector("#winner");
let game = document.querySelector(".game");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    for (let box of boxes){
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("change-1","change-2");
    }
    turnO = true;
    
}

const newGame = () => {
    turn0 = true;
    enableboxes();
    msg.classList.add("hide");
    resetBtn.classList.remove("hide");
    game.classList.remove("hide-game");
    for (let box of boxes){
        box.classList.remove("change-1","change-2");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.classList.add("change-1");
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.classList.add("change-2");
        }
        box.disabled = true;
        checkWinner();
    })
})
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msgheading.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableBoxes();
    game.classList.add("hide-game");

}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);