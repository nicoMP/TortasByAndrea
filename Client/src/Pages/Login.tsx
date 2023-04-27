import { ChangeEvent, FormEvent, useState } from 'react';
import {LoginAPI} from '../Functions/login';
interface Login{
  closeLogin: VoidFunction
}
export default function Login({closeLogin}:Login) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginAPI(formData);
  }
  const handleOnClose = (e: React.MouseEvent<HTMLUnknownElement, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLDivElement && target.id === "loginblur") {
      closeLogin();
    }
  };

  return (
    <div
      id="loginblur"
      onClick={(e) => {handleOnClose(e)}}
      className={
        " fixed inset-0 flex justify-center pt-12 md:pt-72 overflow-auto overscroll-contain items-top bg-black bg-opacity-30 backdrop-blur-sm "
      }
    >
      <div className=" flex items-top justify-center  h-72 w-96 mx-auto px-2 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg  w-full  flex flex-col items-center">
          <h1 className="text-center text-pink-500 text-4xl font-bold mt-3 mb-2 px-4">Login</h1>
          <form onSubmit={e => onSubmit(e)} className="px-4 w-full mb-2">
            <div className="mb-1">
              <label htmlFor="">Nombre de Usuario</label>
              <input type="text" name="username" className="border border-black rounded-md p-1 text-sm w-full" value={username} onChange={e => onChange(e)} />
            </div>
            <div className="mb-4">
              <label htmlFor="">Contraseña</label>
              <input type="password" name="password" className="border border-black rounded-md p-1 text-sm w-full" value={password} onChange={e => onChange(e)} />
            </div>
            <button type='submit' className="text-white bg-pink-400 hover:bg-pink-300  active:bg-pink-200 p-2 w-full rounded-md">Login</button>
          </form>
          <div className="text-violet-800 text-xs underline">Crear Usuario</div>
          <div className="text-violet-800 text-xs underline">Recuperar Contraseña?</div>
        </div>
      </div>
    </div>

  )
}
