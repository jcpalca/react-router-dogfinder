import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList.js";
import DogDetails from "./DogDetails.js";

// App -> BrowserRouter -> { Nav, Routes }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<DogList />} path="/dogs" />
          <Route element={<DogDetails />} path="/dogs/:name" />
          <Route element={<Navigate to="/dogs" path="*" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
