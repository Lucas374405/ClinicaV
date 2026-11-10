"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.Funcionario {
    constructor(nome, matricula, salario, agendamentosConfirmados) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = agendamentosConfirmados;
    }
    agendarAtendimento() {
        this.agendamentosConfirmados++;
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 10;
    }
}
exports.Recepcionista = Recepcionista;
//# sourceMappingURL=Recepcionista.js.map