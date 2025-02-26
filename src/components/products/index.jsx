import { useDispatch, useSelector } from "react-redux";

import SingleProduct from "../../components/products/singleProduct";
import { GetAllProductsAction } from "../../Network/ProductsApi";
import { useEffect } from "react";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductsAction());
  }, []);
  const { productsData } = useSelector((state) => state.products);
  console.log(productsData?.data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center">
      {productsData?.data?.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </div>
  );
}
