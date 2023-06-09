// variables initialized before they're called
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = "1280"
canvas.height = "768"
c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)
const placementTilesData2D = []
const placementTiles = []
        for (let i = 0; i < placementTilesData.length; i+= 20) {
            placementTilesData2D.push(placementTilesData.slice(i, i + 20))
        }

        placementTilesData2D.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol === 14 ) {
                    // add building placement tile here
                    placementTiles.push(new PlacementTilesClass({
                        position: {
                            x: x * 64,
                            y: y * 64
                        }
                    })
                    )
                }
            })
        })
    console.log(placementTiles)
const image = new Image()
image.onload = () => { 
    animate()
}

image.src = 'img/Tower Defense Map.png'

            /* animation */
const enemyArr = [];

for (let i = 1; i < 11; i++) {
    const xOffset = i * 150
    enemyArr.push(new Enemy({
        position: {x: waypoints[0].x - xOffset, y: waypoints[0].y}
       
    }))
}
const mouse = {
    x: undefined,
    y: undefined
}

const buildings = [];
let activeTile = undefined;

function animate() {
    requestAnimationFrame (animate)
    c.drawImage(image, 0, 0)
    enemyArr.forEach((enemy) => {
        enemy.update()
    })
    placementTiles.forEach((tile) => {
        tile.update(mouse)
    })
    buildings.forEach((building) => {
        building.draw()
    });
}

canvas.addEventListener('click', (event) => {
    if (activeTile) {
        buildings.push(
            new Building({
                position: {
                    x: activeTile.position.x,
                    y: activeTile.position.y
                }
            })
        )
    }
})

window.addEventListener('mousemove', (event) => {   //building mouse click
    mouse.x = event.clientX 
    mouse.y = event.clientY
    activeTile = null

        for(let i = 0; i < placementTiles.length; i++) {
            const tile = placementTiles[i]
            if (
                mouse.x > tile.position.x &&
                mouse.x < tile.position.x + tile.size &&
                mouse.y > tile.position.y &&
                mouse.y < tile.position.y + tile.size ) {
                    activeTile = tile
                    break
                    }
        }
    console.log(activeTile)
})
