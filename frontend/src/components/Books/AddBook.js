import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBookAction } from "../../redux/actions/books/bookActions";
import addImage from "../../assets/img/addbook.jpg";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();
 

  //grab book created from store
  const bookCreated = useSelector((state) => state.bookCreated);
  const { book } = bookCreated;

  //redirect if user is login/authenticated
  useEffect(() => {
    if (book) {
      alert("Created book successfully!")
      navigate("/addbook");
    }
  }, [book, navigate]);


  //Handle submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createBookAction({category, author, title}));
  };

  const containerStyle = {
    backgroundImage: `url(${addImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "88vh",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  };

  const formButtonStyle = {
    fontSize: "1.0rem",
    marginTop: "10px",
    width: "25%",
  };

  const buttonStyle = {
    fontSize: "1.2rem",
    padding: "10px",
    width: "40%",
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="row container-height">
          <div className="col-lg-8 col-md-8 m-auto">
            <h1 className="text-center" style={{ padding: "20px" }}>
              Are you willing to add a new one to the Book Shelf?
            </h1>
            <div className="text-center">
              <button
                style={buttonStyle}
                type="button"
                className="btn btn-primary text-center"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click to add Book!
              </button>
            </div>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Create Book
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h1 className="text-center">Add Book</h1>
                    <form onSubmit={handleFormSubmit}>
                      <fieldset>
                        <div className="form-group">
                          <label
                            style={{ fontWeight: "bold", fontSize: "1.0em" }}
                          >
                            Category
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="custom-select"
                            style={{ width: "100%", height: "35px" }}
                            required
                          >
                            <option defaultValue="Translation">
                              Translation
                            </option>
                            <option value="Short Story">Short Stories</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Education">Education</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputEmail1"
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.0em",
                              marginTop: "10px",
                            }}
                          >
                            Author
                          </label>
                          <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Author name"
                            required
                          />
                        </div>
                        <div
                          className="form-group"
                          style={{ margin: "10px 0px 10px 0" }}
                        >
                          <label
                            htmlFor="exampleInputPassword1"
                            style={{ fontWeight: "bold", fontSize: "1.0em" }}
                          >
                            Title
                          </label>
                          <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Book title"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-warning m-auto"
                          style={formButtonStyle}
                        >
                          Create Book
                        </button>
                      </fieldset>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
