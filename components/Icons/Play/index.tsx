"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Play = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5763 14.9395C15.4973 16.8225 12.8993 18.5165 10.0403 19.6685C7.60725 20.6275 5.56925 19.4315 5.27025 17.0335C4.90625 13.4985 4.91425 10.1145 5.27025 6.9555C5.59625 4.4635 7.84125 3.4055 10.0403 4.3315C12.8553 5.4845 15.3803 7.0495 17.5763 9.0605C19.4523 10.7595 19.4963 13.1745 17.5763 14.9395Z"
      ></path>
    </svg>
  );
};

export default Play;