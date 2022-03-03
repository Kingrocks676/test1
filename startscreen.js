var startButton,startImg;
var backgroundImg;
var logo,logoImg;
var controls,controlsImg;
var quit,quitImg;

function preload()
{
    startImg=loadImage("assets/startButton.png");
    backgroundImg=loadImage("assets/city.jpg");
    logoImg=loadImage("assets/logo.jpeg");
    controlsImg=loadImage("assets/cotrols.png");
    quitImg=loadImage("assets/quit.png");
}
function setup()
{
    createCanvas(windowWidth, windowHeight);

    startButton=createSprite(windowWidth/2, windowHeight/2+110);
    startButton.addImage(startImg);
    startButton.scale=0.15;

    logo=createSprite(windowWidth/2, windowHeight/2-150)
    logo.addImage(logoImg);

    controls=createSprite(windowWidth/2, windowHeight/2+190);
    controls.addImage(controlsImg);
    controls.scale=0.15;

    quit=createSprite(windowWidth/2, windowHeight/2+270);
    quit.addImage(quitImg);
    quit.scale=0.15;
}
function draw()
{
    background(backgroundImg);
    fill('white');
    textSize(35);
    text('Zombie Crushers', windowWidth/2-130,windowHeight/2);
    textSize(25)
    text("Made by Ishan Dawane",windowWidth/2-130,windowHeight/2+35); 
    drawSprites();

    if(mousePressedOver(quit))
    {
        quitF();
    }
    if(mousePressedOver(startButton))
    {
        startGame();
    }
}

function quitF()
{
    window.close();
}

function startGame()
{
    window.open("./game.html");
    window.close();
}   