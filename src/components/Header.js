import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cart, logo } from "../assets";

const Header = () => {
  const productData = useSelector((state) => state.hayef.productData);
  const userInfo = useSelector((state) => state.hayef.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-blue-800 font-titlefont sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between mobile:px-6">
        <Link to="/">
          <img className="w-14" src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-8">
          <Link to="./cart">
            <div className="relative">
              <img className="w-6 fill-black" src={cart} alt="" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="./login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto-compress%cs=tinysrgb%w=1260%h=750%dpr=1"
              }
              alt="user"
            />
          </Link>
          {userInfo && (
            <p className=" text-base font-titlefont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
