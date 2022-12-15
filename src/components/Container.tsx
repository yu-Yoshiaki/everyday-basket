import type { ReactNode } from "react";

export const Container = (props: {
  title: { en: string; ja?: string };
  children: ReactNode;
}) => {
  return (
    <div className="container mx-auto space-y-10 p-2 sm:p-10 md:p-20">
      <h2 className="flex flex-col text-center text-2xl font-bold lg:text-5xl">
        {props.title.en}
        <span className="text-sm lg:text-2xl">{props.title.ja}</span>
      </h2>
      <div>{props.children}</div>
    </div>
  );
};
