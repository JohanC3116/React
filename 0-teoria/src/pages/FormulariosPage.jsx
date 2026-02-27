import { useForm } from "react-hook-form";
import { useMenuStore } from "../store/MenuStore";

export const FormulariosPage = () => {
  const { itemselect } = useMenuStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "Johan",
      edad: 14,
      email: "jccalderon.4697@unicesmag.edu.co",
    },
  });
  const enviar = (data) => {
    //console.log(data);
    alert(data.email);
    alert(data.nombre);
    alert(data.edad);
  };
  return (
    <main className="h-scree text-black flex flex-col p-4">
      <span>Formularios {watch("nombre")} </span>
      <h1>
        {itemselect?.title}
        {itemselect?.to}
      </h1>
      <form onSubmit={handleSubmit(enviar)} className="border p-4">
        <section className="bg-amber-200 flex flex-col gap-4">
          <h2>Validar textos</h2>
          <input
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe de tener al menos 3 carateres",
              },
            })}
            className="p-2 border"
            placeholder="Nombre"
          ></input>
          <p> {errors.nombre?.message} </p>
        </section>
        <section className="bg-amber-200 flex flex-col gap-4">
          <h2>Validar Correos</h2>
          <input
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Correo invalido",
              },
            })}
            className="p-2 border"
            placeholder="Nombre"
          ></input>
          <p> {errors.email?.message} </p>
        </section>
        <section className="bg-amber-200 flex flex-col gap-4">
          <h2>Validar numeros</h2>
          <input
            {...register("edad", {
              required: "La edad es obligatorio",
              valueAsNumber: true,
              min: {
                value: 18,
                message: "Debe ser mayor de edad",
              },
              max: {
                value: 99,
                message: "Edad maxima permitida 99",
              },
            })}
            className="p-2 border"
            placeholder="Edad"
            type="number"
          ></input>
          <p> {errors.edad?.message} </p>
        </section>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 w-full"
        >
          Enviar
        </button>
      </form>
      <button
        onClick={() => reset()}
        type="submit"
        className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 w-full"
      >
        Reset
      </button>
    </main>
  );
};
