import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const QuizRectangle = (props: Props) => {
  return (
    <svg
      width="240"
      height="48"
      viewBox="0 0 240 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 24C0 12.6863 0 7.02944 3.51472 3.51472C7.02944 0 12.6863 0 24 0H77.5802V0C81.4908 0 85.1748 1.83554 87.5299 4.95751L95.0175 14.8831C97.7867 18.5539 99.1713 20.3894 100.422 21.6632C111.176 32.6162 128.824 32.6162 139.578 21.6632C140.829 20.3894 142.213 18.5539 144.983 14.8831L152.47 4.9575C154.825 1.83553 158.509 0 162.42 0V0H216C227.314 0 232.971 0 236.485 3.51472C240 7.02944 240 12.6863 240 24V48H0V24Z" />
    </svg>
  );
};

export default QuizRectangle;
