import {LitElement, html} from 'lit';

export class MoreExpressions extends LitElement {
  static properties = {
    checked: {},
  };

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`
      <div>
         <!-- TODO: Add expression to input. -->
         <input type="text" value="Hello there.">
      </div>
      <label><input type="checkbox" @change=${this.setChecked}> Enable editing</label>
    `;
  }

  setChecked(event) {
    this.checked = event.target.checked;
  }
}
customElements.define('more-expressions', MoreExpressions);
