// update loop 
// every frame that passes, we are going to call a function. 
// function is going to update positions and logic.
// separate classes : ball will be in its own file

import Ball from "./ball.js"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
let lastTime
function update(time) {
    if(lastTime != null) {
        const delta = time - lastTime
        ball.update(delta)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}
document.addEventListener("mousemove", e =>) {
    playerPaddle.position = (e.y / window.innerHeight) * 100
}
window.requestAnimationFrame(update)