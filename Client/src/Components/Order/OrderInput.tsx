export default function OrderInput(){
    return(
        <>
        <OrderForm/>
        </>
    )
}
function OrderForm(){
    return(
        <div className= "bg-white mx-auto w-1/4 mt-6 rounded-lg h-96 p-8">
            <form>
                <label>
                    <p>Hi</p>
                </label>
                <input type="text" className="bg-slate-50 border border-black rounded-lg">
                </input>
            </form>
        </div>
    )
}