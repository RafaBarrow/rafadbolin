function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    
    stroke("red");
    fill("purple");
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  