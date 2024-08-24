import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
