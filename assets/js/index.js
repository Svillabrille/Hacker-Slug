const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };

}

function startGame() {
    game.start()
  }

    
const game = new Game(ctx)

function startGame() {
    game.start()
}