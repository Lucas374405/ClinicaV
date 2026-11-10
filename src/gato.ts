import { Animal } from "./animal";

export class Gato extends Animal {
    constructor(
        nome: string,
        idade: number,
        tutor: string,
        private precisaArranhador: boolean
    ) {
        super(nome, idade, tutor);
    }

    emitirSom(): void {
        console.log("Gato miando");
    }

    descreverCuidados(): string {
        return "Precisa de arranhador.";
    }
}
