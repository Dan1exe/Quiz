

import { useState } from "react";
import { Questao } from "../types/Questao";


// Componente referente aos itens das questões. Basicamente aqui que fazemos toda a dinamicidade referente aos itens
type Props = {
    questao: Questao;
    contagem: number;
    respondido: (resposta: number) => void;

}
export const QuestaoItem = ({ questao, contagem, respondido }: Props) => {
    const [respSelecionada, setRespSelecionada] = useState<number | null>(null);

    const verifiqueQuestao =(chave: number) =>{
        if(respSelecionada === null){
            setRespSelecionada(chave);
            respondido(chave);
        }
    }
    
    return (
        <div>
            <div className="text-3xl font-bold mb-5">{contagem}. {questao.questao}</div>
            <div>
                {questao.opcoes.map((item, chave)=>(
                    <div key={chave}
                    onClick={() => verifiqueQuestao(chave)}
                    className={`border px-3 py-2  rounded-md text-lg mb-4 bg-blue-100 border-blue-300 
                        
                        ${respSelecionada !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                        // resposta diferente de nulo    é igual a resposta que eu disse ser correta   e é igaul a resposta desse loop  (Importante se for verificar depois o gabarito)             
                        ${respSelecionada !== null && respSelecionada === questao.resposta && respSelecionada === chave && 'bg-green-100 border-yellow-500'}
                        // resposta diferente de nulo    não é igual a resposta que eu disse ser correta   e é igaul a resposta desse loop  (Importante se for verificar depois o gabarito iriamos ver qual foi resposta errada)
                        ${respSelecionada !== null && respSelecionada !== questao.resposta && respSelecionada === chave && 'bg-red-100 border-red-300'}

                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}