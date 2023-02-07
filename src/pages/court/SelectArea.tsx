import type { Selector } from "pages";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SelectButton } from "src/components/buttons/SelectButton";
import { SelectLayout } from "src/components/layouts/SelectLayout";
import { kanto, kinki, other } from "src/utils/prefectures";

export const Area: FC<{
  label: string;
  city: string[];
  click: (value: any) => void;
}> = (props) => {
  const { label, city, click } = props;

  const handleClick = (e: any) => {
    click(e.target.value);
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-300 text-xl font-semibold text-gray-500">
        {label}
      </div>
      <ul className="flex flex-wrap gap-3">
        {city.map((area) => {
          return (
            <li key={area}>
              <button
                value={area}
                onClick={handleClick}
                className="rounded-md border border-gray-400 py-1 px-4 font-semibold "
              >
                {area}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SelectArea: FC<{
  city: Selector["city"];
  setCity: (data: Selector) => void;
}> = (props) => {
  const { city, setCity } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const onSet = (city: string) => {
    setCity({ city });
    setIsOpen(false);
    setIsSelect(true);
  };

  const handleCancel = () => {
    handleOpen();
  };

  const handleSearch = () => {
    return;
  };

  useEffect(() => {
    city === "全国" && setIsSelect(false);
  }, [city]);

  return (
    <div>
      <SelectButton
        label={city as string}
        onClick={handleOpen}
        isSelect={isSelect}
      />
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <SelectLayout
            title="場所でしぼる"
            onBack={handleOpen}
            onClear={handleCancel}
            onSearch={handleSearch}
          >
            <div className="h-full w-screen space-y-6 bg-gray-100 p-5">
              <Area label="関東" city={kanto} click={onSet} />
              <Area label="近畿" city={kinki} click={onSet} />
              <Area label="その他" city={other} click={onSet} />
            </div>
          </SelectLayout>
        </div>
      )}
    </div>
  );
};
