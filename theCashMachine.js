// let balance = 100;
// let pin = 9788;

// //  balance

// const functionBalance = () =>{
//     console.log(balance)
// }



// //  withdraw
// const functionWithdraw = (withdraw) => {
// if( (pin == 9788) && (withdraw <= balance)){
//     console.log (`Your current balance is ${balance - withdraw}`)}

// else if (( withdraw <= balance) && (pin == 9788 )){
//     console.log("There are in insuffcient funds in your account")

// }else {
//     console.log("Please input correct pin")
// }
// }

// functionWithdraw (90)




function atm() {

    let account = {
        pin: 5879,
        balance: 0,
        savings: 0,
    };

    // console.log(account.savings) // testing object variables.

    verifyPin(pin);
}

function verifyPin(pin) {
    if (account.pin === 5879) {
        console.log(" You are logged in");
        return true;
    } else {
        console.log("Please input correct pin");
        verifyPin()
    }
}

function addFunds(deposit) {
    deposit = deposit;
    let newBalance = account.newBalance + deposit;
    return newBalance;
}

function withdrawFunds(withdraw) {
    newBalance = account.newBalance - withdraw;
    if (newBalance <= 0) {
        console.log("Insuffcient funds");
        return false;
    } else {
        console.log("Your funds have been added to your account");
        return true;
    }

}

addFunds(90)
