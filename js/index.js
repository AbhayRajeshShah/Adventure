//canvas
var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var bluePlayer=new playerclass();
var npc = new bat();
var zombies = new zombie();



//frames


window.onload=function(){
    loadImages();
}
function imageLoadingDoneSoStartGame(){
   
    var framesPerSec=50;
    setInterval(all,1000/framesPerSec);
    
    loadlevel(levelOne);

    
        
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
    zombies.checkMove();
    bluePlayer.playerMove();
    bluePlayer.tracksmh();
    npc.edgeWrap();
    npc.move(projectileBatCollision);
    zombies.tracsmh();
    zombies.move(projectileZombieCollision);
    
    
    
}

rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
 
 zombies.reset();
bluePlayer.playerReset();
trackCreate();
zombies.draw(projectileZombieCollision); 
bluePlayer.check(npc);
zombies.checkCollison(bluePlayer,projectileZombieCollision);

bluePlayer.draw();
npc.draw(projectileBatCollision);
}



