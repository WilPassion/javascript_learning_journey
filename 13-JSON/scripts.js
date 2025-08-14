// JSON = JavaScript Object Notation
// Utilizado para comunicação entre serviços, ex: back end <-> front end
// Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript
// Não aceita comentários

let pessoa = {
    "name": "Matheus",
    "age": 29,
    "position": "Developer",
    "languages": ["PHP", "JavaScript", "Python"]
}

// JSON para String
// Podemos converter o JSON para uma string de forma fácil;
// Ou também uma string para JSON;

const car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
};

let jsonToString = JSON.stringify(car);

console.log(jsonToString);
