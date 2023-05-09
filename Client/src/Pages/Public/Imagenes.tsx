import { useState } from "react";
import img1 from "../../Images/15.jpg";
export default function Imagenes(){
    const [currentImage, setCurrent] = useState(0);
    let scrollImage = (scroll:string)=>{
        if(scroll =="left"){
            currentImage!=0?setCurrent(currentImage-1):setCurrent(14);
        } else if (scroll == "right"){
            currentImage !==14?setCurrent(currentImage+1):setCurrent(0)
        }
        console.log(currentImage)
    }
    return(
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>

            <h1 className="w-screen mt-6 text-center text-4xl italic font-serif text-pink-500 ">Galleria</h1>

            <div className = "flex flex-rows  w-screen mt-4  snap-x overflow-auto">
            <button onClick={()=>scrollImage("left")} className="absolute top-1/4 bg-pink-500/30 left-1 rounded-xl w-10"><i className="bi bi-arrow-left"></i></button>

                {imageDisplay(()=>scrollImage("left"),()=>scrollImage("right"),currentImage)}
            <button onClick={()=>scrollImage("right")} className="absolute right-1 top-1/4 bg-pink-500/30 ml-1 rounded-xl w-10"><i className="bi bi-arrow-right"></i></button>
            </div>
        </>
    )
}

function imageDisplay(left:VoidFunction, right:VoidFunction, currentImage:number){
    let length = 15;
    return ( 
            <>
                <img className="w-1/3 mr-3 rounded-xl my-0 snap-center " onClick={left}  src ={img1}/>
                <img className="w-1/3 mr-3 rounded-xl my-0 snap-center " src ={img1}/>
                <img className="w-1/3 mr-3 rounded-xl my-0 snap-center " onClick={right} src ={img1}/>
            </>
            )
}