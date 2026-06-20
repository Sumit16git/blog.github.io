import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Postpage";
import Header from "./components/Header";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <Router basename="/blog.github.io">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
