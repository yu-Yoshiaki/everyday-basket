import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/components/layouts/Layout";
import { getCourt } from "src/libs/court";
import { Detail } from "src/pages/court/Detail";
import useSWR from "swr";

const DetailPage: CustomNextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id && `/court/${id}`, () => {
    return getCourt(id as string);
  });
  if (!data) return <div>Loading...</div>;
  return <Detail data={data} />;
};

DetailPage.getLayout = Layout;

export default DetailPage;
