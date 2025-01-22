import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coverpage from "./pages/Coverpage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Coverpage />} />
          <Route path="/tasks" element={<MyTask />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/edit" element={<EditTask />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
