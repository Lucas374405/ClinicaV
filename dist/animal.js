"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (idade >= 0) {
            this.idade = idade;
        }
    }
    getTutor() {
        return this.tutor;
    }
    setTutor(tutor) {
        this.tutor = tutor;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map