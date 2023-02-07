import type { CustomNextPage, GetStaticProps } from "next";
import { useState } from "react";
import { Layout } from "src/components/layouts/Layout";
import type { SSGReadCourt } from "src/libs/court";
import { getAllCourts } from "src/libs/court";
import { Court } from "src/pages/court/Court";

export type Selector = {
  city?: string;
  courtName?: string | null;
  date?: string | null;
};

const initSelector = {
  city: "全国",
  courtName: null,
  date: null,
};

const IndexPage: CustomNextPage<{ data: SSGReadCourt[] }> = (props) => {
  const [selector, setSelector] = useState<Selector>(initSelector);

  const onSetSelector = (data: Selector) => {
    return setSelector({ ...selector, ...data });
  };

  const onAllClear = () => {
    setSelector(initSelector);
  };

  return (
    <Court
      {...props}
      selector={selector}
      setSelector={onSetSelector}
      allClear={onAllClear}
    />
  );
};

IndexPage.getLayout = Layout;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllCourts();

  const courts = data.map((d) => {
    return {
      ...d,
      createdAt: `${d.createdAt.getFullYear()}/${
        d.createdAt.getMonth() + 1
      }/${d.createdAt.getDate()}`,
      updatedAt: `${d.updatedAt.getFullYear()}/${
        d.updatedAt.getMonth() + 1
      }/${d.updatedAt.getDate()}`,
    };
  });

  return {
    props: {
      data: courts,
    },
  };
};

export default IndexPage;
