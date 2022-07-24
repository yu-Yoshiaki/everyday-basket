import Image from "next/image";
import { FaRegHandPointUp } from "react-icons/fa";

const others = [
  { imageUrl: "/stripelogo.png", imageAlt: "Stripe" },
  { imageUrl: "/firebaselogo.svg", imageAlt: "Firebase" },
];

export const Others = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <FaRegHandPointUp width={5} height={5} color="blue.400" />
      <p className="md:text-2xl">
        その他にも下記サービスを使用した開発にも対応可能です。
      </p>

      <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-8">
        {others.map(({ imageAlt, imageUrl }) => {
          return (
            <div className="w-full md:w-[300px]" key={imageAlt}>
              <Image src={imageUrl} alt={imageAlt} width="4240" height="2232" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
