"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    getAnimal() {
        return this.animal;
    }
    getVeterinario() {
        return this.veterinario;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    registrar() {
        this.veterinario.realizarConsulta();
    }
}
exports.Consulta = Consulta;
//# sourceMappingURL=consulta.js.map