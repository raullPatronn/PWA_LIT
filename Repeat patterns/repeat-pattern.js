import {LitElement, html, svg} from 'lit';

const createElement = (chars) => svg`
  <text
    id="chars"
    dominant-basline="hanging"
    font-family="monospace"
    font-size="24px">
    ${chars}
  </text>
`;

const createMotif = (numPrints, offset = 0) => {
  const rotation = 360 / numPrints;

  const prints = [];
  let currRotation = offset;
  for (let index = 0; index < numPrints; index++) {
    currRotation += rotation;
    prints.push(svg`
      <use
        href="#chars"
        transform="rotate(${currRotation}, 0, 0)">
      </use>
    `);
  }

  return svg`<g transform="translate(50, 50)">${prints}</g>`;
};

export class RepeatPattern extends LitElement {
  static properties = {
    chars: {type: String},
    numPrints: {type: Number, attribute: 'num-prints'},
    rotationOffset: {
      type: Number,
      attribute: 'rotation-offset',
    },
  };

  constructor() {
    super();
    this.chars = 'lit';
    this.numPrints = 7;
    this.rotationOffset = 0;
  }

  render() {
    return html`
      <svg height="100%" width="100%">
        <defs>
          ${createElement(this.chars)}
        </defs>
        ${createMotif(this.numPrints, this.rotationOffset)}
      </svg>
    `;
  }
}
customElements.define('repeat-pattern', RepeatPattern);
