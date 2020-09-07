import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SignInScreen from "./Screens/SignInScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import { useSelector } from "react-redux";
import AddItemScreen from "./Screens/AddItemScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceorderScreen from "./Screens/PlaceorderScreen";
import Shirt from "./Screens/Shirt";
import ProfileScreen from "./Screens/ProfileSceens";
import PantScreen from "./Screens/PantScreen";
import ShoesScreen from "./Screens/ShoesScreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App(props) {
  const userSignin = useSelector((state) => state.userSignin);

  /* useSelector=> gives us the state */
  const { userInfo } = userSignin;
  // console.log(userInfo);
  // console.log(userInfo.isAdmin);
  let isAdmin;
  if (userInfo) {
    isAdmin = userInfo.isAdmin;
  } else if (userInfo === false) {
    isAdmin = false;
  } else {
    isAdmin = false;
  }

  //console.log(isAdmin);
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
    document.querySelector(".overlay").classList.add("active");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
    document.querySelector(".overlay").classList.remove("active");
  };
  const closeOverlay = () => {
    document.querySelector(".sidebar").classList.remove("open");
    document.querySelector(".overlay").classList.remove("active");
  };

  return (
    <BrowserRouter>
      <div className="app">
        <div className="grid__container ">
          <div className="header">
            <Header openMenu={openMenu} userInfo={userInfo} />
          </div>

          <aside className="sidebar">
            <Sidebar closeMenu={closeMenu} isAdmin={isAdmin} />
          </aside>

          <main className="main">
            <MainContent
              PantScreen={PantScreen}
              Shirt={Shirt}
              ShoesScreen={ShoesScreen}
              AddItemScreen={AddItemScreen}
              SignInScreen={SignInScreen}
              RegisterScreen={RegisterScreen}
              ProfileScreen={ProfileScreen}
              ShippingScreen={ShippingScreen}
              PaymentScreen={PaymentScreen}
              PlaceorderScreen={PlaceorderScreen}
              ProductScreen={ProductScreen}
              HomeScreen={HomeScreen}
              CartScreen={CartScreen}
              closeOverlay={closeOverlay}
            />
          </main>

          <footer className="footer">@ All right reserved</footer>
        </div>
        <div className="overlay" onClick={closeOverlay}></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
