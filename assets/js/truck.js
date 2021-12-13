class Truck {
    constructor(ctx, x){
        this.ctx = ctx
        this.x = x
        this.y = 380

        this.height = 101
        this.width = 183

        this.img = new Image()
        this.img.src = './assets/img/finaltruck.png'
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
}