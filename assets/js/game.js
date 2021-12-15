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
                this.checkStageCompleted()
            }, this.fps)

        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw (){
        this.background.draw()
        this.player.draw()
        this.soldiers.forEach(soldier => soldier.draw())
        this.truck.draw()
    }

    move(){
        this.background.move()
        this.truck.x = this.background.x + this.background.width - 580
        this.player.move()
        this.soldiers.forEach(soldier => {

        
             if(this.x <= this.ctx.canvas.width - this.width || this.x >= -130){
                soldier.x = soldier.x
                console.log('test soldados escapan')
            }

            
             soldier.x += this.background.vx 
        })
    }

    setUpListeners(event) {
        this.background.setUpListeners(event)
        this.player.setUpListeners(event)
    }

    onKeyDown(keyCode) {
        this.player.onKeyDown(keyCode)
        this.soldiers.forEach(soldier => soldier.onKeyDown(keyCode))
    }

   
    onKeyUp(keyCode){
        this.player.onKeyUp(keyCode)
    }



    checkStageCompleted(){
        if (this.player.collidesWith(this.truck)) {
          this.stageCompleted()
        }
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