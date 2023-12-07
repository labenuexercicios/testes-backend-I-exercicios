interface User {
    name: string,
    age: number,
    member: boolean
}

export const exercicio3 = (str: string): boolean => {
    const lista: User[] = [
        { name: 'Astrodev', age: 30, member: true },
        { name: 'Anderson', age: 35, member: false },
        { name: 'Marcela', age: 30, member: true }
    ]

    const containsString = lista
      .some(item => (
          item.name.toLocaleLowerCase() === str.toLocaleLowerCase()
      ))
 
    return containsString
}

