video ="";
STATUS="";

function preload(){

 video = createVideo("video.mp4");

}

function setup(){

 canvas = createCanvas(480,380);
 canvas.center();  
 video.hide()
}

function draw(){

image(video,0,0,480,380);    
}

function start(){

object_detector = ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("stutus").innerHTML = "Staus : Object Detecting"
    
}


function modelLoaded(){
    
    console.log("model Loaded")
    STATUS = true
    video.loop(1)
    video.volume(0)
    video.speed(1)

    
    
}