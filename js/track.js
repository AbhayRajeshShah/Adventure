const trackH = 50;
const trackW = 50;

var bRow = 12;
var bCol = 16;
var levelOne = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
                1, 4, 0, 4, 0, 1, 0, 0, 0, 0, 0, 5, 0, 3, 0, 1,
                1, 1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
                1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 1,
                1, 0, 0, 1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1,
                1, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
                1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
trackGrid=[];
const road = 0;
const wall=1;
const tree=4;
const flag=5;
const goal=3;
const lava =6;


                 //removing tracks
    
 
    function trackCreate(){
        var index = -1;
        for(var j=0;j<bRow;j++){
            for(var i=0;i<bCol;i++){
                
                index++;
                var tileHere=trackGrid[index]; 
                var img;
                switch(tileHere){
                    case wall: img=wallPic;break;
                    case road: img=roadPic;break;
                    case tree: img=treePic;break;
                    case flag: img=flagPic;break;
                    case goal: img=goalPic;break;
                    case lava: img=lavaPic;break;
                }
                canvasContext.drawImage(roadPic,i*trackW,j*trackH);
                
                canvasContext.drawImage(img,i*trackW,j*trackH);
                
            }
        }
    
        }

    

        