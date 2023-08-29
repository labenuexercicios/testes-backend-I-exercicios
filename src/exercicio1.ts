export function exercicio1(number: string): number | null{

    if( typeof(number) !== "string" ) {
        return null;
    }

    const numberNumber = parseFloat(number);

    return numberNumber;
}