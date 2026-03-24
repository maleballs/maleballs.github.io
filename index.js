window.addEventListener('load', function() {
    //canvas setup
    const canvas = document.getElementById('kevin_rpg_2');

    //Drawing context, lets us draw and animate on our canvas element
    const ctx = canvas.getContext('2d');

    //This is retarded but seems to work
    canvas.width = 10000;
    canvas.height = 3000;
    

    //Class declaration, add these as you go (oop principles)
    class InputHandler {

    }
    class Card {

    }
    class Item {

    }
    class Date {

    }
    class Background {

    }
    class NPC {
        constructor(game) {
            this.game = game;
            this.width = 250;
            this.height = 300;
            //Update these later, for now just draw on screen. screen size (1000, 300)
            this.x = 750;
            this.y = 150;
        }
        update(sprite) {
            //Replace the sprite
            this.sprite = sprite;
        }
        draw(context) {
            
        }
    }
    class UI {
        //May not need this, should display money and handle transactions
    }
    class Game {
        //All other classes will be encapsulated within this one
    }
});