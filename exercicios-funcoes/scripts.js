// 16) Função que retorno Hello World no console

function imprimirSaudacao() {
    console.log("Hello World!")
} 

imprimirSaudacao();

console.log("\n")

// 17) Escreva uma função que receba um parâmetro idade;
// Imprima essa msg com template literals

function apontarIdade(idade) {
    console.log(`Você tem ${idade} anos`)
} 
apontarIdade(18);

console.log("\n")

// 18) Função que some dois números e retorne eles
// Imprima este retorno

function soma(a, b) {
    return a + b;
}
console.log(soma(10, 300));

console.log("\n")

// 19) Função que retorne um número aleatório
// O número máximo retornado deve ser passado via parâmetro;
// Dica: utilize Math.random();

function imprimeAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}
imprimeAleatorio(10);
imprimeAleatorio(50);
imprimeAleatorio(1000);
    
// 20)

function idadeMotorista(idadeCNH) {
    if (idadeCNH >= 18) {
        console.log(`Idade ${idadeCNH} - Você pode dirigir!`);
    } 
    else {  
        console.log(`Idade ${idadeCNH} - Você não pode dirigir!`);
    }
}

idadeMotorista(10); // não pode dirigir
idadeMotorista(36); // pode dirigir

console.log("\n")

// 21) Função que detecta tipo de dado passado
// VErifique se é um: number, boolean ou string

function verificaDado(dado) {
    a = typeof(dado);
    console.log(a)
}
verificaDado(true);
verificaDado(3);
verificaDado("Helloooooooooo");

console.log("\n")

// 21 - solução 2

function verificaTipoDeDado2(dado2) {
    if (typeof dado2 === 'string') {
        console.log("Este dado é uma string");
    } else if (typeof dado2 === 'number') {
        console.log("Este dado é um number");
    } else if (typeof dado2 === 'boolean') {
        console.log("Este dado é um boolean");
    }
}

verificaTipoDeDado2(true);
verificaTipoDeDado2(23);
verificaTipoDeDado2("teste");

console.log("\n")