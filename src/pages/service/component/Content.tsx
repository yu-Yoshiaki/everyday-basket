import { FaCheckCircle } from "react-icons/fa";
import type { ServiceField } from "src/type/microcms";

export const Content = (props: { contents: ServiceField["points"] }) => {
  return (
    <ul className="space-x-2 px-8 text-start">
      {props.contents.map((content) => {
        return (
          <li key={content.text}>
            <FaCheckCircle color="skyblue" width={20} height={20} />
            {content.text}
          </li>
        );
      })}
    </ul>
  );
};
