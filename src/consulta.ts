import { Animal } from "./animal";
import { Veterinario } from "./veterinario";

export class Consulta {
    constructor(
        private animal: Animal,
        private veterinario: Veterinario,
        private data: Date
    ) {}

    getAnimal(): Animal {
        return this.animal;
    }

    getVeterinario(): Veterinario {
        return this.veterinario;
    }

    getData(): Date {
        return this.data;
    }

    setData(data: Date): void {
        this.data = data;
    }

    registrar(): void {
        this.veterinario.realizarConsulta();
    }
}
