"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const Funcionario_1 = require("./Funcionario");
class Veterinario extends Funcionario_1.Funcionario {
    constructor(nome, matricula, salario, consultasRealizadas) {
        super(nome, matricula, salario);
        this.consultasRealizadas = consultasRealizadas;
    }
    realizarConsulta() {
        this.consultasRealizadas++;
    }
    prescreverTratamento() {
        console.log("Tratamento prescrito!");
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
}
exports.Veterinario = Veterinario;
//# sourceMappingURL=veterinario.js.map