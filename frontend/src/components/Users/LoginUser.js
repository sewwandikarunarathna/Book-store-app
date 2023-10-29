import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/users/userActions";
import Loading from "../Loading/Loading";
import ErrorMessage from "../DisplayMessage/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/img/loginreg.jpg";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Before login in we will check if you have login then we redirect you

  const userLoginDetails = useSelector((state) => state.userLogin);

  const { loading, userInfo, error } = userLoginDetails;

  //redirect to the dashboard
  useEffect(() => {
    if (userInfo) navigate("/profile");
  }, [navigate, dispatch, userInfo]);

  //submit form
  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    console.log(email, password);
  };

  // Style for the background image and centering content
const containerStyle = {
  backgroundImage: `url(${loginImage})`,
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
    width: "30%"
  };
  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="col-lg-6 col-md-6 m-auto">
          <div className="row container-height">
            {loading && <Loading />}
            {error && <ErrorMessage children={error} />}
            <h1 style={{ margin: "50px" }}>Login to BookShelf</h1>
            <form onSubmit={submitFormHandler}>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold', fontSize: "1.0em" }}>Email Address</label>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your email here"
                  />
                </div>
                <div className="form-group"
                  style={{ margin: "20px 0px 10px 0" }}>
                  <label htmlFor="exampleInputPassword1" style={{ fontWeight: 'bold', fontSize: "1.0em" }}>Password</label>
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Your password here"
                  />
                </div>
                <button type="submit" className="btn btn-primary m-auto" style={buttonStyle}>
                  Login
                </button>
                <div>
                  <h5 style={{marginTop: "10px"}}>
                    Are you new to BookShelf? <Link to={"/register"}>Register</Link>
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

export default Login;
