import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksAction } from "../../redux/actions/books/bookActions";
import Loading from "../Loading/Loading";
const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchBooksAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { books, loading } = useSelector((state) => {
    return state.bookList;
  });
  console.log(books);
  console.log(loading);

  return (
    <div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Book Name</th>
                <th scope="col">Category</th>
                <th scope="col">Author</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {books &&
                    books.map((book) => {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className="table-dark">
                            <td>{book.title}</td>
                            <td>{book.category}</td>
                            <td>{book.author}</td>
                            <td>
                              <i
                                className="fas fa-trash "
                                style={{
                                  color: "red",
                                  cursor: "progress",
                                }}
                              ></i>
                            </td>
                            <td>
                              <i
                                className="far fa-edit"
                                style={{
                                  color: "yellow",
                                  cursor: "progress",
                                }}
                              ></i>
                            </td>
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

export default Books;
