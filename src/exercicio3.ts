interface Usuario {
    nome: string;
    idade: number,
    email: string;
}

export const listaDeUsuarios: Usuario[] = [
    {
        nome: "Astrodev",
        idade: 30,
        email: "astrodev@example.com",
    },
    {
        nome: "João",
        idade: 25,
        email: "joao@example.com",
    },
    {
        nome: "Maria",
        idade: 28,
        email: "maria@example.com",
    },
];

export function exercicio3(usuarios: Usuario[]): boolean {
    const astrodev = usuarios.find((usuario) => usuario.nome === "Astrodev");
    return astrodev !== undefined;
}
