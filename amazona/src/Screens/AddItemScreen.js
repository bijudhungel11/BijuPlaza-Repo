import React, { useEffect, useState } from "react";
import "./ProductScreen.css";
import { useSelector, useDispatch } from "react-redux";
import "./SignInScreen.css";
import { saveProduct, deleteProduct } from "../actions/addProductAction";
import { listProduct } from "../actions/productListAction";
import "./TableStyles.css";
function AddItemScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  //console.log(productSave);

  const productDelete = useSelector((state) => state.productDelete);
  //console.log(productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  //console.log(productSave);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [countInStock, setCountInStock] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState();
  const [numReviews, setNumReviews] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
    //console.log(typeof id);
  };
  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
    //console.log(product._id);
  };
  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProduct());
  }, [successSave, successDelete, dispatch]);
  const openModal = (product) => {
    // const check = modalVisible;
    //console.log(!check);
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setBrand(product.brand);
    setImage(product.image);
    setCategory(product.category);
    setDescription(product.description);
    setCountInStock(product.countInStock);
    setRating(product.reviews);
  };
  return (
    <div className="content content__margined">
      <div className="product__header">
        <h3>Products</h3>
        <div>
          {modalVisible ? (
            <button
              type="button"
              className="button__danger"
              onClick={() => setModalVisible(false)}
            >
              Back To list
            </button>
          ) : (
            <button
              type="button"
              className="button__success"
              onClick={() => openModal({})}
            >
              Create Products
            </button>
          )}
        </div>
      </div>
      {modalVisible && (
        <div className="signin__screen">
          <div className="form">
            <form onSubmit={submitHandler}>
              <ul className="form__container">
                <li>
                  <h2>Create Product</h2>
                </li>
                <li>
                  {loadingSave && <div>loading....</div>}
                  {errorSave && (
                    <div className="error__message">{"What the hell"}</div>
                  )}
                </li>
                <li>
                  <label htmlFor="name">Name</label>
                  <input
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="price">Price</label>
                  <input
                    value={price}
                    type="text"
                    name="price"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="image">Image</label>
                  <input
                    value={image}
                    type="text"
                    name="image"
                    id="image"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="brand">Brand</label>
                  <input
                    value={brand}
                    type="text"
                    name="brand"
                    id="brand"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="category">Category</label>
                  <input
                    value={category}
                    type="text"
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="countInStock">Count In Stock</label>
                  <input
                    value={countInStock}
                    type="text"
                    name="countInStock"
                    id="countInStock"
                    onChange={(e) => setCountInStock(e.target.value)}
                  />
                </li>
                {/*   <li>
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="numReviews">Num Reviews</label>
              <input
                type="text"
                name="numReviews"
                id="numReviews"
                onChange={(e) => setNumReviews(e.target.value)}
              />
            
            </li> */}
                <li>
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    name="description"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </li>

                <li>
                  <button type="submit" className="button success">
                    {id ? "Update" : "Create"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalVisible(false)}
                    type="button"
                    className="button__danger"
                  >
                    Back
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      )}
      <div>
        <h3 className="text-center margin-buttom">Product List</h3>
      </div>
      <div className="product__list">
        <table className="table">
          <thead className="table__header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td className="flex-button">
                  <button
                    className="button__warning color-black mr-2"
                    onClick={() => openModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="button__danger color-black mr-2"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddItemScreen;
