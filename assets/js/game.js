class Game {
    constructor(ctx){
        this.ctx = ctx

        this.background = new Background(ctx)
        this.player = new Player(ctx)
        this.soldiers = [
            new Soldier(ctx, this.background.x + this.background.width - 200),
            new Soldier(ctx, this.background.x + this.background.width - 2500),
            new Soldier(ctx, this.background.x + this.background.width - 1000),
            new Soldier(ctx, this.background.x + this.background.width - 1500),
            new Soldier(ctx, this.background.x + this.background.width - 2000),
        ]
        this.truck = new Truck(ctx, this.background.x + this.background.width -400)

        this.fps = 1000 / 30
        this.intervalId = undefined

    }

    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {

                this.clear()

                this.move()
                
                this.draw()
                this.checkCollision()
            }, this.fps)

        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        //clears all bullets that are out of the canvas
        this.player.bullets = this.player.bullets.filter(bullet => bullet.x < this.ctx.canvas.width && bullet.x > 0)
    }

    draw (){
        this.background.draw()
        this.player.draw()
        this.soldiers.forEach(soldier => soldier.draw())
        this.truck.draw()
        this.ene
    }

    move(){
        this.background.move()
        this.truck.x = this.background.x + this.background.width - 580
        this.player.move()
        this.soldiers.forEach(soldier => {
            //prevents soldiers from moving when you reach the limit of the map on the left side.
            if(this.background.x <= this.ctx.canvas.width - this.background.width || this.background.x >= -130){
                this.background.vx = 0
            }
            soldier.x += this.background.vx
        })
        this.soldiers.forEach(soldier => {soldier.move()})
        }

    setUpListeners(event) {
        this.background.setUpListeners(event)
        this.player.setUpListeners(event)
    }

    onKeyDown(keyCode) {
        this.player.onKeyDown(keyCode)
    }

   
    onKeyUp(keyCode){
        this.player.onKeyUp(keyCode)
    }

    onClick(){
        this.player.addBullet()
    }

    checkCollision(){
        
        if (this.player.collidesWith(this.truck) && this.soldiers.length === 0) {
          this.stageCompleted()
        }

        this.soldiers.forEach((soldier) => {
            this.player.bullets.forEach((bullet) => {
                if (bullet.collidesWith(soldier)) {
                    soldier.health = 0
                    this.player.bullets.splice(this.bullet,1)
                }
            })
        });
        this.clearSoldiers()

        this.soldiers.forEach((soldier) => {
            soldier.enemyBullets.forEach((bullet) => {
                if(bullet.collidesWithPlayer(this.player)) {
                    this.gameOver()
                }
            })        
        })



    }

    clearSoldiers() {
        if(this.soldiers.length > 0){
          this.soldiers = this.soldiers.filter(e => e.health > 0)
        }
      }

    gameOver(){
        clearInterval(this.intervalId)
    
        this.ctx.save()
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px sans-serif'
        this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
        this.ctx.restore()
    }
    
    

    

    stageCompleted(){
        clearInterval(this.intervalId)
    
        this.ctx.save()
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px sans-serif'
        this.ctx.fillText('Stage Completed', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
        this.ctx.restore()
    }

}