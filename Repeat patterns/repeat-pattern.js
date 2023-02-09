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

  return svg`
    <g
      id="motif"
      transform="translate(50, 50)">
        ${prints}
    </g>
  `;
};

const createTileBoundary = () => svg`
  <clipPath id="rect-clip">
    <rect width="200" height="200"></rect>
  </clipPath>
`;

const createTile = () => svg`
  <g clip-path="url(#rect-clip)">
    <use transform="translate(0, 0)" href="#motif"></use>
    <use transform="translate(0, 100)" href="#motif"></use>
    <use transform="translate(100, -50)" href="#motif"></use>
    <use transform="translate(100, 50)" href="#motif"></use>
    <use transform="translate(100, 150)" href="#motif"></use>
  </g>
`;

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
          ${createTileBoundary()}
          ${createElement(this.chars)}
          ${createMotif(this.numPrints, this.rotationOffset)}
        </defs>
            ${createTile()}
      </svg>
    `;
  }
}
customElements.define('repeat-pattern', RepeatPattern);
