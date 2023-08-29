import { exercicio3, listaDeUsuarios } from "../src/exercicio3"

describe("Testes exercício 3", () => {
    test("Deve retornar true se Atrodev estiver na lista de usuários", () => {
        expect(exercicio3(listaDeUsuarios)).toBeTruthy;
    })
})