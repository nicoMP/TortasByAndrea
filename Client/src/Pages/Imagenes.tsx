import { useState } from "react";
import img1 from "../Images/5.jpg";
export default function Imagenes(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollLeft = () => {
        setScrollPosition((scrollPosition + 15 - 1) % 15);
      };
    
      const scrollRight = () => {
        setScrollPosition((scrollPosition + 1) % 15);
      };
    return(
        <>
            <h1 className="w-full text-center mt-6 text-4xl italic font-serif text-pink-500 justify-center">Galleria</h1>
            <div className = "w-3/4 bg-zinc-300 mx-auto rounded-xl  snap-x overflow-x-auto whitespace-nowrap">
                {imageDisplay()}
            </div>
        </>
    )
}

function imageDisplay(){

    let images = [];
    for(var i=1 ;i<16;i++){
        images.push(
            <img className=" inline-block w-1/4 shadow-xl rounded-xl  dark:shadow-black/30 mr-2  my-0 snap-center " key = {i} src ={img1}/>
        )
    }
    return(
        <div className="inline-block">
        {images}
        </div>
    )
}