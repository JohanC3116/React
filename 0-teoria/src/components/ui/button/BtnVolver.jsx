import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const BtnVolver = () => {
  const Navigation = useNavigate();
  return (
    <button
      onClick={() => Navigation(-1)}
      className="absolute top-4 left-4 bg-white text-black hover:bg-[#f2f2f2] p-3 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in"
    >
      <Icon icon="fluent-emoji-flat:end-arrow" width="32" height="32" />
    </button>
  );
};
