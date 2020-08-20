import React, { useState, useEffect } from "react";
import { logOut, update } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./SignInScreen.css";
import { FaUserCircle } from "react-icons/fa";
function ProfileSceens(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logOut());
    props.history.push("/");
    window.location.reload(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate;
  //console.log(userUpdate.success);

  // const myOrderList = useSelector((state) => state.myOrderList);
  // const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;

  useEffect(() => {
    if (userInfo) {
      //  console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    // dispatch(listMyOrders());
  }, [userInfo]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <div className="profile">
      <div className="profile__info">
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form__container">
              <li>
                <h1 className="form__container--logo">
                  <FaUserCircle />
                </h1>
                <h2 className="form__container--heading">User Profile</h2>
              </li>
              <li>
                {loading && <div>Loading.....</div>}
                {error && <div> {error}</div>}
                {success && <div> Profile Saved SuccessFully</div>}
              </li>
              <li>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="email">email:</label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="button button__danger full-width"
                >
                  logOut
                </button>
              </li>
              <li>
                <button type="submit" className="button__success full-width">
                  Update
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      {/*   <div className="profile__orders content__margined">
        {loadingOrders ? (
          <div>Loading....</div>
        ) : errorOrders ? (
          <div>{errorOrders}</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}
    </div>
  );
}

export default ProfileSceens;
