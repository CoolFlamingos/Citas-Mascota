import { useState, useEffect } from 'react';
import Error from './error';

function Formulario() {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    const validarFormulario = ((e) => {
        e.preventDefault()
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return
        }
        setError(false)
        //------------------- limpiando nuestros input
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')

    })

    return (
        <div className="md:w-1/2 mx-5 lg:w-2/5">
            <h2 className="text-center font-black text-3xl mb-5">Seguimiento Pacientes</h2>
            <p className="text-center mt-5 text-lg mb-10">Aniade paciente <span className="text-indigo-600 font-bold">Administrarlos</span></p>

            <form className="bg-indigo-300 py-10 px-8 shadow-md rounded-lg"
                onSubmit={validarFormulario}>
                <div>
                    {
                        error&&<Error>
                            <p>Todos los campos son obligatorios</p>
                        </Error>
                    }
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                        <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                            type="text"
                            placeholder="Nombre de la mascota"
                            value={mascota}
                            onChange={(e) => setMascota(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                        <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                            type="text"
                            placeholder="Nombre propietario"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Email</label>
                        <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                        <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                            type="text"
                            placeholder="Fecha de alta"
                            value={alta}
                            onChange={(e) => setAlta(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Sintomas</label>
                        <input className="p-2 rounded-md width-full mt-2 placeholder-gray-400"
                            type="text"
                            placeholder="Sintomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}
                        />
                    </div>


                </div>
                <input type="submit" className=" bg-indigo-600 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-800 cursor-pointer transition-colors font-bold" />
            </form>
        </div>
    )
}

export default Formulario






/*md = media
      w = width
      lg = grande
      mx = max width
      bg = fondo
      py = padding vertical
      px = padding horizonta
      p = padding
      rounded = border raduis */

/*alt + flecha puedes saltar de linea lo que tienes seleccionado */

/*Hooks poder conectar logica de un componente y otro sin la necesidad de clases.
  Decirme el estado en el cual se encuentra cierto componente o funcion del componente (es dinamico porque cambia el estado, debe estar hasta arriba) 
  Use effects se va a ejecutar despues del primer renderizado */


/* useState agregarle un estado lugar a un componente
   Setmascota recibe el valor pero se lo passa a mascota por eso es modificador

   const [mascota,setMascota]=useState('');
   constante [variable, modificador]=hook que voy a estar necesitando en este caso useState ('valor vacio, debe de ir el valor inicial') cambia a ser el nombre de la persona ya cuando se necesita, no siempre es necesario que empiece vacio ya que podemos iniciarlo con informacion y aveces no. Puede iniciar con un numerico, string, objeto, arreglo, etc. 


onChange={(e)=>setMascota(e.target.value)} se le aplica el evento change y se guarda en el modificador. 
(e.target.value) representa el valor del input. El momento que se le aplica el cambio (llenamos el input y ponemos un nombre)enotnces pasa a setMacota se lo asigna a mascota
                            


error=constante de error que se creo que es =false (estado)
Error=funcion Error
&&= ambos error y Error deben cumplirse para que me imprima la leyenda de que todos los campos son obligatrios
error&&<Error>
<p>Todos los campos son obligatorios</p>
</Error>



   */