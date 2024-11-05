let angle=0 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0) //背景顏色為黑色
  angleMode(DEGREES) //設定使用到角度，採用數字的方式0~360。
  frameRate(5) //進入draw()函數，每秒執行10次
}

function draw() { //開始畫圖，每秒會進入draW()會執行60次
 // background(220);
 background(0)
 translate(width/2,height/2) //設定原點(0,0)在左上角移到視窗的中心(width/2,height/2)
 //視窗的中心點畫一個600*600的方形，框線為白色，不填滿顏色?
 noFill() //不填滿顏色
 stroke(255) //框線為白色
 rectMode(CENTER) //設定方形的中心點為座標點

 
 for(let i = 0;i<20;i=i+1) {
  
  let r = map(sin(frameCount),-1,1,50,255) //對應，sin的值介於-1~1之間，當sin()的值位於-1~1間的位置，對應到50~255間的位置
  let g = map(cos(frameCount/2),-1,1,50,255) //對應
  let b = map(sin(frameCount/4),-1,1,50,255) //對應
  stroke(r,g,b)
  rotate(sin(angle-i*2)*40)
  rect(0,0,100-i*3,100-i*3,20) //劃一個方形(600,600)，圓弧在四角寬高為100
 }
 angle=angle+1

}
