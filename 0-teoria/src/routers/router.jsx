import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { ErrorPage } from "../pages/404";

export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </BrowserRouter>
);
