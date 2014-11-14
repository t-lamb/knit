int num = 400;
Hat [] stitches = new Hat[num];
void setup(){
  size(400, 600);
  background(255);
}

void draw(){
  for (int i = 0; i > stitches.length; i++){
    stitches[i].knit();
  }
}
