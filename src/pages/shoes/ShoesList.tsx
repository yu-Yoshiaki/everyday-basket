import type { FC } from "react";
import { getShoesSelect } from "src/libs/shoes";
import type { Maker } from "src/pages/shoes/SelectShoesLayout";
import { ShoesCardlayout } from "src/pages/shoes/ShoesCardlayout";
import useSWR from "swr";

export const Shoeslist: FC<{ select: Maker }> = (props) => {
  const { data: shoes } = useSWR(
    ["/shoes", props.select ?? "all"],
    ([_, key]) => {
      return getShoesSelect(key);
    }
  );

  if (!shoes) return <div>Loading...</div>;

  return (
    <ul className="grid grid-cols-2 gap-2">
      {shoes?.map((shoe) => {
        return (
          <li key={shoe.id}>
            <ShoesCardlayout shoe={shoe} />
          </li>
        );
      })}
    </ul>
  );
};
