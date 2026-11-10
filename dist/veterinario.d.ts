import { Funcionario } from "./Funcionario";
export declare class Veterinario extends Funcionario {
    private consultasRealizadas;
    constructor(nome: string, matricula: string, salario: number, consultasRealizadas: number);
    realizarConsulta(): void;
    prescreverTratamento(): void;
    calcularBonus(): number;
}
//# sourceMappingURL=veterinario.d.ts.map