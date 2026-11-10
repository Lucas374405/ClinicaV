"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const animal_1 = require("./animal");
class Ave extends animal_1.Animal {
    constructor(nome, idade, tutor, precisaGaiola) {
        super(nome, idade, tutor);
        this.precisaGaiola = precisaGaiola;
    }
    emitirSom() {
        console.log("Cacatua");
    }
    descreverCuidados() {
        return "Precisa de gaiola.";
    }
}
exports.Ave = Ave;
//# sourceMappingURL=ave.js.map