export const SectionTitle = (props: { titleEn: string; titleJa: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row space-y-2">
        <p className="text-[20px] text-blue-200">{props.titleEn}</p>
        <h3 className="text-lg">{props.titleJa}</h3>
        <p className="w-[90px] border-b-2 text-blue-200"></p>
      </div>
    </div>
  );
};
