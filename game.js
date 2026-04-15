import { Background } from "./background.js";
import { UI } from "./ui.js";
import { NPC } from "./npc.js";
import * as storyclass from "./storyevent.js";

const storyenum = {
    init: 0
};

export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.background = new Background(this);
        this.ui = new UI(this);
        this.npc = new NPC(this);
        this.story = [
            //call all event builder classes to build this array
            storyclass.initbldr(new storyclass.storyevent("init"))
        ];

        //first event of first scene
        this.dialogue = this.story[storyenum.init].events[0];

        this.backgroundImage = new Image();
        this.backgroundImage.src = 'assets/vegasstrip.jpg';

        this.npcSprite = new Image();
    }
    //update called in a loop, changes to certain variables (IE dialogue) will update
    //automatically when changed, then drawn.
    update() {
        this.background.update(this.backgroundImage);
        this.ui.update(this.dialogue);
        this.npc.update(this.npcSprite);
    }
    draw(context) {
        this.background.draw(context);
        this.npc.draw(context);
        this.ui.draw(context);
    }
}