import React, { useEffect } from "react";
import "./Profile.css";
import pic from "../../assets/img/read-book.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../redux/actions/users/userActions";
import Loading from "../Loading/Loading";

const Profile = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  return (
    <>
      {error && <h2>{error}</h2>}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                <div className="card m-auto " style={{ width: "20%" }}>
                  <img src={pic} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{user && user.email}</h5>
                    <p className="card-text">{user?.name}</p>{" "}
                    {/* if user exists, user's name */}
                    <Link to="/user-update" className="btn btn-primary">
                      Update your profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          {loading ? (
            <Loading />
          ) : (
            <div className="col-lg-10 col-md-10 m-auto">
              <h2 className="text-center" style={{ padding: "20px" }}>Your Book Collection</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {user?.books.map((book) => (
                    <tr className="table-dark">
                      <th scope="row">{book.author}</th>
                      <td>{book.title}</td>
                      <td>Delete</td>
                      <td>Update</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
