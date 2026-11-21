const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    } else {
        return 30 + (distance - 2) * 15;
    }
}

const checkFreeDelivery = (amount) => {
    if (amount >= 1000) {
        return true;
    } else {
        return false;
    }
}

const processOrder = (customer, distance, amount, callback) => {
    let charge = callback(distance, amount);

    console.log("Customer:", customer);
    console.log("Order Amount: Rs.", amount);
    console.log("Distance:", distance, "km");
    console.log("Delivery Charge: Rs.", charge);
}

const finalDelivery = (distance, amount) => {
    if (checkFreeDelivery(amount)) {
        return 0;
    } else {
        return calculateDelivery(distance);
    }
}

processOrder("Shyam", 5, 800, finalDelivery);