import React from "react";

function Sidebar() {
  return (
    <div className="w-1/5 drawer">
      <div className="my-2">
        <div className="font-bold">Delivery Day</div>
        <div className="flex items-center my-2">
          <input
            type="radio"
            id="2-days"
            className="mx-1"
            name="get-in-2-day"
          />
          <label for="2-days">Get it in 2 Days</label>
        </div>
      </div>
      <div className="my-2">
        <div className="font-bold">Customer Reviews</div>
        <div className="flex items-center my-2 justify-center">
          <i className="fas fa-star" style={{ color: "yellow" }}></i>
          <i className="fas fa-star" style={{ color: "yellow" }}></i>
          <i className="fas fa-star" style={{ color: "yellow" }}></i>
          <i className="fas fa-star" style={{ color: "yellow" }}></i>
          <i className="fas fa-star" style={{ color: "yellow" }}></i>
          <div>& up</div>
        </div>
      </div>
      <div className="my-2">
        <div className="font-bold">Brands</div>
        <div className="flex items-center my-2">
          <input type="radio" id="samsung" className="mx-1" name="brand" />
          <label for="samsung">Samsung</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" id="lg" className="mx-1" name="brand" />
          <label for="lg">LG</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" id="haier" className="mx-1" name="brand" />
          <label for="haier">Haier</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" id="daikin" className="mx-1" name="brand" />
          <label for="daikin">Daikin</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" id="goderj" className="mx-1" name="brand" />
          <label for="goderj">Goderj</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" id="ifb" className="mx-1" name="brand" />
          <label for="ifb">IFB</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" id="panasonic" className="mx-1" name="brand" />
          <label for="panasonic">Panasonic</label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
