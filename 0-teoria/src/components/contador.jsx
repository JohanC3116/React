// import { useState } from "react";

import { useState } from "react";
import { Modal } from "./Modal";
//import styles from "./contador.module.css"
export const Contador = () => {
  const [state, setState] = useState(false);
  const [numer, setNumero] = useState(0);
  return (
    //<div className= {styles.card}>
    <div className="bg-violet-500 p-2 rounded-2xl">
      <h1 className="contador">Contador</h1>
      <button
        onClick={() => {
          return (setState(!state));
        }}
      >
        {state ? "Ocultar" : "Ver"}
      </button>
      <button onClick={() => setNumero(numer + 1)}>{numer}</button>
      {state && <Modal></Modal>}
    </div>
  );
};
