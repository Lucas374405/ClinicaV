"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
class Clinica {
    constructor(nome) {
        this.nome = nome;
        this.animais = [];
        this.funcionarios = [];
    }
    cadastrarAnimal(a) {
        this.animais.push(a);
    }
    contratarFuncionario(f) {
        this.funcionarios.push(f);
    }
}
exports.Clinica = Clinica;
//# sourceMappingURL=clinica.js.map