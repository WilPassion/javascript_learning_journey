// FUNCTION WITH TASKS
function salesStatus(status, total) {
    console.log("Transaction:  " + status + "\nTotal: R$" + total);
}
salesStatus("Approved", 2500);

// FUNCTION WITH CALCULATION
function percentage10(price) {
    return price / 100 * 10
}

console.log(percentage10(20));

// Function Expression 

function movieName() {
    console.log("The Matrix")
};

movieName();

const car = function() {
    console.log("New Beattle")
};

car();
