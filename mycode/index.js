let comput_choice = document.querySelector('.comput_choice_content');
let user_choice = document.querySelector('.user_choice_content');
let result = document.querySelector('.result');

const scissor_choice_button = document.querySelector('.scissor');
const rock_choice_button = document.querySelector('.rock');
const paper_choice_button = document.querySelector('.paper');

let comput_random_number=0;

function comput_choice_random(){
    comput_random_number = Math.floor(Math.random()*2);
}

function click(e){
    comput_choice_random();
    game(comput_random_number,this.innerText);
}

function game(comput,user){
    
    user_choice.innerText = user;

    if(user=='가위')
        user = 0;
    else if(user=='바위')
        user = 1;
    else if(user=='보')
        user = 2;
    
    if(comput==0)
        comput_choice.innerText = '가위';
    else if(comput==1)
        comput_choice.innerText = '바위';
    else if(comput==2)
        comput_choice.innerText = '보';

    
    if(comput==user){
        result.innerText = "무승부";
    }else if(user-comput == 1 || user-comput==-2){
        result.innerText = '이겼습니다';
    }else 
        result.innerText = '졌습니다';

}

scissor_choice_button.addEventListener('click',click);
rock_choice_button.addEventListener('click',click);
paper_choice_button.addEventListener('click',click);