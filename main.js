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

document.getElementById('start').addEventListener('click', () => {
    document.cookie = "gameStarted=true"
    document.querySelector('.container').style = "filter: blur(0px);"
    document.querySelector('.waitingScreenContainer').style = "display: none"
})