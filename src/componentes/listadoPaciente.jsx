
function ListadoPaciente() {


    
    return (

        <div className="md w-1/2 lg:w-3/5 overflow-auto md:h-screen" >
            <h2 className="font-black text-3xl text-center">Listado paciente</h2>
            <p className="text-xl mb-10 mt-5 text-center font-bold ">Administra tus {""} <span className="text-indigo-600 font-bold">Pacientes y citas</span></p>

            <div className="mt-5 py-10 rounded-xl bg-slate-300 shadow-md px-5">
                <p className="font-bold mb-3 text-gray-700">Nombre: <span className="normal-case font-normal">Chocolate</span> </p>
           

           
                <p className="font-bold mb-3 text-gray-700"> Propietario: <span className="normal-case font-normal">Andrea</span> </p>
                

                
                    <p className="font-bold mb-3 text-gray-700"> Email: <span className="normal-case font-normal">andrea@hotmail.com</span> </p>
               

                
                    <p className="font-bold mb-3 text-gray-700"> Fecha de alta: <span className="normal-case font-normal">15/10/2022</span> </p>
               

               
                    <p className="font-bold mb-3 text-gray-700"> Sintomas: <span className="normal-case font-normal">Tos</span> </p>
                
                    </div>

                </div>
            )
}
            export default  ListadoPaciente

    /*
    mb = margin bottom
    mt= margin top 
   
    */