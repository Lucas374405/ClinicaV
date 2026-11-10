import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
    constructor(
        nome: string,
        matricula: string,
        salario: number,
        private agendamentosConfirmados: number
    ) {
        super(nome, matricula, salario);
    }

    agendarAtendimento(): void {
        this.agendamentosConfirmados++;
    }

    calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }
}
