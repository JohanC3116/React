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
import { LayoutMain } from "../layouts/LayoutMain";
import { ApisPage } from "../pages/ApisPage";
import { FormulariosPage } from "../pages/FormulariosPage";
import { ZustandPage } from "../pages/ZustandPage";
import { CrudSupabase } from "../pages/CrudSupabase";
export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LayoutMain></LayoutMain>}> */}
      <Route index element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/useffect" element={<UseEffect1></UseEffect1>}></Route>
      <Route path="/imagenes" element={<ImagenesPage></ImagenesPage>}></Route>
      <Route
        path="formularios"
        element={<FormulariosPage></FormulariosPage>}
      ></Route>
      <Route path="/zustandpage" element={<ZustandPage></ZustandPage>}></Route>
      <Route
        path="/crudsupabase"
        element={<CrudSupabase></CrudSupabase>}
      ></Route>
      <Route
        path="/rutasanidadas"
        element={<RutasAnidadasPage></RutasAnidadasPage>}
      >
        <Route
          index
          element={<Navigate to="perfil/20" replace></Navigate>}
        ></Route>
        <Route path="perfil/:id" element={<PerfilPage></PerfilPage>}></Route>
        <Route
          path="configuracion"
          element={<ConfiguracionPage></ConfiguracionPage>}
        ></Route>
      </Route>
      <Route path="/apis" element={<ApisPage></ApisPage>}></Route>
      {/* </Route> */}
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </BrowserRouter>
);
