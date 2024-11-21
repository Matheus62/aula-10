import {useState} from 'react';
import axios from 'axios';

export default function Cadastro()
{
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [resultado, setResultado] = useState(null);
    
    async function cadastrarAluno(e)
    {
        try
        {
          await axios.post('http://localhest:3001/alunos', {nome, cidade, estado});
        
          setResultado("aluno " + nome + " cadastrado com sucesso!");
          setNome("");
          setCidade("");
          setEstado("");
        
        }
        catch (error)
        {
          setResultado(error); 
        }
    }

    return (
        <div>
            <form>
                <h3>Cadastro de Alunos</h3>

                <p>
                    
                </p>
            </form>
        </div>
    )
}