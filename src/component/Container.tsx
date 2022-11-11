import type { ReactNode } from "react";

export const Container = (props: { title: string; children: ReactNode }) => {
  return (
    <div className="space-y-10 bg-gray-100 p-20">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};
