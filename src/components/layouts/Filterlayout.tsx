import type { FC, ReactNode } from "react";

export const Filterlayout: FC<{ children: ReactNode }> = (props) => {
  return (
    <div className="mt-5 flex w-full items-center gap-2 overflow-x-scroll px-4">
      {props.children}
    </div>
  );
};
