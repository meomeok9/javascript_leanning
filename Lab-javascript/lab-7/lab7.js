"use strict";

let num = Math.floor((Math.random()*20)) +1;
let high_score = 0;
let cur_score = 20;
let  end_game = false; // stop condition
document.querySelector('.number').textContent = num; // '?' -> secret number, del or comment this line
var i=0;

function display_message(mess){
    document.querySelector('.message').textContent = mess;
}

function guess_game(){
    
    let guessNumber = Number(document.querySelector('.guess').value);
    if(!end_game)
        if(num==guessNumber){
            display_message(`${cur_score>=high_score ? '🎆🎆🎆🎆 High score 🎆🎆🎆🎆' : '🎉🎉🎉🎉Corect🎊🎊🎊'}`);
            high_score = high_score>cur_score ? high_score : cur_score;
            document.querySelector('.highscore').textContent = `${high_score>cur_score ? high_score : cur_score}`;
            end_game = true;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width ='30rem';
        }
        else if(num!=guessNumber){
            display_message(`${guessNumber > num ? '📉⏬⏬⏬⏬⏬ to 2' : '📈⏫⏫⏫⏫⏫ to low'}`);//;
            cur_score--;
            document.querySelector('.score').textContent =`${cur_score}`;
            if(cur_score == 0){
                display_message('😢 you lose');
                end_game =true;
            }
        }
}

document.querySelector('.check').addEventListener('click', guess_game);
document.querySelector('.guess').addEventListener('input',checkinput);
document.querySelector('.again').addEventListener('click', play_again);

function checkinput(){ //auto convert input to 1 while over range
    let guessNumber = Number(document.querySelector('.guess').value);
    if( guessNumber<1 || guessNumber>20){
        guessNumber =1;
        document.querySelector('.guess').value ='1';
    }
}
function play_again(){
    cur_score = 20;
    end_game = false;
    num = Math.floor((Math.random()*20)) +1;
    display_message('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = num; // '?' -> secret number, del or comment this line
    //document.querySelector('.number').textContent = '?';      -> uncomment this line when comment up line
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width ='15rem';
}

