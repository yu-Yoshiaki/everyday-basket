import type { ReactNode } from "react";

export const Section = (props: {
  title: string;
  description: JSX.Element;
  children: ReactNode;
}) => {
  return (
    <section id={props.title} className="grid gap-10">
      <h3 className="flex items-center justify-center text-3xl font-bold md:text-5xl">
        {props.title}
      </h3>
      <p className="text-center font-semibold">{props.description}</p>
      <div>{props.children}</div>
    </section>
  );
};
