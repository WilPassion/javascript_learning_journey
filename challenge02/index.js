// CREATING OBJECT - MARKETPLACE
let productValue = Number(prompt("Digite o valor do produto: "));

if (productValue >= 20) {
    document.getElementById("resultado").innerHTML = "Aprovado!";
} 
else {
    document.getElementById("resultado").innerHTML = "Negado";

};


// This code creates a product object with properties and checks its price before listing it for sale.
// const createProduct = (code, price, title) => {
//    const product = {
//        productCode: code,
//        productPrice: price,
//        productTitle: title
//    };
//    return product;
//};

//let product1 = createProduct("P001", 29.99, "Wireless Mouse");

//if (product1.productPrice >= 20) {
//    console.log("You can't list this product for sale!");
//} else {
//    console.log(`Product ${product1.productTitle} is ready for sale`);
//}
