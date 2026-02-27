import { useContadorStore } from "../store/ContadorStore";

export const ZustandPage = () => {
  const {incrementar, contador, resetear} = useContadorStore()
  return (
    <div className="h-screen flex flex-col gap-5 bg-amber-300 text-black p-4">
      <h1>ZustandPage</h1>
      <span className="text-2xl font-bold">Contador: {contador} </span>
      <button onClick={()=>incrementar()} className="bg-black text-white rounded-2xl">Incrementar</button>
       <button onClick={()=>resetear()} className="bg-black text-white rounded-2xl">Resetear</button>
    </div>
  );
};
