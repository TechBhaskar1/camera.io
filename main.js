function preload() {}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 100, 100, 300, 250);
    fill(0, 255, 0);

    rect(40, 90, 20, 280);

    fill(0, 255, 0);

    rect(90, 390, 400, 20);

    fill(0, 255, 0);

    rect(440, 100, 20, 280);

    fill(0, 255, 0);

    rect(40, 40, 2800, 20);

    fill(0, 0, 255);

    circle(450, 400, 100);

    fill(0, 0, 255);

    circle(50, 50, 100);

    fill(0, 0, 255);

    circle(450, 50, 100);

    fill(0, 0, 255);

    circle(50, 400, 100);

    fill(0, 0, 255);

}

function take_snapshot(){
    save('bhaskar.png')
}