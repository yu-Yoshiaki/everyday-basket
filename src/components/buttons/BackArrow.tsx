import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

export const BackArrow: FC<{ onBack?: () => void }> = (props) => {
  const handleBack = () => {
    if (!props.onBack) return;
    props.onBack();
  };
  return (
    <button onClick={handleBack}>
      <ChevronLeftIcon width={20} height={20} />
    </button>
  );
};
