
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
function playRound(computerChoice, playerChoice){
    const p = playerChoice.toLowerCase();
    const w = `Congratulations you win!!! ${playerChoice} beats ${computerChoice}`;
    const l = `you lost!!! ${computerChoice} beats ${playerChoice}`;
    if(p===computerChoice){
        return `its a tie!!! ${playerChoice} draws with ${computerChoice}`
    }
    if(p==='rock'){
        if(computerChoice=='paper'){
            return l;
        }
        else if(computerChoice=='scissors'){
            return w;
        }
    }
    if(p==='paper'){
        if(computerChoice=='rock'){
            return w;
        }
        else if(computerChoice==='scissors'){
            return l;
        }
    }
    if(p==='scissors'){
        if(computerChoice=='paper'){
            return w;
        }
        else if(computerChoice==='rock'){
            return l;
        }
    }
    return 'enter a valid choice!';
}
