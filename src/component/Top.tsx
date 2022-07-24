export const Top = (props: { title: string }) => {
  return (
    <div className="relative h-[100px] w-full md:h-[200px]">
      <h2 className="font-[600px] absolute top-[50%] left-[50%] z-20 translate-x-[-50%] text-left text-3xl leading-3  text-blue-200 sm:text-4xl lg:text-6xl">
        {props.title}
      </h2>
    </div>
  );
};
