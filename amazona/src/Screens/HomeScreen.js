import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productListAction";
import CommonScreen from "./CommonScreen";
function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <CommonScreen checkArr={products} />
    </>
  );
}

export default HomeScreen;
