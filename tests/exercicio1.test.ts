
import {exercicio1} from "../src/exercicio1"

describe(" Exercicio 1", () => {

  test("Função que recebe um número em string e retorna em number", () => {
    
    const resultado = exercicio1("1");
    expect(resultado).toEqual(1)
  })
})