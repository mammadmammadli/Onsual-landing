import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  direction?: "up" | "down" | "left" | "right";
};

const Chevron = (props: Props) => {
  const { direction } = props;

  if (direction === "down") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.52864 5.52864C3.78899 5.26829 4.2111 5.26829 4.47145 5.52864L8.00004 9.05723L11.5286 5.52864C11.789 5.26829 12.2111 5.26829 12.4714 5.52864C12.7318 5.78899 12.7318 6.2111 12.4714 6.47145L8.47145 10.4714C8.2111 10.7318 7.78899 10.7318 7.52864 10.4714L3.52864 6.47145C3.26829 6.2111 3.26829 5.78899 3.52864 5.52864Z"
          fill="#9BA5B5"
        />
      </svg>
    );
  }

  return null;
};

export default Chevron;
