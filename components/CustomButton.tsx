import React from "react";

interface CustomButtonProps {
  title: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({
  title,
  onPress,
  bgColor,
  textColor,
  borderColor,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onPress}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: borderColor ? `2px solid ${borderColor}` : "none",
      }}
      className="h-9 w-[150px] rounded-md font-semibold p-2 flex justify-center items-center"
    >
      {title}
    </button>
  );
};

export default CustomButton;
