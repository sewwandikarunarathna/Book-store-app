import React from "react";
import "./Home.css";
import bookpg from "../../assets/img/book.jpg";
import newhome from "../../assets/img/new-home.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(userInfo);

  return (
    <div className="Container">
      <div className="Content">
        <div className="SubContent">
          <h1>Book Shelf</h1>
          <p>Arrange your books the way you like...</p>

          {!userInfo ? (
            <>
              <img src={newhome} alt="profile" />

              <button type="button" className="btn btn-outline-dark">
                <Link to="/register">Get started</Link>
              </button>
            </>
          ) : (
            <>
              <img src={bookpg} alt="profile" />
              <p className="funct">
              {/* | Add books to the book collection | <br/>| Take a look at books | <br/> | See who are users | */}
                <span>| Add books to the book collection</span>
                <span>| Take a look at books</span>
                <span>| See who are users</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
