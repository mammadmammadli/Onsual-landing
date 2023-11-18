import { SVGProps } from "react";

type CheckProps = SVGProps<SVGSVGElement>;

const Check = (props: CheckProps) => {
  return (
    <svg
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M30 57.0001C44.9117 57.0001 57 44.9118 57 30.0001C57 15.0884 44.9117 3 30 3C15.0883 3 3 15.0884 3 30.0001C3 44.9118 15.0883 57.0001 30 57.0001Z"
        strokeWidth="6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.1583 22.175C40.6139 22.6306 40.6139 23.3693 40.1583 23.8249L27.325 36.6582C26.8693 37.1138 26.1307 37.1138 25.675 36.6582L19.8417 30.8249C19.3861 30.3693 19.3861 29.6306 19.8417 29.175C20.2973 28.7193 21.036 28.7193 21.4916 29.175L26.5 34.1833L38.5084 22.175C38.964 21.7193 39.7027 21.7193 40.1583 22.175Z"
        fill="white"
      />
    </svg>
  );
};

export default Check;
