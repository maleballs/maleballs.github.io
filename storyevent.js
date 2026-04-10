export class storyevent {
    constructor(name) {
        this.name = name;
        this.events = [];
    }

    addDialogue(text) {
        this.events.push(text);
    }

    getDialogue(index) {
        return this.events[index];
    }
}