import React from "react";

function SingleProduct({ imageCover, title, price }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={imageCover} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-lg font-semibold">{price}$</p>

        <div className="card-actions justify-start">
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "19.81px",
              padding: "6.93px 17.83px",
              backgroundColor: "#FFCC00",
              color: "#000000",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
