// armazenda as perguntas e recebe o type de Questao.ts 

import { Questao } from "../types/Questao";

export const questoes: Questao[] = [ // array de perguntas - precisa de type para cada item do array
    {
        questao: "Qual igrediente não pode faltar?",
        opcoes:[ // aqui temos um array dentro de outro array
            'Farinha',
            'Corante',
            'Água',
            'Açucar'
        ],
        resposta: 1
    }
];