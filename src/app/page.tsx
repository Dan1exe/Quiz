'use client'
import { useState } from "react";
import { questoes } from "./data/questoes";
import { QuestaoItem } from "./components/QuestaoItem";

const Page = () => {
  // mudei o nome das variaveis e arquivos para PT-BR para ficar mais facil de entender
  const [atualQuestao, setAtualQuestao] = useState(0);
  const titulo = "Quiz de Culinária 🍝"
 
  const lideComRespondido = (resposta: number) =>{}

  return (
    <div className="w-full h-screen flex justify-center items-center bg-green-300">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold font-mono text-2xl border-b border-grey-200">{titulo}</div>
        <div className="p-5">
          <QuestaoItem
            questao={questoes[atualQuestao]}
            contagem={atualQuestao + 1}
            respondido={lideComRespondido}
          />
        </div>
        <div className="p-5 font-bold font-mono text-center border-t border-gray-200">
          {atualQuestao + 1} de {questoes.length} pergunta{questoes.length === 1 ? '' : 's'}
        </div>
      </div>
    </div>

  );

}

export default Page;