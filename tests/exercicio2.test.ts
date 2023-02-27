import {exercicio2} from "../src/exercicio2"

describe("Exercício 2", () => {

    test(" recebe uma data no formato aaaa/mm/dd e retorna outra string no formato dd/mm/aaaa Exemplo: a entrada 2022/09/26, gera a saída 26/09/2022", () => {
        const result = exercicio2("2018/08/16")
            expect(result).toEqual("16/08/2018")
    })
})