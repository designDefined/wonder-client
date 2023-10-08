type IconLikeProps = {
  filled: boolean;
  className?: string;
};

export function IconLike({ filled, className }: IconLikeProps) {
  if (!filled)
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75 3.375L11.5 5.5H12.5L15 3.375L18 3L21.5 6.5L20.375 10.625L16.5 16.5L12 19.5L6.75 15.375L3 8.625L3.375 6L5.25 3.75L6.75 3.375Z"
          fill="black"
          fillOpacity="0.3"
        />
        <path
          d="M12.6333 20.9833L11.4667 19.9334C9.73034 18.3487 8.29487 16.9817 7.16023 15.8323C6.02562 14.683 5.1222 13.6542 4.44998 12.7458C3.77775 11.8375 3.30692 11.0111 3.03748 10.2667C2.76803 9.52223 2.63331 8.76668 2.63331 8.00001C2.63331 6.47608 3.14442 5.20343 4.16663 4.18206C5.18887 3.16069 6.45553 2.65001 7.96663 2.65001C8.88887 2.65001 9.74998 2.86112 10.55 3.28333C11.35 3.70557 12.0444 4.31113 12.6333 5.10001C13.2889 4.27779 14.0083 3.6639 14.7916 3.25833C15.575 2.85278 16.4111 2.65001 17.3 2.65001C18.8111 2.65001 20.0778 3.16069 21.1 4.18206C22.1222 5.20343 22.6333 6.47608 22.6333 8.00001C22.6333 8.76668 22.4986 9.52223 22.2291 10.2667C21.9597 11.0111 21.4889 11.8375 20.8166 12.7458C20.1444 13.6542 19.241 14.683 18.1064 15.8323C16.9718 16.9817 15.5363 18.3487 13.8 19.9334L12.6333 20.9833ZM12.6333 18.7667C14.2915 17.2556 15.656 15.9598 16.727 14.8792C17.7979 13.7987 18.6472 12.8542 19.275 12.0458C19.9028 11.2375 20.3417 10.5173 20.5917 9.88526C20.8417 9.25319 20.9667 8.62558 20.9667 8.00241C20.9667 6.93414 20.6222 6.05278 19.9333 5.35833C19.2444 4.66388 18.3679 4.31666 17.3037 4.31666C16.4701 4.31666 15.6986 4.56528 14.9892 5.06251C14.2797 5.55973 13.0167 6.63888 12.6333 7.5C12.2611 6.65 10.9869 5.57362 10.2775 5.07083C9.56803 4.56805 8.7965 4.31666 7.96288 4.31666C6.89872 4.31666 6.02219 4.66388 5.33331 5.35833C4.64441 6.05278 4.29996 6.93509 4.29996 8.00526C4.29996 8.62954 4.42496 9.25973 4.67496 9.89583C4.92496 10.532 5.36385 11.257 5.99163 12.0708C6.61942 12.8847 7.4722 13.8292 8.54998 14.9042C9.62775 15.9792 10.9889 17.2667 12.6333 18.7667Z"
          fill="white"
        />
      </svg>
    );

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_826_1715"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_826_1715)">
        <path
          d="M7.125 3.75L10.875 5.25H13.125L15.375 3.75L18.375 3.375L21.375 6.375L20.25 10.5L16.875 15.75L11.625 19.125L6.375 15L3.375 9L3.75 6.375L5.625 4.125L7.125 3.75Z"
          fill="#7963FF"
        />
        <path
          d="M12 20.9833L10.8334 19.9334C9.09703 18.3487 7.66156 16.9817 6.52693 15.8323C5.39231 14.683 4.48889 13.6542 3.81668 12.7458C3.14444 11.8375 2.67361 11.0111 2.40418 10.2667C2.13473 9.52223 2 8.76668 2 8.00001C2 6.47608 2.51111 5.20343 3.53332 4.18206C4.55556 3.16069 5.82223 2.65001 7.33333 2.65001C8.25556 2.65001 9.11668 2.86112 9.91668 3.28333C10.7167 3.70557 11.4111 4.31113 12 5.10001C12.6556 4.27779 13.375 3.6639 14.1583 3.25833C14.9417 2.85278 15.7778 2.65001 16.6667 2.65001C18.1778 2.65001 19.4444 3.16069 20.4667 4.18206C21.4889 5.20343 22 6.47608 22 8.00001C22 8.76668 21.8653 9.52223 21.5958 10.2667C21.3264 11.0111 20.8556 11.8375 20.1833 12.7458C19.5111 13.6542 18.6077 14.683 17.4731 15.8323C16.3384 16.9817 14.903 18.3487 13.1667 19.9334L12 20.9833ZM12 18.7667C13.6582 17.2556 15.0227 15.9598 16.0936 14.8792C17.1645 13.7986 18.0139 12.8542 18.6417 12.0458C19.2695 11.2375 19.7084 10.5173 19.9584 9.88526C20.2084 9.25319 20.3334 8.62558 20.3334 8.00241C20.3334 6.93414 19.9889 6.05278 19.3 5.35833C18.6111 4.66388 17.7346 4.31666 16.6704 4.31666C15.8368 4.31666 15.0653 4.56528 14.3559 5.06251C13.6464 5.55973 12.3834 6.63888 12 7.5C11.6278 6.65 10.3536 5.57362 9.64415 5.07083C8.93472 4.56805 8.16319 4.31666 7.32958 4.31666C6.26541 4.31666 5.38888 4.66388 4.7 5.35833C4.0111 6.05278 3.66665 6.93509 3.66665 8.00526C3.66665 8.62954 3.79165 9.25973 4.04165 9.89583C4.29165 10.532 4.73054 11.257 5.35833 12.0708C5.98611 12.8847 6.83889 13.8292 7.91668 14.9042C8.99444 15.9792 10.3555 17.2667 12 18.7667Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
