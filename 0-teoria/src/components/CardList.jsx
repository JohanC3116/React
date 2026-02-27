import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export const Cardlist = () => {
  const urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBApcq1Nfd22vVlm1HiaJKITzLYtI3jDECJg&s"
  const temaTeoria = [
    {
      title: "useEffect",
      to: "/useffect",
    },
    {
      title: "imagenes",
      to: `/imagenes?src=${urlImage}`,
    },
    {
      title: "rutas anidadas",
      to: "rutasanidadas",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {temaTeoria.map((item, index) => {
        return (
          <Link
            to={item.to}
            key={index}
            className="group w-full bg-[#151515] p-5 rounded-xl border-3 border-[#333] flex justify-between hover:border-blue-700 hover:cursor-pointer hover:transition duration-300 ease-in-out"
          >
            <h3 className="font-medium text-lg">{item.title}</h3>
            <Icon
              icon="weui:arrow-filled"
              width="12"
              height="24"
              className="group-hover:text-blue-700 hover:transition duration-300 ease-in-out"
            />
          </Link>
        );
      })}
    </div>
  );
};
