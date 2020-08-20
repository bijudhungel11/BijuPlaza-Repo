import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productListAction";
import CommonScreen from "./CommonScreen";

function ShoesScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  let checkArr = [];
  let checkValue = "";
  products.map((product, index) => {
    checkValue = products.find(
      (value) => value.image === `/images/sh${index}.jpg`
    );
    if (checkValue) {
      checkArr.push(checkValue);
    }
  });
  return loading ? (
    <div>Loading.....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <CommonScreen topic="shoes" checkArr={checkArr} />
    </>
  );
}

export default ShoesScreen;
