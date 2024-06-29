import { IconProps } from "../../types/icons";

const CancelIcon = ({
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
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M16 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13zm5.961-16.791a.626.626 0 000-.885l-1.328-1.327a.626.626 0 00-.885 0l-3.761 3.761-3.761-3.761a.626.626 0 00-.885 0l-1.328 1.327a.626.626 0 000 .885l3.762 3.762-3.762 3.76a.626.626 0 000 .885l1.328 1.328a.626.626 0 00.885 0l3.761-3.762 3.761 3.762a.626.626 0 00.885 0l1.328-1.328a.626.626 0 000-.885l-3.762-3.76 3.762-3.762z"></path>
    </svg>
  );
};

export default CancelIcon;