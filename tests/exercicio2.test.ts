import {exercicio2} from "../src/exercicio2"

describe(" Exercicio 2", () => {

  test("Função que recebe uma data em formado americano e converte para formato BRL ", () => {
  
    const resultado = exercicio2("2023/12/05");
    expect(resultado).toEqual("05/12/2023")
  })
})