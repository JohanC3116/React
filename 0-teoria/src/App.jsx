import { CardProducto } from "./components/CardProducto";
import { HolaMundo } from "./components/HolaMundo";
import { Contador } from "./components/contador";
import { MyRoutes } from "./routers/router";
function App() {
  // const frutas = ["manzana", "pera", "banano"];
  // const productos = [
  //   { nombre: "laptop", precio: 2600000, destacado: true },
  //   { nombre: "mouse", precio: 80000, destacado: false },
  //   { nombre: "teclado", precio: 80000, destacado: false },
  // ]; Array de objetos
  return (
    // <div className="bg-black h-screen text-white">
    //   <HolaMundo></HolaMundo>
    //   <Contador></Contador>
    //   {frutas.map((item, index) => {
    //     const text = "hola";
    //     return (
    //       <div key={index} className="text-white">
    //         {item} {text}
    //       </div>
    //     );
    //   })}
    //   <span>Productos</span>
    //   <div className="flex flex-col gap-4">
    //     {productos.map((item, index) => (
    //       <CardProducto key={index} item={item}></CardProducto>
    //     ))}
    //   </div>
    // </div>
    <MyRoutes></MyRoutes>
  );
}

export default App;
