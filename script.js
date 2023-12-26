
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

let cntp =0;
let cntc =0;

function game(){
    cntp=0;
    cntc=0;
    for(i=1;i<=5;i++){
    let playerChoice = prompt("enter your choice","rock");
    let computerChoice= getComputerChoice();
    console.log(playRound(computerChoice,playerChoice));
    }
    if(cntc>cntp){
        console.log(`you lose!! SCORE: ${cntp}-${cntc}` );
    }else if(cntc==cntp){
        console.log(`its a draw!! SCORE: ${cntp}-${cntc}`);
    }else{
        console.log(`you win!! SCORE: ${cntp}-${cntc}`)
    }
    function playRound(computerChoice, playerChoice){
        const p = playerChoice.toLowerCase();
        const w = `Congratulations you win!!! ${playerChoice} beats ${computerChoice}`;
        const l = `you lost!!! ${computerChoice} beats ${playerChoice}`;
        if(p===computerChoice){
            return `its a tie!!! ${playerChoice} draws with ${computerChoice}`
        }
        if(p==='rock'){
            if(computerChoice=='paper'){
                cntc++;
                return l;
            }
            else if(computerChoice=='scissors'){
                cntp++;
                return w;
            }
        }
        if(p==='paper'){
            if(computerChoice=='rock'){
                cntp++;
                return w;
            }
            else if(computerChoice==='scissors'){
                cntc++;
                return l;
            }
        }
        if(p==='scissors'){
            if(computerChoice=='paper'){
                cntp++;
                return w;
            }
            else if(computerChoice==='rock'){
                cntc++;
                return l;
            }
        }
        return 'enter a valid choice!';
    }
}

game();