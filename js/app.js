class Enemy{
    /**
     * @description Constructor.
     */
    constructor(){
        // The image for our enemies.
        this.sprite = "images/enemy-bug.png";
        this.x = 0;
        this.y = Enemy.getRandomNum(3, .75);
        this.speed = Enemy.getRandomNum(5, 1);
    }

    /**
     * @description Update the enemy's position.
     * @param dt A time delta between ticks.
     */
    update(dt){
        this.x = this.x + (dt * this.speed);

        const enemyX = Math.floor(this.x);
        const enemyY = Math.floor(this.y);
        const playerX = Math.floor(player.x);
        const playerY = Math.floor(player.y);

        if(enemyX === playerX && enemyY === playerY)
        {
            player.x = playerInitPosX;
            player.y = playerInitPosY;
        }
    }

    /**
     * @description Draw the enemy on the screen.
     */
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    /**
     * @description Gets a random number from the range provided.
     * The incrementer/min number is used to increment the intially obtained
     * random number. For example if 0 was returned from the random() function and
     * the min value passed in was 1, the value returned would be 1.
     * @param max The max number to allow.
     * @param min The min umber to allow; will also work as the random number incrementer.
     */
    static getRandomNum(max, min){
        return Math.floor(Math.random() * max) + min;
    }
}

class Player {
    /**
     * @description Constructor.
     */
    constructor(){
        this.player = "images/char-boy.png";
        this.x = playerInitPosX;
        this.y = playerInitPosY;
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
            if(Player.isValidPos(this.y - 1, maxYPos, -.5))
            {
                this.y--;
                this.checkWinner();
            }
            break;
            case "down":
            if(Player.isValidPos(this.y + 1, maxYPos, -.5))
                this.y++;
            break;
            case "left":
            if(Player.isValidPos(this.x - 1, maxXPos))
                this.x--;
            break;
            case "right":
            if(Player.isValidPos(this.x + 1, maxXPos))
                this.x++;
            break;
        }
    }

    /**
     * @description Checks if the player has won.
     */
    checkWinner(){
        // Check if we have a winner.
        if(this.y === -.5){
            // Need time to draw the player in the winning location.
            setTimeout(function(p){
                alert("You Won!!!");
                p.x = playerInitPosX;
                p.y = playerInitPosY;
            }, 100, this);
        }
    }

    /**
     * @description Checks to make sure the new player position will fall
     * within the bounds of the game board.
     * @param pos The new player position.
     * @param maxPos The max position the player is allowed to move to.
     * @param minPos The min position the player is allowed to move to.
     */
    static isValidPos(pos, maxPos, minPos = 0){
        if(pos >= minPos && pos <= maxPos)
            return true;
        else
            return false;
    }
}

const maxXPos = 4;
const maxYPos = 5;
const playerInitPosX = 2;
const playerInitPosY = 4.5;
let allEnemies = [];
let player = new Player();

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

// Creates an enemy ever .5 second.
setInterval(function(){
    allEnemies.push(new Enemy());
}, 500);