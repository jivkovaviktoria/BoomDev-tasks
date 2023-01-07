import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    const wrapper = document.getElementById('emojis');
    wrapper.innerHTML = '';

    for (const emoji of this.emojis) {
      const p = document.createElement('p');
      p.textContent = emoji;
      wrapper.appendChild(p);
    }
  }

  addBananas() {
    this.emojis = this.emojis.map(emoji => `${emoji} ${this.banana}`);
  }
}
