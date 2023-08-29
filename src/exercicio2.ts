export function exercicio2(dataNoFormatoAAAA_MM_DD: string): string | null {

    const partes = dataNoFormatoAAAA_MM_DD.split("/");

    if (partes.length === 3) {

        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];

        return dia + "/" + mes + "/" + ano;
    } else {
        return null;
    }
}