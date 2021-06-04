shooter.prototype=new zombie();
function shooter(){
    this.pauseLimit=0;
    var direction=0;
    var prevIndexX=this.zombieIndexX;
    var prevIndexY=this.zombieIndexY;
    var playerIndexX;
    var playerIndexY;
    var zombieLeft;
    var i=0;
    
    
    this.shot=new createProjectile();
    this.draw=function(kuchbhi){
        if(kuchbhi){
            i=0;
            if(zombieLeft){
                drawBitmapWithRotation(shooterZombiePic,this.x,this.y); 
            }else{
                drawBitmapWithRotation(shooterZombieLeftPic,this.x,this.y);
            }
            this.shot.draw(direction);
        }else{
            if(i==0){
                enemyDefeated+=1;
                this.indexX=Math.floor(this.x/trackW);
                this.indexY=Math.floor(this.y/trackH);
                this.index=this.indexY*bCol+this.indexX;
                 if(enemyDefeated%5==0){
                    trackGrid[this.index]=11;
                    trackGrid[this.index+1]=11;
                    
                 }
            }
            i=1;
            this.x=-500;
            this.shot.x=-100;
            
        }
       
    }
    
    this.shooterReset=function(){
        var index = -1;
        for(var j=0;j<bRow;j++){
            for(var i=0;i<bCol;i++){
                index++;
                if(trackGrid[index]==8){
                    trackGrid[index]=0;
                    this.x = i*trackW+trackW/2;
                    this.y = j*trackH+trackH/2;
                    return;
                }
                
            }
        }
        
    drawBitmapWithRotation(shooterZombiePic,this.x,this.y);   
    
    }

    this.move=function(kuchbhi){
        if(kuchbhi){
            if(this.pauseLimit==0){
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
                if(this.fireCheck){
                this.shot.checkMove(this,50);
                this.pauseLimit+=50;
                this.fireCheck=false;
                }
                
            }
            else{
                
            this.pauseLimit--;
            this.shot.projectileMove(direction);
            
            }
        }
    
    }
    this.checkMove();
    
    this.tracksmh=function(what,kuchbhi){
        if(kuchbhi){
            this.zombieIndexX=Math.floor(this.x/trackW);
            this.zombieIndexY=Math.floor(this.y/trackH);
            
            this.zombieIndex=this.zombieIndexY*bCol+this.zombieIndexX;
            
           
            if(this.zombieIndexX>=0 && this.zombieIndexX<bCol && this.zombieIndexY>=0 && this.zombieIndexY<bRow){
               if(trackGrid[this.zombieIndex]==1){
    
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
            
         playerIndexX=Math.floor(what.x/trackW);
        playerIndexY=Math.floor(what.y/trackH);
        
        if(this.zombieIndexY==playerIndexY){
            if(this.zombieIndexX>playerIndexX){
                if(this.zombieIndexX-playerIndexX<=4&&this.zombieIndexX-playerIndexX>=0){
                    direction=0;
                    zombieLeft=true;
                    this.fireCheck=true;
                }
                
            }else if(this.zombieIndexX<playerIndexX){
                if(playerIndexX-this.zombieIndexX<=4&&playerIndexX-this.zombieIndexX>=0){
                zombieLeft=false;
                direction=2;
                this.fireCheck=true;
                }
                
            }
            
        }
        }
        
    }
    
    
}