import type { FC } from "react";

export const CleanupButton: FC<{ onClick: () => void }> = (props) => {
  const handleClick = () => {
    return props.onClick();
  };
  return (
    <button
      onClick={handleClick}
      className="text-sm font-semibold text-red-400"
    >
      クリア
    </button>
  );
};
