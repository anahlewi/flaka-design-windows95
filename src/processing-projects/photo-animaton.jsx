const beachPhoto = (p) => {
  let image;
  let res = 3;
  let c1;
  let c2;

  p.setup = function() {
    p.createCanvas(495, 500);
    p.loadImage('./beachPhoto.JPG', img => {
      image = img;
    });
  };

  p.draw = function() {
    c1 = p.color('blue');
    c2 = p.color(255);
    if (image) {
      computerPixelEffect();
    }

  };

  function computerPixelEffect(){
    image.loadPixels();
    p.noStroke();

    for(var i =0; i < image.width; i+=res){
    for(var j=0; j< image.height; j+=res){
        let pix = image.get(i,j);
      
        let r = pix[0];
        let g = pix[1];
        let b = pix[2];
        // Convert to grayscale for simplicity in tone mapping
        let gray = p.color((r + g + b) / 3);
      
        let brightValue = p.brightness(gray);
      
        let val = p.map(brightValue, 0, 100, 0, 1);
        let col = p.lerpColor(c1, c2, val);

        p.fill(col);
        p.rect(i, j, res, res);
      }
  }
  image.updatePixels();
}
};



export default beachPhoto;