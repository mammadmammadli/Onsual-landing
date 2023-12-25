import { SVGProps } from "react";

type LoginProps = SVGProps<SVGSVGElement>;

const Login = (props: LoginProps) => {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 168 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.16 10C20.16 4.47715 15.647 0 10.08 0C4.51297 0 0 4.47715 0 10C0 15.5228 4.51297 20 10.08 20C4.51297 20 0 24.4772 0 30C0 35.5229 4.51297 40 10.08 40C15.647 40 20.16 35.5229 20.16 30C25.727 30 30.24 34.4772 30.24 40C30.24 34.4772 34.753 30 40.32 30C34.753 30 30.24 25.5228 30.24 20C35.8071 20 40.32 15.5228 40.32 10C40.32 4.47715 35.8071 0 30.24 0C24.673 0 20.16 4.47715 20.16 10ZM20.16 10C20.16 15.5228 24.673 20 30.24 20C30.24 25.5228 25.727 30 20.16 30C20.16 24.4772 15.647 20 10.08 20C15.647 20 20.16 15.5228 20.16 10ZM162.662 2.04619C161.941 2.04619 161.356 2.62636 161.356 3.34201V30.4309C161.356 31.1465 161.941 31.3981 162.662 31.3981H166.694C167.415 31.3981 168 31.1465 168 30.4309V3.34201C168 2.62636 167.415 2.04619 166.694 2.04619H162.662ZM71.9846 11.3435C71.2421 11.3435 70.6491 11.9564 70.6794 12.6923L70.7857 15.2741V30.1021C70.7857 30.8177 71.3706 31.398 72.0919 31.398H76.1233C76.8449 31.398 77.4295 30.8177 77.4295 30.1021V22.8146C77.4295 18.7235 79.7389 16.2769 82.3719 16.2769C84.1141 16.2769 86.1799 17.3598 86.1799 20.4482V30.1021C86.1799 30.8177 86.7648 31.398 87.4861 31.398H91.5175C92.2391 31.398 92.8237 30.8177 92.8237 30.1021V18.162C92.8237 14.0308 90.0285 10.7018 85.0861 10.7018C83.0613 10.7018 80.2436 11.2726 77.8564 13.8947C77.6981 14.0688 77.3963 13.9752 77.3778 13.7414L77.2817 12.5371C77.2281 11.8632 76.661 11.3435 75.9797 11.3435H71.9846ZM57.8091 32.0396C65.182 32.0396 69.2735 27.5473 69.2735 21.3305C69.2735 15.1137 65.182 10.7418 57.8091 10.7418C50.3954 10.7418 46.2634 15.1137 46.2634 21.3305C46.2634 27.5473 50.3954 32.0396 57.8091 32.0396ZM57.8091 26.5847C54.7706 26.5847 53.0692 24.3385 53.0692 21.3305C53.0692 18.3224 54.7706 16.1966 57.8091 16.1966C60.8473 16.1966 62.5487 18.3224 62.5487 21.3305C62.5487 24.3385 60.8473 26.5847 57.8091 26.5847ZM113.57 25.3014C113.57 29.3122 109.884 32.0397 104.172 32.0397C101.11 32.0397 98.0811 31.3251 95.1142 29.7798C94.5387 29.4799 94.3096 28.7895 94.558 28.1934L95.6442 25.5875C95.952 24.8492 96.853 24.5641 97.5633 24.9409C100.225 26.3539 102.622 26.9458 104.779 26.9458C105.954 26.9458 107.008 26.7452 107.008 25.9833C107.008 25.3815 106.319 25.1008 104.334 24.3788L100.728 23.0953C96.6367 21.6514 95.0162 19.7663 95.0162 17.2395C95.0162 13.6698 98.0142 10.7018 104.091 10.7018C106.627 10.7018 109.01 11.278 111.667 12.3778C112.34 12.6565 112.623 13.4422 112.307 14.0946L111.171 16.4436C110.846 17.1151 110.02 17.3723 109.333 17.0736C107.415 16.2409 105.407 15.8357 103.645 15.8357C102.146 15.8357 101.539 16.317 101.539 16.7983C101.539 17.3712 102.397 17.6327 103.873 18.0823L103.873 18.0824C104.153 18.1678 104.456 18.2601 104.779 18.3625L107.858 19.3251C110.937 20.2877 113.57 21.9723 113.57 25.3014ZM136.058 31.3982C136.8 31.3982 137.393 30.785 137.363 30.0493L137.256 27.4675V12.6396C137.256 11.9239 136.672 11.3437 135.95 11.3437H131.919C131.197 11.3437 130.613 11.9239 130.613 12.6396V20.6089C130.613 23.7775 128.587 26.4648 125.711 26.4648C123.442 26.4648 121.862 24.7802 121.862 21.0902V12.6396C121.862 11.9239 121.277 11.3437 120.556 11.3437H116.525C115.803 11.3437 115.218 11.9239 115.218 12.6396V22.9753C115.218 28.3499 118.014 32.0399 123.159 32.0399C124.999 32.0399 127.818 31.5729 130.21 29.3814C130.373 29.2319 130.646 29.327 130.669 29.5465L130.738 30.2315C130.805 30.8939 131.366 31.3982 132.038 31.3982H136.058ZM146.217 32.0397C142.085 32.0397 139.006 29.3122 139.006 25.7023C139.006 22.2311 142.093 17.8469 152.534 18.5516C152.621 18.5575 152.699 18.4893 152.699 18.4026C152.699 17.1994 151.159 15.956 148.607 15.956C147.321 15.956 145.687 16.2482 143.9 17.0486C143.21 17.3579 142.373 17.1044 142.045 16.4267L140.893 14.0448C140.587 13.4119 140.843 12.6481 141.49 12.3635C143.91 11.2986 146.461 10.7018 149.012 10.7018C155.453 10.7018 159.586 14.1912 159.586 19.4455V27.4672L159.692 30.049C159.722 30.7848 159.129 31.398 158.387 31.398H154.343C153.682 31.398 153.126 30.9079 153.047 30.2566L153.008 29.9381C152.982 29.7207 152.708 29.6284 152.544 29.7746C150.947 31.1909 148.565 32.0397 146.217 32.0397ZM152.294 22.6169C148.408 22.6714 145.002 23.5166 145.002 25.2612C145.002 26.4244 145.893 27.1464 147.351 27.1464C149.984 27.1464 152.699 25.1008 152.699 23.0151C152.699 22.7936 152.518 22.6137 152.294 22.6169Z"
      />
    </svg>
  );
};

export default Login;
