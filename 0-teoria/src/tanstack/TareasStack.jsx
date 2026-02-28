import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTareasStore } from "../store/TareasStore";
import { toast } from "sonner";
import { use } from "react";

export const useMostrarTareasStackQuery = () => {
  const { mostrartareas } = useTareasStore();
  return useQuery({
    queryKey: ["mostrar tareas"],
    queryFn: mostrartareas,
  });
};
export const useBuscarTareasStackQuery = () => {
  const { buscador, buscarTareas } = useTareasStore();
  return useQuery({
    queryKey: ["buscar tareas", {nombre:buscador}],
    queryFn: () => buscarTareas({ nombre: buscador }),
  });
};
export const useInsertarTareasMutation = (reset) => {
  const { insertarTareas, setStateModal } = useTareasStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["insertar tarea"],
    mutationFn: async (data) => {
      const p = {
        nombre: data.nombre,
      };
      await insertarTareas(p);
    },
    onError: (error) => {
      toast.error("Error: " + error.message);
    },
    onSuccess: () => {
      toast.success("Registro guardado correctamente");
      reset();
      setStateModal(false);
      queryClient.invalidateQueries(["mostrar tareas"]);
    },
  });
};

export const useElimiarTareaMutation = () => {
  const { eliminaeareas, itemSelect } = useTareasStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Eliminar tarea"],
    mutationFn: async () => {
      const p = {
        id: itemSelect?.id,
      };
      await eliminaeareas(p);
    },
    onError: (error) => {
      toast.error("Erros: " + error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["mostrar tareas"]);
      toast.success("Tarea eliminada");
    },
  });
};

export const useEditarTareaMutation = () => {
  const queryClient = useQueryClient();
  const { editarTareas, itemSelect, setStateModal } = useTareasStore();
  return useMutation({
    mutationKey: ["Editar tarea"],
    mutationFn: async (data) => {
      const p = {
        id: itemSelect?.id,
        nombre: data.nombre,
      };
      await editarTareas(p);
    },
    onError: (error) => {
      toast.error("Erros: " + error.message);
    },
    onSuccess: () => {
      toast.success("Tarea modificada");
      setStateModal(false);
      queryClient.invalidateQueries(["mostrar tareas"]);
    },
  });
};
export const useEditarStateMutation = () => {
  const queryClient = useQueryClient();
  const { editarTareas, itemSelect } = useTareasStore();
  return useMutation({
    mutationKey: ["Editar tarea"],
    mutationFn: async (data) => {
      const p = {
        id: itemSelect?.id,
        state: !itemSelect?.state,
      };
      await editarTareas(p);
    },
    onError: (error) => {
      toast.error("Erros: " + error.message);
    },
    onSuccess: () => {
      toast.success("Tarea modificada");
      queryClient.invalidateQueries(["mostrar tareas"]);
    },
  });
};
