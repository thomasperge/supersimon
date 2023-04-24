let gameStarted = false

const getCookieValue = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)
  
// Start the game
document.addEventListener('DOMContentLoaded', function() {
    // Set default cookie
    if (!getCookieValue("gameStarted") || getCookieValue("gameStarted") == undefined || getCookieValue("gameStarted") == "false") {
        document.cookie = "gameStarted=false"
        document.querySelector('.container').style = "filter: blur(3.5px);"
    } else {
        document.cookie = "gameStarted=false"
        document.querySelector('.container').style = "filter: blur(3.5px);"
    }
})

// Event when click => "Start the game"
document.getElementById('start').addEventListener('click', () => {
    // Delete waiting screen
    document.cookie = "gameStarted=true"
    document.querySelector('.container').style = "filter: blur(0px);"
    document.querySelector('.waitingScreenContainer').style = "display: none"

    // Set Timer
    let temps = 0
    const timerElement = document.getElementById("timer")

    function diminuerTemps() {
        timerElement.innerText = `${temps}s`
        temps++
    }

    setInterval(diminuerTemps, 1000)

    gameStarted = true
})

// Game
let roundCount = 0
let roundColorGenerate = []
let roundColorPlayer = []

function loop() {
    if (getCookieValue("gameStarted") == "true" && roundCount >= 0) {
        // Afficher le banière round pendant 2s
        // Afficher les differentes couleurs pendant 1.5s chacune
        // Le player met les couelies
    }
    
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)