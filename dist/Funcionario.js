"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMatricula() {
        return this.matricula;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(valor) {
        if (valor > 0) {
            this.salario = valor;
        }
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map