import Products from "../../components/products";
import Sidebar from "../../components/sidebar";

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-[20%_1fr] gap-4 items-start">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}
