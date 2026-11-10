import { Animal } from "./animal";
import { Veterinario } from "./veterinario";
export declare class Consulta {
    private animal;
    private veterinario;
    private data;
    constructor(animal: Animal, veterinario: Veterinario, data: Date);
    getAnimal(): Animal;
    getVeterinario(): Veterinario;
    getData(): Date;
    setData(data: Date): void;
    registrar(): void;
}
//# sourceMappingURL=consulta.d.ts.map