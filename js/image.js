
var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var treePic = document.createElement("img");
var flagPic = document.createElement("img");
var goalPic = document.createElement("img");
var otherCarPic = document.createElement("img");



var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImages() {
	// next line is just an example, not using, will remove later
	var dataSet = {varName: carPic, theFile: "player1car.png"};

	var imageList = [
		{varName: carPic, theFile: "player1car.png"},
		{varName: roadPic, theFile: "world_road.png"},
		{varName: wallPic, theFile: "world_wall.png"},
		{varName: treePic, theFile: "world_tree.png"},
		{varName: goalPic, theFile: "world_goal.png"},
		{varName: flagPic, theFile: "world_flag.png"}
		];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);
	}
}