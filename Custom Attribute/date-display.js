import {LitElement, html} from 'lit';
import {dateConverter} from './date-converter.js';

export class DateDisplay extends LitElement {
  static properties = {
    date: {converter: dateConverter},
  };

  constructor() {
    super();
    this.date = new Date();
  }

  render() {
    const locale = 'en-US';
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}
customElements.define('date-display', DateDisplay);
