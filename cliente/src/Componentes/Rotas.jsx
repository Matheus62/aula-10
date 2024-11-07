import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Paginas/Home";
import Menu from "./Menu";
import Cadastro from "../Paginas/Cadastro";
import Consulta from "../Paginas/Consulta";
import Erros from "../Paginas/Erros";

export default function Rotas()
{
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Consulta" element={<Consulta />} />
                <Route path="/Erros" element={<Erros />} />
            </Routes>
        </BrowserRouter>
    )
}