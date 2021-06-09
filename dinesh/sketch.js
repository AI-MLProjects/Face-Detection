let facemesh;
let video;
let predictions = [];
let logMaxcount = 10;
let currentLogIndex = 0;

function setup() {
//   createCanvas(640, 480);
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  // video.style('transform', 'scale(-1, 1)');

  // Create facemesh model
  facemesh = ml5.facemesh(video, modelReady);

  //
  facemesh.on('predict', results => {
    predictions = results;
    customLog(`results : ${JSON.stringify(results)}`);
  })
}

function modelReady() {
  console.log("Model ready!");
}


function draw() {
    // translate(width,0); // move to far corner
    // scale(-1.0,1.0);    // flip x-axis backwards
    image(video, 0, 0, width, height); //video on canvas, position, dimensions

  // We call function to draw all keypoints
  drawKeypoints();
}

function drawKeypoints() {
  for(let i=0; i<predictions.length; i+=1) {
    const keypoints = predictions[i].scaledMesh;

    // Draw Facial keypoints
    for(let j=0; j<keypoints.length; j+=1) {
      const [x, y] = keypoints[j];
      fill(0, 255, 0);
      ellipse(x-330, y-150, 5, 5);
    }
  }
}

function customLog(message) {
  currentLogIndex++;
  if(currentLogIndex < logMaxcount) {
    console.log(`currentLogIndex : ${currentLogIndex}, logMaxcount : ${logMaxcount}`)
    // console.log(message);
  }
}
