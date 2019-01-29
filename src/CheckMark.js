export const CheckMark = ({ width = "20px", height = "20px", style }) => (
  <svg
    className="passfailcheck"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.33 13.75"
    style={{
      ...style,
      fill: "none",
      stroke: "#5dc5a5",
      strokeLinecap: "square",
      strokeWidth: "4px",
      width: width,
      height: height
    }}
  >
    <title>check-mark</title>
    <g>
      <g>
        <polyline
          className="check-mark"
          points="3.53 6.9 7.07 10.26 13.79 3.54"
        />
      </g>
    </g>
  </svg>
);
const XMark = props => (
  <svg
    className="passfailcheck"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.32 13.32"
    style={{
      ...props.style,
      fill: "none",
      stroke: "#e65c64",
      strokeLinecap: "square",
      strokeWidth: "3px",
      width: props.width,
      height: props.height
    }}
  >
    <title>x-mark</title>
    <g>
      <g>
        <line className="x-mark" x1="3.54" y1="3.54" x2="9.78" y2="9.78" />
        <line className="x-mark" x1="9.78" y1="3.54" x2="3.54" y2="9.78" />
      </g>
    </g>
  </svg>
);
