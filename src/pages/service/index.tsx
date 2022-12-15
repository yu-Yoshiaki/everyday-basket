// import { OemSection } from "src/pages/service/OemSection";
import { Container } from "src/components/Container";
import { Meta } from "src/components/Meta";
import { AppSection } from "src/pages/service/AppSection";

export const Service = () => {
  return (
    <>
      <Meta title={"SERVICE"} />
      <Container title={{ en: "SERVICE", ja: "サービス" }}>
        <div className="space-y-8">
          <AppSection />
          {/* <OemSection /> */}
        </div>
      </Container>
    </>
  );
};
