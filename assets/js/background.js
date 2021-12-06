class Background  {
    constructor(ctx){
        this.ctx = ctx

        this.x = -200

        this.width = 3500
        this.height = 331


        this.img = new Image ()
        this.img.src = './assets/img/Metal Hack Background.png'

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
        }
    }

    draw () {

        this.ctx.drawImage(
            this.img,
            this.x,
            0,
            this.width,
            this.height,               
        )
    }

    /*move () {
        this.x += this.vx
    }*/

}