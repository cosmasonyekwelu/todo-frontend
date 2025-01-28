import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coverpage from "./pages/Coverpage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

function App() {
  //base URL for API request from our backend

  const baseURL = "https://todo-backend-vyql.onrender.com";

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Coverpage />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
