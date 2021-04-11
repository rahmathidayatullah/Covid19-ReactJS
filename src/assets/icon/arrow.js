import React from "react";

export default function arrow({ width, height, className, fill }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33331 5.46669L9.06665 1.66669C9.33331 1.40002 9.33331 1.00002 9.06665 0.733356C8.79998 0.466689 8.39998 0.466689 8.13331 0.733356L4.79998 4.00002L1.46665 0.733356C1.19998 0.466689 0.799979 0.466689 0.533313 0.733356C0.399979 0.866689 0.333313 1.00002 0.333313 1.20002C0.333313 1.40002 0.399979 1.53336 0.533313 1.66669L4.26665 5.46669C4.59998 5.73336 4.99998 5.73336 5.33331 5.46669C5.26665 5.46669 5.26665 5.46669 5.33331 5.46669Z"
        fill={fill}
      />
    </svg>
  );
}

arrow.defaultProps = {
  width: "14",
  height: "16",
  fill: "#000D23",
};
