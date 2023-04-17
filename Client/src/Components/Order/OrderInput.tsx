import { Component} from "react"
import { Dropdown, Radio } from "../Input/Options"
import {sendEmail} from "../../API/sendEmail";
import { OrderForm } from "../../types";
export default function OrderInput(){
    return(
        <div className= "bg-white mx-auto w-3/4 md:w-1/4 mt-6 rounded-lg overflow-scroll p-8">
        <RequestForm/>
        </div>
    )
}

const initialFormState:OrderForm = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    flavor: 'vanilla',
    size: 2,
    date: new Date(),
    info: ""
  };
class RequestForm extends Component<{}, OrderForm>{
    constructor(props:{}){
        super(props);
        this.state = initialFormState;
    }
    private handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };
    private handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendEmail({
                        from: 'tortasbyandreabucara@gmail.com',
                        to: 'nick2000@live.ca',
                        subject: 'Request by '  + this.state.fname + " " + this.state.lname ,
                        text: 
                            "Fecha de Entrega: " + this.state.date.toString() + `\n` +
                            "Torta de: " + this.state.flavor +"\nTamaño: " + this.state.size.toString() + "lb" +
                            "\nInformacion Addicional: " + this.state.info +
                            "\nNumero: " + this.state.phone
    })
    }
    
  
    render(){
        return<>
            <form onSubmit={this.handleSubmit}>
                <div className="">
                    <label htmlFor="fname">
                        <p>Nombre</p>
                    </label>
                    <input type="text" placeholder={"John"} value={this.state.fname} onChange={this.handleChange} required id="fname"  name="fname" className="bg-slate-50 border border-black-200 rounded-lg pl-2"/>
                </div>
                <div className="">
                    <label htmlFor="lname">
                        <p>Apellido</p>
                    </label>
                    <input type="text" placeholder="Smith" value={this.state.lname} onChange={this.handleChange} required id="lname" name="lname" className="bg-slate-50 border border-black-200 rounded-lg pl-2"/>
                </div>
                <div className="">
                    <label htmlFor="email">
                        <p>Email</p>
                    </label>
                    <input type="email" placeholder={"tuemail@email.com"} value={this.state.email} onChange={this.handleChange} required id="email"  name="email" className="bg-slate-50 border border-black-200 rounded-lg pl-2"/>
                </div>
               <div className="">
                    <label htmlFor="phone">
                        <p>Numero</p>
                    </label>
                    <input type="number" onChange={this.handleChange} placeholder={"6073334444"} value={this.state.phone} required id="phone" name="phone" className="text-xs py-1 w-32 bg-slate-50 border border-black-200 rounded-lg mr-1 pl-2"/>

               </div>
               <div className="pt-2">
                    <Dropdown options = {CAKE_OPTIONS} onChange={(e)=>this.handleChange} id = "flavor"/>
               </div>
               <div className="pt-1">
                    <Radio options = {SIZE_OPTIONS} onChange={(e)=>this.handleChange} id = "size"/>
                </div>
                <div className="">
                    <label htmlFor="date">
                        <p>Fecha de Entrega</p>
                    </label>
                    <input type="date" value={this.state.date.toString()} onChange={this.handleChange} min={new Date().toISOString().split("T")[0]}required id="date" name="date" className="text-xs py-1 w-28 bg-slate-50 border border-black-200 rounded-lg mr-1 mt-px  pl-2"/>
                </div>
                <div>
                    <label htmlFor="info">
                        <p>Informacion Addicional</p>
                    </label>
                    <textarea placeholder = {"Como podemos elevar tu celebracion?"} value={this.state.info} id="info" name="info" onChange={this.handleChange} className="text-xs py-1 w-full h-14 bg-slate-50 border border-black-200 rounded-lg mr-1 pl-2 align-top"/>
                </div>
                <input type = "submit" value="Ordenar"  className="bg-pink-500 border-black mt-2 rounded-lg px-1 float-right"/>
            </form>
        </>
        }
    
}
const CAKE_OPTIONS = [
    {
        label: "Vanilla",
        value: "vanilla"
    },
    {
        label: "Chocolate",
        value: "chocolate"
    },
    {
        label: "Banano",
        value: "banano"
    },
    {
        label: "Cafe",
        value: "cafe"
    },
    {
        label: "Cheese Cake",
        value: "cheesecake"
    }
]
const SIZE_OPTIONS = [
    {
        label: "2lb",
        value: 2
    },
    {
        label: "4lb",
        value: 4
    },
    {
        label: "6lb",
        value: 6
    }
]
