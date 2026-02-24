import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { ErrorPage } from "../pages/404";
import { UseEffect1 } from "../pages/UseEffect1";
import { ImagenesPage } from "../pages/ImagenesPage";

export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/useffect" element={<UseEffect1></UseEffect1>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      <Route path="/imagenes" element={<ImagenesPage></ImagenesPage>}></Route>
    </Routes>
  </BrowserRouter>
);
