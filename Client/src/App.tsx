
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Imagenes from "./Pages/Imagenes";
import Login from "./Pages/Login"

function App() {

  return (
    <>
      <div className="w-screen h-9 bg-pink-400 flex justify-between">
        <div className="flex justify-start ml-2 h-full items-center">
          <p className="px-2 font-semibold text-normal text-lg">TBA</p>
          <div className="flex flex-row mr-4 h-full items-center">
            <Link to="/" className="px-2 font-thin rounded-lg text-normal text-lg hover:bg-pink-300  active:bg-pink-200">Inicio</Link>
            <Link to="/galleria" className="px-2 font-thin rounded-lg text-normal text-lg hover:bg-pink-300  active:bg-pink-200">Galleria</Link>
            <Link to="/ordenar" className="px-2 font-thin rounded-lg text-normal text-lg hover:bg-pink-300  active:bg-pink-200">Ordenar</Link>
          </div>
        </div>
        
        <div className="flex  mr-4 h-full items-center">
          <Link to="/login" className="px-2 font-thin rounded-lg text-normal text-lg hover:bg-pink-300  active:bg-pink-200">Login</Link>
        </div>
      </div>
      <div className="bg-zinc-300 h-screen w-screen absolute overflow-scroll">
        <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path ="/ordenar" element={<Order/>}></Route>
          <Route path ="/galleria" element={<Imagenes/>}></Route>
          <Route path ="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
