import {Twilio} from "twilio";


interface OrderForm{
    fname: string,
    lname: string,
    phone:number|string,
    flavor: string,
    size: number,
    date: Date,
    info: string
}

const orderWhatsapp = (order:OrderForm):void=>{
    const accountSid = 'ACc5425d516717463e5e58498f91ee4f6b';
    const authToken = '[AuthToken]';    
    const client = new Twilio(accountSid, authToken);
    
    client.messages
    .create({
                from: "whatsapp: +16073669565",
                body: "Pedido Para: " + order.fname + " " + order.lname + `\n` +
                "Fecha de Entrega: " + order.date.toString() + `\n` +
                "Torta de: " + order.flavor +"\nTamaño: " + order.size.toString() + "lb" +
                "\nInformacion Addicional: " + order.info +
                "\nNumero: " + order.phone,
                to: 'whatsapp:+16472262994'
    })
    .then((message:any) => console.log(message.sid))
}
export {orderWhatsapp};