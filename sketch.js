// var count = 505;

// var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

function setup() {
    noCanvas();

    var timer = select('#timer');
    timer.html('hello world');
}

// function draw() {
//     text("hell", 10, 10);
//     ellipse(50, 50, 80, 80);
// }

// function timer() {
//     if (count <= 0) {
//         clearInterval(counter);
//         return;
//     }
//     count--;
//     // document.getElementById("timer").innerHTML = count / 100;
// }