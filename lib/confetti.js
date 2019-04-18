// debugger
let canvas = document.getElementById('confetti');

canvas.setAttribute("width", "800");
canvas.setAttribute("height", "800");

let ctx = canvas.getContext('2d');
let pieces = [];
let numPieces = 50;
let last = Date.now();

function randomColor() {
    let colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function update () {
    let now = Date.now(), dt = now - last;

    for (let i = pieces.length - 1; i >= 0; i--) {
        let p = pieces[i];

        if (p.y > canvas.height) {
            pieces.splice(i, 1);
            continue;
        }
        p.y += gravity;
        p.rotation += p.rotationSpeed;
    }

    while (pieces.length < numPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, -20));
    }

    last = now;
    setTimeout(update, 1);
}

function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(function (p) {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.translate(p.x + p.size / 2, p.y + p.size / 2); // go to center of the piece
        ctx.rotate(p.rotation); // rotate 
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size / 2, p.size / 2); // reposition around center of rotation
        ctx.restore();
    });
    requestAnimationFrame(draw);
}

function Piece (x, y) {
    this.x = x;
    this.y = y;
    this.size = (Math.random() * 0.5 * 0.75) * 15;
    this.gravity = (Math.random() * 0.5 * 0.75) * 0.1; // how fast it falls
    this.rotation = (Math.PI * 2) * Math.random();
    this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.0005;
    this.color = randomColor();
}

while (pieces.length < numPieces) {
    pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
}

update();
draw();