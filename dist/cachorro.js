"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
    constructor(nome, idade, tutor, precisaPasseio) {
        super(nome, idade, tutor);
        this.precisaPasseio = precisaPasseio;
    }
    emitirSom() {
        console.log("Au");
    }
    descreverCuidados() {
        return "Precisa de passeio diário.";
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=cachorro.js.map