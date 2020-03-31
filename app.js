'use strict';

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
let containerResult = document.querySelector('.result');
let usersResult = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const usersAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    

    //check answers

    usersAnswer.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });  
     
    //Show result on page
    
    scrollTo(0,0);
    containerResult.classList.remove('d-none');

    let outPut = 0;
    const timer = setInterval(() =>{
        usersResult.textContent = outPut + '%';

        if(outPut === score){
            clearInterval(timer);
        }else{
            outPut++;
        }
    }, 10);

});

