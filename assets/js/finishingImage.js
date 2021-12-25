class FinishingImage {
    constructor(ctx,imageType){
        this.ctx = ctx

        this.width = 200
        this.height = 300

        this.x = (this.ctx.canvas.width - this.width) / 2
        this.y = (this.ctx.canvas.height - this.height) / 1.5

        this.images = [
            './assets/img/Baguette.png',
            './assets/img/uncleSam.png'
        ]

        this.img = new Image ()
        this.img.src = this.images[imageType]

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
            this.draw()
        }
    }

    draw(){

        if (this.img.isReady) {
            this.ctx.drawImage(   
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )
            
        }
    }
}