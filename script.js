
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
    const choice= document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const disp = document.createElement('div');
    const score = document.createElement('div');
    const result = document.createElement('div');

    let cntp=0;
    let cntc=0;
    let round=1;
    btn1.textContent='ROCK';
    btn2.textContent='PAPER';
    btn3.textContent='SCISSORS';
    rnd.textContent=`ROUND ${round}` ;
    
    getPlayerChoice();

    function fcheck(){
        if(cntp<5&&cntc<5){
            rnd.textContent=`ROUND ${round}` ;
        }else{
          if(cntc>cntp){
              result.textContent=`You lose the game!! SCORE: ${cntp}-${cntc}`;
              choice.style.display="none";
              return;
          }else if(cntc==cntp){
            result.textContent=`Its a draw!! SCORE: ${cntp}-${cntc}`;
            choice.style.display="none";
            return;
          }else{
              result.textContent=`Congratulations you win the game!! SCORE: ${cntp}-${cntc}`;
              choice.style.display="none";
            return;
          }
        } 
    }

    function getPlayerChoice(){
        console.log('work');
        btn1.addEventListener('click',()=>{
            disp.textContent=playRound(getComputerChoice(),'rock');
            round++;
            fcheck();
            return;
        })
        btn2.addEventListener('click',()=>{
            disp.textContent=playRound(getComputerChoice(),'paper');
            round++;
            fcheck();
            return;
        })
        btn3.addEventListener('click',()=>{
            disp.textContent=playRound(getComputerChoice(),'scissors');
            round++;
            fcheck();
            return;
        })
    }

    function playRound(computerChoice, playerChoice){
      const p = playerChoice.toLowerCase();
      const w = `You win the round!!! ${playerChoice} beats ${computerChoice}`;
      const l = `You lose the round!!! ${computerChoice} beats ${playerChoice}`;
      
    if(p===computerChoice){
        score.textContent=`${cntp}-${cntc}`;
        return `Its a tie!!! ${playerChoice} draws with ${computerChoice}`
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
}
container.appendChild(choice);
choice.appendChild(btn1);
choice.appendChild(btn2);
choice.appendChild(btn3);
container.appendChild(disp);
container.appendChild(score);
container.appendChild(result);

return;
}



const container = document.querySelector('.container');


const rnd = document.createElement('div');
const start = document.createElement('button');


start.textContent='START GAME';
start.addEventListener('click',()=>{
    start.style.display = "none";
    game();
})

container.appendChild(rnd);
container.appendChild(start);
