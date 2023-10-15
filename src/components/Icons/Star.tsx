import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Star = (props: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.43035 1.18378C8.15811 1.05398 7.84184 1.05398 7.5696 1.18378C7.33426 1.29599 7.2045 1.49081 7.13906 1.59769C7.07142 1.70818 7.00197 1.84894 6.93429 1.98613L5.49713 4.89765L2.28243 5.36753C2.13111 5.38961 1.97583 5.41228 1.84989 5.44256C1.72805 5.47186 1.50278 5.53523 1.3235 5.72445C1.11611 5.94337 1.01857 6.24417 1.05805 6.54313C1.09218 6.80155 1.23741 6.98505 1.31888 7.08027C1.40309 7.1787 1.51552 7.28816 1.6251 7.39485L3.95029 9.65958L3.40165 12.8584C3.37575 13.0093 3.34918 13.164 3.33895 13.2932C3.32906 13.4181 3.3195 13.652 3.44396 13.8812C3.58793 14.1463 3.84385 14.3322 4.14043 14.3871C4.39684 14.4347 4.61636 14.3533 4.73211 14.3052C4.85181 14.2556 4.99076 14.1825 5.1262 14.1112L7.99997 12.5999L10.8738 14.1112C11.0092 14.1825 11.1481 14.2556 11.2678 14.3052C11.3836 14.3533 11.6031 14.4347 11.8595 14.3871C12.1561 14.3322 12.412 14.1463 12.556 13.8812C12.6805 13.652 12.6709 13.4181 12.661 13.2932C12.6508 13.164 12.6242 13.0093 12.5983 12.8585L12.0497 9.65958L14.3749 7.39482C14.4844 7.28815 14.5969 7.17869 14.6811 7.08027C14.7625 6.98505 14.9078 6.80155 14.9419 6.54313C14.9814 6.24417 14.8838 5.94337 14.6764 5.72445C14.4972 5.53523 14.2719 5.47186 14.1501 5.44256C14.0241 5.41228 13.8688 5.38961 13.7175 5.36752L10.5028 4.89765L9.06569 1.98618C8.998 1.84898 8.92854 1.70819 8.86089 1.59769C8.79545 1.49081 8.66569 1.29599 8.43035 1.18378Z" />
    </svg>
  );
};

export default Star;