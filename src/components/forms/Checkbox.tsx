import type { FC, ReactNode } from "react";

export const Checkbox: FC<{
  htmlFor: string;
  children: ReactNode;
  label: string;
}> = (props) => {
  const { htmlFor, children, label } = props;
  return (
    <div>
      {children}
      <label
        htmlFor={htmlFor}
        className="ml-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};
