
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order"
function App() {

  return (
    <div className="bg-zinc-300 h-screen w-screen absolute overflow-scroll">
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path ="/ordenar" element={<Order/>}></Route>
      </Routes>
    </div>
  );
}

export default App
