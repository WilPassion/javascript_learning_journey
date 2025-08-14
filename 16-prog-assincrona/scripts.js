// PROGRAMAÇÃO ASSÍNCRONA - Funções/ações acontecem em pararelo, não mais "em fila"

// CALLBACKS -> é uma função que realiza uma ação após algum acontecimento.
// usada com função setTimeout:


//Execução EM TEMPO FUTURO-> 2000 == 2 segundos

console.log("1"); //exec antes

setInterval(function() {
    console.log("5") //executa...
}, 2000); //... após 2s

console.log("5"); //exec antes 

console.log("\n")

// PROMISES - guardam um valor que poderá ser utilizado ao longo do código
// Promessa de uso

//resolve é o método que resolve uma Promise 
//then == o que faz a execução em tempo futuro

let p = Promise.resolve(5);

console.log("Outros códigos"); //exec primeiro

console.log(p); // 5

p.then((value) => {
    console.log(`O valor é ${value}`);
});