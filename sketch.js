function setup() {
  createCanvas(400, 400);
}

  function draw() {
  
  if (mouseIsPressed){
    background(30,30,30) ;
    
    
        {if (mouseX < 140 && mouseX > 60 && mouseY < 240 && mouseY > 160) {
    ellipse(100, 200, 160, 160);
    } else {
          ellipse(100, 200, 80, 80);  //moon
    }}
    
    
    ellipse(20, 239, 5, 5);
    ellipse(193, 78, 5, 5);
    ellipse(10, 36, 5, 5);
    ellipse(394, 124, 5, 5);
    ellipse(133, 94, 10, 10);
    ellipse(95, 332, 10, 10);
    ellipse(333, 59, 10, 10);
    ellipse(23, 95, 10, 10);
    ellipse(250, 48, 10, 10);
    ellipse(85, 19, 10, 10);
    ellipse(130, 38, 10, 10);
    ellipse(380, 39, 10, 10);
    ellipse(325, 395, 5, 5);
    ellipse(200, 380, 10, 10);
    ellipse(178, 321, 10, 10);
    ellipse(200, 39, 5, 5);
    ellipse(320, 370, 10, 10);
    ellipse(390, 277, 10, 10);
    ellipse(20, 299, 10, 10);
    ellipse(395, 39, 5, 5);
    ellipse(20, 39, 10, 10);
    ellipse(210, 200, 10, 10);
    ellipse(200, 205, 5, 5);
    ellipse(187, 187, 5, 5);
    ellipse(250, 250, 5, 5);
    ellipse(260, 260, 10, 10);
    ellipse(175, 175, 10, 10);
    ellipse(333, 59, 10, 10);
    ellipse(203, 100, 10, 10);
    ellipse(195, 215, 10, 10);
    ellipse(180, 238, 10, 10);
    ellipse(325, 248, 5, 5);
    ellipse(200, 100, 10, 10);
    ellipse(220, 98, 10, 10);
    ellipse(207, 198, 10, 10);
    ellipse(287, 197, 10, 10);
    
    
    
     
  } else if (mouseY > 320) {
    cursor(background(51, 68, 87));
    ellipse(mouseX, mouseY, 80, 80);
  } else if (mouseY > 240 && mouseY < 321) {
    cursor(background(127, 162, 188));
    ellipse(mouseX, mouseY, 80, 80);
  } else if (mouseY > 160 && mouseY < 241) {
    cursor(background(233, 186, 140));
    ellipse(mouseX, mouseY, 80, 80);
  } else if (mouseY > 80 && mouseY < 161) {
    cursor(background(236, 205, 142));
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    cursor(background(253, 253, 151));
    ellipse(mouseX, mouseY, 80, 80);
  }
}

// YELLOW 253, 253, 151
// yellow 236, 205, 142
// orange 233, 186, 140
// blue 127, 162, 188
// dark 51, 68, 87