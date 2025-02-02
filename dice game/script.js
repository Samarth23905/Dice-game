let player1 = document.getElementById("Player1");
let player2 = document.getElementById("Player2");
document.getElementById("editName").addEventListener("click", () => {
    player1.textContent = prompt("Enter First player name.");
    player2.textContent = prompt("Enter Second player name.");
});

document.getElementById("roll").addEventListener("click", () => {
    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");
    let result = document.getElementById("h1");
    dice1.textContent = Math.floor(Math.random() *6+1);
    dice2.textContent = Math.floor(Math.random() *6+1);
    if(dice1.textContent > dice2.textContent) {
        result.textContent = `${player1.textContent} Wins!`;
    } else if(dice1.textContent < dice2.textContent) {
        result.textContent = `${player2.textContent} Wins!`;
    } else {
        result.textContent = "It's an draw!";
    }
});
