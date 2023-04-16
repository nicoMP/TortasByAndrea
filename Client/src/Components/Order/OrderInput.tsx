import { useState } from "react"
import { Dropdown, Radio } from "../Input/Options"

export default function OrderInput(){
    return(
        <div className= "bg-white mx-auto w-3/4 md:w-1/4 mt-6 rounded-lg overflow-scroll p-8">
        <OrderForm/>
        </div>
    )
}
function OrderForm(){
    return(
        <>
            <form>
                <div className="">
                    <label>
                        <p>Nombre</p>
                    </label>
                    <input type="text" required id="name"  name="fname" className="bg-slate-50 border border-black-200 rounded-lg pl-2"/>
                </div>
                <div className="">
                    <label>
                        <p>Apellido</p>
                    </label>
                    <input type="text" required id="apellido" name="lname" className="bg-slate-50 border border-black-200 rounded-lg pl-2"/>
                </div>
               <div className="">
                    <label>
                        <p>Numero</p>
                    </label>
                    <input type="tel" required id="phone" name="phone" className="text-xs py-1 w-32 bg-slate-50 border border-black-200 rounded-lg mr-1 pl-2"/>

               </div>
               <div className="pt-2">
                    <Dropdown options = {CAKE_OPTIONS} id = {{id:"flavor", name:"Sabores"}}/>
               </div>
               <div className="pt-1">
                    <Radio options = {SIZE_OPTIONS} id = {{id:"size", name:"Tamaño"}}/>
                </div>
                <div className="">
                    <label>
                        <p>Fecha de Entrega</p>
                    </label>
                    <input type="date"  min={new Date().toISOString().split("T")[0]}required id="date" name="date" className="text-xs py-1 w-28 bg-slate-50 border border-black-200 rounded-lg mr-1 mt-px  pl-2"/>
                </div>
                <div>
                    <label>
                        <p>Informacion Addicional</p>
                    </label>
                    <textarea  id="info" name="info" className="text-xs py-1 w-full h-14 bg-slate-50 border border-black-200 rounded-lg mr-1 pl-2 align-top"/>
                </div>
                <input type = "submit" value="Ordenar"  className="bg-pink-500 border-black drop-shadow mt-4 rounded-lg px-1 float-right"/>
            </form>
        </>
    )
}
const CAKE_OPTIONS = [
    {
        label: "Vanilla",
        value: "van"
    },
    {
        label: "Chocolate",
        value: "choc"
    },
    {
        label: "Banano",
        value: "ban"
    },
    {
        label: "Cafe",
        value: "cafe"
    },
    {
        label: "Cheese Cake",
        value: "cheese"
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