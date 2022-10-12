//Nucleo de mi proyecto
//Une los componentes
//Los componentes que creamos los usamos como etiquetas despues de exportar e importar
import Formulario from "./componentes/formulario"
import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente" 
import Paciente from "./componentes/paciente"
import Error from "./componentes/error"



function App() {


  return (
    <>
      <Header/> 
      <ListadoPaciente/>
      <Formulario/>
      <Error/>
      <Paciente/>
    </>
  )
}

export default App
