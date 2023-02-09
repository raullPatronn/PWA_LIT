import {html, LitElement} from 'lit';

class WordViewer extends LitElement {
  render() {
    return html`<pre>A super expressive and efficient template!</pre>`;
  }
}
customElements.define('word-viewer', WordViewer);
