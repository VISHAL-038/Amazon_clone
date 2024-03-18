import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { productsData } from "./api/API";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration"
import WishList from "./pages/WishList";
import ProductDetail from "./components/home/ProductDetail";
import Category from "./components/home/Category";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/ProductDetail/:id" element={<ProductDetail />}></Route>
          {/* <Route path="/category" element={<Category />}></Route> */}

        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* <Route path="/checkout" element={<Checkout />}></Route> */}
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
