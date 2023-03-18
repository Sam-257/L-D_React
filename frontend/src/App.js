import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import Home from "./Components/Home";
import Add from "./Components/Add";
import View from "./Components/View";
import Todo from "./Components/Todo";
import Form from "./Components/Form";
import Recaptcha from "./Components/Recaptcha";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/view" element={<View />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/recaptcha" element={<Recaptcha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
