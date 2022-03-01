import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserList from "./components/UserList/UserList";
import Context from "./components/Context/Context";
import AddUser from "./components/AddUser/AddUser";
import ShowSingleUser from "./components/ShowSingleUser/ShowSingleUser";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <BrowserRouter>
            <Context>
              <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="addUser" element={<AddUser />} />
                <Route path="/profile/:id" element={<ShowSingleUser />} />
              </Routes>
            </Context>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
