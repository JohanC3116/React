import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTareasStore } from "../store/TareasStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import {
  useBuscarTareasStackQuery,
  useEditarStateMutation,
  useEditarTareaMutation,
  useElimiarTareaMutation,
  useMostrarTareasStackQuery,
} from "../tanstack/TareasStack";
import { useInsertarTareasMutation } from "../tanstack/TareasStack";
import { Modal } from "../components/Modal";

export const CrudSupabase = () => {
  const { setItemSelect, stateModal, setStateModal, setAccion, setBuscador } =
    useTareasStore();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading, error } = useMostrarTareasStackQuery();
  const { mutate, isPending } = useInsertarTareasMutation(reset);
  const { mutate: mutateEliminar, isPending: pendingEliminar } =
    useElimiarTareaMutation();
  const { mutate: mutateEditar } = useEditarStateMutation();
  const {data:databuscador, isLoading:isloadingbuscador, error:errorbuscador} = useBuscarTareasStackQuery()
  if (isLoading) {
    return <span>Cargando</span>;
  }
  if (error) {
    return <span>Error: {error.message} </span>;
  }
  return (
    <main className="min-h-screen bg-amber-300 text-black flex items-center justify-center p-4">
      <Toaster position="top-right" richColors></Toaster>
      {stateModal && <Modal></Modal>}
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-black mb-4">
          Treas - SUPABASE +React
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            onChange={(e) => setBuscador(e.target.value)}
            type="search"
            className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-400 pla"
            placeholder="Escriba una tarea"
          />
          <button
            onClick={() => {
              setStateModal(true);
              setAccion("nuevo");
              setItemSelect(null);
            }}
            className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-300 cursor-pointer"
          >
            Agregar
          </button>
        </div>
        <ul className="flex flex-col">
          {databuscador?.map((item, index) => {
            return (
              <li
                className="flex justify-between items-center p-3 bg-amber-100 rounded shadow-sm"
                key={index}
              >
                <span
                  onClick={() => {
                    setItemSelect(item);
                    mutateEditar();
                  }}
                  className={`cursor-pointer flex-1 ${item.state ? "line-through text-gray-400" : ""}`}
                >
                  {item.nombre}
                </span>
                <section className="flex gap-2 items-center">
                  <Icon
                    icon="material-symbols:edit-outline"
                    width="24"
                    height="24"
                    onClick={() => {
                      setItemSelect(item);
                      setStateModal(true);
                      setAccion("editar");
                    }}
                    className="cursor-pointer"
                  />
                  <Icon
                    onClick={() => {
                      setItemSelect(item);
                      mutateEliminar();
                    }}
                    icon="tabler:skull"
                    width="24"
                    height="24"
                    className="cursor-pointer"
                  />
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
