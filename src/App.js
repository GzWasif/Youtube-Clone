import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Search from "./pages/Search/search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:searchTerm" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
