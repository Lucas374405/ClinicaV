import { Animal } from "./animal";

export class Cachorro extends Animal {
    constructor(
        nome: string,
        idade: number,
        tutor: string,
        private precisaPasseio: boolean
    ) {
        super(nome, idade, tutor);
    }

    emitirSom(): void {
        console.log("Au");
    }

    descreverCuidados(): string {
        return "Precisa de passeio diário.";
    }
}
