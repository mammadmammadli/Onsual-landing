import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  icon: "watch" | "light" | "medal";
};

const Glass = (props: IconProps) => {
  const { icon, ...rest } = props;

  if (icon === "watch") {
    return (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="21.3334"
          y="5.33325"
          width="21.3333"
          height="53.3333"
          rx="5.33333"
          fill="#02C04A"
        />
        <g filter="url(#filter0_bi_806_13022)">
          <circle cx="32" cy="32" r="24" fill="#9D9D9D" fillOpacity="0.16" />
          <circle
            cx="32"
            cy="32"
            r="24"
            fill="url(#paint0_linear_806_13022)"
            fillOpacity="0.2"
          />
          <circle
            cx="32"
            cy="32"
            r="23.7333"
            stroke="url(#paint1_linear_806_13022)"
            strokeOpacity="0.1"
            strokeWidth="0.533333"
          />
        </g>
        <g filter="url(#filter1_i_806_13022)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 13.3333C33.4728 13.3333 34.6667 14.5272 34.6667 15.9999V29.3333H45.3334C46.8061 29.3333 48 30.5272 48 31.9999C48 33.4727 46.8061 34.6666 45.3334 34.6666H32C30.5273 34.6666 29.3334 33.4727 29.3334 31.9999V15.9999C29.3334 14.5272 30.5273 13.3333 32 13.3333Z"
            fill="white"
            fillOpacity="0.16"
          />
        </g>
        <defs>
          <filter
            id="filter0_bi_806_13022"
            x="0"
            y="0"
            width="64"
            height="64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_806_13022"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_806_13022"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.33333" />
            <feGaussianBlur stdDeviation="2.66667" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_806_13022"
            />
          </filter>
          <filter
            id="filter1_i_806_13022"
            x="29.3334"
            y="13.3333"
            width="18.6666"
            height="22.6666"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.33333" />
            <feGaussianBlur stdDeviation="0.666667" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_806_13022"
            />
          </filter>
          <linearGradient
            id="paint0_linear_806_13022"
            x1="8"
            y1="8"
            x2="64.5425"
            y2="22.3572"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CFFF82" />
            <stop offset="1" stopColor="#37FF4B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_806_13022"
            x1="9.5"
            y1="10.1818"
            x2="56"
            y2="10.1818"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7FF7E" />
            <stop offset="1" stopColor="#5CFF41" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (icon === "light") {
    return (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5742 42.8881C25.4446 41.3334 26.6715 40 28.2316 40H35.7687C37.3288 40 38.5557 41.3334 38.4262 42.8881L37.5373 53.5548C37.4221 54.9369 36.2667 56 34.8798 56H29.1205C27.7336 56 26.5782 54.9369 26.4631 53.5548L25.5742 42.8881Z"
          fill="#02C04A"
        />
        <g filter="url(#filter0_bi_806_6788)">
          <path
            d="M40.7926 45.1195C41.2493 41.9223 43.2687 39.2275 45.4996 36.8922C48.7008 33.5412 50.6668 29.0002 50.6668 23.9999C50.6668 13.6906 42.3095 5.33325 32.0002 5.33325C21.6908 5.33325 13.3335 13.6906 13.3335 23.9999C13.3335 29.0002 15.2995 33.5412 18.5007 36.8922C20.7316 39.2275 22.751 41.9223 23.2077 45.1195L23.346 46.0875C23.7214 48.715 25.9716 50.6666 28.6257 50.6666H35.3746C38.0287 50.6666 40.279 48.715 40.6543 46.0875L40.7926 45.1195Z"
            fill="#9D9D9D"
            fillOpacity="0.16"
          />
          <path
            d="M40.7926 45.1195C41.2493 41.9223 43.2687 39.2275 45.4996 36.8922C48.7008 33.5412 50.6668 29.0002 50.6668 23.9999C50.6668 13.6906 42.3095 5.33325 32.0002 5.33325C21.6908 5.33325 13.3335 13.6906 13.3335 23.9999C13.3335 29.0002 15.2995 33.5412 18.5007 36.8922C20.7316 39.2275 22.751 41.9223 23.2077 45.1195L23.346 46.0875C23.7214 48.715 25.9716 50.6666 28.6257 50.6666H35.3746C38.0287 50.6666 40.279 48.715 40.6543 46.0875L40.7926 45.1195Z"
            fill="url(#paint0_linear_806_6788)"
            fillOpacity="0.2"
          />
          <path
            d="M45.3068 36.708C43.0671 39.0524 40.9977 41.7984 40.5286 45.0818L40.3903 46.0498C40.0337 48.5459 37.896 50.3999 35.3746 50.3999H28.6257C26.1043 50.3999 23.9666 48.5459 23.61 46.0498L23.4717 45.0818C23.0027 41.7984 20.9332 39.0524 18.6936 36.708C15.5378 33.4046 13.6002 28.9288 13.6002 23.9999C13.6002 13.8379 21.8381 5.59992 32.0002 5.59992C42.1622 5.59992 50.4002 13.8379 50.4002 23.9999C50.4002 28.9288 48.4625 33.4046 45.3068 36.708Z"
            stroke="url(#paint1_linear_806_6788)"
            strokeOpacity="0.1"
            strokeWidth="0.533333"
          />
        </g>
        <g filter="url(#filter1_i_806_6788)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.8828 31.366L27.9603 39.6763C28.1389 40.3907 27.7046 41.1146 26.9902 41.2932C26.2758 41.4718 25.5519 41.0374 25.3733 40.323L23.1779 31.5415C22.7186 29.7042 24.4686 28.0837 26.2652 28.6825L29.892 29.8915C31.2604 30.3476 32.7399 30.3476 34.1083 29.8915L37.7351 28.6825C39.5317 28.0837 41.2817 29.7042 40.8224 31.5415L38.627 40.323C38.4484 41.0374 37.7245 41.4718 37.0101 41.2932C36.2957 41.1146 35.8614 40.3907 36.04 39.6763L38.1175 31.366L34.9516 32.4213C33.0358 33.0599 30.9645 33.0599 29.0487 32.4213L25.8828 31.366Z"
            fill="white"
            fillOpacity="0.16"
          />
        </g>
        <defs>
          <filter
            id="filter0_bi_806_6788"
            x="5.3335"
            y="-2.66675"
            width="53.3334"
            height="61.3333"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_806_6788"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_806_6788"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.33333" />
            <feGaussianBlur stdDeviation="2.66667" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_806_6788"
            />
          </filter>
          <filter
            id="filter1_i_806_6788"
            x="23.1036"
            y="28.5559"
            width="17.793"
            height="14.1107"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.33333" />
            <feGaussianBlur stdDeviation="0.666667" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_806_6788"
            />
          </filter>
          <linearGradient
            id="paint0_linear_806_6788"
            x1="13.3335"
            y1="5.33325"
            x2="58.1852"
            y2="14.7122"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CFFF82" />
            <stop offset="1" stopColor="#37FF4B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_806_6788"
            x1="14.5002"
            y1="7.39386"
            x2="50.6668"
            y2="7.39386"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7FF7E" />
            <stop offset="1" stopColor="#5CFF41" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2417 8H14.6055C12.7189 8 11.4289 9.9054 12.1296 11.657L20.6629 32.9904C21.0679 34.0028 22.0484 34.6667 23.1388 34.6667H40.8613C41.9517 34.6667 42.9323 34.0028 43.3373 32.9904L51.8706 11.657C52.5713 9.9054 51.2812 8 49.3947 8H41.7585C40.6917 8 39.7276 8.63573 39.3074 9.61622L32.4903 25.5228C32.3056 25.9538 31.6946 25.9538 31.5099 25.5228L24.6927 9.61622C24.2725 8.63572 23.3084 8 22.2417 8Z"
        fill="#02C04A"
      />
      <g filter="url(#filter0_bi_806_6820)">
        <circle
          cx="32.0002"
          cy="39.9999"
          r="18.6667"
          fill="#9D9D9D"
          fillOpacity="0.16"
        />
        <circle
          cx="32.0002"
          cy="39.9999"
          r="18.6667"
          fill="url(#paint0_linear_806_6820)"
          fillOpacity="0.2"
        />
        <circle
          cx="32.0002"
          cy="39.9999"
          r="18.4"
          stroke="url(#paint1_linear_806_6820)"
          strokeOpacity="0.1"
          strokeWidth="0.533333"
        />
      </g>
      <g filter="url(#filter1_i_806_6820)">
        <path
          d="M31.239 29.0086C31.4785 28.2716 32.5212 28.2716 32.7607 29.0086L34.9934 35.8801H42.2184C42.9934 35.8801 43.3156 36.8718 42.6887 37.3273L36.8435 41.5741L39.0761 48.4456C39.3156 49.1826 38.472 49.7955 37.8451 49.34L31.9998 45.0932L26.1546 49.34C25.5277 49.7955 24.6841 49.1826 24.9236 48.4456L27.1562 41.5741L21.311 37.3273C20.684 36.8718 21.0063 35.8801 21.7812 35.8801H29.0063L31.239 29.0086Z"
          fill="white"
          fillOpacity="0.16"
        />
      </g>
      <defs>
        <filter
          id="filter0_bi_806_6820"
          x="5.3335"
          y="13.3333"
          width="53.3334"
          height="53.3333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_806_6820"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_806_6820"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.33333" />
          <feGaussianBlur stdDeviation="2.66667" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_806_6820"
          />
        </filter>
        <filter
          id="filter1_i_806_6820"
          x="20.9797"
          y="28.4558"
          width="22.0403"
          height="22.3739"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.33333" />
          <feGaussianBlur stdDeviation="0.666667" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_806_6820"
          />
        </filter>
        <linearGradient
          id="paint0_linear_806_6820"
          x1="13.3335"
          y1="21.3333"
          x2="57.311"
          y2="32.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CFFF82" />
          <stop offset="1" stopColor="#37FF4B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_806_6820"
          x1="14.5002"
          y1="23.0302"
          x2="50.6668"
          y2="23.0302"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7FF7E" />
          <stop offset="1" stopColor="#5CFF41" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Glass;