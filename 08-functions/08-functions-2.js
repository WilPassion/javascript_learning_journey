// 
function imprimirNoConsole() {
    console.log("Hello World!")
}

imprimirNoConsole();

// com parâmetros

function imprimirNumero(num) {
    console.log(num);
}

imprimirNumero(0);
imprimirNumero(1);
imprimirNumero(2);
imprimirNumero(3);

// atribuindo function à var
const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();

// 
function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(10, 2, 5));

//
function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir")
    }
    else {
        console.log("Não pode dirigir!")
    }
}

podeDirigir(20, true);
podeDirigir(17, true);
podeDirigir(30, 1);

// ESCOPO - Escopo global não interfere nos demais escopos:

let x = 10; // escopo global - 10

if(x > 5) {
    let x = 20
    console.log(x); // escopo if - 20
}

console.log(x); // escopo global - 10

console.log("\n");

// ARROW FUNCTION:

let parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Número par")
    }
    else {
        
        console.log("Número ímpar!")
    }
} 

parOuImpar(10);
parOuImpar(3);

// VALOR DEFAULT - CASO O USER NÃO PASSE O ARGUMENTO exp=2

function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log(potencia(2)); // default -> 2 = 4
console.log(potencia(2, 2));
console.log(potencia(5, 2));

console.log("\n");

// RECURSION - Uma função que pode "se chamar" novamente

function retornaNumeroPar(n) {
    if(n % 2 ==0 ){
        console.log("n agora é par: " + n)
    }
    else {
        console.log(n); 
        retornaNumeroPar(n - 1); // recurs]ap
        }
    }

retornaNumeroPar(5);