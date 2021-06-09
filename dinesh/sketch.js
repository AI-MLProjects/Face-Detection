let facemesh;
let video;
let predictions = [];

function setup() {
//   createCanvas(640, 480);
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.style('transform', 'scale(-1, 1)');
}


function draw() {
    translate(width,0); // move to far corner
    scale(-1.0,1.0);    // flip x-axis backwards
    image(video, 0, 0, width, height); //video on canvas, position, dimensions
}
