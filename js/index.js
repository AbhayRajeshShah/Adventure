//canvas
var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var bluePlayer=new playerclass();



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
        console.log(trophies);
    }

bluePlayer.playerReset(carPic);


}

function all(){
    moveAll();
    drawAll();
}




function moveAll(){
    
    bluePlayer.playerMove();
    bluePlayer.tracksmh();
}


rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
trackCreate();
bluePlayer.playerReset(carPic);

}



