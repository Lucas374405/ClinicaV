import { Cachorro } from "./cachorro";
import { Gato } from "./gato";
import { Ave } from "./ave";
import { Veterinario } from "./veterinario";
import { Recepcionista } from "./Recepcionista";
import { Consulta } from "./consulta";
import { Clinica } from "./clinica";

const cachorro = new Cachorro("Simba", 3, "Carlos", true);
const gato = new Gato("Gato Branco", 2, "João", true);
const ave = new Ave("paroxítona", 1, "Lucas", true);

console.log(cachorro.getNome());

cachorro.setNome("T");
console.log(cachorro.getNome());

cachorro.emitirSom();
gato.emitirSom();
ave.emitirSom();

const veterinario = new Veterinario("Pedro", "V01", 3000, 5);
const recepcionista = new Recepcionista("Maria", "R01", 2000, 10);

console.log(veterinario.getSalario());

veterinario.setSalario(4000);

console.log(veterinario.getSalario());

console.log("Bônus veterinário:", veterinario.calcularBonus());
console.log("Bônus recepcionista:", recepcionista.calcularBonus());

const consulta = new Consulta(cachorro, veterinario, new Date());

consulta.registrar();

const clinica = new Clinica("Clínica Gato Branco");

clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);

clinica.contratarFuncionario(veterinario);
clinica.contratarFuncionario(recepcionista);

console.log("Feito!");
