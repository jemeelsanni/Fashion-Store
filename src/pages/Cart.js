import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.hayef.productData);
  const userInfo = useSelector((state) => state.hayef.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };
  return (
    <div>
      <img
        className=" w-full h-60 object-cover"
        src="https://images.pexels.com/photos/3575850/pexels-photo-3575850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="mx-20 gap-12 py-20 flex tablet:flex-row mobile:flex-col">
        <Cartitem />
        <div className="tablet:w-1/5 mobile:w-full h-[30%] bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className=" text-2xl font-medium">cart summary</h2>
            <p className=" flex items-center gap-4 text-base">
              Subtotal{"  "}
              <span className="font-titlefont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
          </div>
          <p className=" font-titlefont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className=" text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 
           duration-300"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div>
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51MwXlhEMALN0wiPm8DSFzwLqorK5OL0FZcO7gSt6BVTgzsoegRCW032v5X35ZsrqNi9LxiB1yqxOVFyzb1gGHxd300y0sTlrjv"
                  name="Hayef Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay to hayef"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            </div>
          )}
        </div>
      </div>
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

export default Cart;
