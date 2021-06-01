
function rect(x,y,w,h,color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,w,h);
}

function circle(x,y,r,color){
    canvasContext.fillStyle=color;
    canvasContext.beginPath();
    canvasContext.arc(x,y, r, 0,Math.PI*2, true );
    canvasContext.fill();
}

    
        
function drawBitmapWithRotation(bitmap,atX,atY,withAng){
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(bitmap,-bitmap.width/2,-bitmap.height/2);
    canvasContext.restore();
}