type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return (
    <h2 className="flex items-center justify-center pt-20 text-left text-2xl font-bold text-black md:w-auto md:text-4xl">
      {props.title}
    </h2>
  );
};
