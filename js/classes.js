
// enemy class, with all nessecary properties
class Enemy {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position
        this.width = 75
        this.height = 75
        this.waypointIndex = 0
        this.center = {
            x: this.position.x + this.width /2,
            y: this.position.x + this.height /2
        }
    }
    draw() {
        c.fillStyle = 'purple'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        const waypoint = waypoints[this.waypointIndex];
        const yDistance = waypoint.y - this.center.y;  // y distance must be first
        const xDistance = waypoint.x - this.center.x
        const angle = Math.atan2(yDistance, xDistance)
        this.position.x += Math.cos(angle)
        this.position.y += Math.sin(angle)
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2 // the /2 operator gets the waypoints of the center of the square, rather than where it was drawn
        }
        
        if (
            Math.round(this.center.x) === Math.round(waypoint.x) &&
            Math.round(this.center.y) === Math.round(waypoint.y) &&
            this.waypointIndex < waypoints.length - 1
          ) {
            this.waypointIndex++
          }
        }
      }


class PlacementTilesClass {
    constructor({ position = { x: 0, y: 0 }}) {
        this.position = position
        this.size = 64
        this.color = 'rgba(255, 255, 255, .15)'
    }
    draw () {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size)
}
    update(mouse) {
        this.draw()
        if (
            mouse.x > this.position.x &&
            mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y &&
            mouse.y < this.position.y + this.size
          ) {
            console.log('colliding')
            this.color = 'white'
        } 
            else this.color = 'rgba(255, 255, 255, .15)'
        }         
    }

class Building {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position
        this.width = 64 * 2
    }
    
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, 64)
    }
    }