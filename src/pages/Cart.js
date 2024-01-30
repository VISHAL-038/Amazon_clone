import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Link} from "react-router-dom";
import {
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total);
    });
  }, [products]);

  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-col-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border=b-gray-400 py-3">
              <h2 className="text-3xl font-medium">ShoppingCart</h2>
              <h4 className="text-xl font-normal">Subtotal</h4>
            </div>
            {/* products */}
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                >
                  <div className="w-full flex items-center gap-6">
                    <div className="w-2/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt="product image"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm">{item.description}</p>
                      <p className="text-base">
                        Unit Price
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                        <p>Qty:</p>

                        <p
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                        >
                          -
                        </p>

                        <p>{item.quantity}</p>

                        <p
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                    <div>
                      <p className="text-lg font-titleFont font-semibold">
                      ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-4">
              <button
                onClick={() => dispatch(resetCart())}
                className="bg-red-500 w-36  rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full h-42 bg-white col-span-1 flex flex-col items-center justify-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                </span>
                {""}
                Your order is eligible for FREE Delivery. Select this option at
                checkout. See Detail...
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center justify-between gap-1">
                Total :{" "}
                <span className="text-lg font-bold gap-2">₹ {totalPrice}</span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-b1 active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 roundedmd mt-1">
              Proceed To Pay
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4 py-10">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-cl items-center rounded-md shadow-lg gap-4">
            <h1>No product is availabe</h1>
            <Link to="/">
                <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
