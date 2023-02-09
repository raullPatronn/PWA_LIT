import {LitElement, html, svg} from 'lit';

const createElement = (chars) => svg`
  <text
    dominant-baseline="hanging"
    font-family="monospace"
    font-size="24px">
    ${chars}
  </text>
`;

export class RepeatPattern extends LitElement {
  static properties = {
    chars: {type: String},
  };

  constructor() {
    super();
    this.chars = 'lit';
  }

  render() {
    return html`
      <svg height="100%" width="100%">
        ${createElement(this.chars)}
      </svg>
    `;
  }
}
customElements.define('repeat-pattern', RepeatPattern);
