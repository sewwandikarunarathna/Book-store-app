import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookAction } from "../../redux/actions/books/bookActions";

const AddBook = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // dispatch
  const dispatch = useDispatch();

  //Handle submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createBookAction({ category, title, author }));
  };

  return (
    <div className="container">
      <div className="row container-height">
        <div className="col-lg-8 col-md-8 m-auto">
          <h1 className="text-center" style={{ padding: "20px" }}>
            Are you willing to add a new one to the Book Shelf?
          </h1>
          <button
          style={{fontSize: '1.2rem', padding: '20px',  textAlign: 'center'}}
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Click to add Book!
          </button>

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
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="custom-select"
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
                        <label htmlFor="exampleInputEmail1">Author </label>
                        <input
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Author name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Title</label>
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Book title"
                        />
                      </div>
                      <button type="submit" className="btn btn-warning m-auto">
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
  );
};

export default AddBook;
