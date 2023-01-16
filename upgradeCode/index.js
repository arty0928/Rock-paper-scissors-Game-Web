const buttons = document.querySelectorAll('button');

const play = (event) => {
    console.log(event.target.innerText);
}

buttons.forEach((button) => {
    button.addEventListener('click',(play));
});

