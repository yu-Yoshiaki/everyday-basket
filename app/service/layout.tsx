import { Container } from "app/Container";
import type { ReactNode } from "react";

const ServiceLayout = (props: { children: ReactNode }) => {
  return <Container title={"SERVICE"}>{props.children}</Container>;
};

export default ServiceLayout;
