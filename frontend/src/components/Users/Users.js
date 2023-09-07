import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/actions/users/userActions";
import Loading from "../Loading/Loading";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch the action
    dispatch(fetchAllUsers());
  }, [dispatch]);

  //grab data from the store
  const { users, loading } = useSelector((state) => state.allUsers);
  console.log(users);
  return (
    <div className="container">
      <h1 className="text-center" style={{ padding: "20px" }}>
        Users
      </h1>
      <p className="text-center" style={{ fontStyle: "italic" }}>
        Make connection with other users who are interested in reading books.
        Share knowledge and make insights
      </p>
      <div className="row">
        <div className="col-lg-10 col-md-10 m-auto">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {users &&
                    users.map((user) => {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className="table-dark">
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                          </tr>
                          {/* End of map thr */}
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
