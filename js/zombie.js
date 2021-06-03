function zombie(){
    this.x=0;
    this.y=0;
    this.continue=false;
    this.speed=2;
    var zombieLeft=false
    var rand;
    this.timeLeft=0;
    this.checkLeft=false;
    this.checkRight=false;
    this.checkFront=false;
    this.checkDown=false;
    this.smh=105;
    var prevIndexX;
    var prevIndexY;
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
switch(rand){
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
    rand=Math.floor(Math.random()*10);
    this.smh=65;
    this.timeLeft=105;
    this.continue=true;
}
    }
    this.move=function(kuchbhi){
        if(kuchbhi){

            prevIndexX=this.tracsmh.zombieIndexX;
            prevIndexY=this.tracsmh.zombieIndexY;
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
       
        var zombieIndexX=Math.floor(this.x/trackW);
        var zombieIndexY=Math.floor(this.y/trackH);
        
        var zombieIndex=zombieIndexY*bCol+zombieIndexX;
        console.log(zombieIndexY);
       
        if(zombieIndexX>=0 && zombieIndexX<bCol && zombieIndexY>=0 && zombieIndexY<bRow){
           if(trackGrid[zombieIndex]==1){

            if(zombieIndexY>prevIndexY){
                this.y=(prevIndexY)*trackH;
              }else if(zombieIndexY<prevIndexY){
                  this.y=(zombieIndexY+2)*trackH;
              }
              if(zombieIndexX>prevIndexX){
                  this.x=(prevIndexX)*trackW;
              }else if(zombieIndexX<prevIndexX){
                  this.x=(zombieIndexX+2)*trackW;
              }
           
       
              
           }
        }
    }
this.draw=function(kuchbhi){
    if(kuchbhi){
        if(zombieLeft){
            drawBitmapWithRotation(zombieLeftPic,this.x,this.y); 
        }else{
            drawBitmapWithRotation(zombiePic,this.x,this.y);
        }
    }
    
}
this.idk=0;
this.checkCollison=function(what,kuchbhi){
    if(kuchbhi){
        var dist=Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y)));
        this.idk+=what.hpPerHeart;
        if(dist<50){
            if(this.idk<what.hpPerHeart*2){
                what.hp-=this.idk;
            }
        }else{
            this.idk=0;
        }
    }
    
}
}