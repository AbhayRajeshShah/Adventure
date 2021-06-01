//canvas
var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var bluePlayer=new playerclass();
var npc = new bat();


//frames


window.onload=function(){
    loadImages();
}
function imageLoadingDoneSoStartGame(){
   
    var framesPerSec=50;
    setInterval(all,1000/framesPerSec);
    
    loadlevel(levelOne);
    bluePlayer.hp=60;
    
        
}

function loadlevel(whichLevel){
    trackGrid=whichLevel.slice();
    keys=0;
    for(var i=0;i<trackGrid.length;i++){
        if(trackGrid[i]==goal){
            trophies++;
        }
        
        projectileBatCollision=true;
    }



}

function all(){
    moveAll();
    drawAll();
}




function moveAll(){
    
    bluePlayer.playerMove();
    bluePlayer.tracksmh();
    npc.edgeWrap();
    npc.move();
    
}

rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
    
bluePlayer.playerReset();
trackCreate();
bluePlayer.check(npc);
bluePlayer.draw();
npc.draw(projectileBatCollision);
}



