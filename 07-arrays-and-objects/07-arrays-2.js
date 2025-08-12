// ARRAY - add um conjunto de valores à uma variavel

let lista1 = ["William", true, 6, 7];

console.log(lista1[0]);
console.log(lista1[1]);
console.log(lista1[2]);
console.log(lista1[lista1.length - 1]); // método lenght -1 imprimi último item do array

// Propriedades - LENGHT

let nome = "Joao Carlos";

console.log(nome.length); // conta string

// 

let listaNumeros = [1, 23, 34, 40, 5, 7, 9,]; // -> 7 elementos

//conta elementos array -> 7
console.log(listaNumeros.length); // assim...
console.log(listaNumeros["length"]); // ou assim...

// MÉTODOS - são propriedades que funcionam como funções
// Strings e arrays contêm métodos
// string.propriedade
// string.metodo()

let personagem = "Harry Potter";

console.log(personagem.toUpperCase());
console.log(personagem.toLowerCase());
console.log(typeof personagem.toLowerCase())

// OBJETO - deletando e adding elementos ao longo do programa
// [] = array
// {} = objeto

let pessoa = {
    nome: "Emmar Watson",
    idade: 30,
    profissao: "Estagiário de IA"
}
console.log(pessoa.nome);

delete pessoa.nome;
console.log(pessoa.nome);

pessoa.casado = true;
console.log(pessoa); // -> {idade: 30, profissao: 'Estagiário de IA', casado: true}

// MÉTODOS ASSIGN -> Copia as propriedades de um objeto para o outro

let carro = {
    portas: 1,
    porta_malas: "200l",
    motor: 2.0
}
console.log(carro);

let adicionais = {
    teto_solar: true,
    ar_condicionado: false
}

Object.assign(carro, adicionais);
console.log(carro); // {portas: 1, porta_malas: '200l', motor: 2, teto_solar: true, ar_condicionado: false}