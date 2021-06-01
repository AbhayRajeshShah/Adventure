
//keys
var up_arrow = 38;
var down_arrow = 40;
var left_arrow = 37;
var right_arrow = 39;

var w=87;
var s=83
var a=65;
var d=68;




document.addEventListener("keydown",keyPressed);
document.addEventListener("keyup",keyRelease);

bluePlayer.controls(up_arrow,down_arrow,right_arrow,left_arrow);

function setInput(event,whichPlayer,setTo){
    if(event.keyCode==whichPlayer.down){
        whichPlayer.downCheck=setTo;
    }
    if(event.keyCode==whichPlayer.upar){
        whichPlayer.accCheck=setTo;
    }
    if(event.keyCode==whichPlayer.left){
        whichPlayer.leftCheck=setTo;
    }
    if(event.keyCode==whichPlayer.right){
        whichPlayer.rightCheck=setTo;
    } 
}


function keyPressed(evt){
    
    setInput(evt,bluePlayer,true);
}
function keyRelease(evt){
    
    setInput(evt,bluePlayer,false);
}
