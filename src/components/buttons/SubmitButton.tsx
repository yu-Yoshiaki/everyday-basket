import type { FC } from "react";

export const SubmitButtonStyle =
  "block w-full py-4 rounded-md bg-green-400 text-sm font-semibold text-white";

export const SubmitButton: FC<{ label: string; onClick?: () => void }> = (
  props
) => {
  const handleClick = () => {
    return props.onClick && props.onClick();
  };

  return (
    <button type="submit" className={SubmitButtonStyle} onClick={handleClick}>
      {props.label}
    </button>
  );
};
