import { useState, ChangeEvent, FormEvent } from "react";
import { RegisterAPI } from "../../Functions/UserFunctions";

interface LoginForm{
    onClose:()=>void
  }
  export default function LoginForm({onClose}:LoginForm){
    const [state, setFormState] = useState<{fname:string, lname:string, email:string, phone:string, password:string, confirmPassword:string}>({
        fname : "",
        lname : "",
        email : "",
        phone : "",
        password:"",
        confirmPassword:""
    })
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setFormState({ ...state, [e.target.name]: e.target.value });
       
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(state.password === state.confirmPassword)
        {setPasswordMatch(true)}
        else{
            setFormState({ ...state, confirmPassword: "",password:"" });
            setPasswordMatch(false);
        }
        if(passwordMatch){ 
            RegisterAPI(state)
        }
    }
    return(
        <form className="w-full mx-auto px-4"onSubmit={onSubmit}>
            <div className="mb-1">
                <label htmlFor="">Nombre</label>
                <input required type="text" name="fname" className="border border-black rounded-md p-1 text-sm w-full" value={state.fname} onChange={e => onChange(e)} />
            </div>
            <div className="mb-1">
                <label htmlFor="">Appellido</label>
                <input required type="text" name="lname" className="border border-black rounded-md p-1 text-sm w-full" value={state.lname} onChange={e => onChange(e)} />
            </div>
            <div className="mb-1">
                <label htmlFor="">Telephono</label>
                <input required type="phone" name="phone" className="border border-black rounded-md p-1 text-sm w-full" value={state.phone} onChange={e => onChange(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="">Email</label>
                <input required type="email" name="email" className="border border-black rounded-md p-1 text-sm w-full" value={state.email} onChange={e => onChange(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="">Password</label>
                <input required type="password" name="password" className="border border-black rounded-md p-1 text-sm w-full" value={state.password} onChange={e => onChange(e)} />
            </div>
            <div className="mb-4">
                <label>Confirmar Password</label>
                <input required type="password" name="confirmPassword" className={"border border-black rounded-md p-1 text-sm w-full "} value={state.confirmPassword} onChange={e => onChange(e)} />
                {!passwordMatch && <p className= "text-red-900 text-xs">passwords no son iguales</p>}
            </div>
        <button type='submit' className="text-white bg-pink-400 hover:bg-pink-300  active:bg-pink-200 p-2 w-full rounded-md">Registrar</button>
        </form>

    )
  }
  