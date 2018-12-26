
vertices=[];
var area=0;;
var r_1;
var r_2;
var r_3;
var r_4;


function setup() {
  createCanvas(600, 600);
  background(200);
  c=200;
  vertices.push([width/2 - c/2, height/2 - c/2, c, c]);
  rect(width/2 - c/2, height/2 - c/2, c, c);
  iter(width/2 - c/2, height/2 - c/2, c, c);

  var j;
  var gens;
  gens=1000;

  for (j=1; j < gens; j++) {
    iter(vertices[j][0], vertices[j][1], vertices[j][2]);
  }


  var i;
  for (i=0; i < vertices.length; i++) {
    fill(255);
    rect(vertices[i][0], vertices[i][1], vertices[i][2], vertices[i][3])
  }
  
  var j;
  
  for (j=0; j < vertices.length; j++) {
    area+=(vertices[j][2])*(vertices[j][2]);
  }
  
  console.log(area/(c*c));
}



function iter(x, y, len) {



  r_1=random(0, 1);
  r_2=random(0, 1);
  r_3=random(0, 1);
  r_4=random(0, 1);


  if ((r_1 <= 0.5) && (test(x, y-len*0.5, len*0.5))) {
    vertices.push([x, y-len*0.5, len*0.5, len*0.5])
  }

  if ((r_1 > 0.5) && (test(x+len*0.5, y-len*0.5, len*0.5))) {
    vertices.push([x+len*0.5, y-len*0.5, len*0.5, len*0.5])
  }

  if ((r_2 <= 0.5) && (test(x-len*0.5, y, len*0.5))) {
    vertices.push([x-len*0.5, y, len*0.5, len*0.5])
  }

  if ((r_2 > 0.5) && (test(x-len*0.5, y+len*0.5, len*0.5))) {
    vertices.push([x-len*0.5, y+len*0.5, len*0.5, len*0.5])
  }

  if ((r_3 <= 0.5) && (test(x+len, y, len*0.5))) {
    vertices.push([x+len, y, len*0.5, len*0.5])
  }

  if ((r_3 > 0.5) && (test(x+len, y+len*0.5, len*0.5))) {
    vertices.push([x+len, y+len*0.5, len*0.5, len*0.5])
  }

  if ((r_4 <= 0.5) && (test(x, y+len, len*0.5))) {
    vertices.push([x, y+len, len*0.5, len*0.5])
  }

  if ((r_4 > 0.5) && (test(x+len*0.5, y+len, len*0.5))) {
    vertices.push([x+len*0.5, y+len, len*0.5, len*0.5])
  }
}

function test(x, y, len) {
  var k;
  for (k=0; k < vertices.length; k++) {
    if (((vertices[k][1] < y + len) && (y + len < vertices[k][1] + vertices[k][2] + len)) && ((vertices[k][0] < x + len) && (x + len < vertices[k][0] + vertices[k][2] + len)))
    {
      return false
    } 
  }
 return true;
}









 
