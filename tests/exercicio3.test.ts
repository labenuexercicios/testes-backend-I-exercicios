import {users} from '../src/exercicio3'

describe("Exercício 3", () => {

    test("Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.", () => {
            expect(users).toContain("Astrodev")
    })
})