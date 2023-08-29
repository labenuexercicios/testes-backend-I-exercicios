import { exercicio2 } from '../src/exercicio2'

describe("Teste exercício 2", () => {
    test("Deve retornar DD_MM_AAAA ao enviar AAAA_MM_DD" , () => {
        expect(exercicio2("2022/09/26")).toBe("26/09/2022")
    });
})