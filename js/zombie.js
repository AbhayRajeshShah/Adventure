function zombie(){
    this.x;
    this.y;
    this.continue=false;
    this.speed=2;
    var zombieLeft=false
    this.rand;
    this.type=2;
    this.timeLeft=0;
    this.checkLeft=false;
    this.checkRight=false;
    this.checkFront=false;
    this.checkDown=false;
    this.smh=105;
    var prevIndexX;
    var prevIndexY;
    this.zombieIndexX;
    this.zombieIndexY;
    this.alive=true;
    this.zombieIndex;
    var i=0;
    this.edgeWrap=function(){
        if(this.x<0){
           this.speedX*=-1;
           this.x+=25;
           
            
        }else if(this.x>canvas.width){
         this.speedX*=-1;
         this.x-=25;
            
        }
       else if(this.y<0){
         this.speedY*=-1;
         this.y+=25;
         
         
     }else if(this.y>canvas.height){
         this.speedY*=-1;
         this.y-=25;
     }
     
 }
    this.reset=function(){
        var index = -1;
            for(var j=0;j<bRow;j++){
                for(var i=0;i<bCol;i++){
                    index++;
                    if(trackGrid[index]==7){
                        trackGrid[index]=0;
                        this.x = i*trackW+trackW/2;
                        this.y = j*trackH+trackH/2;
                        return;
                    }
                    
                }
            }
            
        drawBitmapWithRotation(zombiePic,this.x,this.y);   
    }
    this.checkMove=function(){
    if(this.smh!=0){
        this.speed=2;
this.smh--;
this.checkLeft=false;
    this.checkRight=false;
    this.checkFront=false;
    this.checkDown=false;
switch(this.rand){
    case 2:this.checkLeft=true;break;
    case 3:this.checkRight=true;break;
    case 4:this.checkFront=true;break;
    case 5:this.checkDown=true;break;
    case 6:this.checkLeft=true;this.checkFront=true;break;
    case 7:this.checkLeft=true;this.checkDown=true;break;
    case 8:this.checkRight=true;this.checkFront=true;break;
    case 9:this.checkRight=true;this.checkDown=true;break;
}  
}else{
    this.timeLeft--;
    this.continue=false;
}
if(this.timeLeft==0){
    this.rand=Math.floor(Math.random()*10);
    this.smh=65;
    this.timeLeft=105;
    this.continue=true;
}
    }
    this.move=function(){
        if(this.alive){

            prevIndexX=this.zombieIndexX;
            prevIndexY=this.zombieIndexY;
           if(this.continue){
               if(this.checkLeft){
                  
                   zombieLeft=true;
                   
                   this.x-=this.speed;
                   prevIndexX=Math.floor((this.x+this.speed)/trackW);
               }
               if(this.checkRight){
                   
                   zombieLeft=false;
                   this.x+=this.speed;
                   prevIndexX=Math.floor((this.x-this.speed)/trackW);
               }
               if(this.checkFront){
                   
                   this.y-=this.speed;
                   prevIndexY=Math.floor((this.y+this.speed)/trackH);
               }
               if(this.checkDown){
                   prevIndexY=Math.floor((this.y-this.speed)/trackH);
                   this.y+=this.speed;
               }
           }
           
        }
        

    }
    
    this.tracsmh=function(){
       
       this.zombieIndexX=Math.floor(this.x/trackW);
        this.zombieIndexY=Math.floor(this.y/trackH);
        
        this.zombieIndex=this.zombieIndexY*bCol+this.zombieIndexX;
        
        if(this.zombieIndexX>=0 && this.zombieIndexX<bCol && this.zombieIndexY>=0 && this.zombieIndexY<bRow){
           if(trackGrid[this.zombieIndex]==1||trackGrid[this.zombieIndex]==9||trackGrid[this.zombieIndex]==10){

            if(this.zombieIndexY>prevIndexY){
                this.y=(prevIndexY)*trackH;
              }else if(this.zombieIndexY<prevIndexY){
                  this.y=(this.zombieIndexY+2)*trackH;
              }
              if(this.zombieIndexX>prevIndexX){
                  this.x=(prevIndexX)*trackW;
              }else if(this.zombieIndexX<prevIndexX){
                  this.x=(this.zombieIndexX+2)*trackW;
              }
           
       
              
           }
        }
    }
this.draw=function(){
    if(this.alive){
        i=0;
        if(zombieLeft){
            drawBitmapWithRotation(zombieLeftPic,this.x,this.y); 
        }else{
            drawBitmapWithRotation(zombiePic,this.x,this.y);
        }
    }else{
        if(i==0){
            enemyDefeated+=1;
            this.indexX=Math.floor(this.x/trackW);
            this.indexY=Math.floor(this.y/trackH);
            this.index=this.indexY*bCol+this.indexX;
             if(enemyDefeated%5==0){
                trackGrid[this.index]=11;
               
             }
             if(enemyDefeated%8==0){
                trackGrid[this.index]=20;
                
             }
        }
        i=1;
       
        this.x=-500;
    }
    
}
var j=0;
    this.dist=function(what){
        var dist;
        dist=Math.floor(Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y))));
        
        if(dist<50){
            j+=what.hpPerHeart;
            if(j==what.hpPerHeart){
                what.hp-=j;
            }
        }else{
            j=0;
        }
    }

}