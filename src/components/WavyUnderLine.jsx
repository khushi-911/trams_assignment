export function WavyUnderline({text}) {
  return (
    <span className="wavy-wrapper">
      {text}
      <svg
        className="wavy-svg"
        viewBox="0 0 595 56"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53"
          stroke="#FFC250"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}



