export class NPC {
    constructor(game) {
        this.game = game;
        this.width = 200;
        this.height = 400;
        this.x = 1350;
        this.y = 200;
        this.sprite = null;
    }
    update(sprite) {
        this.sprite = sprite;
    }
    draw(context) {
        if (!this.sprite) return;
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}