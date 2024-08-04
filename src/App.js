import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Task from "./Components/Task";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/task" element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
