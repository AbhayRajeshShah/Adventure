var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var bluePlayer=new playerclass();
var npc = new bat();
var zombies = new zombie();
var shooterZombies=new shooter();

var plantCount=0;
var plantArray;
var shooterCount=0;
var shooterArray;
var zombieCount=0;
var zombieArray;
var batCount=0;
var batArray;
// var peashooter=new plant();

window.onload=function(){
    loadImages();
}
function imageLoadingDoneSoStartGame(){
    
    
    bluePlayer.hp=200;
    bluePlayer.hit.ammo=3;
    
   loadlevel(level);
   for(var i=0;i<lvls.length;i++){
    for(var j=0;j<trackGrid.length;j++){
        if(lvls[i][j]==3){
            trophies++;
        }
    }
}
console.log(trophies);
    var framesPerSec=50;
    setInterval(all,1000/framesPerSec);
       
        
}

function loadlevel(whichLevel){
    
    var smh=lvls[whichLevel]
    trackGrid=smh.slice();
    batCount=0;
    shooterCount=0;
    zombieCount=0;
    plantCount=0;
   for(var i=0;i<trackGrid.length;i++){
       if(trackGrid[i]==plants){
           plantCount++;
       }
       if(trackGrid[i]==8){
           shooterCount++;
       }
       if(trackGrid[i]==7){
           zombieCount++;
       }
       if(trackGrid[i]==13){
           batCount++;
       }
   }
    
    
  plantArray=new Array(plantCount);
    for(var i=0;i<plantArray.length;i++){
        plantArray[i]=new plant();
    }
    zombieArray=new Array(zombieCount);
    for(var i=0;i<zombieArray.length;i++){
        zombieArray[i]=new zombie();
    }
   shooterArray=new Array(shooterCount);
    for(var i=0;i<shooterArray.length;i++){
        shooterArray[i]=new shooter();
    }
    batArray=new Array(batCount);
    for(var i=0;i<batArray.length;i++){
        batArray[i]=new bat();
    }

}


function all(){
    
    moveAll();
    drawAll();
}


function moveAll(){
   
   // peashooter.shot();
for(var k=0;k<zombieArray.length;k++){
    zombieArray[k].edgeWrap();  
    zombieArray[k].checkMove();  
   zombieArray[k].move();
   zombieArray[k].tracsmh();
  }  
  for(var k=0;k<shooterArray.length;k++){
      if(level==8){
          shooterArray[k].type=1;
      }
    shooterArray[k].edgeWrap(); 
    shooterArray[k].checkMove();  
   shooterArray[k].move();
   shooterArray[k].tracksmh(bluePlayer);
  }  
  for(var k=0;k<batArray.length;k++){
    batArray[k].edgeWrap();  
   batArray[k].move();
  
  }  
   
   bluePlayer.edgeWrap();
    bluePlayer.playerMove();
    bluePlayer.tracksmh();
    for(var k=0;k<plantArray.length;k++){
        plantArray[k].shot();  
       plantArray[k].checkdraw(bluePlayer);
      } 
    
 
    // console.log(enemyDefeated);

    
    
}

rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
    
 resetStuff(plantArray);
 resetStuff(zombieArray);
 resetStuff(shooterArray);
 resetStuff(batArray);  
 bluePlayer.playerReset();
trackCreate();

for(var i=0;i<zombieArray.length;i++){
    zombieArray[i].dist(bluePlayer);
}
for(var i=0;i<batArray.length;i++){
    batArray[i].dist(bluePlayer);
}
for(var i=0;i<shooterArray.length;i++){
    shooterArray[i].dist(bluePlayer);
}


bluePlayer.draw();
drawStuff(plantArray);
drawStuff(zombieArray);
 drawStuff(shooterArray);
 drawStuff(batArray);


}

function resetStuff(what){
    for(var j=0;j<what.length;j++){
        what[j].reset();
    }

}

function drawStuff(what){
    for(var j=0;j<what.length;j++){
        what[j].draw();
    }

}