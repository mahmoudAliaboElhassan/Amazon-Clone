import amazonLogo from "../../assets/images/Amazon.png";
import loc from "../../assets/images/loc.png";
import india2 from "../../assets/images/India2.png";
import cart from "../../assets/images/cart.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="font-lato">
        <div id="mainHeading" className="bg-navBgColor">
          <div className="container flex items-center justify-between gap-5 text-white py-[5px]">
            <NavLink to={"/"}>
              <img src={amazonLogo} className="w-[97px]" alt="amazon logo" />
            </NavLink>
            <div className=" hidden lg:flex">
              <img
                src={loc}
                alt="location icon"
                className="h-[22px] self-end me-1"
              />
              <div className="text-[14px] xl:text-[16px]">
                <p className="text-[#C0CCCC] ">Delivering to Surat 394210</p>
                <span className="font-[500]">Update location</span>
              </div>
            </div>
            <div
              id="search"
              className="flex rounded overflow-hidden w-full lg:max-w-[300px]  xl:max-w-[400px] 2xl:max-w-[600px]"
            >
              <button className="bg-[#D9D9D9] text-[#676767] p-[14px] flex gap-1">
                All <i className="fa-solid fa-sort-down"></i>
              </button>
              <input
                type="text"
                className="py-[10px] w-full bg-white text-[#696969] px-[15px] focus:outline-none"
                placeholder="Search Amazon.in"
              />
              <button className="bg-mainYellow px-[15px]">
                <i className="fa-solid fa-magnifying-glass text-black"></i>
              </button>
            </div>
            <div className="flex gap-3">
              <img src={india2} alt="india flag" />
              <span className="cursor-pointer flex gap-1">
                EN <i className="fa-solid fa-sort-down text-[#C0CCCC]"></i>
              </span>
            </div>
            <NavLink
              className="flex items-center gap-1 group cursor-pointer "
              to={"/login"}
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <span className="">Log Out</span>
              <i className="fa-solid fa-arrow-right-from-bracket group-hover:translate-x-[7px] transition-transform"></i>
            </NavLink>
            <div className="flex flex-col cursor-pointer">
              <span className="font-[400]">Returns </span>
              <span className="font-[600]">& Orders</span>
            </div>
            <NavLink className="flex gap-1" to={"/Cart"}>
              <img src={cart} alt="cart icon" />
              <span className="self-end">Cart</span>
            </NavLink>
          </div>
        </div>
        <div className="bg-navBgSecColor">
          <div className="container flex gap-[10px] text-white py-[10px] text-[14px] xl:text-[16px]">
            <NavLink to={"/products"} href="#">
              <i className="fa-solid fa-bars"></i> All
            </NavLink>
            <NavLink to={"/products"} href="#">
              Amazon mini TV
            </NavLink>
            <NavLink to={"/products"} href="#">
              Sell
            </NavLink>
            <NavLink to={"/products"} href="#">
              Best Sellers
            </NavLink>
            <NavLink to={"/products"} href="#">
              Today’s Deals
            </NavLink>
            <NavLink to={"/products"} href="#">
              Mobiles
            </NavLink>
            <NavLink to={"/products"} href="#">
              Customer Service
            </NavLink>
            <NavLink to={"/products"} href="#" className="flex gap-1">
              Prime <i className="fa-solid fa-sort-down translate-y-[2px]"></i>
            </NavLink>
            <NavLink to={"/products"} href="#">
              Electronics
            </NavLink>
            <NavLink to={"/products"} href="#">
              Fashion
            </NavLink>
            <NavLink to={"/products"} href="#">
              New Releases
            </NavLink>
            <NavLink to={"/products"} href="#">
              Home & Kitchen
            </NavLink>
            <NavLink to={"/products"} href="#">
              Amazon Pay
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
