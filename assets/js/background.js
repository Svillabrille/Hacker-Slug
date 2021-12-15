class Background  {
    constructor(ctx){
        this.ctx = ctx

        this.x = -200
        this.vx = 0

        this.width = 3500
        this.height = 496.5

        this.speed = 15

        this.movements = {
    
            left : false,
            right : false
    
        }


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

    move () {
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

        if(this.x >= -130){
          this.x = -130
        }

        if (this.x <= this.ctx.canvas.width - this.width){
            this.x = this.ctx.canvas.width -this.width 
        }
    }

}