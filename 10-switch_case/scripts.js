// Use switch quando há múltiplas comparações de valor para a mesma variável.
// Ideal para evitar vários if...else if encadeados.
// Funciona melhor com valores fixos (números, strings).
// Útil para menus, comandos ou status com várias opções.
// Não é indicado para comparações com operadores lógicos (>, <, etc.).
// Deixa o código mais limpo e organizado quando há muitos casos simples'.

let airport = "GRU";

switch (airport) {
    case "MCO":
        console.log("Orlando");
        break;
    case "JFK":
        console.log("John F. Kennedy");
        break;
    case "SEA":
        console.log("Seattle");
        break;
    default:
        console.log("Unknown airport");
}