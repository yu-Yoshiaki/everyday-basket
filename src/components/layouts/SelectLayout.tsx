import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import type { FC, ReactNode } from "react";
import { CleanupButton } from "src/components/buttons/CleanupButton";
import { SubmitButton } from "src/components/buttons/SubmitButton";

type Props = {
  children: ReactNode;
  title: string;
  onClear: () => void;
  onSearch: () => void;
  onBack: () => void;
};

export const SelectLayout: FC<Props> = (props) => {
  const handleBack = () => {
    return props.onBack();
  };
  const handleClear = () => {
    props.onClear();
  };

  const handleSearch = () => {
    props.onSearch();
  };

  return (
    <div className="grid grid-cols-[auto,1fr,auto]">
      <div className="fixed inset-x-0 top-0 flex h-14 items-center justify-between px-2 shadow-sm">
        <button onClick={handleBack} className="flex items-center gap-2">
          <ChevronLeftIcon width={20} height={20} /> {props.title}
        </button>
        <CleanupButton onClick={handleClear} />
      </div>
      <div className="my-14 min-h-screen">
        {props.children}
        <SubmitButton label="検索する" onClick={handleSearch} />
      </div>
    </div>
  );
};
