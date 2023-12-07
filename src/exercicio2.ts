export const exercicio2 = (dataInput: string): string => {
    return new Date(dataInput.replace("/", "-")).toLocaleDateString()
}