//Needle [] stitches = new Needle [200];
Needle s = new Needle(20, 10);

void setup() {
  size(800, 600);
  background(255);

  //s = new Needle(20,10);

  // for (int l = 0; l < stitches.length; l++) {
  //   stitches[l] = new Needle(20, 10);
  // }
}

void draw() {
  // for (Needle s : stitches) {
  //   s.k();
  // }

  s.k();
}
