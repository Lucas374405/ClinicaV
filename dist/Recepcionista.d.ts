import { Funcionario } from "./Funcionario";
export declare class Recepcionista extends Funcionario {
    private agendamentosConfirmados;
    constructor(nome: string, matricula: string, salario: number, agendamentosConfirmados: number);
    agendarAtendimento(): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map