
function getComputerChoice(){
    r = Math.random()*10;
    if(r<=3){
        return 'rock';
    }
    else if(r>3&&r<=6){
        return 'paper';
    }
    return 'scissors';
}

function game(){
    let cntp=0;
    let cntc=0;
    if(cntp<5&&cntc<5){
        getPlayerChoice();
        getScore();
    }else{
      if(cntc>cntp){
          console.log(`you lose!! SCORE: ${cntp}-${cntc}` );
      }else if(cntc==cntp){
        console.log(`its a draw!! SCORE: ${cntp}-${cntc}`);
      }else{
          console.log(`you win!! SCORE: ${cntp}-${cntc}`);
      }
    }


    function getPlayerChoice(){
    btn1.addEventListener('click',()=>{
        disp.textContent=playRound(getComputerChoice(),'rock');
    })
    btn2.addEventListener('click',()=>{
        disp.textContent=playRound(getComputerChoice(),'paper');
    })
    btn3.addEventListener('click',()=>{
        disp.textContent=playRound(getComputerChoice(),'scissors');
    })
    }

    function playRound(computerChoice, playerChoice){
    const p = playerChoice.toLowerCase();
    const w = `Congratulations you win!!! ${playerChoice} beats ${computerChoice}`;
    const l = `you lost!!! ${computerChoice} beats ${playerChoice}`;
    
    if(p===computerChoice){
        score.textContent=`${cntp}-${cntc}`;
        return `its a tie!!! ${playerChoice} draws with ${computerChoice}`
    }
    if(p==='rock'){
        if(computerChoice=='paper'){
            cntc++;
            score.textContent=`${cntp}-${cntc}`;
            return l;
        }
        else if(computerChoice=='scissors'){
            cntp++;
            score.textContent=`${cntp}-${cntc}`;
            return w;
        }
    }
    if(p==='paper'){
        if(computerChoice=='rock'){
            cntp++;
            score.textContent=`${cntp}-${cntc}`;
            return w;
        }
        else if(computerChoice==='scissors'){
            cntc++;
            score.textContent=`${cntp}-${cntc}`;
            return l;
        }
    }
    if(p==='scissors'){
        if(computerChoice=='paper'){
            cntp++;
            score.textContent=`${cntp}-${cntc}`;
            return w;
        }
        else if(computerChoice==='rock'){
            cntc++;
            score.textContent=`${cntp}-${cntc}`;
            return l;
        }
    }
    return 'enter a valid choice!';
}


}



const container = document.querySelector('.container');

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const disp = document.createElement('div');
const score = document.createElement('div');

btn1.textContent='ROCK';
btn2.textContent='PAPER';
btn3.textContent='SCISSORS';



container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
container.appendChild(disp);
container.appendChild(score);

game();
