import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Features/authSlice";
import { productsSlice } from "../Features/ProductsSlice";
import { productDetailsSlice } from "../Features/productDetailsSlice";
import { categoriesSlice } from "../Features/categoriesSlice";

export default configureStore({
  reducer: {
    userInfo: authSlice.reducer,
    products: productsSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
