class Game {
    constructor(ctx){
        this.ctx = ctx
        this.background = new Background(ctx)
        this.player = new Player(ctx)

        this.fps = 1000 / 60

    }

    start(){
        if(!this.intervalId){

            this.clear()

            this.move()
            
            this.draw()
        }
    }

    clear(){

    }

    move(){

    }

    draw (){
        this.background.draw()
    }

}