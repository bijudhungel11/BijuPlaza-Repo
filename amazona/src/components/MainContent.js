import React from "react";
import { Route } from "react-router-dom";
function MainContent(props) {
  const {
    PantScreen,
    Shirt,
    ShoesScreen,
    AddItemScreen,
    SignInScreen,
    RegisterScreen,
    ProfileScreen,
    ShippingScreen,
    PlaceorderScreen,
    PaymentScreen,
    ProductScreen,
    HomeScreen,
    CartScreen,
    closeOverlay,
  } = props;
  return (
    <>
      <Route path="/pants" component={PantScreen} />
      <Route path="/shirts" component={Shirt} />
      <Route path="/shoes" component={ShoesScreen} />
      <Route path="/products" component={AddItemScreen} />
      <Route path="/signin" component={SignInScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/placeOrder" component={PlaceorderScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
    </>
  );
}

export default MainContent;
