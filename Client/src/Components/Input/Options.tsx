import { ReactElement } from "react"

interface Options{
    options: {label:string, value:string|number}[],
    id: {id:string, name:string}
}
 export function Dropdown({options,id}:Options){
    let dropdown:ReactElement[] = []
    dropdown = options.map(option=>{
        return <option value = {option.value}><p>{option.label}</p></option>
    })
    return(
        <>
            <label id={id.id}><p>{id.name}</p></label>
            <select className="text-xs py-1 w-32 bg-slate-50 border border-black-200 rounded-lg mr-1 mt-px  pl-2">
                {dropdown}
            </select>
        </>
    )
 }

export function Radio({options,id}:Options){
    let radio:ReactElement[] = []
    radio = options.map(option=>{
        return (
            <div className="flex flex-row items-center">
                <input type="radio" id={option.label} name="size" value={option.value} className="mr-1"/>
                <label className=""><p>{option.label}</p></label>
            </div>
        )
    })
    return(
        <div className="">
            <label id={id.id}><p>{id.name}</p></label><br/>
            <div className="flex flex-rows -mt-6 w-1/2 justify-between">
                {radio}
            </div>
        </div>
    )
}