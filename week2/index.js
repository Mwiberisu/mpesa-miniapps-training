console.log(1 + 2);
// with var, you can declare same variable multiple times
var suma = 2;
var suma = 9;

// use let from 2015
let sum = 1 + 2;
console.log(sum);

// const for declaring  variables that don't change
const multiplyingFactor = 2;
// multiplyingFactor = 20; this will result in a error
console.log(multiplyingFactor);

// Arithmetic operations
console.log(4 - 3);
console.log(5 * 6);
console.log(10 / 2);
console.log(9 / 2);
console.log(7 + 8 * 9);
console.log((7 + 8) * 9);
console.log(7 / 0);
console.log(0 / 0);
console.log(-53 + 54);
console.log(-53 + 50); //negative result

// Data types
let age = 40; //number
let name = "Nick"; //string
let isActive = false; //boolean
let hobbies = ["cycling", "Running", "Gaming", isActive, age];//list can take all types
console.log(hobbies)

let grades = { "Math": 80, "English": 90, "Geography": 99 };//map
console.log(grades.Math);
let totalGrade = null //null declaration
console.log(totalGrade);
totalGrade = grades.English + grades.Geography + grades.Math;
console.log("Total marks: " + totalGrade);
console.log("Grade: " + totalGrade / 3);

//string 
// concatenation
let greeting = "Hello " + name;
console.log(greeting);

const pieC = 3.14;
console.log(pieC * 49);

// method
console.log(greeting.toUpperCase());
console.log(greeting.slice(0, 5)); //first 5 letters

//list manipulation
console.log(hobbies.length);
hobbies.push(greeting);//add a new item to the list
hobbies.push(name);//
console.log(hobbies);
console.log(hobbies.length);
hobbies.pop();//remove
console.log(hobbies);
hobbies.shift();//removes first element of the list and returns it
console.log(hobbies);
hobbies.unshift("ten"); //insert new item at the beginning of the list and returns the new length of the list
console.log(hobbies);

console.log(greeting.search("o"));
console.log(greeting.substring(2));
console.log(greeting.indexOf("l"));
console.log(greeting.split(' '));
console.log(greeting.includes("o"));

// Extracting details from mpesa messages


let message2 = "XXXYYYZZZ2 confirmed.You bought Ksh30.00 of airtime on 25/4/21 at 3:45 PM.New M-PESA balance is Ksh5,450.22. Transaction cost, Ksh0.00. Amount you can transact within the day is 299,940.00. SAFARICOM ONLY CALLS YOU FROM 0722000000. To reverse, forward this message to 456.";
let message3 = "XXXYYYZZZ3 Confirmed. Ksh500.00 sent to KPLC PREPAID for account 123456789 on 23/4/21 at 9:57 PM New M-PESA balance is Ksh5,941.22. Transaction cost, Ksh23.00. Amount you can transact within the day is 296,283.00.";
let message4 = "XXXYYYZZZ4 Confirmed. Ksh607.00 paid to SUPERMARKET FULANI HAPO. on 23/4/21 at 3:26 PM.New M-PESA balance is Ksh6,494.22. Transaction cost, Ksh0.00. Amount you can transact within the day is 296,813.00.You can now access M-PESA via *334#";
let message5 = "XXXYYYZZZ5 Confirmed. Ksh1,030.00 sent to MSEE FULANI HAPO +254722222222 on 23/4/21 at 2:38 PM. New M-PESA balance is Ksh7. Transaction cost, Ksh22.00. Amount you can transact within the day is 297,420.00. SAFARICOM ONLY CALLS YOU FROM 0722000000. To reverse, forward this message to 456.";
let message6 = "XXXYYYZZZ6 Confirmed.on 23/4/21 at 12:31 PMWithdraw Ksh1,500.00 from 010000 - Shop fulani hapo New M-PESA balance is Ksh8. Transaction cost, Ksh28.00. Amount you can transact within the day is 298,500.00.";
let message7 = "XXXYYYZZZ8 Confirmed. Ksh700.00 paid to GEL NAIL SHOP. on 17/3/21 at 6:54 PM.New M-PESA balance is Ksh3,646.22. Transaction cost, Ksh0.00. Amount you can transact within the day is 299,300.00.You can now access M-PESA via *334#";
let message8 = "XXXYYYZZZ9 Confirmed. On 25/7/20 at 3:29 PM Give Ksh2,000.00 cash to Agent fulani New M-PESA balance is Ksh2,100.22.";

var getMessage = (function (message) {
    if (message.includes("sent to") && message.includes("for account")) {
        console.log("PAYBILL MESSAGE: " + message);

    }
    else if (message.includes("of airtime")) {

        console.log("BUY AIRTIME MESSAGE: " + message);
    }
    else if (message.includes("Give Ksh")) {

        console.log("CASH DEPOSIT MESSAGE: " + message);
    }
    else if (message.includes("Withdraw")) {

        console.log("CASH WITHDRAW MESSAGE: " + message);
    }
    else if (message.includes("2547") || message.includes("07")) {

        console.log("SEND MONEY MESSAGE: " + message);
    }
    else if (message.includes("paid to")) {
        console.log("PAY TO TILL MESSAGE " + message);
    }

    else {
        console.log("UNKNOWN MESSAGE");
    }
});
getMessage(message5);