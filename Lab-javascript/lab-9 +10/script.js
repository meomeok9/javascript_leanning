"use strict";
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHoll = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let scores,currentScore,activePlayer,playing;

const init = function(){
    scores =[0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent =0;
    score1El.textContent =0;
    current0El.textContent =0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');

}
    init();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer ===0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle('player--active'); // toggle() add when not has or add remove when oready there
    player1EL.classList.toggle('player--active');
}

btnRoll.addEventListener( 'click',function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6) +1;// 1. genarating a random dice roll
    
        diceEl.classList.remove('hidden');  //2. display dice
        diceEl.src = `dice-${dice}.png`;
    
        if(dice!==1){ //3.check for rolled 1: if true, switch to next player
        
            currentScore+= dice; // add dice to the curent score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else {
            switchPlayer();
        }
    }
});
btnHoll.addEventListener('click',function(){
   if(playing){
        scores[activePlayer] += currentScore; //1.add current score to active player's score
        // socres[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // check score is >= 100
        if(scores[activePlayer]>=100){
            // Finnish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            switchPlayer();
        }
        
    }
    // swich to the next player
    
});

btnNew.addEventListener('click',init);
