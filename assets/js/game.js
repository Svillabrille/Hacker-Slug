class Game {
    constructor(ctx){
        this.ctx = ctx

        this.background = new Background(ctx)
        this.player = new Player(ctx)
        this.soldiers = [
            new Soldier(ctx, 500),
            new Soldier(ctx, 1000),
            new Soldier(ctx, 1500),
            new Soldier(ctx, 2000),
            new Soldier(ctx, 2500),
        ]

        this.fps = 1000 / 30
        this.intervalId = undefined

    }

    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {

                this.clear()

                this.move()
                
                this.draw()
            }, this.fps)

        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move(){
        this.background.move()
        this.player.move()
        this.soldiers.forEach(soldier => soldier.move())
    }

    setUpListeners(event) {
        this.background.setUpListeners(event)
    }

    onKeyDown(keyCode) {
        this.player.onKeyDown(keyCode)
      }

    onKeyUp(keyCode){
        this.player.onKeyUp(keyCode)
    }

    draw (){
        this.background.draw()
        this.player.draw()
        this.soldiers.forEach(soldier => soldier.draw())
    }

    checkStageCompleted(){
        
        if (this.background.x +1 <= this.ctx.canvas.width - this.background.width){
            this.stageCompleted()
            console.log('check finish')
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