import './App.css'
import { Ventana } from "./Definitions/Ventana"
import type{ PropiedadesVentana } from "./Definitions/types";

export function App() {

  let props: PropiedadesVentana = {
    propsSuper: {
      precio: 100,
      medidas: {
        alto: 10,
        ancho: 10,
      }
    },
    numeroCuerpos: 2,
    exterior: false,
    partesVentana: {
      cabezal: 10,
      sillar: 10,
      jamba: 10,
      traslape: 10,
      horizontales: {
          superior: 10,
          inferior: 10
    }
    }
  }

  let producto: Ventana = new Ventana(props)
  console.log(producto)

  return (
    <h1> Funciona </h1>
  )
}
