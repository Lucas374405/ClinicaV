import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
    constructor(
        nome: string,
        matricula: string,
        salario: number,
        private consultasRealizadas: number
    ) {
        super(nome, matricula, salario);
    }

    realizarConsulta(): void {
        this.consultasRealizadas++;
    }

    prescreverTratamento(): void {
        console.log("Tratamento prescrito!");
    }

    calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
}
