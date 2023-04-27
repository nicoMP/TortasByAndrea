import OrderInput from "../Components/Order/OrderInput"
export default function PlaceOrder(){
    return(
        <>
            <h1 className="w-full text-center mt-6 text-4xl italic font-serif text-pink-500 justify-center">Ordenar</h1>
            <div className = "w-screen -mt-2 mx-auto  snap-x overflow-x-auto whitespace-nowrap">
                <OrderInput/>
            </div>
        </>
    )
}