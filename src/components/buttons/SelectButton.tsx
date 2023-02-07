import type { FC } from "react";
import { useCallback } from "react";

export const SelectButton: FC<{
  label: string;
  onClick: () => void;
  isSelect: boolean;
}> = (props) => {
  const { isSelect, onClick, label } = props;
  const handleSelect = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button
      className={`whitespace-nowrap rounded-md border border-gray-300 py-1 px-4 text-lg ${
        isSelect
          ? "border-green-500 bg-green-500 font-semibold text-white"
          : "text-gray-600"
      }`}
      onClick={handleSelect}
    >
      {label}
    </button>
  );
};
