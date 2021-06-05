var keys=0;
var trophies=0;
var facingleft=false;
var direction=0;
var projectileShooterCollision=true;
var projectileBatCollision=true;
var projectileZombieCollision=true;
var trophieArray=[];
var keyArray=[];
function playerclass(){
    this.hit=new createProjectile();
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
this.textTime=50;
    var outOfAmmo=false;

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

this.playerReset=function(){
    
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

        
            drawBitmapWithRotation(carPic,this.x,this.y,this.ang);
        
        
       
}

this.tracksmh=function(){
    if(this.hp<=0){
        for(var i=0;i<trophieArray.length;i++){
            lvls[trophieArray[i].level][trophieArray[i].index]=trophieArray[i].what;
        }
        enemyDefeated=0;
        level=0;
        this.hp=200;
        this.hit.ammo=3;
       loadlevel(level);
    }
    
    var playerIndexX = Math.floor(this.x/trackW);
var playerIndexY = Math.floor(this.y/trackH);

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
    
}


function smh(col,row){
    var index = row*bCol + col;
    return index;
}

if(playerIndexX>=0 && playerIndexX<bCol && playerIndexY>=0 && playerIndexY<bRow){
    var index=smh(playerIndexX,playerIndexY);
    
    if(trackGrid[index]==goal){
        trophies++;
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
           if(this.y<canvas.height/2){
            this.y+=this.speed;
           }else{
               this.y-=this.speed;
           }
           if(this.x<canvas.width/2){
            this.x+=this.speed;
           }else{
               this.x-=this.speed;
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

  
}else if(trackGrid[index]==nextlevel){
        level++;
        if(level>1){
            level=0;

       
       
       
    }
    if(this.hit.ammo<3){
        this.hit.ammo++;
    }
    loadlevel(level);

}else if(trackGrid[index]==prevLevel){
    level--;
    loadlevel(level);
}else if(trackGrid[index]==ammoDrop){
    if(this.hit.ammo<3){
        this.hit.ammo+=2;
    }
    
    trackGrid[index]=lvls[level][index];
    
}

}

}

this.idk=0;
this.batIdk=0;
this.check=function(what){
        if(what.type==0){
            var dist = Math.floor(Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y))));
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
        }else{
            var dist = Math.floor(Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y))));
            if(dist<50){
                this.batIdk+=this.hpPerHeart;
                        if(this.batIdk>this.hpPerHeart){
                            this.hp=this.hp;
                        }else{
                            this.hp-=this.batIdk;
                        }
                    }else{
                        this.batIdk=0;
                    }
        }
        
        
    
       
   
    }
    this.shooterCheck=function(what){
        var dist = Math.floor(Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y))));
        if(dist<50&&dist>=40){
            this.hp-=2;
        }
    }
}