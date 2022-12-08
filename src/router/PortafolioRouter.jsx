import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Portafolio } from "../pages/Portafolio";

export const PortafolioRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="me" element={<Portafolio/>}/>

        <Route path="/*" element={<Navigate to={"/login"}/>}/>
    </Routes>
  )
}
