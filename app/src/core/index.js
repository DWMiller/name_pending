function generateObstacles() {
    let arr = [];
    let stamp = stampit.compose(particle);

    obstaclesLookup = {};

    for (var i = 0; i < config.obstacleCount; i++) {
        let pos = util.randCoord(config.w, config.h);

        let obstacle = stamp.create({
            x: pos.x,
            y: pos.y,
            color: '#FF0000'
        });

        arr.push(obstacle);

        if (!obstaclesLookup.hasOwnProperty(obstacle.x)) {
            obstaclesLookup[obstacle.x] = {};
        }

        obstaclesLookup[obstacle.x][obstacle.y] = obstacle;
    };


    return arr;
}


function render() {
    canvasUtil.blurClear(ctx);

    obstacles.forEach(function(obstacle) {
        obstacle.draw(ctx);
    });
}

function startSimulation() {
    requestAnimationFrame(simulate);
}

function simulate() {
    render();
    requestAnimationFrame(simulate);
}

function start() {
    config.h = Math.floor(document.body.clientHeight / config.scale);
    config.w = Math.floor(document.body.clientWidth / config.scale);

    canvas.width = config.w;
    canvas.height = config.h;

    obstacles = generateObstacles();

    console.log(obstacles);

    if (!started) {
        startSimulation();
    }

    started = true;
}

let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    started = false,
    obstacles, obstaclesLookup;

start();
