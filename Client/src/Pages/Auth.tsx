import { useState } from 'react';

import { Link } from 'react-router-dom';
import LoginForm from '../Components/UserManagement/LoginForm';
interface Auth {
  closeLogin:()=>void
}
export default function Auth({closeLogin}:Auth) {
  const [formState, setFormState] = useState<number>(0)

  const handleOnClose = (e: React.MouseEvent<HTMLUnknownElement, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLDivElement && target.id === "blur-auth") {
      closeLogin();
    }
  };

  return (
    <div
      id="blur-auth"
      onClick={(e) => {handleOnClose(e)}}
      className={
        " fixed inset-0 flex justify-center pt-12 md:pt-72 overflow-auto overscroll-contain items-top bg-black bg-opacity-30 backdrop-blur-sm "
      }
    >
      <div className=" flex items-top justify-center  h-72 w-96 mx-auto px-2 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg  w-full  flex flex-col items-center">
          <h1 className="text-center text-pink-500 text-4xl font-bold mt-3 mb-2 px-4">Auth</h1>
          {formState===0 && <LoginForm onClose={closeLogin}/>}
          <Link onClick={() => {setFormState(0)}} to = "/" className="text-violet-800 text-xs underline">Recuperar Contraseña?</Link>
          <Link onClick={(e) => {setFormState(1)}} to = "/agregar-usuario" className="text-violet-800 text-xs underline">Crear Usuario</Link>
        </div>
      </div>
    </div>

  )
}
