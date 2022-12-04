import Contact from "app/contact/page";
import { AppSection } from "app/service/AppSection";
import { OemSection } from "app/service/OemSection";

const ServicePage = () => {
  return (
    <div className="space-y-20 px-44">
      <AppSection />
      <OemSection />
      <Contact />
    </div>
  );
};

export default ServicePage;
