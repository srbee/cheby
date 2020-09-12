function setup() {
  w=400;h=400
  createCanvas(w,h);
  background('coral')
  step=0.1/40
  x=-1-step
  xscale=150
  yscale=110
  dot_size=5
  webLinks()
  
  frameRate(15)
}//end of function setup()

function draw() {
  //background(220);
  translate(width/2,height/2)
  //circle(0,0,10)
  myAxes()
  x=x+step
  //print('x='+x)
  
  xp=x*xscale
  
  y0=TzeroX(x)
  y1=ToneX(x)
  y2=TtwoX(x)
  y3=TthreeX(x)
  y4=TfourX(x)
  
  yp0=-y0*yscale
  yp1=-y1*yscale
  yp2=-y2*yscale
  yp3=-y3*yscale
  yp4=-y4*yscale
  
  
  push();fill(255,0,0);noStroke()
   circle(xp,yp0,dot_size)
  //text('0',xp,yp0)
  pop()
  
  push();fill(0,255,0);noStroke()
  circle(xp,yp1,dot_size)
  //text('1',xp,yp1)
  pop()
  
  push();fill(0,0,255);noStroke()
  circle(xp,yp2,dot_size)
  //text('2',xp,yp2)
  pop()
  
  push();fill(255,255,0);noStroke()
  circle(xp,yp3,dot_size)
  //text('3',xp,yp3)
  pop()
  
  
  push();fill(0,255,255);noStroke()
  circle(xp,yp4,dot_size)
  //text('4',xp,yp4)
  pop()
  legend()
  //print(x,y)
  //if(xp >100){background('lightblue');x=-1-step}
  
  myScale()
  
  if(x >1){
    //now=millis()
    //while(millis()-now<5000){}
    Sleep(10)
    background('coral');x=-1-step
  }
}//end of function draw()
function myAxes(){
  x1=-w/2;y1=0;x2=w/2;y2=y1
  line(x1,y1,x2,y2)
  x3=0;y3=-h/2;x4=x3;y4=-y3
  line(x3,y3,x4,y4)
}//end of function myAxes()

function TzeroX(x){
  return 1
}//end of function TzeroX()

function ToneX(x){
  return x
}//end of function ToneX()

function TtwoX(x){
  return 2*x*x-1
}//end of function ToneX()

function TthreeX(x){
  return 4*x*x*x-3*x
}//end of function ToneX()

function TfourX(x){
  return 8*(x**4)-8*x*x+1
}//end of function ToneX()

function Sleep(durSecs){
  now=millis()
  while((millis()-now) <(durSecs*1000)){}
}//end of function Sleep

function legend(){
 push() ; textSize(20);stroke('blue')
  
 text('Chebyshev Polynomials of First Kind',-w/2.5,-0.7*(h/2))
 pop()
 push();stroke(255,0,0) 
 text('========>'+'    order 0 : T0(x) = 1',-w/2.1,.7*(h/2));pop() 
  
 push();stroke(0,255,0) 
 text('========>'+'    order 1 : T1(x) = x ',-w/2.1,.8*(h/2));pop() 
 push();stroke(0,0,255) 
 text('========>'+'    order 2 : T2(x) = 2 x * x - 1',-w/2.1,.9*(h/2));pop() 
 push();stroke(255,255,0) 
 text('========>'+'    order 3 : T3(x) = 4 x**3 -3 ',-w/2.1,.98*(h/2));pop()  
 
 push();stroke(0,255,255) 
 text('===>'+' order 4 : T3(x) =8x**4-8 x*x+1  ',-w/40,.7*(h/2));pop()  
  
  
}//end of function legend()

function webLinks(){

  addr1='https://en.wikipedia.org/wiki/Chebyshev_polynomials'
  linkText1='What are Chebyshev Polynomials?'
  link1=createA(addr1,linkText1,'_blank')
  link1.position(100,70)

  addr2='https://srbee.github.io/srbee/'
  linkText2='Back To Main Menu'
  link2=createA(addr2,linkText2,'_blank')
  link2.position(w/2.7,10)
}//end of function webLinks()

function myScale(){
 for(xx=-1*xscale;xx<= 1*xscale;xx=xx+xscale/5){
 line(xx,-10,xx,10)
 text(xx/xscale,xx-5,-15)
}//end of for loop for x-axis

 for(yy=-1*yscale;yy<= 1*yscale;yy=yy+yscale/5){
 line(-10,yy,10,yy)
 text(yy/-yscale,10,yy)
}//end of for loop for y-axis
 
  
}//end of function myScale()