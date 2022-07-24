// import { FaCheckCircle } from "react-icons/fa";
import type { ServiceField } from "src/type/microcms";

export const Content = (props: { contents: ServiceField["points"] }) => {
  return (
    <div className="space-y-2 p-5 text-left">
      <p className="font-semibold text-blue-400">こんな機能</p>
      <ul>
        {props.contents.map((content) => {
          return (
            <li key={content.text} className="flex items-center space-x-1">
              {/* <FaCheckCircle color="yellowgreen" width={20} height={20} /> */}
              <p>- {content.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
