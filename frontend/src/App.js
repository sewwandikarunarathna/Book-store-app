import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Users/RegisterUser";
import Login from "./components/Users/LoginUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path="/books" Component={Books} />
          <Route exact path="/addbook" Component={AddBook} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
