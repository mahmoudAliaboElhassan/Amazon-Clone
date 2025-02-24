import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const addToCart = () => {
    toast.success(" added to cart !");
  };

  return (
    <div className="card w-full bg-white border border-[#D9D9D9] border-[border: 1.08px solid] overflow-hidden">
      <figure className="p-2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body px-4 py-2">
        <h2 className="text-[16.18px] font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h2>
        <div className="flex items-center text-sm mt-1">
          <span className="flex items-center">
            <GoStarFill className=" text-yellow-400" />
            <GoStarFill className=" text-yellow-400" />
            <GoStarFill className=" text-yellow-400" />
            <GoStarFill className=" text-yellow-400" />
            <FiStar className="text-yellow-400" />
            <IoChevronDownOutline />
          </span>
          <span className="text-[#1F8394] text-[16.65px] ml-2">
            {product.reviews}
          </span>
        </div>
        <p className="text-[#1F8394] text-[12.94px]">
          {product.bought} in past month
        </p>
        <div className="flex flex-col items-baseline my-2 text-[#1F8394]  ">
          <span className="text-[21.57px] text-black font-[400]">
            {product.price}
            {product.discount && (
              <span className="text-[13.42px] font-[400] ml-2 text-[#1F8394]">
                ({product.discount})
              </span>
            )}
          </span>
          <p className=" text-[12.94px] ">Save extra with No Cost EMI</p>
        </div>
        <p className="text-[12.94px] font-[300]">
          Free delivery by{" "}
          <span className="font-[600]">{product.delivery}</span>
        </p>
        <button
          onClick={() => addToCart()}
          className="w-[99px] h-[28px] bg-[#FFCC00] hover:bg-[#ebc400] text-[11.89px] font-[300] mt-2 mb-6 rounded-[19.81px] cursor-pointer "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
