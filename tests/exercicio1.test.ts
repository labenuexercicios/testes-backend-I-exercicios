import {exercicio1} from "../src/exercicio1"

describe("Exercício 1", () => {

    test("Receber um número no formato string e retorna o mesmo número, porém no formato number, exemplo: a entrada 50(string) gera a saída 50(number)", () => {
        const result = exercicio1("50")
            expect(result).toBe(50)
    })
})