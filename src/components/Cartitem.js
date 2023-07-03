import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  resetCart,
} from "../redux/hayefSlice";

const Cartitem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.hayef.productData); //
  return (
    <div className="w-[50%] mobile:w-full">
      <div className="">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {productData.map((item) => (
                <li key={item._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image}
                      alt="image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.href}>{item.title}</a>
                        </h3>
                        <p className="ml-4">${item.price}</p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-4 text-sm font-semibold">
                      <span
                        onClick={() =>
                          dispatch(
                            decrementQuantity({
                              _id: item._id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2
                                hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        -
                      </span>
                      {item.quantity}
                      <span
                        onClick={() =>
                          dispatch(
                            incrementQuantity({
                              _id: item._id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2
                                hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        +
                      </span>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {item.quantity}</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <MdOutlineClose
                            onClick={() =>
                              dispatch(deleteItem(item._id)) &
                              toast.error(`${item.title} is removed`)
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty!")
        }
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cartitem;
