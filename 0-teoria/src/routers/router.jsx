import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { ErrorPage } from "../pages/404";
import { UseEffect1 } from "../pages/UseEffect1";
import { ImagenesPage } from "../pages/ImagenesPage";
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ConfiguracionPage } from "../pages/ConfiguracionPage";
export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/useffect" element={<UseEffect1></UseEffect1>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      <Route path="/imagenes" element={<ImagenesPage></ImagenesPage>}></Route>
      <Route
        path="/rutasanidadas"
        element={<RutasAnidadasPage></RutasAnidadasPage>}
      >
        <Route
          index
          element={<Navigate to="perfil/" replace></Navigate>}
        ></Route>
        <Route path="perfil/:id" element={<PerfilPage></PerfilPage>}></Route>
        <Route
          path="configuracion"
          element={<ConfiguracionPage></ConfiguracionPage>}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
