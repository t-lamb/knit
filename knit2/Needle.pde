class Needle {
  float nSize;
  float yarnWeight;
  
  Needle(float _nSize, float _yarnWeight){
    nSize = _nSize;
    yarnWeight = _yarnWeight;
  }
  
  //knit
  void k() {
    noFill();
    stroke(0, 0 ,255);
    strokeWeight(yarnWeight); 
    ellipse(width/2, height/2, nSize + yarnWeight, nSize + yarnWeight);
  }
  
  //purl
  void p() {
    ellipse(60, 30, nSize, nSize);
  }
  
  //make (incerease)
  void m() {
    k();
    k();
  }
}
