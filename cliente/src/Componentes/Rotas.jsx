import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Paginas/Home";
import Menu from "./Menu";
import Cadastro from "../Paginas/Cadastro";
import Consulta from "../Paginas/Consulta";
import Alteracao from "../Paginas/Alteracao";
import Exclusao from "../Paginas/Exclusao";
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
                <Route path="/altercao/:codigo" element={<Alteracao />} />
                <Route path="/exclusao/:codigo" element={<Exclusao />} />
                <Route path="*" element={<Erros />} />
            </Routes>
        </BrowserRouter>
    )
}