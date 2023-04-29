
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Public/Order";
import Imagenes from "./Pages/Public/Imagenes";
import Auth from "./Modules/Auth"
import { useState } from "react";

const INIT_USER ={
  userid:"",
  isadmin:false,
  loggedin:false
}
function App() {
  const [user, setUser] = useState<{userid:string, isadmin:boolean, loggedin:boolean}>(INIT_USER);
  const [authModal,setAuthVis] = useState<boolean>(false);

  return (
    <>
      <div className="w-screen h-fit bg-pink-400 flex justify-between">
        <div className="flex justify-start ml-2 h-full items-center">
          <p className="px-2 font-semibold text-normal text-lg">TBA</p>
          <div className="flex flex-row h-full items-center">
            <Link to="/" className="px-2 font-thin rounded-lg text-normal text-xl hover:text-pink-300  active:text-violet-900">Inicio</Link>
            <Link to="/galleria" className="px-2 font-thin rounded-lg text-normal text-xl hover:text-pink-300  active:text-violet-900">Galleria</Link>
            {(!user.loggedin&& !user.isadmin)&&<Link to="/ordenar" className="px-2 font-thin rounded-lg text-normal text-xl hover:text-pink-300  active:text-violet-900">Ordenar</Link>}
            
          </div>
        </div>
        
        <div className="flex  mr-2 h-full items-center">
          {(user.loggedin && !user.isadmin) && <LoggedInLinks/>}
          {!user.loggedin && <button onClick={()=>setAuthVis(!authModal)}  className="px-2 font-thin text-normal text-lg hover:text-pink-300  active:text-violet-900">Login</button>}
          {user.loggedin && <button onClick={()=>setUser(INIT_USER)}  className="px-2 font-thin text-normal text-lg hover:text-pink-300  active:text-violet-900">Logout</button>}
        </div>
      </div>
      <div className="bg-zinc-300 h-screen w-screen absolute overflow-scroll">
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/ordenar" element={<Order/>}/>
          <Route path ="/galleria" element={<Imagenes/>}/>
        </Routes>
        {authModal && <Auth setUser={(userid:string, isadmin:boolean, loggedin:boolean)=>setUser({userid:userid,isadmin:isadmin, loggedin:loggedin})} closeModal={()=>setAuthVis(false)}/>}
      </div>
    </>
  );
}
function LoggedInLinks(){
  return(
    <>
      <Link to="/ordenar" className="px-2 ml-2 font-thin rounded-lg text-normal text-lg hover:text-pink-300  active:text-violet-900">Mis Ordenes</Link>
      <Link to="/" className="px-2 font-thin rounded-lg text-normal text-lg hover:text-pink-300  active:text-violet-900">Mi Cuenta</Link>
    </>
  )
}
export default App
