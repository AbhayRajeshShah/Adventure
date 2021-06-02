function createProjectile(){
    this.x=0;
    this.y=0;
    this.speed=6;
    this.life=0;
    this.checkMove=function(what){
        this.y=what.y-25;
        this.x=what.x;
        this.life=50;


    }
    this.move=function(check){
        if(this.life!=0){

             this.life--;
             if(check){
                this.x-=this.speed;
             }else{
                this.x+=this.speed;
             }

         }
    }
    this.draw=function(check){
        if(this.life!=0){
            if(check){
                canvasContext.drawImage(projectileLeftPic,this.x,this.y);
            }else{
                canvasContext.drawImage(projectilePic,this.x,this.y);
            }
        }

    }
    this.check=function(what){
        var dist=Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y)));
        if(dist<50){
            projectileBatCollision=false;
        }
    }

}