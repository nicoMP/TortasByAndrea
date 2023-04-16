import { ReactElement } from "react"

interface Options{
    options: {label:string, value:string|number}[],
    id: string,
    onChange:  (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{};
}
 export function Dropdown({options,id, onChange}:Options){
    let dropdown:ReactElement[] = []
    dropdown = options.map((option,i)=>{
        return <option key = {i}  value = {option.value}>{option.label}</option>
    })
    return(
        <>
            <label id={id} htmlFor ={id} ><p>{id}</p></label>
            <select onChange={(e)=>onChange} name={id} className="text-xs py-1 w-32 bg-slate-50 border border-black-200 rounded-lg mr-1 mt-px  pl-2">
                {dropdown}
            </select>
        </>
    )
 }

export function Radio({options,id, onChange}:Options){
    let radio:ReactElement[] = [];
    radio = options.map((option,i)=>{
        return (
            <div key = {i} className="flex flex-row items-center">
                <input onChange={(e)=>onChange} required type="radio" id={option.label} name={id} value={option.value} className="mr-1"/>
                <label className="" htmlFor={option.label}><p>{option.label}</p></label>
            </div>
        )
    })
    return(
        <div className="">
            <label id={id} htmlFor={id}><p>{id}</p></label><br/>
            <div className="flex flex-rows -mt-6 w-1/2 justify-between">
                {radio}
            </div>
        </div>
    )
}