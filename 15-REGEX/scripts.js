// REGEX - Encontrar padrões em uma string
// Exemplo: validar se só tem números
// são um tipo objeto -> New RegExp...
// utilizamos método teste();

const reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?")) //true
console.log(reg1.test("Não tem")) //false

console.log("\n");

// ou direto na var
const reg2 = /bola/;

console.log(reg2.test("Tem bola?")) //true

console.log("\n");
//
let text = "Tem bola na cesta";

console.log(reg2.test(text)); //true
//
let text2 = "Aqui não vai ter bol@";

console.log(reg2.test(text2)); //false

// ou direto no console.log
console.log(/quadrado/.test("Tem quadrado?")) //true
console.log(/quadrado/.test("Não vai ter qu@drado aqui!")) //false

console.log("\n");

// CONJUNTO CARACTERES - com intervalo --> /[0-9]/;

const reg3 = /[0-9]/;

console.log(reg3.test("Tem 9")) //true
console.log(reg3.test("Tem 90?")) //true
console.log(reg3.test("Tem ?")) //true

/* CARACTERES ESPECIAIS

\d - Qualquer dígito de caractere

\w - Um caractere alfanumérico (“teste”)

\s - Qualquer caractere de espaço em branco

\D - Caracteres que não são dígitos

\W - Caractere não-alfanumérico

\S - Caractere que não seja espaço em branco

. - Qualquer caractere, menos nova linha */ 

const dRegex = /\d/;
console.log(dRegex.test("asd")) true;