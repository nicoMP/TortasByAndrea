import { useState, ChangeEvent, FormEvent } from "react";
import { LoginAPI } from "../../Functions/LoginFunction";

interface LoginForm{
    onClose:(e:any)=>void
  }
  export default function LoginForm({onClose}:LoginForm){
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    })
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      LoginAPI(formData);
    }
    const { username, password } = formData;
    return(
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
    )
  }