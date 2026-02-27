import { useParams } from "react-router-dom";

export const PerfilPage = () => {
  const {id} = useParams()
  return (
    <div className="h-screen bg-amber-300 text-black rounded-2xl">
      <h1>PerfilPage id usuario: {id}</h1>
    </div>
  );
};
