import { SVGProps } from "react";

type BarChartProps = SVGProps<SVGSVGElement>;

const BarChart = (props: BarChartProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75752 7.99996C4.77168 7.99996 4.78586 7.99997 4.80005 7.99997H5.86671C5.8809 7.99997 5.89508 7.99996 5.90924 7.99996C6.24575 7.99992 6.57347 7.99988 6.85102 8.02256C7.15581 8.04746 7.51546 8.10622 7.87736 8.29062C8.37912 8.54628 8.78707 8.95423 9.04273 9.45599C9.22713 9.81789 9.28588 10.1775 9.31079 10.4823C9.33346 10.7599 9.33342 11.0876 9.33338 11.4241C9.33338 11.4383 9.33338 11.4524 9.33338 11.4666L9.33338 25.9092C9.33342 26.2457 9.33346 26.5734 9.31079 26.8509C9.28588 27.1557 9.22713 27.5154 9.04273 27.8773C8.78707 28.379 8.37912 28.787 7.87735 29.0427C7.51546 29.227 7.15581 29.2858 6.85102 29.3107C6.57347 29.3334 6.24574 29.3333 5.90922 29.3333H4.75754C4.42102 29.3333 4.09329 29.3334 3.81574 29.3107C3.51095 29.2858 3.1513 29.227 2.78941 29.0427C2.28764 28.787 1.87969 28.379 1.62403 27.8773C1.43963 27.5154 1.38088 27.1557 1.35597 26.8509C1.3333 26.5734 1.33334 26.2457 1.33338 25.9092L1.33338 11.4666C1.33338 11.4524 1.33338 11.4383 1.33338 11.4241C1.33334 11.0876 1.3333 10.7599 1.35597 10.4823C1.38088 10.1775 1.43963 9.81789 1.62403 9.45599C1.87969 8.95423 2.28764 8.54628 2.78941 8.29062C3.1513 8.10622 3.51095 8.04746 3.81574 8.02256C4.09329 7.99988 4.42101 7.99992 4.75752 7.99996Z"
        fill="#02C04A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4242 2.66663C15.4383 2.66663 15.4525 2.66663 15.4667 2.66663L16.5334 2.66663C16.5476 2.66663 16.5617 2.66663 16.5759 2.66663C16.9124 2.66659 17.2401 2.66655 17.5177 2.68923C17.8225 2.71413 18.1821 2.77289 18.544 2.95728C19.0458 3.21294 19.4537 3.62089 19.7094 4.12266C19.8938 4.48456 19.9526 4.8442 19.9775 5.14899C20.0001 5.42654 20.0001 5.75426 20.0001 6.09077C20 6.10493 20 6.11911 20 6.1333L20 25.9092C20.0001 26.2457 20.0001 26.5734 19.9775 26.8509C19.9526 27.1557 19.8938 27.5154 19.7094 27.8773C19.4537 28.379 19.0458 28.787 18.544 29.0427C18.1821 29.227 17.8225 29.2858 17.5177 29.3107C17.2401 29.3334 16.9124 29.3333 16.5759 29.3333H15.4242C15.0877 29.3333 14.7599 29.3334 14.4824 29.3107C14.1776 29.2858 13.818 29.227 13.4561 29.0427C12.9543 28.787 12.5464 28.379 12.2907 27.8773C12.1063 27.5154 12.0475 27.1557 12.0226 26.8509C12 26.5734 12 26.2457 12 25.9092L12 6.1333C12 6.11911 12 6.10493 12 6.09077C12 5.75426 12 5.42654 12.0226 5.14899C12.0475 4.8442 12.1063 4.48456 12.2907 4.12266C12.5464 3.62089 12.9543 3.21294 13.4561 2.95728C13.818 2.77289 14.1776 2.71413 14.4824 2.68923C14.76 2.66655 15.0877 2.66659 15.4242 2.66663Z"
        fill="#02C04A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.0908 13.3333C26.105 13.3333 26.1192 13.3333 26.1334 13.3333H27.2C27.2142 13.3333 27.2284 13.3333 27.2426 13.3333C27.5791 13.3333 27.9068 13.3332 28.1844 13.3559C28.4891 13.3808 28.8488 13.4396 29.2107 13.6239C29.7125 13.8796 30.1204 14.2876 30.3761 14.7893C30.5605 15.1512 30.6192 15.5109 30.6441 15.8157C30.6668 16.0932 30.6668 16.4209 30.6667 16.7574C30.6667 16.7716 30.6667 16.7858 30.6667 16.8L30.6667 25.9092C30.6668 26.2457 30.6668 26.5734 30.6441 26.8509C30.6192 27.1557 30.5605 27.5154 30.3761 27.8773C30.1204 28.379 29.7125 28.787 29.2107 29.0427C28.8488 29.227 28.4891 29.2858 28.1844 29.3107C27.9068 29.3334 27.5791 29.3333 27.2426 29.3333H26.0909C25.7544 29.3333 25.4266 29.3334 25.1491 29.3107C24.8443 29.2858 24.4846 29.227 24.1227 29.0427C23.621 28.787 23.213 28.379 22.9574 27.8773C22.773 27.5154 22.7142 27.1557 22.6893 26.8509C22.6666 26.5734 22.6667 26.2457 22.6667 25.9092L22.6667 16.8C22.6667 16.7858 22.6667 16.7716 22.6667 16.7574C22.6667 16.4209 22.6666 16.0932 22.6893 15.8157C22.7142 15.5109 22.773 15.1512 22.9574 14.7893C23.213 14.2876 23.621 13.8796 24.1227 13.6239C24.4846 13.4396 24.8443 13.3808 25.1491 13.3559C25.4266 13.3332 25.7543 13.3333 26.0908 13.3333Z"
        fill="#02C04A"
      />
    </svg>
  );
};

export default BarChart;
