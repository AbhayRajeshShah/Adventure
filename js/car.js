var keys=0;
var trophies=0;
var facingleft=false;
var direction=0;
var projectileShooterCollision=true;
var projectileBatCollision=true;
var projectileZombieCollision=true;
var trophieArray=[];
var buckets=0;
var axe=0;
var freezeSpell=0;
function playerclass(){
    this.hit=new createProjectile();
    this.hp;
    this.hpPerHeart=20;
    this.x;
    this.y;
    this.speed=2;
    this.ang;
    this.endText=300;
var fire=false;
this.pauseLimit=0;
    this.myPlayerPic;
this.accCheck = false;
this.downCheck=false;
this.leftCheck = false;
this.rightCheck = false;
this.defCheck=false;
this.fireCheck=false;
this.textTime=50;
this.waterText=0;
this.axeText=0;
this.freezeText=0;
    var outOfAmmo=false;
var playerIndexX;
var playerIndexY;
this.upar;
this.down;
this.left;
this.right;
this.shoot;
var prevIndexX;
var prevIndexY;
function smh(col,row){
    var index = row*bCol + col;
    return index;
}

this.edgeWrap=function(){
    if(this.x<0){
        level--;
        
        for(var i=0;i<11;i++){
            if(lvls[level][smh(15,playerIndexY+i)]==9){
                this.x=15*trackW;
                this.y=(playerIndexY+i)*trackH;
                loadlevel(level);
                return;
          }else if(lvls[level][smh(16,playerIndexY-i)]==9){
            this.x=15*trackW;
            this.y=(playerIndexY-i)*trackH;
            loadlevel(level);
            return;
      }
        }

       
        
    }  if(this.x>canvas.width){
        level++;
        for(var i=0;i<12;i++){
            if(lvls[level][smh(0,playerIndexY+i)]==9){
                this.x=trackW;
                this.y=(playerIndexY+i)*trackH;
                loadlevel(level);
                return;
          }else if(lvls[level][smh(0,playerIndexY-i)]==9){
            this.x=trackW;
            this.y=(playerIndexY-i)*trackH;
            loadlevel(level);
            return;
      }
        }
        
      

    }

   if(this.y<0){
 
    level-=3;
    for(var i=0;i<15;i++){;
        if(lvls[level][smh(playerIndexX+i,11)]==9){
            this.x=(playerIndexX+i)*trackW;
            this.y=11*trackH;
            console.log(this.y);
            loadlevel(level);
            return;
      }else if(lvls[level][smh(playerIndexX-i,11)]==9){
        this.x=(playerIndexX-i)*trackW;
        this.y=11*trackH;
        console.log(this.y);
        loadlevel(level);
        return;
  }
    }




     
     
 } if(this.y>canvas.height){
    level+=3;

    for(var i=0;i<15;i++){
        
        if(lvls[level][smh(playerIndexX+i,0)]==9){
            
            this.x=(playerIndexX+i)*trackW;
            this.y=1*trackH;
            loadlevel(level);
            return;
      }
      else if(lvls[level][smh(playerIndexX-i,0)]==9){
            
        this.x=(playerIndexX-i)*trackW;
        this.y=1*trackH;
        loadlevel(level);
        return;
  }
    }

 }
 
}
    
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
            this.hit.checkMove(this,25);
            this.pauseLimit+=50;
            
      }
      if(this.fireCheck){
          
       
          this.hit.checkMove(this,50)
        fire=true;
        this.pauseLimit+=50;
        this.hit.ammo--;
      }
}else{
 if(fire==false){
    this.hit.move(direction);
 }else{
     this.hit.projectileMove(direction);
     
 }
    this.pauseLimit--;
    for(var i=0;i<zombieArray.length;i++){
        this.hit.check(zombieArray[i]);
        
}
for(var i=0;i<batArray.length;i++){
    this.hit.check(batArray[i]);
    
}
for(var i=0;i<shooterArray.length;i++){
    this.hit.check(shooterArray[i]);
    
}
    
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



this.tracksmh=function(){
 console.log(trophies);
    if(this.hp<=0){
        for(var i=0;i<lvls.length;i++){
            for(var j=0;j<trackGrid.length;j++){
                if(lvls[i][j]==3){
                    trophies++;
                }
            }
        }
        for(var i=0;i<trophieArray.length;i++){
            lvls[trophieArray[i].level][trophieArray[i].index]=trophieArray[i].what;
        }
        enemyDefeated=0;
        level=4;
        this.hp=200;
        axe=0;
        buckets=0;
        freezeSpell=0;
        this.hit.ammo=3;
       loadlevel(level);
       
    }
    if(trophies<=0){
        
        for(var i=0;i<trophieArray.length;i++){
            lvls[trophieArray[i].level][trophieArray[i].index]=trophieArray[i].what;
        }
        console.log(this.endText);
        if(this.endText<0){
            for(var i=0;i<lvls.length;i++){
                for(var j=0;j<trackGrid.length;j++){
                    if(lvls[i][j]==3){
                        trophies++;
                    }
                }
            }
            enemyDefeated=0;
            level=4;
            this.hp=200;
            axe=0;
            buckets=0;
            freezeSpell=0;
            this.hit.ammo=3;
            
                loadlevel(level);
        }

        
        
       
       
    }
    
     playerIndexX = Math.floor(this.x/trackW);
 playerIndexY = Math.floor(this.y/trackH);

this.draw=function(){
    
    
    var i=22;
        // for( k;k>=0;k-=this.hpPerHeart){
            
        //         canvasContext.drawImage(heart,(i-bCol)*trackW,trackH);
        //     i++;
            

        // }
        rect((i-bCol)*trackW+10,trackH+10,100,20,"#a11616");
        rect((i-bCol)*trackW+10,trackH+10,this.hp/2,20,"#ff0032");

    if(facingleft){
        drawBitmapWithRotation(facingLeft,this.x,this.y,this.ang); 
    }else{
        drawBitmapWithRotation(carPic,this.x,this.y,this.ang);
    }
    this.hit.draw(direction,bluePlayer);
    if(this.hit.ammo<0){
        this.textTime=50;
      this.hit.ammo=0;
      this.hit.life=0;
      outOfAmmo=true;
      this.textTime=40;  
    }
    if(outOfAmmo){
        if(this.textTime!=0){
            this.textTime--;
            rect(canvas.width-315,50,70,40,"black");
           canvasContext.font="16px Arial";
           canvasContext.fillStyle="red";
           canvasContext.fillText("Ammo=0",canvas.width-315,70);
         
        }
    }else{
        for(var i=0;i<this.hit.ammo;i++){
            canvasContext.drawImage(ammoPic,canvas.width-310+(i*10),50);
        }}
        if(this.waterText>0){
              this.waterText--;
              canvasContext.drawImage(scrollPic,0,50);
              
        }
        if(this.axeText>0){
            this.axeText--;
            canvasContext.drawImage(scrollPic2,0,50);
            
      }
      if(trophies<=0){
        if(this.endText>=0){
            this.endText--;
            rect(0,0,canvas.width,canvas.height,"black");
            canvasContext.fillStyle="white";
            canvasContext.fillText("You Win",canvas.width/2,canvas.height/2);
            canvasContext.fillText("Enemies Defeated="+enemyDefeated,canvas.width/2,canvas.height/2+15);
        }
      }
      
      
    
}



if(playerIndexX>=0 && playerIndexX<bCol && playerIndexY>=0 && playerIndexY<bRow){
    var index=smh(playerIndexX,playerIndexY);
    
    if(trackGrid[index]==goal){
        trophies--;
        trackGrid[index]=road; 
        lvls[level][index]=0;
        var trophieSmh={
            level:level,
            index:index,
            what:3
        }
        trophieArray.push(trophieSmh);
    }
   else if(trackGrid[index]==flag){
       if(keys>0){
           keys--;
           trackGrid[index]=0;
           lvls[level][index]=0;
           var trophieSmh={
            level:level,
            index:index,
            what:5
        }
        trophieArray.push(trophieSmh);
       }else{
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
        
       }
}else if(trackGrid[index]==tree){

keys++;
trackGrid[index]=0;
lvls[level][index]=0;
var trophieSmh={
    level:level,
    index:index,
    what:4
}
trophieArray.push(trophieSmh);

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

  
}else if(trackGrid[index]==11){
    var i=0;
    if(i<1){
        if(this.hit.ammo<3){
            this.hit.ammo+=2;
        }
    }
   i=1;
   trackGrid[index]=0;
    
}else if(trackGrid[index]==Fire){
    
if(buckets>0){
    buckets--;
    
    trackGrid[index]=0;
    lvls[level][index]=0;
    var trophieSmh={
        level:level,
        index:index,
        what:Fire
    }
    
    trophieArray.push(trophieSmh);
}else{
    this.hp-=2;
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
        
    this.waterText=50;    
         
        
}
}else if(trackGrid[index]==water){
    buckets++;
    trackGrid[index]=0;
    lvls[level][index]=0;
    var trophieSmh={
        level:level,
        index:index,
        what:water
    }
    trophieArray.push(trophieSmh);
}
else if(trackGrid[index]==realObsidian){
    
    if(axe>0){
        axe--;
        
        trackGrid[index]=0;
        lvls[level][index]=0;
        var trophieSmh={
            level:level,
            index:index,
            what:realObsidian
        }
        
        trophieArray.push(trophieSmh);
    }else{
        
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
            
        this.axeText=50;    
             
            
    }
    }else if(trackGrid[index]==pickaxe){
        axe++;
        trackGrid[index]=0;
        lvls[level][index]=0;
        var trophieSmh={
            level:level,
            index:index,
            what:pickaxe
        }
        trophieArray.push(trophieSmh);
    }else if(trackGrid[index]==river){
        if(freezeSpell>0){
            freezeSpell--;
            
            trackGrid[index]=0;
            lvls[level][index]=0;
            var trophieSmh={
                level:level,
                index:index,
                what:river
            }
            trophieArray.push(trophieSmh);
        }else{
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
        }
            
        
    }else if(trackGrid[index]==freeze){
        freezeSpell++;
        trackGrid[index]=0;
        lvls[level][index]=0;
        var trophieSmh={
            level:level,
            index:index,
            what:freeze
        }
        trophieArray.push(trophieSmh);
    }else if(trackGrid[index]==heart){
        trackGrid[index]=0;
        lvls[level][index]=0;
        var trophieSmh={
            level:level,
            index:index,
            what:heart
        }
        trophieArray.push(trophieSmh);
        this.hp=200;
    }
}
  




}

    this.playerReset=function(){
    
        var index = -1;
            for(var j=0;j<bRow;j++){
                for(var i=0;i<bCol;i++){
                    
                    index++;
                    
                    if(trackGrid[index]==2){
                        trackGrid[index]=0;
                        lvls[level][index]=0;
                        var trophieSmh={
                            level:level,
                            index:index,
                            what:2
                        }
                        trophieArray.push(trophieSmh);
                        this.x = i*trackW+trackW/2;
                        this.y = j*trackH+trackH/2;
                        
                        return;
                    }
                    
                }
               
            }
    
            
                drawBitmapWithRotation(carPic,this.x,this.y,this.ang);
            
            
           
    }
   
}