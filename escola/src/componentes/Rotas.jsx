import {BrowserRouter, Routes, Route, Router} from "react-router-dom";

import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";
import Consulta from "./paginas/consulta";
import Alteracao from "./paginas/alteracao";
import Exclusao from "./paginas/exclusao";
import Erro from "./paginas/erro";

export default function Rotas()
{
    return
    (
        <BrowserRouter>
            <Router>
                
              <Route path="/" element = {<Home />} />
              <Route path="/cadastro" element = {<Cadastro />} />
              <Route path="/consulta" element = {<Consulta />} />
              <Route path="/alteracao/:codigo" element = {<Alteracao />} />
              <Route path="/exclusao/:codigo" element = {<Exclusao />} />
              <Route path="*" element = {<Erro />} />
              
            </Router>
        </BrowserRouter>

    );
}