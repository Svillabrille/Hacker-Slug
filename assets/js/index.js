const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };

const game = new Game(ctx)

function startGame() {
    game.start()
  }



window.addEventListener('keydown', (event) => {
  game.setUpListeners(event)
})

window.addEventListener('keyup', (event) => {
  game.setUpListeners(event)
})

window.addEventListener('keydown', (event) =>{
  game.onKeyDown(event.keyCode)
})

canvas.addEventListener('click', (event) =>{
  game.onClick()
})


}

