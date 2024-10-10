//this is 2x version

let home;
let lightbox;
let elements=[];
let elementBox=[];
let flag=0;

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
  elements[1]=loadImage('assets/lightboxes/'+1+'.png'); 
elements[2]=loadImage('assets/lightboxes/'+2+'.png'); 
elements[3]=loadImage('assets/lightboxes/'+3+'.png'); 
elements[4]=loadImage('assets/lightboxes/'+4+'.png'); 
elements[5]=loadImage('assets/lightboxes/'+5+'.png'); 
elements[6]=loadImage('assets/lightboxes/'+6+'.png'); 
elements[7]=loadImage('assets/lightboxes/'+7+'.png'); 
elements[8]=loadImage('assets/lightboxes/'+8+'.png'); 
elements[9]=loadImage('assets/lightboxes/'+9+'.png'); 
elements[10]=loadImage('assets/lightboxes/'+10+'.png'); 
elements[11]=loadImage('assets/lightboxes/'+11+'.png'); 
elements[12]=loadImage('assets/lightboxes/'+12+'.png'); 
elements[13]=loadImage('assets/lightboxes/'+13+'.png'); 
elements[14]=loadImage('assets/lightboxes/'+14+'.png'); 
elements[15]=loadImage('assets/lightboxes/'+15+'.png'); 
elements[16]=loadImage('assets/lightboxes/'+16+'.png'); 
elements[17]=loadImage('assets/lightboxes/'+17+'.png'); 
elements[18]=loadImage('assets/lightboxes/'+18+'.png'); 
elements[19]=loadImage('assets/lightboxes/'+19+'.png'); 
elements[20]=loadImage('assets/lightboxes/'+20+'.png'); 
elements[21]=loadImage('assets/lightboxes/'+21+'.png'); 
elements[22]=loadImage('assets/lightboxes/'+22+'.png'); 
elements[23]=loadImage('assets/lightboxes/'+23+'.png'); 
elements[24]=loadImage('assets/lightboxes/'+24+'.png'); 
elements[25]=loadImage('assets/lightboxes/'+25+'.png'); 
elements[26]=loadImage('assets/lightboxes/'+26+'.png'); 
elements[27]=loadImage('assets/lightboxes/'+27+'.png'); 
elements[28]=loadImage('assets/lightboxes/'+28+'.png'); 
elements[29]=loadImage('assets/lightboxes/'+29+'.png'); 
elements[30]=loadImage('assets/lightboxes/'+30+'.png'); 
elements[31]=loadImage('assets/lightboxes/'+31+'.png'); 
elements[32]=loadImage('assets/lightboxes/'+32+'.png'); 
elements[33]=loadImage('assets/lightboxes/'+33+'.png'); 
elements[34]=loadImage('assets/lightboxes/'+34+'.png'); 
elements[35]=loadImage('assets/lightboxes/'+35+'.png'); 
elements[36]=loadImage('assets/lightboxes/'+36+'.png'); 
elements[37]=loadImage('assets/lightboxes/'+37+'.png'); 
elements[38]=loadImage('assets/lightboxes/'+38+'.png'); 
elements[39]=loadImage('assets/lightboxes/'+39+'.png'); 
elements[40]=loadImage('assets/lightboxes/'+40+'.png'); 
elements[41]=loadImage('assets/lightboxes/'+41+'.png'); 
elements[42]=loadImage('assets/lightboxes/'+42+'.png'); 
elements[43]=loadImage('assets/lightboxes/'+43+'.png'); 
elements[44]=loadImage('assets/lightboxes/'+44+'.png');
elements[45]=loadImage('assets/lightboxes/'+45+'.png');


  // for (let i=1; i<46; i++){
  //   elements[i]=loadImage('assets/lightboxes/'+i+'.png');
  // }
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
  //console.log("clicked")
  console.log("elementBox.push({x:", locX, ", y:", locY, "});" );
  for (let i=0; i<elementBox.length; i++){
    let x=elementBox[i].x;
    let y=elementBox[i].y;
    if (locX>x && locY>y && locX<x+82 && locY<y+82 && flag==0){
      flag=1;
      
      drawLightBox(i);
    } 
    
    
  }


  if (flag=1 && locX>80 && locY>100 && locX<=127 && locY<=143){
    flag=0;
    clearLightBox();
  }

  if (locX>1030 && locY>770){
    let fs = fullscreen();
    fullscreen(!fs);
  }
 
}

function draw() {
 
  locX=mouseX;
  locY=mouseY;
  //console.log(locX, locY)
  
}

function drawLightBox(index){
  lightbox.background(0, 130);
  lightbox.image(elements[index+1], 78, 96.5, 921, 546);
  image(lightbox, 0, 0);

}

function clearLightBox(){
  lightbox.clear();
  clear();
  image(home, 0, 0, 1080, 780);
}



// function touchStarted () {
//   if (!fullscreen()) {
//     fullscreen(true);
//   }
// }

// /* full screening will change the size of the canvas */
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// /* prevents the mobile browser from processing some default
//  * touch events, like swiping left for "back" or scrolling the page.
//  */
// document.ontouchmove = function(event) {
//     event.preventDefault();
// };

