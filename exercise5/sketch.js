function setup(){
    createCanvas(800,800)
    background(255)
    fill(0) 
    // head//
  ellipse(400, 400, 100, 100)
  triangle(300, 300, 370, 390, 360, 400)
  triangle(430, 400, 440, 400, 470, 300)
  //body//
  rect(350,452,100,150,100)
  rect(388,440,25,70,100)
  // legs //
  rect(409,540,40,150,50)
  rect(350,540,40,150,50)
  //arms //
  strokeWeight(30)
 line(360, 490,290, 540)
 line(520, 560,440, 500)
}