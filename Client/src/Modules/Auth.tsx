import { useState } from 'react';
import LoginForm from '../Components/UserManagement/LoginForm';
import RegisterForm from '../Components/UserManagement/RegisterForm';
interface Auth {
  closeModal:()=>void,
  setUser:(userid:string, isadmin:boolean)=>void

}
export default function Auth({closeModal, setUser}:Auth) {
  const [formState, setFormState] = useState<number>(0)
  const handleOnClose = (e: React.MouseEvent<HTMLUnknownElement, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLDivElement && target.id === "blur-auth") {
      closeModal();
    }
  };

  return (
    <div
      id="blur-auth"
      onClick={(e) => {handleOnClose(e)}}
      className={
        " fixed inset-0 flex justify-center pb-6 pt-12 md:pt-40 overflow-auto overscroll-contain items-top bg-black bg-opacity-30 backdrop-blur-sm "
      }
    >
      <div className={" h-fit flex items-top justify-center  mx-auto px-2 overflow-auto"}>
        <div className="bg-white rounded-lg shadow-lg  w-full  flex flex-col items-center">
          <h1 className="text-center text-pink-500 text-2xl  italic font-serif text-thin mt-6 px-4">Bienvenido a Tortas By Andrea!</h1>
          {formState===0 && <LoginForm setUser={setUser} onClose={closeModal}/>}
          {formState===1 && <RegisterForm onClose={closeModal}/>}
          {formState===3 && <p>Nothing Here Loser</p>}
          {formState !==3 && <button onClick={() => {setFormState(3)}} className="text-violet-700 active:text-violet-200 text-xs underline">Recuperar Contraseña</button>}
          {formState !==1 && <button onClick={(e) => {setFormState(1)}}  className="text-violet-700 active:text-violet-200 text-xs pb-1 underline">Crear Usuario</button>}
          {formState !==0 && <button onClick={(e) => {setFormState(0)}}  className="text-violet-700 active:text-violet-200 text-xs pb-1 underline">Login</button>}
        </div>
      </div>
    </div>

  )
}
