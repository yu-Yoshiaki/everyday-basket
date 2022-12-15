import type { ReactNode } from "react";

export const Section = (props: {
  title: string;
  description: JSX.Element;
  children: ReactNode;
}) => {
  return (
    <section id={props.title} className="grid gap-4">
      <h3 className="border-b-4 border-green-400 text-lg font-bold md:text-2xl">
        {props.title}
      </h3>
      <p className="text-xs font-medium md:text-lg">{props.description}</p>
      <div>{props.children}</div>
    </section>
  );
};
