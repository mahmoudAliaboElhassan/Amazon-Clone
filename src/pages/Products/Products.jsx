import { useState } from "react";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";

const productsData = [
  {
    id: "2",
    name: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistanc...",
    price: "₹1299",
    quantity: 1,
    imageUrl:
      "https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL480_QL65_.jpg",
    rating: 4.5,
    reviews: 102,
    bought: "10,000+ bought",
    discount: "20% off",
    delivery: "Sun, 15 Sept, 7:00 am - 9:00 pm",
  },
  {
    id: "3",
    name: "boAt Immortal 121 in Ear TWS Earbuds with Beast Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing LEDs, Quad Mics...",
    price: "₹999",
    quantity: 1,
    imageUrl:
      "https://m.media-amazon.com/images/I/61q-2yzbBtL._AC_UL480_QL65_.jpg",
    rating: 4.5,
    reviews: 102,
    bought: "10,000+ bought",
    discount: "20% off",
    delivery: "Sun, 15 Sept, 7:00 am - 9:00 pm",
  },
  {
    id: "4",
    name: "Iphone 121 in Ear TWS Earbuds with Beast Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing LEDs, Quad Mics ENx Sign...",
    price: "₹79999",
    quantity: 1,
    imageUrl:
      "https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg",
    rating: 4.5,
    reviews: 102,
    bought: "10,000+ bought",
    discount: "20% off",
    delivery: "Sun, 15 Sept, 7:00 am - 9:00 pm",
  },
  {
    id: "5",
    name: "Xiaomi Pad 6| Qualcomm Snapdragon 870| Powered by HyperOS | 144Hz Refresh Rate| 6GB, 128GB| 2.8K+ Display ...",
    price: "₹24999",
    quantity: 1,
    imageUrl:
      "https://m.media-amazon.com/images/I/71LRY1j6UHL._AC_UY327_FMwebp_QL65_.jpg",
    rating: 4.5,
    reviews: 102,
    bought: "10,000+ bought",
    discount: "20% off",
    delivery: "Sun, 15 Sept, 7:00 am - 9:00 pm",
  },
  {
    id: "1",
    name: "HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX 3050 GPU, 15.6-inch (39.6 cm) FHD IPS 144Hz, 16GB DDR4, 512GB...",
    price: "₹67999",
    quantity: 1,
    imageUrl:
      "https://m.media-amazon.com/images/I/710ZcpHUpkL._AC_UL480_FMwebp_QL65_.jpg",
    rating: 4.5,
    reviews: 102,
    bought: "10,000+ bought",
    discount: "20% off",
    delivery: "Sun, 15 Sept, 7:00 am - 9:00 pm",
  },
];
function Products() {
  const [products, setProducts] = useState(productsData);
  return (
    <div className="flex flex-col md:flex-row p-4 relative">
      <Sidebar setProducts={setProducts} className="w-full md:w-1/6" />
      <div className="w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[19px]">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
