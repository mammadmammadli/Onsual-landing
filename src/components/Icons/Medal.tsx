type MedalProps = {
  type: "first" | "second" | "third";
};

const Medal = ({ type = "first" }: MedalProps) => {
  if (type === "second") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          fill="#81A5B0"
        />
        <path
          d="M20.8889 12C20.8889 16.9092 16.9092 20.8889 12 20.8889C7.09078 20.8889 3.11108 16.9092 3.11108 12C3.11108 7.09078 7.09078 3.11108 12 3.11108C16.9092 3.11108 20.8889 7.09078 20.8889 12Z"
          fill="#81A5B0"
        />
        <path
          d="M14.6024 15.5555H9.40446V14.5243L11.8576 11.9097C12.1944 11.5417 12.4427 11.2205 12.6024 10.9462C12.7656 10.6719 12.8472 10.4114 12.8472 10.1649C12.8472 9.82811 12.7621 9.56422 12.592 9.37325C12.4218 9.17881 12.1788 9.08158 11.8628 9.08158C11.5225 9.08158 11.2534 9.19964 11.0555 9.43575C10.8611 9.66839 10.7638 9.97568 10.7638 10.3576H9.25342C9.25342 9.89582 9.36279 9.47394 9.58154 9.092C9.80377 8.71006 10.1163 8.41144 10.519 8.19617C10.9218 7.97742 11.3784 7.86804 11.8888 7.86804C12.6701 7.86804 13.276 8.05554 13.7065 8.43054C14.1406 8.80554 14.3576 9.33506 14.3576 10.0191C14.3576 10.3941 14.2604 10.776 14.0659 11.1649C13.8715 11.5538 13.5381 12.0069 13.0659 12.5243L11.342 14.342H14.6024V15.5555Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3421 14.342L13.066 12.5243C13.5382 12.007 13.8716 11.5538 14.066 11.165C14.2605 10.7761 14.3577 10.3941 14.3577 10.0191C14.3577 9.33509 14.1407 8.80558 13.7066 8.43058C13.2761 8.05558 12.6702 7.86808 11.8889 7.86808C11.3785 7.86808 10.9219 7.97745 10.5191 8.1962C10.1164 8.41148 9.80386 8.71009 9.58164 9.09203C9.51203 9.21357 9.4535 9.33915 9.40604 9.46877C9.30436 9.7465 9.25351 10.0428 9.25351 10.3577H10.7639C10.7639 9.97571 10.8612 9.66842 11.0556 9.43578C11.2535 9.19967 11.5226 9.08162 11.8629 9.08162C12.1789 9.08162 12.4219 9.17884 12.5921 9.37328C12.7622 9.56426 12.8473 9.82815 12.8473 10.165C12.8473 10.4115 12.7657 10.6719 12.6025 10.9462C12.4427 11.2205 12.1945 11.5417 11.8577 11.9097L9.40455 14.5243V15.5556H14.6025V14.342H11.3421Z"
          fill="white"
        />
      </svg>
    );
  }

  if (type === "third") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          fill="#C38144"
        />
        <path
          d="M20.8889 12C20.8889 16.9092 16.9092 20.8889 12 20.8889C7.09078 20.8889 3.11108 16.9092 3.11108 12C3.11108 7.09078 7.09078 3.11108 12 3.11108C16.9092 3.11108 20.8889 7.09078 20.8889 12Z"
          fill="#C38144"
        />
        <path
          d="M10.9358 11.0973H11.7379C12.1199 11.0973 12.4028 11.0018 12.5869 10.8108C12.7709 10.6198 12.8629 10.3664 12.8629 10.0504C12.8629 9.74484 12.7709 9.50699 12.5869 9.33685C12.4063 9.16671 12.1563 9.08164 11.8369 9.08164C11.5487 9.08164 11.3074 9.16151 11.1129 9.32123C10.9185 9.47748 10.8212 9.68234 10.8212 9.93581H9.31604C9.31604 9.53998 9.42194 9.18581 9.63375 8.87331C9.84903 8.55734 10.1476 8.31081 10.5296 8.13373C10.915 7.95664 11.3386 7.8681 11.8004 7.8681C12.6025 7.8681 13.231 8.06081 13.6858 8.44623C14.1407 8.82817 14.3681 9.35595 14.3681 10.0296C14.3681 10.3768 14.2622 10.6962 14.0504 10.9879C13.8386 11.2796 13.5608 11.5035 13.2171 11.6598C13.6442 11.8125 13.9619 12.0417 14.1702 12.3473C14.382 12.6528 14.4879 13.0139 14.4879 13.4306C14.4879 14.1042 14.2414 14.6441 13.7483 15.0504C13.2587 15.4566 12.6094 15.6598 11.8004 15.6598C11.0435 15.6598 10.4237 15.4601 9.94104 15.0608C9.46187 14.6615 9.22229 14.1337 9.22229 13.4775H10.7275C10.7275 13.7622 10.8334 13.9948 11.0452 14.1754C11.2605 14.356 11.5244 14.4462 11.8369 14.4462C12.1945 14.4462 12.474 14.3525 12.6754 14.165C12.8803 13.974 12.9827 13.7223 12.9827 13.4098C12.9827 12.6528 12.566 12.2744 11.7327 12.2744H10.9358V11.0973Z"
          fill="#13171A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7483 15.0504C14.2414 14.6441 14.4879 14.1042 14.4879 13.4306C14.4879 13.0139 14.382 12.6528 14.1702 12.3472C14.1359 12.2969 14.0986 12.2487 14.0584 12.2025C13.8543 11.9683 13.5738 11.7874 13.2171 11.6597C13.5386 11.5136 13.8024 11.3082 14.0085 11.0436C14.0227 11.0253 14.0367 11.0067 14.0504 10.9879C14.2622 10.6962 14.3681 10.3768 14.3681 10.0295C14.3681 9.35592 14.1407 8.82815 13.6858 8.4462C13.2309 8.06078 12.6025 7.86808 11.8004 7.86808C11.3386 7.86808 10.915 7.95662 10.5296 8.1337C10.1476 8.31078 9.849 8.55731 9.63372 8.87328C9.59542 8.92979 9.56058 8.98766 9.52921 9.0469C9.38708 9.31523 9.31601 9.61153 9.31601 9.93578H10.8212C10.8212 9.68231 10.9184 9.47745 11.1129 9.3212C11.3073 9.16148 11.5487 9.08162 11.8368 9.08162C12.1563 9.08162 12.4063 9.16669 12.5868 9.33683C12.7709 9.50696 12.8629 9.74481 12.8629 10.0504C12.8629 10.3663 12.7709 10.6198 12.5868 10.8108C12.4028 11.0018 12.1198 11.0972 11.7379 11.0972H10.9358V12.2743H11.7327C12.566 12.2743 12.9827 12.6528 12.9827 13.4097C12.9827 13.7222 12.8802 13.974 12.6754 14.165C12.474 14.3525 12.1945 14.4462 11.8368 14.4462C11.5243 14.4462 11.2605 14.3559 11.0452 14.1754C10.8334 13.9948 10.7275 13.7622 10.7275 13.4775H9.22226C9.22226 13.8059 9.28229 14.1022 9.40234 14.3663C9.52214 14.6299 9.70169 14.8614 9.94101 15.0608C10.4237 15.4601 11.0434 15.6597 11.8004 15.6597C12.6094 15.6597 13.2587 15.4566 13.7483 15.0504Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
        fill="#FFBB0D"
      />
      <path
        d="M20.8889 12C20.8889 16.9092 16.9092 20.8889 12 20.8889C7.09078 20.8889 3.11108 16.9092 3.11108 12C3.11108 7.09078 7.09078 3.11108 12 3.11108C16.9092 3.11108 20.8889 7.09078 20.8889 12Z"
        fill="#FFBB0D"
      />
      <path
        d="M13.0608 15.5556H11.5555V9.75352L9.75867 10.3108V9.08685L12.8993 7.96185H13.0608V15.5556Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5555 9.75349V15.5556H13.0607V7.96183H12.8993L9.75864 9.08683V10.3108L11.5555 9.75349Z"
        fill="white"
      />
    </svg>
  );
};

export default Medal;