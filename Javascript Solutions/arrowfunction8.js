const getFoodPrice = (foodName) => {
    if (foodName == "Burger") {
        return 250;
    } else if (foodName == "Pizza") {
        return 500;
    } else if (foodName == "Momo") {
        return 150;
    } else if (foodName == "Chowmein") {
        return 180;
    } else {
        return 0;
    }
}

const calculateServiceCharge = (total) => {
    return total * 0.05;
}

const calculateOrder = (foodName, quantity, callback) => {
    return callback(getFoodPrice(foodName), quantity);
}

const generateReceipt = (name, foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price == 0) {
        console.log("Invalid Food Item");
    } else {
        let total = callback(foodName, quantity);
        let serviceCharge = calculateServiceCharge(total);

        console.log("Customer:", name);
        console.log("Food:", foodName);
        console.log("Quantity:", quantity);
        console.log("Food Amount: Rs.", total);
        console.log("Service Charge: Rs.", serviceCharge);
        console.log("Final Amount: Rs.", total + serviceCharge);
    }
}

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

generateReceipt("Suman", "Burger", 2, (food, quantity) => {
    return calculateTotal(getFoodPrice(food), quantity);
});