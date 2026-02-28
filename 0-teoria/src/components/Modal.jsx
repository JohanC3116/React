import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import {
  useEditarTareaMutation,
  useInsertarTareasMutation,
} from "../tanstack/TareasStack";
import { useTareasStore } from "../store/TareasStore";

export const Modal = () => {
  const { setStateModal, accion, itemSelect } = useTareasStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: itemSelect?.nombre,
    },
  });
  const { mutate: mutateInsertar, isPending } =
    useInsertarTareasMutation(reset);
  const { mutate: mutateEditar } = useEditarTareaMutation();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <section className="flex justify-between mb-4">
          <span className="font-bold text-2xl">
            {" "}
            {accion === "nuevo" ? "Nueva" : "Editar"} tarea
          </span>
          <Icon
            onClick={() => {
              setStateModal(false);
              reset();
            }}
            icon="carbon:close-filled"
            width="32"
            height="32"
            className="cursor-pointer"
          />
        </section>
        <form
          onSubmit={handleSubmit(
            accion === "nuevo" ? mutateInsertar : mutateEditar,
          )}
          className="flex flex-col gap-4"
        >
          <input
            {...register("nombre", { required: "la tarea es obligatoria" })}
            type="text"
            className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400 pla"
            placeholder="Escriba una tarea"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mb-2">{errors.nombre.message}</p>
          )}
          <div className="mx-auto">
            {isPending ? (
              <span>Guardando...</span>
            ) : (
              <button className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer py-2">
                Agregar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
