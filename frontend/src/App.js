import "./App.css";
import AddBook from './components/Books/AddBook';
import Books from "./components/Books/Books";

function App() {
  return (
    <div className="App">
      <h1>Book Store</h1>
      <Books />
      <AddBook /> 
    </div>
  );
}

export default App;
