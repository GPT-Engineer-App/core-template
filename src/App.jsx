import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Main from "./pages/Main.jsx"; // Import the Main component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/main" element={<Main />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
