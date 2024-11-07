import { useState } from "react"
import "../index.css"
import { SvgClose } from "../assets/svg"
import Form from "./Formulario/Form"

export default function Login () {

    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(true)



    return (
        <>  

            {
                user ? (
                    <h1 className="text-3xl m-5">¡Hola, {user}!</h1>
                ) : (
                    <button onClick={() => setShowLogin(!showLogin)} className="m-5 font-bold border-2 border-red-500 rounded-xl px-4 py-2">Iniciar Sesión</button>
                )
            }

            {
                showLogin && (
                    <section className="fixed top-0 left-0 right-0 bottom-0 bg-sky-300">

                        <header className="flex flex-col justify-center items-center mt-5">
                            <div onClick={() => setShowLogin(!showLogin)} className="flex w-20 h-20 cursor-pointer justify-center items-center">
                                <SvgClose />
                            </div>
                            <h1>Inicia Sesión</h1>
                        </header>

                        <Form />

                    </section>
                )
            }

        </>
    )

}