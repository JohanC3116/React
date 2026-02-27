import { NavLink, Outlet } from "react-router-dom";
import { BtnVolver } from "../components/ui/button/BtnVolver";

export const RutasAnidadasPage = () => {
  
    const id = 20;
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
        <BtnVolver></BtnVolver>
      <h2 className="text-3xl font-bold flex justify-center items-center">
        Panel de usuario
      </h2>
      <nav className="flex gap-4 justify-center">
        <NavLink className={({isActive}) => isActive ? "px-4 py-2 rounded-b-lg bg-black text-white font-semibold shadow" : "px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100"} to={`perfil/${id}`}>Perfil</NavLink>
        <NavLink className={({isActive}) => isActive ? "px-4 py-2 rounded-b-lg bg-black text-white font-semibold shadow" : "px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100"} to={"configuracion"}>Configuración</NavLink>
      </nav>
      <section className="rounded-2xl">
        <Outlet className="rounded-2xl"></Outlet>
      </section>
    </div>
  );
};
