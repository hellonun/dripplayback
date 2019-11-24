let w;
let h;
let capture;
let img;

function preload() {
  capture = createVideo('driplong.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  // background(255);
  capture.size(w, h);
  capture.volume(0.5);
  capture.play();
  capture.hide();
  pixelDensity(1);

}

function draw() {
  capture.speed(map(capture.time(), 0, capture.duration()/3, 0.2,0.7));
  image(capture, 0, 0);

}
