var cacador1,cacador2,cacador3;
var navio;
var indio;
var imgdefundo;
var balacacador;
var dardo;
var cacador1img,cacador2img,cacador3img;
var navioimg;
var indioimg;
var imgdefundoimg;
var balacacadorimg;
var dardoimg;

function preload(){
    cacador1img=loadImage("cacador1.png");
    cacador2img=loadImage("cacador2.png");
    cacador3img=loadImage("cacador3.png");
    navioimg=loadImage("barco.png");
    dardoimg=loadImage("zarabatana.png");
    balacacadorimg=loadImage("bala.png");
    indioimg=loadImage("indio.png");
    imgdefundoimg=loadImage("background.gif");

}

function setup(){
  createCanvas(1500,750);
    cacador1=createSprite(1440,80,50,60);
    cacador1.addImage(cacador1img);
    cacador2=createSprite(1240,80,50,60);
    cacador2.addImage(cacador2img);
    cacador3=createSprite(1140,80,50,60);
    cacador3.addImage(cacador3img);
    navio=createSprite(1200,500,140,100);
    navio.addImage(navioimg);
    navio.scale=2.2;
    // balacacador=createSprite
    // dardo=createSprite
    indio=createSprite(75,400,60,40);
    indio.addImage(indioimg);
    indio.scale=0.6;



    
}

function draw(){
background(imgdefundoimg);

if(keyDown(UP_ARROW)){

  indio.y=indio.y-4.5;

}

if(keyDown(DOWN_ARROW)){

  indio.y=indio.y+4.5;

}


drawSprites();
}