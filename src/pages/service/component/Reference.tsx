import Image from "next/image";
import Link from "next/link";

const references = [
  {
    image: {
      src: "/hotelriverside.png",
    },
    title: "The Hotel Riverside.",
    url: "https://hotel-riverside.studio.site",
    description: "Riversideは隅田川添いにある小さなホテルです。",
  },
  {
    image: {
      src: "/code1on1.png",
    },
    title: "Code1on1",
    url: "https://code1on1.studio.site",
    description: "月額30,000円で身につくプログラミングスクール",
  },
  {
    image: {
      src: "/machisiru.png",
    },
    title: "Machisiru",
    url: "https://machisiru.studio.site",
    description: "暮らしにちょっぴりアクセントを。",
  },
];

export const Reference = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="items-center justify-center before:w-4 before:border-t before:content-[''] after:w-4 after:border-t after:content-[''] before:md:w-24 after:md:w-24">
        <h3 className="px-6">Reference</h3>
      </div>

      <div className="grid gap-8 py-8 md:grid-cols-3">
        {references.map((item) => {
          return (
            <Link href={item.url} key={item.title} passHref>
              <a className="grid bg-white">
                <div className="min-h-[330px] w-[340px] pb-8 shadow-md">
                  <Image
                    src={item.image.src}
                    alt={""}
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                  <h4 className="p-4 text-3xl">{item.title}</h4>
                  <p className="px-4">{item.description}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
