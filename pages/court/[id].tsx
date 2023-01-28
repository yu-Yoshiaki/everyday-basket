import { useRouter } from "next/router";
import { Detail } from "src/pages/court/Detail";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Detail id={id as string} />;
};

export default DetailPage;
