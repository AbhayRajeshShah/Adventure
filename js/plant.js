
function plant(){
this.x;
this.y;

this.shotx;
this.speed=4;
this.life=0;

this.reset=function(){
    var index = -1;
    
    for(var j=0;j<bRow;j++){
        for(var i=0;i<bCol;i++){

            index++;
            
            if(trackGrid[index]==plants){
                
                    trackGrid[index]=0;
                    this.x = i*trackW;
                    this.y = j*trackH;
                    var rand=Math.floor(Math.random()*50);
                this.life=rand;
                    return;
                    
                }
                
                
            }}
            
                
            canvasContext.drawImage(zombiePic,this.x,this.y);
}
this.shot=function(){
if(this.life!=0){
    this.life--;
    this.shotx+=this.speed;
    
}else{
    this.shotx=this.x+25;
    this.life+=50;
}

}
this.idk=0;
this.checkdraw=function(what){
    if(this.life!=0){
        var dist=Math.floor(Math.sqrt((this.shotx-what.x)*(this.shotx-what.x)+((this.y-what.y)*(this.y-what.y))));
        if(dist<10){
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
    
        circle(this.shotx,this.y+25,5,"#f2f405");
    
    canvasContext.drawImage(zombiePic,this.x,this.y);
}
}