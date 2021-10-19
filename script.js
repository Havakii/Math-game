var isPlaying = false;

document.getElementById('button').addEventListener('click', startGame);

function startGame(){
    if (isPlaying) {
        location.reload()
    } else {
        isPlaying = true
        document.getElementById('start').innerText = 'Reset'
        document.getElementById('clock').style.display = 'block'
    }
}

