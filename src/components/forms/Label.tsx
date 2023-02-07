import type { FC, ReactNode } from "react";

export const Label: FC<{ label: string; children: ReactNode }> = (props) => {
  return (
    <label className="text-gray-700">
      <span className="block text-sm font-semibold text-gray-700">
        {props.label}
      </span>
      {props.children}
    </label>
  );
};
