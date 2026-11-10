export abstract class Animal {
    constructor(
        private nome: string,
        private idade: number,
        private tutor: string
    ) {}

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getIdade(): number {
        return this.idade;
    }

    setIdade(idade: number): void {
        if (idade >= 0) {
            this.idade = idade;
        }
    }

    getTutor(): string {
        return this.tutor;
    }

    setTutor(tutor: string): void {
        this.tutor = tutor;
    }

    abstract emitirSom(): void;
    abstract descreverCuidados(): string;
}
