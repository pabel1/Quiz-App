import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Components/Contexts/AuthContext";
import Layout from "../Components/Layout";
import Home from "../Components/Pages/Home";
import Result from "../Components/Pages/Result";
import "../Style/App.css";
import Login from "./Login";
import Quiz from "./Pages/Quiz";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Signup from "./Signup";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PublicRoute />}>
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/*" element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="/*" element={<PrivateRoute />}>
              <Route path="quiz" element={<Quiz />} />
            </Route>

            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
