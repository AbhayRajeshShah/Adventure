var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var bluePlayer=new playerclass();
var npc = new bat();
var zombies = new zombie();
var shooterZombies=new shooter();

// var plantCount=0;
// var plantArray;
var peashooter=new plant();

window.onload=function(){
    loadImages();
}
function imageLoadingDoneSoStartGame(){
   loadlevel(level);
    var framesPerSec=50;
    setInterval(all,1000/framesPerSec);
       
        
}

function loadlevel(whichLevel){
   
    var smh=lvls[whichLevel]
    trackGrid=smh.slice();
    keys=0;
    trophies=0;
    plantCount=0;
    shooterZombies.shot.x=-200;
    trophieCount();
//   plantArray=new Array(plantCount);
//     for(var i=0;i<plantArray.length;i++){
//         plantArray[i]=new plant();
//     }
    console.log(trophies);

}
function trophieCount(){
    for(var i=0;i<trackGrid.length;i++){
        if(trackGrid[i]==goal){
            trophies++;
        }
        if(trackGrid[i]==plants){
plantCount++;
        }
        projectileShooterCollision=true;
        projectileBatCollision=true;
        projectileZombieCollision=true;
    }
}


function all(){
    moveAll();
    drawAll();
}


function moveAll(){
    peashooter.shot();
    zombies.checkMove();
    shooterZombies.checkMove();
    bluePlayer.playerMove();
    bluePlayer.tracksmh();
    npc.edgeWrap();
    npc.move(projectileBatCollision);
    zombies.tracsmh();
    shooterZombies.tracksmh(bluePlayer,projectileShooterCollision);
    shooterZombies.move(projectileShooterCollision);
    zombies.move(projectileZombieCollision);
    // console.log(enemyDefeated);

    
    
}

rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
   
        
        
   
shooterZombies.shooterReset();
peashooter.reset();
 zombies.reset();
bluePlayer.playerReset();
trackCreate();
zombies.draw(projectileZombieCollision); 
shooterZombies.draw(projectileShooterCollision);
peashooter.draw(bluePlayer);
bluePlayer.check(zombies);
bluePlayer.check(npc);
bluePlayer.check(shooterZombies.shot);
bluePlayer.draw();
npc.draw(projectileBatCollision);
}
