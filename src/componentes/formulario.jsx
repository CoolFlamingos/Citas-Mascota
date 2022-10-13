function Formulario(){

    return(
        <div className="md:w-1/2 mx-5 lg:w-2/5">
        <h2 className="text-center font-black text-3xl mb-5">Seguimiento Pacientes</h2>
        <p className="text-center mt-5 text-lg mb-10">Aniade paciente <span className="text-indigo-600 font-bold">Administrarlos</span></p>
        
        <form className="bg-indigo-300 py-10 px-8 shadow-md rounded-lg">
            <div>
                <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                type="text" 
                placeholder="Nombre de la mascota"
                />
                 <label className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                type="text" 
                placeholder="Nombre propietario"
                />
                 <label className="block text-gray-700 uppercase font-bold">Email</label>
                <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                type="text" 
                placeholder="Email"
                />
                 <label className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                type="text" 
                placeholder="Sintomas"
                />
            </div>
        </form>
        </div>

        /*md = media 
        w = width
        lg = grande
        mx = max width
        bg = fondo
        py = padding vertical
        px = padding horizonta
        p = padding
        rounded = borde */
    )
}

export default Formulario

/*alt + flecha puedes saltar de linea lo que tienes seleccionado */