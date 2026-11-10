"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.Animal {
    constructor(nome, idade, tutor, precisaArranhador) {
        super(nome, idade, tutor);
        this.precisaArranhador = precisaArranhador;
    }
    emitirSom() {
        console.log("Gato miando");
    }
    descreverCuidados() {
        return "Precisa de arranhador.";
    }
}
exports.Gato = Gato;
//# sourceMappingURL=gato.js.map