import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    forward: {},
    backward: {},
  };

  constructor() {
    super();
    this.forward = '';
    this.backward = '';
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('forward')) {
      this.backward = this.forward.split('').reverse().join('');
    }

    if (changedProperties.has('backward')) {
      this.forward = this.backward.split('').reverse().join('');
    }
  }

  onInput(e) {
    const inputEl = e.target;
    if (inputEl.id === 'forward') {
      this.forward = inputEl.value;
    } else {
      this.backward = inputEl.value;
    }
  }

  render() {
    return html`
      <label>Forward: <input id="forward" @input=${this.onInput} .value=${this.forward}></label>
      <label>Backward: <input id="backward" @input=${this.onInput} .value=${this.backward}></label>
      <div>Forward text: ${this.forward}</div>
      <div>Backward text: ${this.backward}</div>
    `;
  }
}
customElements.define('my-element', MyElement);
