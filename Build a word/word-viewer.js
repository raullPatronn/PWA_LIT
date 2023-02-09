import {html, LitElement} from 'lit';

class WordViewer extends LitElement {
  static properties = {
    idx: {state: true},
    words: {},
  };

  constructor() {
    super();
    this.idx = 0;
    this.words = 'initial value';
  }

  render() {
    const splitWords = this.words.split('.');
    const word = splitWords[this.idx % splitWords.length];
    return html`<pre>${word}</pre>`;
  }
}
customElements.define('word-viewer', WordViewer);