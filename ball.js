const INITIAL_VELOCITY = .025
CONST VELOCITY_INCREASE= 0.00001

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        this.reset()
    }

    //being passed into our ball class so we can use it.

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }
    set x(value) {
        this.ballElem.style.setProperty("--x", value)
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }
    set y(value) {
        this.ballElem.style.setProperty("--x", value)
    }

    rect() {
        return this.ballElem.getBoundingClientRect()
    }
    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = { x: 0 }
        while (
            Math.abs(this.direction.x) <= 0.2 ||
            Math.abs(this.direction.x) >= 0.9
        ) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }

        this.velocity = INITIAL_VELOCITY
    }
    
    update(delta) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity *= VELOCITY_INCREASE * delta
        const rect = this.rect()

        if(rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1
        }
        if(rect.right >= window.innerWidth || rect.left <= 0) {
            this.direction.x *= -1
        }
    }
}
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}
