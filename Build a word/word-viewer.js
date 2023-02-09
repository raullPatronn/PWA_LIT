import {css, html, LitElement} from 'lit';

class WordViewer extends LitElement {
  static properties = {
    playDirection: {state: true},
    idx: {state: true},
    words: {},
  };
  static styles = css`
    :host {
      background-color: white;
      color: violet;
      cursor: pointer;
      display: block;
    }
    pre {
      padding: 0.2em;
    }
  `;

  constructor() {
    super();
    this.playDirection = 1;
    this.idx = 0;
    this.words = 'initial value';
  }

  intervalTimer;

  connectedCallback() {
    super.connectedCallback();
    this.intervalTimer = setInterval(this.tickToNextWord, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalTimer);
    this.intervalTimer = undefined;
  }

  render() {
    const splitWords = this.words.split('.');
    const idx =
      ((this.idx % splitWords.length) + splitWords.length) % splitWords.length;
    const word = splitWords[idx];
    return html`<pre
      @click=${this.switchPlayDirection}
    >${word}</pre>`;
  }

  tickToNextWord = () => {
    this.idx += this.playDirection;
  };

  switchPlayDirection() {
    this.playDirection *= -1;
  }
}
customElements.define('word-viewer', WordViewer);
