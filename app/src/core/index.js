function generateObstacles() {
    let arr = [];

    obstaclesLookup = {};

    for(var i = 0; i < config.obstacleCount; i++) {
        let pos = util.randCoord(config.w, config.h);

        let obstacle = stamps.mirror.create({
            x: pos.x,
            y: pos.y
        });

        arr.push(obstacle);

        if (!obstaclesLookup.hasOwnProperty(obstacle.x)) {
            obstaclesLookup[obstacle.x] = {};
        }

        obstaclesLookup[obstacle.x][obstacle.y] = obstacle;
    }

    return arr;
}

function generateProjector() {
    return stamps.projector.create({
        x: 50,
        y: 50
    });
}

function render() {
    canvasUtil.blurClear(ctx);

    for(let obj in objects) {

        if (!objects.hasOwnProperty(obj)) {
            continue;
        }

        obj = objects[obj];

        draw(obj);
    }
}

function draw(obj) {
    if (Array.isArray(obj)) {
        obj.forEach(draw);
    } else {
        obj.draw(ctx);
    }
}

function startSimulation() {
    requestAnimationFrame(simulate);
}

function simulate() {
    render();
    requestAnimationFrame(simulate);
}

let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    started = false, stamps = {};

let objects = {}, obstaclesLookup, projector;

function start() {

    stamps.drawable = createDrawableStamp();
    stamps.particle = createParticleStamp();
    stamps.mirror = createMirrorStamp();
    stamps.projector = createProjectorStamp();

    config.h = Math.floor(document.body.clientHeight / config.scale);
    config.w = Math.floor(document.body.clientWidth / config.scale);

    canvas.width = config.w;
    canvas.height = config.h;

    objects.obstacles = generateObstacles();
    objects.projector = generateProjector();

    console.log(objects.projector);

    if (!started) {
        startSimulation();
    }

    started = true;

    canvas.addEventListener('mousemove', function(event) {
        objects.projector.x = event.x;
        objects.projector.y = event.y;
    });

}


document.addEventListener("DOMContentLoaded", function() {
    start();
});




