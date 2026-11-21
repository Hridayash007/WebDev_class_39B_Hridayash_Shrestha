const validateWithdrawal = (amount, balance) => {
    if (amount <= balance && amount % 500 == 0) {
        return true;
    } else {
        return false;
    }
}

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs.", balance);
    } else {
        console.log("Invalid Withdrawal!");
        console.log("Balance: Rs.", balance);
    }
}

withdrawMoney(3000, 10000, validateWithdrawal);