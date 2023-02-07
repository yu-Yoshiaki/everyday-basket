import { XCircleIcon } from "@heroicons/react/24/outline";
import type { Selector } from "pages";
import type { FC } from "react";
import { Filterlayout } from "src/components/layouts/Filterlayout";
import { Meta } from "src/components/Meta";
import type { SSGReadCourt } from "src/libs/court";
import { CourtListTable } from "src/pages/court/CourtListTable";
import { SelectArea } from "src/pages/court/SelectArea";
import { SelectDate } from "src/pages/court/SelectDate";

export const Court: FC<{
  data: SSGReadCourt[];
  selector: Selector;
  setSelector: (data: Selector) => void;
  allClear: () => void;
}> = (props) => {
  const { data, selector, setSelector, allClear } = props;
  const handleClear = () => {
    return allClear();
  };
  return (
    <>
      <Meta />
      <div className="space-y-5">
        <Filterlayout>
          <SelectArea city={selector.city} setCity={setSelector} />
          <SelectDate date={selector.date} setDate={setSelector} />

          <button onClick={handleClear} className={`rounded-full text-red-400`}>
            <XCircleIcon width={28} height={28} />
          </button>
        </Filterlayout>
        <div className="w-full overflow-auto">
          <CourtListTable data={data} />
        </div>
      </div>
    </>
  );
};
