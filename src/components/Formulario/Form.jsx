export default function Form() {

    return(
        <>
            <section className="mt-10 w-[30%] mx-auto">
            
                <form action="">

                    <div className="flex flex-col gap-3">
                        <label className="text-3xl" htmlFor="user">Usuario:</label>
                        <input className="p-4 rounded-lg text-xl" type="text" name="user" id="user" placeholder="Usuario"/>
                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                        <label className="text-3xl" htmlFor="passwd">Contraseña:</label>
                        <input className="p-4 rounded-lg text-xl" type="password" name="passwd" id="passwd" placeholder="Contraseña"/>
                    </div>
                    
                    <input type="submit" value="Iniciar Sesión" className="mt-10 cursor-pointer px-4 py-2 bg-red-500 rounded-lg text-white"/>

                </form>

            </section>
        </>
    )

}