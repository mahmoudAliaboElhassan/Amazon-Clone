export default function Cart() {
  return (
    <div className="bg-gray-100 px-1 flex gap-3">
      {/* Left Cart Section */}
      <div className="bg-white p-5 w-3/4 flex flex-col ">
        <div className="text-2xl font-bold">Shopping Cart</div>
        <div className="text-blue-600 cursor-pointer">Deselect all items</div>
        <div className="text-right">Price</div>

        {/* Cart Items */}
        <div className="flex flex-col w-full">
          {/* Cart Item */}
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex justify-between p-5 border-t border-gray-200"
            >
              {/* Left Block */}
              <div className="flex w-4/5">
                {/* Product Image */}
                <div className="w-1/5 flex-shrink-0">
                  <img
                    src="https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL480_QL65_.jpg"
                    alt="product"
                    className="w-full"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col p-3 gap-2">
                  <div className="text-lg">
                    boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,
                    Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water
                    Resistance...
                  </div>
                  <div className="text-green-700 text-sm">In Stock</div>
                  <div className="text-gray-600 text-sm">
                    Eligible for FREE Shipping
                  </div>
                  <div className="w-16">
                    <img
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                      alt="fulfillment"
                      className="w-full"
                    />
                  </div>
                  <div className="bg-yellow-400 px-2 py-1 text-sm w-fit rounded-md cursor-pointer font-medium">
                    Remove From Cart
                  </div>
                </div>
              </div>

              {/* Right Block (Price) */}
              <div className="text-lg font-semibold">Rs 25000</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Cart Section */}
      <div className="bg-white p-5 w-1/4 flex flex-col h-fit">
        <div className="text-lg font-medium">
          Subtotal (3 items): <span className="font-bold">Rs 75000</span>
        </div>
        <div className="flex items-center mt-3">
          <input type="checkbox" className="mr-2" />
          <div>This Order Contains a gift</div>
        </div>
        <div className="bg-yellow-400 text-sm px-4 py-2 mt-3 flex justify-center items-center cursor-pointer rounded-lg font-medium">
          Proceed To Buy
        </div>
      </div>
    </div>
  );
}
