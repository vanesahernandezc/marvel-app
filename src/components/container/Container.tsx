import { Container as Content } from "semantic-ui-react";
import "./Container.scss";
export default function Container({ children, bg }: any) {
  return (
    <div className={bg !== "light" ? "container-bg" : undefined}>
      <Content>{children}</Content>
    </div>
  );
}
