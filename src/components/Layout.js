import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  let totalPrice = 0;
  let totalPrices = useSelector((state) => state.cart.itemsList);

  totalPrices.forEach((items) => (totalPrice += items.totalPrice));

  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
