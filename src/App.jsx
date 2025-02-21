import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import { Toaster } from "react-hot-toast"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart/Cart"
import WishList from "./pages/WishList/WishList"

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "products", element: <Products /> },
        { path: "productDetails/:id", element: <ProductDetails /> },
        { path: "wishList", element: <WishList /> },
        { path: "Cart", element: <Cart /> },
        // { path: "/*", element: <NotFound /> },
      ]
    }
  ])

  return (
    <>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
    </>
  )
}

export default App
