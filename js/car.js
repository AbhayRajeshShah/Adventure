//player
var keys=0;
var trophies=0;
function playerclass(){
    this.x=100;
    this.y=100;
    this.speed=2;
    this.ang = 0;
    var min_speed=0.5;
    this.myPlayerPic;
this.accCheck = false;
this.downCheck=false;
this.leftCheck = false;
this.rightCheck = false;

this.upar;
this.down;
this.left;
this.right;

    
this.playerMove=function(){
    
    if(this.accCheck){
        this.y-=this.speed;
    }
    if(this.downCheck){
        this.y+=this.speed
    }
    if(Math.abs(this.speed)>min_speed){
        if(this.leftCheck){
            this.x-=this.speed;
        }
        if(this.rightCheck){
            this.x+=this.speed;
        }
    }
    

}
this.controls=function(upar,down,right,left){
    this.upar=upar;
    this.down=down;
    this.right=right;
    this.left=left;
}

this.playerReset=function(whichImage){
    this.myPlayerPic=whichImage;
    var index = -1;
        for(var j=0;j<bRow;j++){
            for(var i=0;i<bCol;i++){
                
                index++;
                
                if(trackGrid[index]==2){
                    trackGrid[index]=0;
                    this.x = i*trackW+trackW/2;
                    this.y = j*trackH+trackH/2;
                    
                    return;
                }
                
            }
           
        }
        drawBitmapWithRotation(this.myPlayerPic,this.x,this.y,this.ang);
       
}
this.tracksmh=function(){
    var playerIndexX = Math.floor(this.x/trackW);
var playerIndexY = Math.floor(this.y/trackH);

function smh(col,row){
    var index = row*bCol + col;
    return index;
}

if(playerIndexX>=0 && playerIndexX<bCol && playerIndexY>=0 && playerIndexY<bRow){
    var index=smh(playerIndexX,playerIndexY);
    
    if(trackGrid[index]==goal){
        trophies--;
        console.log(trophies);
        trackGrid[index]=road;
        if(trophies==0){
            loadlevel(levelOne);
        }
        
    }
   else if(trackGrid[index]==flag){
       if(keys>0){
           keys--;
           trackGrid[index]=0;
       }else{
           if(this.y<canvas.height/2){
            this.y+=this.speed;
           }else{
               this.y-=this.speed;
           }
        this.x-=this.speed;
        
       }
}else if(trackGrid[index]==tree){

keys++;
trackGrid[index]=0;
}else if(trackGrid[index]==wall){
    if(this.y<canvas.height/2){
        this.y+=this.speed;
       }else{
           this.y-=this.speed;
       }
       if(this.x<canvas.width/2){
        this.x+=this.speed;
       }else if(this.x>canvas.width/2){
        this.x-=this.speed;
       }
    
}
}
}
}

//onload evt listeners

