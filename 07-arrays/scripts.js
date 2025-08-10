//ARRAYS / LISTAS
// [] -> BRACKETS
// {} -> CURLY BRACES

let friends = ["William", "Janinha", "Mamaezinha", "Carlinhos"];
console.log(friends);

friends[3] = "Duquesa";
console.log(friends);

console.log(friends[3]);

console.log("\n")

//
const listaNumeros = [1, 3, 6, 9, 12];
console.log(listaNumeros);

console.log("\n")

listaNumeros.push(15); // Add an element to the end
console.log(listaNumeros);

console.log("\n")

listaNumeros.unshift(2, 3, 5); // Add elements to the beginning 
console.log(listaNumeros);

console.log("\n")

listaNumeros.pop(); // Remove the last element
console.log(listaNumeros);

console.log("\n")

listaNumeros2 = [1, 3, 6, 9, 12];

console.log(listaNumeros2.indexOf(9)); // Printa index de um elemento -> 9 na posicao 3

console.log("\n")

// ARRAY DE REFERÊNCIA
const movies = [
    {id: 1, movieName: "Harry Potter"},
    {id: 2, movieName: "Star Wars"},
    {id: 3, movieName: "The Wheel Of Time"}
];

console.log(movies.find(function(movies) {
    return movies.movieName == "Star Wars"
}));

console.log("\n")

// ARROW FUNCTION --> Aponta para o elemento buscado
// retorna o filme com o nome "The Wheel Of Time" dentro do array.
const movies2 = [
    {id: 1, movieName: "Harry Potter"},
    {id: 2, movieName: "Star Wars"},
    {id: 3, movieName: "The Wheel Of Time"}
];

console.log(movies2.find(movies2 => movies2.movieName == "The Wheel Of Time"));

// REMOVENDO ELEMENTOS POR INDEX

listaNumeros.splice(2, 0, 20, 22, 24); // [2, 3, 20, 22, 24, 5, 1, 3, 6, 9, 12]
console.log(listaNumeros);

listaNumeros.splice(2, 3, 20, 22, 24, 26); // [2, 3, 20, 22, 24, 5, 1, 3, 6, 9, 12] -> delete index 2, 3 elements, and add new elements
console.log(listaNumeros);

console.log("\n")

const numeros = [20, 30, 40, 50, 60]; // index 0, 1, 2, 3, 4
console.log(numeros); // [20, 30, 40, 50, 60]

const numerosFinais = numeros.splice(1, 2) // (comeca no index 1, delete 2 elements)
console.log(numerosFinais); // [30, 40]

console.log(numeros); // [20, 50, 60] -> Remaining elements after splice
console.log(numerosFinais); // [30, 40]

console.log("\n")

// ESVAZIANDO ARRAY
//forma 1

let listaPersonagens = ["Harry", "Hermione", "Rony, Draco"];
console.log(listaPersonagens); // ["Harry", "Hermione", "Rony, Draco"]

listaPersonagens.length = 0;
console.log(listaPersonagens);

// forma 2
listaClasses = ["Econômico", "Executivo", "Primeira Classe"];
console.log(listaClasses); // ["Econômico", "Executivo", "Primeira Classe"]

listaClasses = [];
console.log(listaClasses); // []

// forma 3
let listaObjetos = ["Pente", "Escova", "Sabonete"];
console.log(listaObjetos); // ["Pente", "Escova", "Sabonete"]

listaObjetos.splice(0, listaNumeros.length)
console.log(listaObjetos); // [] -> Esvaziou o array

// Concatenando Arrays

listaLegumes1 = ["Cenoura", "Batata", "Beterraba"];
listaLegumes2 = ["Abobrinha", "Brócolis", "Couve-flor"];

juntandoLegumes = listaLegumes1.concat(listaLegumes2);
console.log(juntandoLegumes); 


separandoLegumes = juntandoLegumes.slice(2, 5) // a partir do 2 antes do 5 
console.log(separandoLegumes); // ['Beterraba', 'Abobrinha', 'Brócolis']

console.log("\n")

// ADD elementos na array com JOIN - converte para string

let clientes = ["João", "Maria", "José"];
console.log(clientes);

let clientesJoin = clientes.join(", ");
console.log(clientesJoin); // "João, Maria, José"

console.log("\n")

// ORGANIZANDO ARRAY - sort

let countries = ["Brazil", "Argentina", "Chile", "United States", "Canada"];
console.log(countries);
countries.sort()

console.log(countries); // ['Argentina', 'Brazil', 'Canada', 'Chile', 'United States']

console.log("\n")

// VERIFICAR TODOS ITENS DE UMA ARRY - RETORNA TRUE/FALSE

const tempLondon = [-5, 18, 13, 8, 2, 6];

const tempPositiva = tempLondon.every(function (value) {
    if (value >= 0) {
        return value >= 0;
    }
})

console.log(tempPositiva); // false -> porque tem valores negativos

// USANDO FILTER - VERIFICANDO ARRAY

const saldo = [1500, 6000, 1850, 3200, 4500, -5000];

const checaSaldo = saldo.filter(saldo => saldo >= 0); // retornar só os positivos

console.log(checaSaldo);
