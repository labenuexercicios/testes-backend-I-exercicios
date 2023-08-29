import { exercicio1 } from '../src/exercicio1'

describe('Teste exercício 1', () => {
    test('Deve retornar null se não for string', () => {
        expect(exercicio1(10 as any)).toBeNull();
    })
    test('Deve retornar um number ao enviar string', () => {
        expect(exercicio1("10")).toBe(10);
    })
})