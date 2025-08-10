// FOR LOOP
// for (var; condicao; incremento) {
//      statement
// }

for (i = 0; i <= 10; i++) {
    console.log("Rodando for " + i)
}

console.log("\n");

for (laco = 0; laco <= 10; laco++) { //prefira ++
    console.log("Rodando for exemplo 2 " + laco)
};

console.log("\n");

// WHILE LOOP

i = 0;
while (i <= 10) {
    console.log("Rodando while " + i);
    i++;
}

console.log("\n");

// DO WHILE 
i = 0;
do {
    console.log("Rodando do while " + i);
    i++;
} while (i <= 10);

console.log("\n");

// FOR IN LOOP  - listar todas as propriedades de um objeto

const meuCarro = {
    Ano: 2023,
    km: 10000,
    modelo: "BMW"
};

for (let propriedades in meuCarro) {
    console.log(propriedades, meuCarro[propriedades]);
};

console.log("\n");

// FOR OF - iterar arrays
const fruits = ["Banana", "Apple", "Orange"];

for (let lista of fruits) {
    console.log(lista)
};

console.log("\n");

// ADDING BREAK INTO LOOP
for (let i = 0; i < 10; i++) {
    
    if (i == 8) break; // interrompe loop
    console.log(i)     
}
