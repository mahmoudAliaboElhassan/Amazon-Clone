import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import HomeProducts from "../../components/HomeProducts";
import Slider from "../../components/slider";
import { GetAllProductsAction } from "../../Network/ProductsApi";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductsAction());
  }, []);
  const { productsData } = useSelector((state) => state.products);
  console.log("productsData", productsData);
  console.log("Hello");
  return (
    <>
      <Slider productsData={productsData} />
      <div style={{ backgroundColor: "#575757" }}>
        <HomeProducts productsData={productsData} />
      </div>
    </>
  );
}
