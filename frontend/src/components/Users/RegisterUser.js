import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import './Register.css';
import { registerUser } from "../../redux/actions/users/userActions";
import Loading from "../Loading/Loading";
import ErrorMessage from "../DisplayMessage/ErrorMessage";
import regImage from "../../assets/img/reg-img.jpg";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //dispatch
  const dispatch = useDispatch();

  //navigate
  const navigate = useNavigate();

  //grab user login from store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //redirect if user is login/authenticated
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo, navigate]);

  //submit
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
    // console.log(userInfo, loading, error);
    // if (userInfo !== null && error === undefined) history.push('/');
  };

  // Style for the background image and centering content
  const containerStyle = {
    backgroundImage: `url(${regImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "88vh",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    marginTop: "10px", // Add margin around the button
    fontSize: "1.0em",
    width: "30%",
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="col-lg-6 col-md-6 m-auto">
          <div className="row container-height">
            {/* {loading && <Loading />}
            {error && <ErrorMessage />} */}
            <h1 style={{ margin: "50px" }}>Register to BookShelf</h1>

            <form onSubmit={formSubmitHandler}>
              <fieldset>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ fontWeight: "bold", fontSize: "1.0em" }}
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.0em",
                      marginTop: "20px",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{ margin: "20px 0px 10px 0" }}
                >
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ fontWeight: "bold", fontSize: "1.0em" }}
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary m-auto"
                  style={buttonStyle}
                >
                  Register
                </button>
                <div>
                  <h5 style={{marginTop: "10px"}}>
                    Are you already an user? <Link to={"/login"}>Login</Link>
                  </h5>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
