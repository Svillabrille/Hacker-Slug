class Soldier {
    constructor(ctx,x){
        this.ctx = ctx

        this.x = x
        this.y = 380
        
        this.height = 49
        this.width = 43

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

        this.health = 100

        this.enemyBullets = []
        
        this.horizontalFrames = 6
        this.verticalFrames = 1

        this.xFrame = 0
        this.yFrame = 0

        this.tick = 0

        this.setInterval = null
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

        this.enemyBullets.forEach( bullet => bullet.draw())

        this.tick++

        if(this.x < this.ctx.canvas.width && !this.setInterval){
            this.setInterval = setInterval(() => {
                this.shoot()
            }, 2000)
        }
      }

    move(){
        if(this.x < 662){
     

                if (this.tick % 10 === 0) {
                    this.xFrame += 1
            
                    if (this.xFrame > 5) {
                        this.xFrame = 0
                    }
                }
            }

        this.enemyBullets.forEach( bullet => bullet.move())

    }

    shoot(){
        this.enemyBullets.push(new EnemyBullet(this.ctx, this.x+(this.width/2), this.y+(this.height/2), this.yFrame === 0))
    }

 
    

    /* onKeyDown(keyCode) {


        if(this.x < 662){
/*             this.running = true
            if(this.running === true){ 
        
                if (this.tick % 2 === 0) {
                    this.xFrame += 1
            
                    if (this.xFrame > 5) {
                        this.xFrame = 0
                    }
                }
    
             
        } 
 */

    }


