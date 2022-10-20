import Paciente from "./paciente"
function ListadoPaciente({pacientes,setPaciente}) {

    return (

        <div className="md w-1/2 lg:w-3/5 overflow-auto md:h-screen box-sizzing:border-box" >
            <h2 className="font-black text-3xl text-center">Listado paciente</h2>
            <p className="text-xl mb-10 mt-5 text-center font-bold ">Administra tus {""} <span className="text-indigo-600 font-bold">Pacientes y citas</span></p>
            {pacientes.map(paciente => (
               <Paciente
                key={paciente.id}
                setPaciente={setPaciente}
                paciente={paciente} />))
            }
            <> 
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl text-center mt-5">Comienza a Agregar Paciente <span className="text-indigo-600 font-bold">Y Apareceran en este Lugar</span></p>
            </>
        </div>
    )
}
export default ListadoPaciente

/*
mb = margin bottom
mt= margin top 
 <> </> No es un contenedor pero aparta una seccion */
