class Game {
    constructor(ctx){
        this.ctx = ctx

        this.background = new Background(ctx)
        //this.player = new Player(ctx)

        this.fps = 1000 / 60
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
    }

    setUpListeners(event) {
        this.background.setUpListeners(event)
    }

    draw (){
        this.background.draw()
    }

}