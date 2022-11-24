import type { HTMLReactParserOptions } from "html-react-parser";
import parse, {
  attributesToProps,
  domToReact,
  Element,
} from "html-react-parser";

export const DomToHtml = (html: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === "tag") {
        const props = attributesToProps(domNode.attribs);

        if (domNode.attribs) {
          if (domNode.name === "h2") {
            return (
              <h2 className="py-3 text-[36px] font-bold" {...props}>
                {domToReact(domNode.children)}
              </h2>
            );
          }
          if (domNode.name === "h3") {
            return (
              <h3 className="py-1 text-[24px] font-semibold" {...props}>
                {domToReact(domNode.children)}
              </h3>
            );
          }
          if (domNode.name === "ul") {
            return (
              <div className="px-[10px] ">{domToReact(domNode.children)}</div>
            );
          }
          if (domNode.name === "pre") {
            return (
              <div
                className="w-full rounded-lg border bg-black px-[10px] py-4 text-xs text-white md:text-base"
                {...props}
              >
                {domToReact(domNode.children)}
              </div>
            );
          }

          return (
            <p className="py-1" {...props}>
              {domToReact(domNode.children)}
            </p>
          );
        }
      }
    },
  };

  return parse(html, options);
};
