/*
    Init
 */

function init() {
    gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px;"></div>`;
    player.el = document.querySelector('.player');
}

/*
    Intervals
 */

function intervals() {
    ints.run = setInterval(() => {
        if (player.run) {
            switch (player.side) {
                case 1: // Top
                    if (player.y > 0) {
                        player.y -= player.step;
                        player.el.style.top = `${player.y}px`;
                    }
                    break;
                case 3: // Bottom
                    if (player.y < 830) {
                        player.y += player.step;
                        player.el.style.top = `${player.y}px`;
                    }
                    break;
                case 2: // Right
                    if (player.x < 1400) {
                        player.x += player.step;
                        player.el.style.left = `${player.x}px`;
                    }
                    break;
                case 4: // Left=
                    if (player.x > 0) {
                        player.x -= player.step;
                        player.el.style.left = `${player.x}px`;
                    }
                    break;
            }
        }
    }, fps)
}

/*
    Controllers
 */

function controllers() {
    document.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
            case 38: // Top
                player.el.style.backgroundImage = `url(${player.sprites.top})`;
                player.run = true;
                player.side = 1;
                break;
            case 40: // Bottom
                player.el.style.backgroundImage = `url(${player.sprites.bottom})`;
                player.run = true;
                player.side = 3;
                break;
            case 39: // Right
                player.el.style.backgroundImage = `url(${player.sprites.right})`;
                player.run = true;
                player.side = 2;
                break;
            case 37: //Left
                player.el.style.backgroundImage = `url(${player.sprites.left})`;
                player.run = true;
                player.side = 4;
                break;
        }

    });

    document.addEventListener('keyup', (e) => {
        if ([38, 40, 39, 37].includes(e.keyCode))
            player.run = false;
    })


}

/*
    Start Game
 */

function game() {
    init();
    controllers();
    intervals();
}

let gameZone = document.querySelector('.game-zone'),
    fps = 1000 / 60,
    player = {
        sprites: {
            top: 'src/sprites/player.png',
            right: 'src/sprites/player.png',
            bottom: 'src/sprites/player.png',
            left: 'src/sprites/player.png',
        },
        el: false,
        x: 500,
        y: 400,
        step: 10,
        run: false,
        side: 1, //1 (top), 2 (right), 3 (bottom), 4 (left),
        w: 100,
        h: 150
    },
    ints = {
        run: false
    };

game();
