class Soldier {
    constructor(ctx,x){
        this.ctx = ctx

        this.x = x
        this.y = 380
        
        this.height = 40
        this.width = 52

        this.img = new Image()
        this.img.src = './assets/img/soldier-sprite.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }

        this.movements = {
            left : false,
            right : false
        }

        this.horizontalFrames = 6
        this.verticalFrames = 1

        this.xFrame = 0
        this.yFrame = 0

        this.tick = 0


    }
    
    draw() {
        this.ctx.drawImage(
          this.img,
          (this.img.width * this.xFrame)  / this.horizontalFrames,
          (this.img.height * this.yFrame) / this.verticalFrames,
          this.img.width / this.horizontalFrames,
          this.img.height / this.verticalFrames,
          this.x,
          this.y,
          this.width,
          this.height
        )

    
        this.tick++
      }

    onKeyDown(keyCode) {


        if(keyCode === KEY_RIGHT){
/*             this.running = true
            if(this.running === true){ */
        
                if (this.tick % 2 === 0) {
                    this.xFrame += 1
            
                    if (this.xFrame > 5) {
                        this.xFrame = 0
                    }
                }
    
             
        } 


    }


}