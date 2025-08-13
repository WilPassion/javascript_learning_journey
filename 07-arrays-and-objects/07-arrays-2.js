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

// Exemplos 02

let objetoA = {
    prop1: " teste",
    prop2: " testando..."
}


let objetoB = {
    prop3: " nova propriedade"
}

Object.assign(objetoA, objetoB);
console.log(objetoA);

Object.assign(objetoB, objetoA); //{prop1: ' teste', prop2: ' testando...', prop3: ' nova propriedade'}
console.log(objetoA); // mesmo resultado

// CHAVES DE UM OBJETO - 
// "chave": 1 (valor -> 1)
// retorna um array com todas as chaves (nomes das propriedades) do objeto.
// quando precisa listar, iterar ou manipular apenas as chaves de um objeto.

let obj = {
    chave1: "testando chaves",
    chave2: 2,
    chave3: true
}

console.log(obj);
console.log(Object.keys(obj));

/*Resultado:
(3) ['chave1', 'chave2', 'chave3']
0: "chave1"
1: "chave2"
2 : "chave3"
length: 3*/ 

// MUTAÇÃO - MUTABILITY
/*Esse código mostra que objetos em JavaScript são mutáveis e atribuídos por referência, não por cópia.

objetoMutacao2 e objetoMutacao apontam para o mesmo espaço de memória, então mudar um muda o outro.*/

let objetoMutacao = {
    nomeObjeto: "caneta"
}

console.log(objetoMutacao.nomeObjeto); //caneta
console.log(objetoMutacao); //{nomeObjeto: 'caneta'}

let objetoMutacao2 = objetoMutacao;

let objetoMutacao3 = {
    nomeObjeto: "sofa"
}

console.log(objetoMutacao == objetoMutacao2); //true
console.log(objetoMutacao3 == objetoMutacao); //false
console.log(objetoMutacao3 == objetoMutacao2); //false

objetoMutacao.nomeObjeto = "Pedro";

console.log(objetoMutacao.nomeObjeto);

console.log("\n");

//LOOP EM ARRAYS - qdo necessário verificar vários valores em um array:
/* Usabilidade: verificar estoque 
Exibir lista de produtos em um site
Processar respostas de um formulário
Buscar dados de usuários em um sistema
Gerar relatórios (Somar vendas, calcular médias ou extrair estatísticas a partir de uma lista de registros.)
Trabalhar com APIs (Ao receber um array de objetos de uma API (ex.: lista de posts, comentários, filmes), você percorre para exibir ou transformar os dados.)
*/

let numerosPercorreArray = [0, 1, 2, 3, 4, 5, 6, 20 , 25, 50];

for (let i = 0; i < numerosPercorreArray.length; i++) {   //< numerosPercorreArray.length -> qdade de elementos
    console.log(numerosPercorreArray[i]); //percorre o indice de cada elemento
}

let frutasPercorreArray = ["laraja, maça, kiwi"];

for (let i = 0; i < frutasPercorreArray.length; i++) {
    console.log(frutasPercorreArray[i]); //percorre o indice de cada elemento
}

// SHIFT / UNSHIFT - remove primeiro elemento

let carroShift = ["Celta", "NewBeattle", "Ferrari"];

let removePrimeiroCarro = carroShift.shift();

console.log(carroShift); //['NewBeattle', 'Ferrari']

// indexOf - procura do início para o fim e retorna o primeiro índice onde o valor aparece.
// lastIndexOf -  procura do fim para o início e retorna o último índice onde o valor aparece.
// RETORNAM A POSIÇÃO DO ELEMENTOS APONTADO NOS ()
let numerosIndexOf = [0, 1, 2, 5]

console.log(numerosIndexOf.indexOf(3)); // -1  → não encontrou o valor 3
console.log(numerosIndexOf.lastIndexOf(1));  // 1   → encontrou o 1 na posição 1
console.log(numerosIndexOf.lastIndexOf(0)); // 0   → encontrou o 0 na posição 0
console.log(numerosIndexOf.lastIndexOf(2)); // 2   → encontrou o 2 na posição 2

console.log("\n");

// MÉTODO SLICE - retorna o array a partir do outro
// verifica pelo índice e retorna os elementos (de, ate)

let numSlice = [0, 1, 2, 3, 4, 5, 6];

console.log(numSlice.slice(2, 4)); //(de, ate) -> [2, 3]

console.log(numSlice.slice(3));  //(de, ate) -> [3, 4, 5, 6]

console.log(numSlice.slice(3, -2));  //(de, ate) -> [3, 4, 5, 6]

/* [0, 1, 2, 3, 4, 5, 6]
             ↑ índice 3
                    ↑ índice -2 (equivale ao índice 5) */


// forEach - itera cada elementos do array

let personagensMarvel = ["Thor", "Capitão América", "Viúva Negra"];

personagensMarvel.forEach(nomeMarvel => {
    console.log("O nome é " + nomeMarvel);
})

// MÉTODO INCLUDES - retorna true or false - elementos existe ou não no array

let personagensMarvel2 = ["Thor", "Capitão América", "Viúva Negra"];
console.log(personagensMarvel2.includes("Thor")); 
console.log(personagensMarvel2.includes("Homem de Ferro"));

// MÉTODO REVERSE - inverte array
// usando array acima como exemplo - personagensMarvel2

console.log(personagensMarvel2.reverse())

// MÉTODO TRIM - remove tudo que não é string
// serve também para pular linha == a espaço em branco

let texto = "    Will is learning JS    ";

console.log(texto);
console.log(texto.trim()); // printando + método incluso ou...

let textoCorrigido = texto.trim(); // ... atribuindo método à var

console.log(textoCorrigido);

// MÉTODO padStar - Inserir caracteres antes da String

let sku = "34";
console.log("30")

console.log(sku.padStart(3, "0")); // considera qtde caracteres da var -> 034
console.log(sku.padStart(5, "0")); // considera qtde caracteres da var -> 00034

// METODO SPLIT -> separa palavra com string delimitada:

let frase = "Will Aprende Javascript";
console.log(frase.split()); //['Will Aprende Javascript']

console.log(frase.split(" ")); //['Will', 'Aprende', 'Javascript'] - separa onde há " "

let frase2 = "Testando;Split;com;JS"
console.log(frase2.split(";")) // separa aonde ha ";"

// MÉTODO JOIN

let novaFrase = ["Testando", "método", "Join"];
console.log(novaFrase)

let words1 = novaFrase.join("@");
console.log(words1); //Testando@método@Join

let words2 = novaFrase.join(";");
console.log(words2); //Testando;método;Join
console.log(words2.split(";")) //separando nvoamente - ['Testando', 'método', 'Join']

// MÉTODO REPEAT -> repete string

let frutaRepeat = "O kiwi é verde \n";
console.log(frutaRepeat.repeat(5));

// REST OPERATOR
// Uma forma de uma função receber indefinidos parâmetros;
// O operador rest vai virar um array;
// O parâmetro é definido por: ...nome
// O ...args é o operador rest, que permite à função receber qualquer quantidade de argumentos como um array chamado args.
// Exemplo: se você passar 1, 2, 3, dentro da função args = [1, 2, 3]
let num1 = 1;
let num2 = 7;
let num3 = 15;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);   //i < args.length garante que o loop continue enquanto houver elementos.
    }
}

imprimirNumeros(num1, num2, num3);
console.log("\n");
imprimirNumeros(num2, num3);
console.log("\n");
imprimirNumeros(num2);
console.log("\n");
imprimirNumeros(2,3,4,5,7,8,9,10);

/* DESTRUCTURING com objetos
- Podemos definir variáveis com propriedades do objeto com uma
notação diferente, chamada destructuring; 
TRANSFORMA AS PROPRIEDADE DE UM OBJ EM VARIAVEIS */

const person = {
    name: 'Jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);