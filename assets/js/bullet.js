class Bullet {
    constructor(ctx,x,y,isRightDirection){
        this.ctx = ctx

        this.x = x
        this.y = y

        this.width = 7
        this.height = 7


        this.vx = isRightDirection ? 8 : -8


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
    collidesWith(soldier) {
        if (
            this.x < soldier.x + soldier.width &&
            this.x + this.width > soldier.x &&
            this.y < soldier.y + soldier.height &&
            this.y + this.width > soldier.y
        ) {
        return true
        }
    }

}