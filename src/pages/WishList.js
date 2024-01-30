import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {
  clearItem,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets";

const WishList = () => {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-col-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border=b-gray-400 py-3">
              <h2 className="text-3xl font-medium">WishList</h2>
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
                      
                      <button
                        onClick={() => dispatch(clearItem(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
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
  )
}

export default WishList
