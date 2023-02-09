import {LitElement, html} from 'lit';
// TODO: import map directive.

class MyElement extends LitElement {
  static properties = {
    items: {state: true},
  };

  constructor() {
    super();
    this.items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime']);
  }

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        <!-- TODO: Utilize map directive to render items. -->
      </ul>
    `;
  }
}
customElements.define('my-element', MyElement);
