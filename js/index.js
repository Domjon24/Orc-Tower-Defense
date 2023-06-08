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
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position
        this.width = 75
        this.height = 75
        this.waypointIndex = 0
    }
    draw() {
        c.fillStyle = 'purple'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()

        const waypoint = waypoints[this.waypointIndex];
        const yDistance = waypoint.y - this.position.y;  // y distance must be first
        const xDistance = waypoint.x - this.position.x
        const angle = Math.atan2(yDistance, xDistance)
        this.position.x += Math.cos(angle)
        this.position.y += Math.sin(angle)
        
        if (
            Math.round(this.position.x) === Math.round(waypoint.x) &&
            Math.round(this.position.y) === Math.round(waypoint.y) &&
            this.waypointIndex < waypoints.length - 1
          ) {
            this.waypointIndex++
          }
        }
      }

/* animation */
const enemy = new Enemy({position: { x: waypoints[0].x, y: waypoints[0].y} });
const enemy2 = new Enemy({position: { x: waypoints[0].x - 100, y: waypoints[0].y - 100} });

function animate() {
    requestAnimationFrame (animate)
    c.drawImage(image, 0, 0)
    enemy.update()
    enemy2.update()
}
// 