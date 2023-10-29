import React, { useEffect } from "react";
import "./Profile.css";
import pic from "../../assets/img/read-book.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux/actions/users/userActions";
import Loading from "../Loading/Loading";
import { deleteBookAction } from "../../redux/actions/books/bookActions";

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

 // Delete book handler
const handlerDeleteBook = (id) => {
  dispatch(deleteBookAction(id))
    .then(() => {
      // After successful deletion, fetch the updated book data
      dispatch(getUserProfile()); // or whatever action you use to fetch user profile data

      alert("Book deleted successfully!");
    })
    .catch((error) => {
      // Handle any errors, e.g., show an error message
      console.error("Error deleting book:", error);
    });
};

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
              <h2 className="text-center" style={{ padding: "20px" }}>
                Your Book Collection
              </h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Book Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {user?.books.map((book) => (
                    <tr className="table-dark">
                      <td>{book.title}</td>
                      <td>{book.category}</td>
                      <td>{book.author}</td>
                      <td>
                        <Link to={`/update-book/${book?._id}`}>
                          <i
                            className="far fa-edit"
                            style={{
                              color: "yellow",
                              cursor: "progress",
                            }}
                          ></i>
                        </Link>
                      </td>
                      <td>
                        <i
                          onClick={() => handlerDeleteBook(book?._id)}
                          className="fas fa-trash "
                          style={{
                            color: "red",
                            cursor: "progress",
                          }}
                        ></i>
                      </td>
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
