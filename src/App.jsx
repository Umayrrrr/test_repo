import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Users from "./pages/Users";
import LoginSignup from "./pages/LoginSignup";
import EditUser from "./pages/EditUser";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import AddUser from "./pages/NewUser";
import FeedbackChat from "./pages/FeedbackChat";
import TicTacToe from "./pages/TicTacToe";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="feedbackChat" element={<FeedbackChat />}></Route>
            <Route path="/tictactoe" element={<TicTacToe />}></Route>
            <Route path="/todolist" element={<Todos />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
