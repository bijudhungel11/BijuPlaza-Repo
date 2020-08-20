import React from "react";

function CheckoutWizard(props) {
  return (
    <div className="checkout__steps">
      <div className={props.step1 ? "active" : ""}>SignIn</div>
      <div className={props.step2 ? "active" : ""}>Shipping</div>
      <div className={props.step3 ? "active" : ""}>Payment</div>
      <div className={props.step4 ? "active" : ""}>Place Order</div>
    </div>
  );
}

export default CheckoutWizard;
