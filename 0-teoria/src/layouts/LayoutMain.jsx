import { Outlet } from "react-router-dom";
import { Cardlist } from "../components/CardList";

export const LayoutMain = () => {
  return (
    <div className=" flex h-screen w-screen text-white">
      <header>
        <Cardlist></Cardlist>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
