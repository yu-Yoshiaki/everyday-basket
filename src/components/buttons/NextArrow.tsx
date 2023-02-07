import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

export const NextArrow: FC<{ onBack?: () => void }> = (props) => {
  const handleBack = () => {
    if (!props.onBack) return;
    props.onBack();
  };
  return (
    <button onClick={handleBack}>
      <ChevronRightIcon width={20} height={20} />
    </button>
  );
};
