
function plant(){
this.x;
this.y;
this.direction;
this.shotx;
this.speed=4;
this.life=0;
this.shoty;
this.reset=function(){
    var index = -1;
    
    for(var j=0;j<bRow;j++){
        for(var i=0;i<bCol;i++){

            index++;
            
            if(trackGrid[index]==plants){
                
                    trackGrid[index]=0;
                    this.x = i*trackW;
                    this.y = j*trackH;
                    this.shotx=this.x;
                    this.shoty=this.shoty;
                    var rand=Math.floor(Math.random()*50);
                this.life=rand;
                if(this.x<175){
                    this.direction=2;
                }
                else if(this.x>canvas.width-150){
                    this.direction=0;
                }else if(this.y>canvas.height-150){
                     this.direction=1;
                }else if(this.y<150){
                    this.direction=3;
                }
                   
                return;  
                }
                
                
            }}
            
                
            canvasContext.drawImage(zombiePic,this.x,this.y);
}
this.shot=function(){
if(this.life!=0){
    this.life--;
    switch(this.direction){
         case 0: this.shotx-=this.speed;break;
         case 1: this.shoty-=this.speed;break;
         case 2: this.shotx+=this.speed;break;
         case 3: this.shoty+=this.speed;break;
    }
   
    
}else{
    this.shotx=this.x+25;
    this.shoty=this.y+25;
    this.life+=75;
}

}
this.idk=0;
this.checkdraw=function(what){
    if(this.life!=0){
        var dist=Math.floor(Math.sqrt((this.shotx-what.x)*(this.shotx-what.x)+((this.shoty-what.y)*(this.shoty-what.y))));
        if(dist<25){
            this.idk+=20;
            if(this.idk>20){
                what.hp=what.hp
            }else{
                what.hp-=this.idk;
            }
            
        }else{
            this.idk=0;
        }
       
    }
    
}
this.draw=function(){
    
        circle(this.shotx,this.shoty,5,"#f2f405");
    
    canvasContext.drawImage(zombiePic,this.x,this.y);
}
}