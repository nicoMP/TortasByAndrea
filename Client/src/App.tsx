
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order";

function App() {

  return (
    <>
      <div className="w-screen h-9 bg-pink-400 flex flex-rows">
        <div className="flex justify-start ml-2 h-full items-center">
          <p className="px-2 font-semibold text-normal text-lg">TBA</p>
        </div>
        <div className="flex flex-row justify-end mr-4 h-full items-center">
          <Link to="/" className="px-2 font-thin text-normal text-lg hover:bg-pink-200">Inicio</Link>
          <Link to="/" className="px-2 font-thin text-normal text-lg hover:bg-pink-200">Imagenes</Link>
          <Link to="/ordenar" className="px-2 font-thin text-normal text-lg hover:bg-pink-200">Ordenar</Link>
        </div>
      </div>
      <div className="bg-zinc-300 h-screen w-screen absolute overflow-scroll">
        <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path ="/ordenar" element={<Order/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
