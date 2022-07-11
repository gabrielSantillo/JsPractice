let customer_name = `Robber Guy`;
let account_balance = 1;
let is_active = true;

let customer_object = {
    name: `Gabriel`,
    total_balance: -89554,
    is_active: true
}

let customers = [
    {
        name: `Gabriel`,
        total_balance: -89554,
        is_active: true
    },
    {
        name: `Alex`,
        total_balance: 6554,
        is_active: false
    },
    {
        name: `Josh`,
        total_balance: 789554,
        is_active: true
    }
]

if (account_balance <= 1000) {
    console.log(`Congrats ${customer_name}. This is your balance: ${account_balance}`);
} else if (account_balance <= 5000) {
    console.log(`Congrats for achieving this amount ${customer_name}. This is your balance: ${account_balance}`);
} else if (account_balance <= 10000) {
    console.log(`Hey there. It looks like ${customer_name} has at least ${account_balance}`);
} else {
    console.log(`You rich!`);
}

if (is_active === false && account_balance <= 1) {
    console.log(`System Error. ${customer_name}`);
}

if (customer_name === `Robber Guy` && account_balance > 0 && is_active === true) {
    console.log(`Robber Alert`);
}

if(customer_object[`total_balance`] < 0) {
    console.log(`System error. Balance Account is: ${customer_object[`total_balance`]}`);
}

let counter = 0;
while(counter < customers.length) {
    if(customers[counter][`is_active`] === true){
       console.log(`Name: ${customers[counter][`name`]}. The balance is: ${customers[counter][`total_balance`]}`);
    }
    
    counter++;
}

for(let counter = 0; counter < customers.length; counter++) {
    if(customers[counter][`is_active`] === false){
        console.log(`Name: ${customers[counter][`name`]}. The balance is: ${customers[counter][`total_balance`]}`);
    }
}