const priceList = {
  main: { name: "next.js", price: 200000 },
  additional: [
    { name: "microCMS", price: 200000 },
    { name: "Firebase", price: 100000 },
    { name: "Shopify", price: 300000 },
  ],
};

export const Price = () => {
  return (
    <div>
      <p className="py-4 text-3xl font-bold text-gray-700">
        ¥ {priceList.main.price.toLocaleString()}〜
      </p>
    </div>
  );
};
