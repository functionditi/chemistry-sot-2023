//this is 2x version

let home;
let lightbox;
let elements=[];
let elementBox=[];
let flag=0;
let currentLightboxIndex = -1;

elementBox.push({x: 46, y: 185});
elementBox.push({x: 867 , y: 184 });
elementBox.push({x: 949 , y: 184 });
elementBox.push({x: 48 , y: 267 });
elementBox.push({x: 130 , y: 268 });
elementBox.push({x: 704 , y: 267 });
elementBox.push({x: 786 , y: 267 });
elementBox.push({x: 868 , y: 267 });
elementBox.push({x: 951 , y: 267 });
elementBox.push({x: 49 , y: 350 });
 elementBox.push({x: 130 , y: 350 });
 elementBox.push({x: 212 , y: 350 });
 elementBox.push({x: 295 , y: 351 });
 elementBox.push({x: 377 , y: 351 });
 elementBox.push({x: 458 , y: 350 });
 elementBox.push({x: 540 , y: 350 });
 elementBox.push({x: 621 , y: 350 });
 elementBox.push({x: 703 , y: 350 });
 elementBox.push({x: 786 , y: 351 });
 elementBox.push({x: 869 , y: 351 });
 elementBox.push({x: 950 , y: 352 });
 elementBox.push({x: 49 , y: 433 });
 elementBox.push({x: 130 , y: 433 });
 elementBox.push({x: 212 , y: 433 });
 elementBox.push({x: 294 , y: 432 });
 elementBox.push({x: 376 , y: 432 });
 elementBox.push({x: 458 , y: 433 });
 elementBox.push({x: 540 , y: 432 });
 elementBox.push({x: 622 , y: 433 });
 elementBox.push({x: 705 , y: 433 });
 elementBox.push({x: 787 , y: 434 });
 elementBox.push({x: 869 , y: 434 });
 elementBox.push({x: 951 , y: 433 });
 elementBox.push({x: 49 , y: 515 });
elementBox.push({x: 130 , y: 515 });
elementBox.push({x: 212 , y: 515 });
elementBox.push({x: 294 , y: 516 });
elementBox.push({x: 376 , y: 516 });
elementBox.push({x: 459 , y: 514 });
elementBox.push({x: 540 , y: 515 });
elementBox.push({x: 623 , y: 516 });
elementBox.push({x: 706 , y: 515 });
elementBox.push({x: 787 , y: 516 });
elementBox.push({x: 869 , y: 514 });
elementBox.push({x: 951 , y: 516 });

let locX, locY;
let main;
function preload(){
  home=loadImage('assets/home.png');
  for (let i=1; i<=45; i++){
    elements[i]=loadImage('assets/lightboxes/'+i+'.png');
  }
}

function setup() {
  main=createCanvas(1080, 780);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  main.position(x, y);
  main.mouseClicked(checkLocation);
  lightbox=createGraphics(1080, 780);
  background(255);
  image(home, 0, 0, 1080, 780);
}

function checkLocation(){
  console.log("elementBox.push({x:", locX, ", y:", locY, "});" );
  
  // Check for lightbox element click
  for (let i=0; i<elementBox.length; i++){
    let x=elementBox[i].x;
    let y=elementBox[i].y;
    if (locX>x && locY>y && locX<x+82 && locY<y+82 && flag==0){
      flag=1;
      currentLightboxIndex = i;
      drawLightBox(i);
    } 
  }

  // Close lightbox
  if (flag == 1 && locX > 80 && locY > 100 && locX <= 127 && locY <= 143){
    flag = 0;
    currentLightboxIndex = -1;
    clearLightBox();
  }

  // Toggle fullscreen
  if (locX > 1030 && locY > 770){
    let fs = fullscreen();
    fullscreen(!fs);
  }

  // Navigate to previous lightbox
  if (currentLightboxIndex!=44 && flag == 1 && locX > 903.5 && locX < 949.5 && locY > 594 && locY < 641 ){
    if (currentLightboxIndex > 0){
      currentLightboxIndex--;
      drawLightBox(currentLightboxIndex);
    }
  }

  if (currentLightboxIndex==44 && flag == 1 && locX > 952.5 && locX < 997.5 && locY > 597 && locY < 643){
    console.log ("yeah")
    currentLightboxIndex=42;
    drawLightBox(currentLightboxIndex);
  }

  // Navigate to next lightbox
  if (flag == 1 && locX > 952.5 && locX < 997.5 && locY > 597 && locY < 643){
    if (currentLightboxIndex < elements.length - 1){
      currentLightboxIndex++;
      drawLightBox(currentLightboxIndex);
    }
  }
}

function draw() {
  locX=mouseX;
  locY=mouseY;
  console.log(currentLightboxIndex)
}

function drawLightBox(index){
  clear();
  document.body.style.backgroundColor = "rgba(0, 0, 0, 130))"; // Change background color
  image(home, 0, 0, 1080, 780);
  lightbox.clear();
  lightbox.background(0, 130);
  lightbox.image(elements[index + 1], 78, 96.5, 921, 546);
  image(lightbox, 0, 0);
}

function clearLightBox(){
  lightbox.clear();
  document.body.style.backgroundColor = "#ffffff"; // Revert to original color
  clear();
  image(home, 0, 0, 1080, 780);
}