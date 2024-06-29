import { IconProps } from "../../types/icons";

const CheckIcon = ({
  height,
  style,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "32px"}
      height={height ?? "32px"}
      style={style}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#fff" d="M0 0H24V24H0z"></path>
      <path
        fill={style?.fill ?? "#323232"}
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm13.707-2.707a1 1 0 010 1.414l-3.683 3.683a1.449 1.449 0 01-2.048 0l-1.683-1.683a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default CheckIcon;