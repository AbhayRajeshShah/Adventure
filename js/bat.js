var case1=0;
const speed=1;
function bat(){
    this.x=100;
    this.y=100;
    this.xv=0;
    this.yv=0;
    this.randAngle=0;
    this.random;
   
    this.timeUntilMovement=65;
    this.timeUp=100;
    this.speedX=12;
    this.speedY=10;
   this.draw=function(kuchbhi){
       if(kuchbhi){
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
       }
    
       
       
   }
   this.move=function(){
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
    
}}