const cells= document.querySelectorAll('.cells');
let currStatus= document.querySelector('#status');
const restart= document.querySelector('#restart');

const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let currentplayer="X";
let options=["","","","","","","","",""];
let runningStatus=false;

initializeGame();

function initializeGame(){
    cells.forEach(cell=> cell.addEventListener('click',clicked));
    restart.addEventListener('click',restartGame);
    currStatus.textContent=`${currentplayer}'s Turn`;
    runningStatus=true;
}
function clicked(){
    const index= this.getAttribute("cellIndex");
    if(options[index]!="" || !runningStatus){
        return;
    }
    updateCell(this,index);
    checkWinner();
    if (runningStatus) {  // Only change player if the game is still running
        changePlayer();
    }
}

function updateCell(cell,index){
    options[index]=currentplayer;
    cell.textContent=currentplayer;

}
function changePlayer(){
    currentplayer = (currentplayer == "X") ? "O" : "X";
    currStatus.textContent = `${currentplayer}'s turn`;
}


function checkWinner(){
    let winflag= false;
    for(let i=0;i<winCondition.length;i++){
        let Condtion=winCondition[i];
        let cellA=options[Condtion[0]];
        let cellB=options[Condtion[1]];
        let cellC=options[Condtion[2]];

        if(cellA===""|| cellB==="" || cellC==="")continue;
        if(cellA===cellB && cellB===cellC){
            winflag=true;
            break;
        }
    }
    if(winflag){
        currStatus.textContent = `${currentplayer} won the game!`;
        runningStatus=false;
    }
    else if(!options.includes("")){
        currStatus.textContent = `Draw it is!`;
        runningStatus=false;
    }
    
}
function restartGame(){
    currentplayer="X";
    options=["","","","","","","","",""];
    currStatus.textContent = `${currentplayer}'s turn`;
    cells.forEach( cell=> cell.textContent="" );
    runningStatus=true;
}