import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productListAction";
import CommonScreen from "./CommonScreen";
function PantScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  let checkArr = [];

  let checkValue = "";

  products.map((product, i) => {
    checkValue = products.find((value) => value.image === `/images/p${i}.jpg`);
    if (checkValue) {
      checkArr.push(checkValue);
    }
  });

  /*  console.log(checkArr); */
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <CommonScreen topic="Pants" checkArr={checkArr} />
    </>
  );
}

export default PantScreen;
