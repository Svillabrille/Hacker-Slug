class Bullet {
    constructor(ctx){
        this.ctx = ctx

        this.x = this.player.x
        this.y = this.player.y

        this.width = 7
        this.height = 7

        this.vx = 10

        this.img = new Image()
        this.img.src = './assets/img/bullet-game.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }


    }

    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,               
        )
    }

    move(){
        this.y += this.vy
    }


    addEventListener(){
      
    }
}