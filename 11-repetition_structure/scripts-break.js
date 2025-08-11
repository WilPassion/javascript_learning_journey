// ADDING BREAK INTO LOOP
for (let i = 0; i < 10; i++) {
    
    if (i == 8) { // interrompe loop
    console.log(i)
    break;
    }     
}

console.log("\n");

//

for(let y = 0; y < 10; y++) {
    
    if (y < 10) {
        console. log(`y menor que 10 ---> ${y}`)        
    }

    else {
        console.log(`y = 10 ---> ${y}`)
    }
    console.log(y);
}

console.log("\n");

//

for(a = 0; a < 10; a++) {

    if( a == 3){
        nome = "Potter";
    }

    if(a == 7 && nome == "Potter") {
        console.log("O nome é Potter, pode parar!")
        break;
    }
    
    console.log(a)
}

console.log("\n");
