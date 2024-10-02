import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Footer from "./components/Footer";
import NavBar from "./components/NavbBar";
import Faq from "./pages/Faq";
import PostsPage from './pages/PostsPage';
import Tailor from "./pages/Tailor";
import Build from "./pages/Build";
import Score from "./pages/Score";


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/tailor" element={<Tailor />} />
          <Route path="/build" element={<Build />} />
          <Route path="/score" element={<Score />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;