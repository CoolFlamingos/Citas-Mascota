//Nucleo de mi proyecto
//Une los componentes
//Los componentes que creamos los usamos como etiquetas despues de exportar e importar
import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente" 

function App() {


  return (
    <>
      <Header/> 
      <ListadoPaciente/>
    </>
  )
}

export default App
