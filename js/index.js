// variables initialized before they're called
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = "1280"
canvas.height = "768"
c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)
const image = new Image()
image.onload = () => { 
    animate()
}
image.src = 'img/Tower Defense Map.png'

// enemy class, with all nessecary properties
class Enemy {
    constructor({position = { x: 0, y: 0} }) {
        this.position = position
        this.width = 75
        this.height = 75
    }
    draw() {
        c.fillStyle = 'purple'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += 1
    }
}

/* animation */
const enemy = new Enemy({position: {x: 42, y: 320}});
const enemy2 = new Enemy({position: {x: -50, y: 320}});

function animate() {
    requestAnimationFrame (animate)
    c.drawImage(image, 0, 0)
    enemy.update()
    enemy2.update()
}