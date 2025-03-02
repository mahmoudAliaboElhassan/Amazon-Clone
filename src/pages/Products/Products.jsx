import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Product/Sidebar-Product";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductsAction } from "../../Network/ProductsApi";
import { addProductToWishListAction } from "../../Network/WishListApi";
import { toast } from "react-hot-toast";

function Products() {
  const dispatch = useDispatch();
  const { productsData, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(GetAllProductsAction()).then((res) => {
      // console.log(res.payload.data);
    });
  }, [dispatch]);

  const handleAddWishlist = (e, productId) => {
    e.preventDefault();
    dispatch(addProductToWishListAction(productId)).then((res) => {
      if (res.payload.status === "success") {
        toast.success("Product added successfully");
      } else if (res?.error?.message === "Rejected") {
        toast.error(res?.payload);
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row p-4 relative min-h-screen">
      <div className="hidden p-0 m-0 md:block w-1/6 bg-white h-screen overflow-y-auto ">
        <Sidebar />
      </div>

      <div className="w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData?.data.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddWishlist={handleAddWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
