const getCookieValue = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)
  
document.addEventListener('DOMContentLoaded', function() {
    // Set default cookie
    if (!getCookieValue("gameStarted") || getCookieValue("gameStarted") == undefined) {
        document.cookie = "gameStarted=false"
    }
})