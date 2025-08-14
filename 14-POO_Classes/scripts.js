// MÉTODOS - propriedades que servem como função
// Ações do objeto
// Invoca-se os métodos da mesma maneira que funções

// Normalmente os métodos interagem com os objetos
// Até mudando os valores das suas propriedades para corresponder
// a lógica do programa desenvolvido

const cachorro = {

    raca: "Vira-lata",

    uivar: function() {
        console.log("Auuuuuuuuuuuuu!");
    },
    
    latir: function() {
        console.log("Au Au Au!");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça do ual ual é " + this.raca;
    }

}

cachorro.latir();
cachorro.uivar();

console.log(cachorro.raca);

cachorro.setRaca("Pastor");
console.log(cachorro.raca);

console.log(cachorro.getRaca());

// PROTOTYPE **
// Um objeto fallback de outro objeto;
// Quando um objeto recebe uma requisição de uma propriedade que não tem,
// ela é procurada no prototype deste objeto;
// O prototype de um objeto criado do zero é o Object, que tem os métodos
// nativos da linguagem;

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos); //2

console.log(pessoaNova.hasOwnProperty("maos"));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa); //true

// CLASSES == prototype == molde de um objeto

let gato = {
    
    patas: 4,
    raca: "Criando para objeto",

    miar: function() {
        console.log("miaaaau!");
    }
}

let gatoViraLata = Object.create(gato);
gatoViraLata.miar();

// INSTANCIANDO CLASSES POR FUNÇÃO - CONSTRUTORA

function criarCachorro(raca, cor, patas) {

    let cachorro = Object.create({});
    
    cachorro.raca = raca;
    cachorro.cor = cor;
    cachorro.patas = patas;
    return cachorro
}

let doberman = criarCachorro("doberman", "caramelo", 4);
console.log(doberman);

// CLASSES - CONSTRUTOR NEW
// Instaciar classes com construtor new

function Cachorro(raca) {
    this.raca = raca;
}

let husky = new Cachorro("Husky");
console.log(husky);

// Classes: construtor com método
// - Além de propriedades, podemos criar a classe base já com métodos;
// - Basta definir ao prototype o método desejado;

function Cachorro(raca) {
    this.raca = raca;
}

Cachorro.prototype.uivar = function() {
    console.log('Auuuuuuuu');
}

let pug = new Cachorro('Pug');

console.log(pug.raca);
pug.uivar();

// Mais sobre classes
// - Não podemos adicionar propriedades na classe, só via prototype;
// - A classe só aceita métodos;

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;

// GETTER E SETTER
// - Get: serve para resgatar o valor de uma propriedade;
// - Set: serve para alterar o valor de uma propriedade;

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }

    get verRaca() {
        return 'A raça é ' + this.raca;
    }

    set novaRaca(value) {
        this.raca = value;
    }
}

let golden = new Cachorro('Pastor Alemão');
console.log(golden.verRaca);
golden.novaRaca = 'Golden';