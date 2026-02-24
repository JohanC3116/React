import { useEffect, useState } from "react";
import { BtnVolver } from "../components/ui/button/BtnVolver";

export const UseEffect1 = () => {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);
  return (
    <div className="h-screen bg-amber-300 text-black flex flex-col justify-center items-center">
      <BtnVolver></BtnVolver>
      <h1 className="text-3xl font-bold mb-6">UseEffect1</h1>
      <div className="w-48 h-48 rounded-full bg-white border-8 border-[#121212] flex items-center justify-center shadow-lg">
        <span className="text-4xl font-semibold">{segundos}</span>
      </div>
    </div>
  );
};
