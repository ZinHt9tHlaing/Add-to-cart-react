import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 40.0,
    description: "A sweet, crisp fruit that is great for snacking.",
  },
  {
    id: 2,
    name: "Banana",
    price: 15.0,
    description:
      "A soft, creamy fruit that is perfect for smoothies and baking.",
  },
  {
    id: 3,
    name: "Mango",
    price: 100.0,
    description:
      "A small, red fruit with a tart flavor, often used in desserts.",
  },
  {
    id: 4,
    name: "Grape",
    price: 60.0,
    description:
      "A small, juicy fruit that comes in clusters and can be eaten fresh or used to make wine.",
  },
  {
    id: 5,
    name: "Orange",
    price: 35.0,
    description:
      "A citrus fruit that is rich in vitamin C and can be eaten fresh or juiced.",
  },
];

const Body = () => {
  return (
    <section className="w-full py-2">
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Card fruit={fruit} />
        </div>
      ))}
    </section>
  );
};

export default Body;
