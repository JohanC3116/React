import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
const tabla = "tareas";
export const useTareasStore = create((set) => ({
  accion: "",
  setAccion: (p) => {
    set({ accion: p });
  },
  stateModal: false,
  setStateModal: (p) => {
    set({ stateModal: p });
  },
  itemSelect: null,
  setItemSelect: (p) => set({ itemSelect: p }),
  mostrartareas: async () => {
    const { data, error } = await supabase.from(tabla).select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  buscarTareas: async (p) => {
    const { data, error } = await supabase
      .from(tabla)
      .select()
      .ilike("nombre", "%" + p.nombre + "%")
      .order("nombre", { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
  insertarTareas: async (p) => {
    const { error } = await supabase.from(tabla).insert(p);
    if (error) {
      throw new Error(error.message);
    }
  },
  editarTareas: async (p) => {
    const { error } = await supabase.from(tabla).update(p).eq("id", p.id);
    if (error) {
      throw new Error(error.message);
    }
  },
  eliminaeareas: async (p) => {
    const { error } = await supabase.from(tabla).delete(p).eq("id", p.id);
    if (error) {
      throw new Error(error.message);
    }
  },
}));
