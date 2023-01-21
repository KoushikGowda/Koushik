let results = document.getElementById('result');
let player1Dice = document.getElementById('player1dice');
let player2Dice = document.getElementById('player2dice');
let playerOneDice;
let playerTwoDice;

function roll()
{
    let diceOne = Math.floor((Math.random()*6)+1);
    let diceTwo = Math.floor((Math.random()*6)+1);

    playerOneDice = "Dice"+diceOne+".jpeg"
    playerTwoDice = "Dice"+diceTwo+".jpeg"

    player1Dice.setAttribute('src',playerOneDice);
    player2Dice.setAttribute('src',playerTwoDice);
    
    if(diceOne===diceTwo){
        results.textContent="its Draw";
    }
    else if(diceOne>diceTwo){
        results.textContent="Player 1 Won yay!!!";
    }
    else{
        results.textContent="player 2 Won yay!!!";
    }
}


function reset(){
    player1Dice.setAttribute('src',"Dice1.jpeg");
    player2Dice.setAttribute('src',"Dice1.jpeg");
    results.textContent="New Game";

}
