export abstract class Funcionario {
    constructor(
        private nome: string,
        private matricula: string,
        private salario: number
    ) {}

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getMatricula(): string {
        return this.matricula;
    }

    getSalario(): number {
        return this.salario;
    }

    setSalario(valor: number): void {
        if (valor > 0) {
            this.salario = valor;
        }
    }

    abstract calcularBonus(): number;
}
