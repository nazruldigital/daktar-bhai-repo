import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import ChackOut from "./Components/ChackOut/ChackOut";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/services/:chackout"
          element={
            <RequireAuth>
              <ChackOut></ChackOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
