const trackH = 50;
const trackW = 50;
var enemyDefeated=0;
var level=0;
var bRow = 12;
var bCol = 16;
var levelOne = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 13, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 4, 0, 4, 0, 1, 0, 0, 0, 0, 0, 5, 0, 3, 0, 1,
    1, 1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 8, 0, 0, 0, 7, 0, 1,
    1, 0, 0, 10, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var levelTwo=
[10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
1, 0, 3, 4, 4, 5, 5, 0, 0, 0, 0, 5, 0, 3, 0, 1,
1, 1, 1, 5, 1, 1, 6, 0, 0, 0, 0, 1, 1, 1, 1, 1,
1, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
1, 0, 6, 6, 6, 0, 0, 0, 0, 8, 0, 0, 0, 7, 0, 1,
1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1,
1,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
1, 0, 0, 0, 1, 5, 1, 1, 0, 13, 0, 0, 0, 0, 0, 1,
1,12, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1,
1, 0, 4, 0, 1, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 9,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];    
var lvls=[levelOne,levelTwo];

        
trackGrid=[];
const road = 0;
const wall=1;
const tree=4;
const flag=5;
const goal=3;
const lava =6;
const prevLevel=9;
const nextlevel=10;
const ammoDrop=11;
const plants=12;
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
                    case ammoDrop: img=ammoPic;break;
                    case prevLevel:img=prevL;break;
                    case nextlevel: img=nextL;break;
                }
                canvasContext.drawImage(roadPic,i*trackW,j*trackH);
                
                canvasContext.drawImage(img,i*trackW,j*trackH);
                
            }
        }
    
        }

    

        