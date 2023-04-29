import { useState, ChangeEvent, FormEvent } from "react";
import { LoginAPI } from "../../Functions/UserFunctions";

interface LoginForm{
    onClose:()=>void,
    setUser:(userid:string, isadmin:boolean, loggedin:boolean)=>void

  }
  export default function LoginForm({onClose, setUser}:LoginForm){
    const [formData, setFormData] = useState<{username:string, password:string}>({
      username: '',
      password: ''
    })
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let res = await LoginAPI(formData);
      try{
        setUser(res.userid,res.isadmin,res.loggedin);
      }catch(e){
        console.log(e);
      }
      console.log(res);
    //   onClose();
    }
    const { username, password } = formData;
    return(
      <form onSubmit={e => onSubmit(e)} className="px-4 w-full mb-2">
        <div className="mb-1">
          <label htmlFor="">Telephono</label>
          <input required type="text" name="username" className="border border-black rounded-md p-1 text-sm w-full" value={username} onChange={e => onChange(e)} />
        </div>
        <div className="mb-4">
          <label htmlFor="">Contraseña</label>
          <input required type="password" name="password" className="border border-black rounded-md p-1 text-sm w-full" value={password} onChange={e => onChange(e)} />
        </div>
        <button type='submit' className="text-white bg-pink-400 hover:bg-pink-300  active:bg-pink-200 p-2 w-full rounded-md">Login</button>
      </form>
    )
  }