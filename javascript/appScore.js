const buttonP1 = document.querySelector('#buttonP1');
const buttonP2 = document.querySelector('#buttonP2');
const resetButton = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const selectScore = document.querySelector('#winningScore');


let p1Score = p2Score = 0;
let winningScore = 5;
let isFinished = false;

buttonP1.addEventListener('click', function(){
    if(!isFinished){
        p1Score++;
        if(p1Score === winningScore){
            isFinished = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            disabledButtons();
        }
        p1Display.textContent = p1Score;
    }
});


buttonP2.addEventListener('click', function(){
    if(!isFinished){
        p2Score++;
        if(p2Score === winningScore){
            isFinished = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            disabledButtons();
        }
        p2Display.textContent = p2Score;
        
    }
});

selectScore.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetGame();
});

resetButton.addEventListener('click', resetGame);

function resetGame(){
    isFinished = false;
    p1Score = p2Score = 0;

    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;

    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');

    enabledButtons();
}

function disabledButtons(){
    buttonP1.disabled = true;
    buttonP2.disabled = true;
}

function enabledButtons(){
    buttonP1.disabled = false;
    buttonP2.disabled = false;
}