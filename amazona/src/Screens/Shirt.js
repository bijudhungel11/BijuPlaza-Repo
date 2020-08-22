import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productListAction";
import CommonScreen from "./CommonScreen";
function Shirt(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  /* const { products, loading, error } = productList;
  const dispatch = useDispatch(); */

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  let checkArr = [];
  let checkValue = "";

  products.filter((product, i) => {
    checkValue = products.find((value) => value.image === `/images/d${i}.jpg`);

    if (checkValue) {
      checkArr.push(checkValue);
    }
  });

  console.log(checkArr);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <CommonScreen checkArr={checkArr} topic="Shirts" />
    </>
  );
}

export default Shirt;
