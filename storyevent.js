export class storyevent {
    constructor(name) {
        this.name = name;
        this.events = [];
    }
    addDialogue(text) {
        this.events.push(text);
    }
}

//---story builders---

/**
 * @param {storyevent} story
 * @returns {storyevent}
 */
export function initbldr(story) {
    story.addDialogue("Welcome to Kevin RPG 2!");
    //get claude to do the rest of the dialogue
    return story;
}