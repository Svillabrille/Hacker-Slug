class Player {
    constructor(ctx){
        this.ctx = ctx



        this.width = 50
        this.height = 100

        this.x = 100
        this.y = -100

        this.img = new Image ()
        this.img.src = './assets/img/walk sprite.png'

        this.img.onload = () => {
            this.img.isReady = true
          }
    }

    draw (){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}