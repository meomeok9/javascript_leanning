"use strict";
const cl = (obj)=>console.log(obj);

const poll = {
    question: "What is your favourite programming language? ",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    numberOfVotes: new Array(4).fill(0),
    registerNewAnswer(){
        const [a,b,c,d] = this.options;
        let vote = prompt(`${this.question}
        ${a}
        ${b}
        ${c}
        ${d}
        (Write option number)`);
        if(check(vote))
        this.numberOfVotes[vote]++;
        else alert('Câu trả lời không hợp lệ');
        cl(this.numberOfVotes);
    },
    displayResults(obj){
        if(typeof obj ==='string'){
            cl('Poll results are '+ obj.slice(1,-1));
        }else if(typeof obj ==='object'){
            cl(obj);
        }else {
            cl(typeof obj)
            alert(' some thing worng')
        }
    }
}

const check = function(str){
    return parseInt(str)>=0 && parseInt(str)<=3 ? true : false;
}
//poll.displayResults('[13, 2, 4, 1]');
//poll.displayResults([13, 2, 4, 1]);

poll.displayResults('[5, 2, 3]');
poll.displayResults([5, 2, 3]);
poll.displayResults('[1, 5, 3, 9, 6, 1]');
poll.displayResults([1, 5, 3, 9, 6, 1]);


document.getElementById('btn-button').addEventListener('click', poll.registerNewAnswer.bind(poll));


