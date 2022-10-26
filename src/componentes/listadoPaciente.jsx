import Paciente from "./paciente"
import { useEffect } from 'react';

function ListadoPaciente({ pacientes, setPaciente, eliminarPaciente }) {


    {useEffect(()=>{
        if(pacientes.length>=1)
        console.log('nuevo paciente')
    },[pacientes])}



    return (
        <div>
            {pacientes.length === 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl text-center mt-5">Al Agregar Pacientes<span className="text-indigo-600 font-bold">Apareceran aqui</span></p>
                </>
            ) : (
                <div>
                    <h2 className="font-black text-3xl text-center">Listado paciente</h2>
                    <p className="text-xl mb-10 mt-5 text-center font-bold ">Administra tus  <span className="text-indigo-600  font-bold">Pacientes y citas</span></p>

                    {pacientes.map(paciente => (<Paciente
                        key={paciente.id}
                        paciente={paciente}
                        eliminarPaciente={eliminarPaciente}
                        setPaciente={setPaciente}
                    />))}
                    <h2 className="font-black text-center">Numero de pacientes {pacientes.length}</h2>
                </div>
            )}
        </div>

    )
}

export default ListadoPaciente

/*
mb = margin bottom
mt= margin top 
 <> </> No es un contenedor pero aparta una seccion
 use effect: callback (funcion que llama otra funcion) cuanod se ejecuta el proyecto y el state cambia y el componente esta listo colocar codigo. Reacciona al cambio que sufre el state 
 API una pagina externa que me va a ayudar a pasarme datos de una api o un local storage 
 
 
 Cuando empiezan las llaves es que estamos escribiendo javascript cuanod no estamos escribiendo html*/
