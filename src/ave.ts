import { Animal } from "./animal";

export class Ave extends Animal {
    constructor(
        nome: string,
        idade: number,
        tutor: string,
        private precisaGaiola: boolean
    ) {
        super(nome, idade, tutor);
    }

    emitirSom(): void {
        console.log("Cacatua");
    }

    descreverCuidados(): string {
        return "Precisa de gaiola.";
    }
}
