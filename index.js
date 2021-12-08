function diceGame() {
    my_dict = { "1": "../diceGame/imgs/dice1.png", "2": "../diceGame/imgs/dice2.png", "3": "../diceGame/imgs/dice3.png", "4": "../diceGame/imgs/dice4.png", "5": "../diceGame/imgs/dice5.png", "6": "../diceGame/imgs/dice6.png" };
    const rndInt = my_dict[randomIntFromInterval(1, 6)];
    const rndInt2 = my_dict[randomIntFromInterval(1, 6)];
    document.querySelector("#player1Dice").src = rndInt;
    document.querySelector("#player2Dice").src = rndInt2;
    if (rndInt === rndInt2) {
        document.querySelector("h1").innerHTML = "&#128558    It's a draw";
    }
    else if (rndInt > rndInt2) {
        document.querySelector("h1").innerHTML = "&#128681;    Player 1 won";
        document.querySelector("h1").style = "font-family:cursive;color:red; font-weight:bold; margin:5rem 0;";
    }
    else {
        document.querySelector("h1").innerHTML = "&#128681;    Player 2 won";
        document.querySelector("h1").style = "font-family:cursive;color:red; font-weight:bold; margin:5rem 0;";
    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
  