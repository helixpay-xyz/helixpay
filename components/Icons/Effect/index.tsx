"use client";

type IconProps = {
  size?: number;
  color?: string;
};

const Effect = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.522 5.63002C10.7458 5.14937 11.4288 5.14937 11.6526 5.63002L13.5703 9.73889C13.6326 9.87121 13.7396 9.97824 13.8719 10.0405L17.9808 11.9573C18.4614 12.182 18.4614 12.8651 17.9808 13.0888L13.8719 15.0066C13.7396 15.0688 13.6326 15.1749 13.5703 15.3082L11.6526 19.4171C11.4288 19.8967 10.7458 19.8967 10.522 19.4171L8.60424 15.3082C8.54294 15.1749 8.43591 15.0688 8.30261 15.0066L4.19374 13.0888C3.71407 12.8651 3.71407 12.182 4.19374 11.9573L8.30261 10.0405C8.43591 9.97824 8.54294 9.87121 8.60424 9.73889L10.522 5.63002Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.8491 16.7266V20.6982M21.835 18.7124H17.8633"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.0086 3.30078V5.91808M19.3175 4.6094H16.6992"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Effect;