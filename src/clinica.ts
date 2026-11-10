import { Animal } from "./animal";
import { Funcionario } from "./Funcionario";

export class Clinica {
    private animais: Animal[] = [];
    private funcionarios: Funcionario[] = [];

    constructor(private nome: string) {}

    cadastrarAnimal(a: Animal): void {
        this.animais.push(a);
    }

    contratarFuncionario(f: Funcionario): void {
        this.funcionarios.push(f);
    }
}