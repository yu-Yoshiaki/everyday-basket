import type { Selector } from "pages";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SelectButton } from "src/components/buttons/SelectButton";
import { SelectLayout } from "src/components/layouts/SelectLayout";
import { Area } from "src/pages/court/SelectArea";
import { week } from "src/utils/week";

const times = [
  "6:00",
  "8:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
];

export const SelectDate: FC<{
  date: Selector["date"];
  setDate: (data: Selector) => void;
  cancelSetArea?: () => void;
}> = (props) => {
  const { date, setDate } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const handleOpen = () => {
    return setIsOpen((pre) => {
      return !pre;
    });
  };

  const onSet = (date: string) => {
    setDate({ date });
    setIsOpen(false);
    setIsSelect(true);
  };

  const handleCancel = () => {
    // cancelSetArea();
    handleOpen();
  };

  const handleSearch = () => {
    return;
  };

  useEffect(() => {
    !date && setIsSelect(false);
  }, [date]);

  return (
    <div>
      <SelectButton
        label={date ?? "日時"}
        onClick={handleOpen}
        isSelect={isSelect}
      />
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <SelectLayout
            title="日時でしぼる"
            onBack={handleOpen}
            onClear={handleCancel}
            onSearch={handleSearch}
          >
            <div className="h-full w-screen space-y-6 bg-gray-100 p-5">
              <Area label="曜日" city={week} click={onSet} />
              <Area label="開始時刻" city={times} click={onSet} />
            </div>
          </SelectLayout>
        </div>
      )}
    </div>
  );
};
