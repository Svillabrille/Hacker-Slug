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

        this.speed = 10

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

    move() {
        if (this.tick % 10 === 0) {
             this.xFrame++
        
              if (this.xFrame >= this.horizontalFrames) {
                this.xFrame = 0
              }
        }

        if(!this.movements.right && !this.movements.left) {
                this.vx = 0;
        }
    
        if (this.movements.right) {
              this.vx = -this.speed;
    
        }
        if (this.movements.left) {
              this.vx = this.speed;
        }
    
        this.x += this.vx;
    
        if(this.x >= 0){
              this.x = 0
            }
    
        if (this.x <= this.ctx.canvas.width - this.width){
                this.x = this.ctx.canvas.width -this.width
            }
    }

    setUpListeners(event) {
        const status = event.type === 'keydown';

      switch(event.keyCode) {
          case KEY_RIGHT:
              this.movements.right = status;
              break;

           case KEY_LEFT:
               this.movements.left = status;
               break;

           default:
               break;
      }
     }


}