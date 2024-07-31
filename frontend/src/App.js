import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Books";
import AddBook from "./pages/AddBook";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
