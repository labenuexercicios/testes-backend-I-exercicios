import {exercicio3} from "../src/exercicio3"

describe("Exercicio 3", () => {

  test("Função que recebe uma string com o nome Astrodev e verificar se este está contido na lista", () => {
  
    const resultado = exercicio3("astrodev");
    expect(resultado).toBeTruthy()
  })
})
