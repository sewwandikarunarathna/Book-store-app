import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookAction,
  updateBookAction,
} from "../../redux/actions/books/bookActions";
import bgImage from "../../assets/img/bg-img.jpg";

const UpdateBook = ({ history }) => {
  const { id } = useParams(); //book id is coming from profile page through params(url)

  //Get the book details and fill it in the form
  const book = useSelector((state) => state.bookFetched);
console.log(book)
  const { singleBook, loading } = book;

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBookAction(id));
  }, [dispatch, id]);

  // Update the input field values when the book data changes
  useEffect(() => {
    if (singleBook && !loading) {
      setCategory(singleBook.category);
      setTitle(singleBook.title);
      setAuthor(singleBook.author);
    }
  }, [singleBook, loading]);

  //dispatch action
  const formSubmitHandler = async (e) => {
    e.preventDefault();
  
    const data = {
      category,
      title,
      author,
    };
  
    // Dispatch the update action and wait for it to complete
    await dispatch(updateBookAction(id, data));
  
    // Check if the update was successful (you might want to add error handling here)
    if (!loading) {
      // Dispatch the fetch action to get the updated book data
      await dispatch(fetchBookAction(id));
    } 
  
    // Navigate to the profile page
    navigate("/profile");
  };
  
// Style for the background image and centering content
const containerStyle = {
  backgroundImage: `url(${bgImage})`,
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
  width: "25%"
};

  return (
    <div style={containerStyle}>
      <div className="container">
      <div className="row container-height">
        <div className="col-lg-6 col-md-6 m-auto">
          
            {singleBook ? (
              <>
              
                <h1 className="text-center" style={{ margin: "50px" }}>Update Book</h1>
                <form onSubmit={formSubmitHandler}>
                  <fieldset>
                    <div className="form-group">
                      <label style={{ fontWeight: 'bold', fontSize: "1.0em" }}>Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="custom-select"
                        style={{width: "100%", height: "35px"}}
                        required
                      >
                        <option>Translation</option>
                        <option value="Short Story">Short Stories</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold', fontSize: "1.0em",  marginTop: "10px" }}>Author </label>
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
                    <div className="form-group" style={{margin: '10px 0px 10px 0'}}>
                      <label htmlFor="exampleInputPassword1" style={{ fontWeight: 'bold', fontSize: "1.0em" }}>Title</label>
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
                    <button type="submit" className="btn btn-primary m-auto" style={buttonStyle}>
                      Update
                    </button>
                  </fieldset>
                </form>
              </>
            ) : (
              <h1 className="text-center" style={{ margin: "50px" }}>Loading...</h1>
            )}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default UpdateBook;
