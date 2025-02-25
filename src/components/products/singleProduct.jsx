import React from "react";

function SingleProduct({
  imageCover,
  title,
  price,
  quantity,
  sold,
  priceAfterDiscount,
  description,
}) {
  console.log(priceAfterDiscount);
  return (
    <div
      className="card w-80 bg-base-100 fa-pen-alt"
      style={{ border: "1.08px solid #D9D9D9" }}
    >
      <figure>
        <img src={imageCover} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-lg">{title}</h2>
        <h2 className="text-md font-semibold">{description.slice(0, 50)}...</h2>
        <div className="d-flex justify-between">
          {priceAfterDiscount ? (
            <div className="text-large font-semi-bold">
              <span
                style={{ color: "#717171", textDecoration: "line-through" }}
              >
                {price}$
              </span>{" "}
              {priceAfterDiscount}$
            </div>
          ) : (
            <div className="text-large font-semi-bold">{price}$</div>
          )}
        </div>
        <div className="text-[13px]" style={{ color: "#717171" }}>
          Exists in store {quantity}
        </div>
        <div className="text-[13px]" style={{ color: "#717171" }}>
          Sold {sold}
        </div>

        <div className="card-actions justify-start ml-[-3px]">
          <button
            className="btn btn-primary border-none"
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
