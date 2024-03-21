import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Product from "./ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product-page" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
