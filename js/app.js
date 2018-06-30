class Enemy{
    /**
     * @description Constructor.
     */
    constructor(){
        // The image for our enemies.
        this.sprite = "images/enemy-bug.png";
    }

    /**
     * @description Update the enemy's position.
     * @param dt A time delta between ticks.
     */
    update(dt){
    }

    /**
     * @description Draw the enemy on the screen.
     */
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    /**
     * @description Constructor.
     */
    constructor(){
        this.player = "images/char-boy.png";
        this.x = 2;
        this.y = 4.5;
    }

    /**
     * @description Updates player data.
     */
    update(){
    }

    /**
     * @description Draws player on the screen.
     */
    render(){
        // Draw player in the middle of the block.
        ctx.drawImage(Resources.get(this.player), this.x * 101, this.y * 83);
    }

    /**
     * Handles arrow key presses. Updates player position accordingly.
     * @param keyCode The key code for the key that was pressed.
     */
    handleInput(keyCode){
        switch(keyCode){
            case "up":
            this.y--;
            break;
            case "down":
            this.y++;
            break;
            case "left":
            this.x--;
            break;
            case "right":
            this.x++;
            break;
        }
    }
}


// Listen for key presses and send the keys to the
// Player.handleInput() method.
document.addEventListener("keyup", function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy()];
let player = new Player();


