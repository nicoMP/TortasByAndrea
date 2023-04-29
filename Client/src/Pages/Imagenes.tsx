import { useState } from "react";
import img1 from "../Images/5.jpg";
export default function Imagenes(){
    return(
        <>
            <h1 className="w-screen text-center mt-6 text-4xl italic font-serif text-pink-500 justify-center">Galleria</h1>
            <div className = "w-screen mt-4  snap-x overflow-x-auto whitespace-nowrap">
                {imageDisplay()}
            </div>
        </>
    )
}

function imageDisplay(){

    let images = [];
    for(var i=1 ;i<16;i++){
        images.push(
            <img className=" inline-block w-60 shadow-lg rounded-xl  dark:shadow-black/40 mx-2  my-0 snap-center " key = {i} src ={img1}/>
        )
    }
    return(
        <div className="inline-block">
        {images}
        </div>
    )
}