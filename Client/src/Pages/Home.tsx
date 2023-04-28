import Login from "./Auth";

export default function Home(){
    return(
        <>
            <h1 className="w-full text-center mt-6 text-5xl italic font-serif text-pink-500">Tortas By Andrea</h1>
            <div className= "mx-auto mt-4 w-4/5 lg:w-1/2 leading-12 bg-white rounded-lg">
                <p className="px-4 py-4">
                    ¡Bienvenidos a Tortas By Andrea! <br/>

                    Somos una pastelería en línea especializada en crear tortas con diseños complejos y únicos. Nuestra fundadora, Andrea, es una pastelera apasionada por la repostería creativa y se dedica a hacer realidad las ideas más originales de nuestros clientes.

                    En Tortas By Andrea, creemos que una torta no solo debe saber deliciosa, sino que también debe ser visualmente atractiva y memorable. Por eso, ofrecemos una amplia variedad de diseños personalizados para que cada torta sea única y refleje la personalidad y gustos de nuestros clientes.<br/>


                    Nuestra pastelería no cuenta con una ubicación física, pero puedes hacer tus pedidos en línea o por teléfono. Nos aseguramos de que tu torta llegue a tiempo y en perfectas condiciones a cualquier lugar dentro de nuestra área de servicio.

                    En Tortas By Andrea, nos comprometemos a utilizar ingredientes frescos y de alta calidad en todas nuestras preparaciones, y trabajamos arduamente para lograr el mejor sabor y textura en cada torta.

                    Si estás buscando una torta personalizada y deliciosa para tu próxima celebración, ¡no dudes en contactarnos! Estamos emocionados de trabajar contigo para crear una torta que sea el centro de atención de tu evento y que tus invitados nunca olvidarán.
                </p>
            </div>
            <h1 className="w-full text-center mt-6 text-2xl italic font-serif text-pink-500">Contacto</h1>
            <p className="w-full text-center text-lg italic font-serif text-black">
                    Dueña y Creadora : Andrea Mateus<br/>
                    Numero: 647-329-1234<br/>
                    Email: tortasbyandreabucara@gmail.com<br/>
            </p>
        </>

    )
}