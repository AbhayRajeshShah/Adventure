shooter.prototype=new zombie();
function shooter(){
    this.pauseLimit=0;
    var direction=0;
    this.Draw=this.draw;
    var shot=new createProjectile();
    this.draw=function(){
        this.Draw();
        shot.draw();
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
        
    drawBitmapWithRotation(zombiePic,this.x,this.y);   
    
    }
    this.Move=this.move;
    this.move=function(){
    if(this.pauseLimit!=0){
        this.Move();
        if(this.fireCheck){
        shot.checkMove(this,50);
        this.pauseLimit+=50;
        }
        if(this.checkLeft){
            direction=0;
        }
        if(this.checkRight){
            direction=2;
        }
        
    }else{
    this.fireCheck=false;
    this.pauseLimit--;
    shot.projectileMove(direction);
    }
    }
    this.CheckMove=this.checkMove;
    this.checkMove=function(){
        this.CheckMove();
    }
    this.Tracksmh=this.tracksmh;
    this.tracksmh=function(what){
    this.Tracksmh();
    
    var playerIndexY=Math.floor(what.y/trackW);
    if(this.zombieIndexY==playerIndexY){
         this.fireCheck=true;
    }
    }
}