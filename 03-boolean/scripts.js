console.log(typeof true);
console.log(false);
console.log(10 > 2);
console.log(5 < 2);
console.log(1 < 2);

// COMPARAÇÃO:
// >  Maior que

// <  Menor que

// >= Maior ou igual

// <= Menor ou igual

// == Igual

// != Diferente

// === Idêntico: compara tanto valor quanto tipo (sem conversão)
// Exemplo: "5" === 5  // false

console.log("pula");

console.log(5 == 2);
console.log("Matheus" != "William");
console.log(3 == "3");
console.log(4 == 4);

// Booleans: operadores lógicos

// && - and -> para ser true, os dois ‘lados’ da comparação precisam ser true

// || - or -> para ser true, basta um dos ‘lados’ da comparação ser true

// ! - not -> inverter os valores (true vira false);

console.log("pula \n");

console.log(5 > 3 && 3 == 2);
console.log(5 > 3 || 3 == 3);

console.log(3 == 3 && "Matheus" == "Matheus");

console.log("William" == "Potter" || false);
console.log("William" == "Potter" || true);

console.log("William" == "William" || false); // retorna true se pelo menos um dos lados for true
console.log("William" == "William" || true);

console.log(true && true);
console.log(false || false);

console.log(!(!(true && true)));