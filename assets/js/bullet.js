class Bullet {
    constructor(ctx,x,y,isRightDirection){
        this.ctx = ctx

        this.x = x
        this.y = y

        this.width = 7
        this.height = 7


        this.vx = isRightDirection ? 3: -3

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
        this.x += this.vx
    }



}