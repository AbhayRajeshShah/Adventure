//player
var keys=0;
var trophies=0;
var facingleft=false;
var direction=0;

var projectileBatCollision=true;
var projectileZombieCollision=true;
function playerclass(){
   var hit=new createProjectile();
    this.hp;
    this.hpPerHeart=20;
    this.x=100;
    this.y=100;
    this.speed=2;
    this.ang;
var fire=false;
this.pauseLimit=0;
    this.myPlayerPic;
this.accCheck = false;
this.downCheck=false;
this.leftCheck = false;
this.rightCheck = false;
this.defCheck=false;
this.fireCheck=false;

this.upar;
this.down;
this.left;
this.right;
this.shoot;
var prevIndexX;
var prevIndexY;

    
this.playerMove=function(){
prevIndexX=this.tracksmh.playerIndexX;
prevIndexY=this.tracksmh.playerIndexY;
if(this.pauseLimit==0){
 
    if(this.accCheck){
        this.ang=0;
        this.y-=this.speed;
         prevIndexY=Math.floor((this.y+this.speed)/trackH);
         direction=1;
         
    }
    if(this.downCheck){
       
        this.y+=this.speed
        prevIndexY=Math.floor((this.y-this.speed)/trackH);
        direction=3;
    }
    
        if(this.leftCheck){
            facingleft=true;
            this.x-=this.speed;
             prevIndexX=Math.floor((this.x+this.speed)/trackW);
             direction=0;
             
        }
        if(this.rightCheck){
            facingleft=false;
            this.x+=this.speed;
            prevIndexX=Math.floor((this.x-this.speed)/trackW);
            direction=2;
 
        }
        if(this.defCheck){
            fire=false;
            hit.checkMove(this,25);
            this.pauseLimit+=50;
            
      }
      if(this.fireCheck){
          
          console.log(hit.ammo);
          hit.checkMove(this,50)
        fire=true;
        this.pauseLimit+=50;
        hit.ammo--;
      }
}else{
 if(fire==false){
    hit.move(direction);
 }else{
     hit.projectileMove(direction);
     
 }
    this.pauseLimit--;
    
    hit.check(npc);
    hit.check(zombies);
}
    


   

}
this.controls=function(upar,down,right,left,def,fire){
    this.upar=upar;
    this.down=down;
    this.right=right;
    this.left=left;
    this.def=def;
    this.fire=fire;

}
this.defProjectile=function(){

}
this.playerReset=function(){
    
    var index = -1;
        for(var j=0;j<bRow;j++){
            for(var i=0;i<bCol;i++){
                
                index++;
                
                if(trackGrid[index]==2){
                    trackGrid[index]=0;
                    this.x = i*trackW+trackW/2;
                    this.y = j*trackH+trackH/2;
                    this.hp=79;
                    hit.ammo=3;
                    return;
                }
                
            }
           
        }

        
            drawBitmapWithRotation(carPic,this.x,this.y,this.ang);
        
        
       
}

this.tracksmh=function(){
    if(this.hp<=0){
       loadlevel(levelOne);
       
    }
    
    var playerIndexX = Math.floor(this.x/trackW);
var playerIndexY = Math.floor(this.y/trackH);

this.draw=function(){
   
    var k =this.hp;
    var i=22;
        for( k;k>=0;k-=this.hpPerHeart){
            
                canvasContext.drawImage(heart,(i-bCol)*trackW,trackH);
            i++;
            

        }

    if(facingleft){
        drawBitmapWithRotation(facingLeft,this.x,this.y,this.ang); 
    }else{
        drawBitmapWithRotation(carPic,this.x,this.y,this.ang);
    }
    hit.draw(direction);
}


function smh(col,row){
    var index = row*bCol + col;
    return index;
}

if(playerIndexX>=0 && playerIndexX<bCol && playerIndexY>=0 && playerIndexY<bRow){
    var index=smh(playerIndexX,playerIndexY);
    
    if(trackGrid[index]==goal){
        trophies--;
        
       
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
    if(playerIndexY>prevIndexY){
      this.y=(prevIndexY)*trackH;
    }else if(playerIndexY<prevIndexY){
        this.y=(playerIndexY+2)*trackH;
    }
    if(playerIndexX>prevIndexX){
        this.x=(prevIndexX)*trackW;
    }else if(playerIndexX<prevIndexX){
        this.x=(playerIndexX+2)*trackW;
    }
}else if(trackGrid[index]==lava){
    this.hp-=0.4;

  
}

}

}
this.idk=0;
this.check=function(what){
    var dist=Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y)))
    
    
        if(dist<50){
            this.idk+=this.hpPerHeart;
            if(this.idk>this.hpPerHeart){
                this.hp=this.hp;
            }else{
                this.hp-=this.idk;
            }
            
            
            
        }else{
            this.idk=0;
        }
   
    }
}