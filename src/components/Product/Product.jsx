import React from "react";

function Product(props) {
  const product = {
    id: 1,
    name: "inphone7",
    price: 15000000,
    status: false,
  };
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="thumbnail">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="caption">
          <h3>
            ID:{product.id}
            Name:{product.name}
            Price:{product.price}
            Status:{product.status ? "active" : "pending"}
          </h3>
          <p>16.000.000 VND</p>
          <p>
            <a className="btn btn-primary">Buy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
