import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Users/RegisterUser";
import Login from "./components/Users/LoginUser";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/Profile/UpdateProfile";
import Users from "./components/Users/Users";
import UpdateBook from "./components/Books/UpdateBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/profile" Component={Profile} />
          <Route exact path="/user-update" Component={UpdateProfile} />
          <Route exact path="/books" Component={Books} />
          <Route exact path="/addbook" Component={AddBook} />
          <Route exact path="/update-book/:id" Component={UpdateBook} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/users" Component={Users} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
