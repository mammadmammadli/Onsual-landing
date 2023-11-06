import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Hamburger = (props: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.91667 10.0001C7.91667 8.84949 8.84941 7.91675 10 7.91675C11.1506 7.91675 12.0833 8.84949 12.0833 10.0001C12.0833 11.1507 11.1506 12.0834 10 12.0834C8.84941 12.0834 7.91667 11.1507 7.91667 10.0001Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2083 10.0001C15.2083 8.84949 16.1411 7.91675 17.2917 7.91675C18.4423 7.91675 19.375 8.84949 19.375 10.0001C19.375 11.1507 18.4423 12.0834 17.2917 12.0834C16.1411 12.0834 15.2083 11.1507 15.2083 10.0001Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.625 10.0001C0.625 8.84949 1.55774 7.91675 2.70833 7.91675C3.85893 7.91675 4.79167 8.84949 4.79167 10.0001C4.79167 11.1507 3.85893 12.0834 2.70833 12.0834C1.55774 12.0834 0.625 11.1507 0.625 10.0001Z"
      />
    </svg>
  );
};

export default Hamburger;
