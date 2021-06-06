var case1=0;
const speed=1;
function bat(){
    this.x;
    this.y;
    this.xv=0;
    this.yv=0;
    this.randAngle=0;
    this.random;
    this.indexX;
    this.indexY;
    this.index;
    this.timeUntilMovement=65;
    this.timeUp=100;
    this.speedX=12;
    this.speedY=10;
    this.alive=true;
    
    var i=0;
    this.type=0;
   this.draw=function(){
       if(this.alive){
        i=0;
        if(this.timeUntilMovement!=0){
            case1+=0.15
           if(case1>=0&&case1<1){
           
          
           return drawBitmapWithRotation(batPic,this.x,this.y,this.randAngle);
           }else if(case1>=1&&case1<2){
            
           return drawBitmapWithRotation(batDownPic,this.x,this.y,this.randAngle);
           
           }else if(case1>=2){
               if(case1>2.9){
                   case1=0;
               }
            return drawBitmapWithRotation(batAbovePic,this.x,this.y,this.randAngle);
           }
        }else{
            canvasContext.drawImage(batPic,this.x,this.y);
        }
       }else{
        if(i==0){
            enemyDefeated+=1;
            this.indexX=Math.floor(this.x/trackW);
            this.indexY=Math.floor(this.y/trackH);
            this.index=this.indexY*bCol+this.indexX;
            console.log(this.index);
             if(enemyDefeated%5==0){
                trackGrid[this.index]=11;
                
             }
        }
        i=1;
        
        this.x=-50;
        this.y=-50;
        
       }  
       
       
   }
   this.move=function(){
       if(this.alive){
           
        if(this.timeUntilMovement!=0){
            this.timeUntilMovement--;
        
        this.xv = Math.cos(this.randAngle)*speed;
        this.yv= Math.sin(this.randAngle)*speed;
       
       
     this.x+=this.xv*this.speedX;
     this.y+=this.yv*this.speedY;
        
        }
        else{
            this.timeUp--;
        }
        if(this.timeUp==0){
            this.timeUntilMovement=65;
            this.timeUp=100;
            this.randAngle=Math.random()*Math.PI*2;
        }

       }
       
       
       
   }
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
                if(trackGrid[index]==13){
                    trackGrid[index]=0;
                    this.x = i*trackW+trackW/2;
                    this.y = j*trackH+trackH/2;
                    this.timeUp=Math.floor(Math.random()*100);
                    return;
                }
                
            }
        }
        drawBitmapWithRotation(batPic,this.x,this.y);   
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