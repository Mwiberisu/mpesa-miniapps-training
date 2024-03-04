const akanFemaleNames = {
    "Sunday": "Akosua",

    "Monday": "Adwoa",

    "Tuesday": "Abenaa",

    "Wednesday": "Akua",

    "Thursday": "Yaa",

    "Friday": "Afua",

    "Saturday": "Ama"
}

const akanMaleNames = {
    "Sunday": "Kwasi",

    "Monday": "Kwadwo",

    "Tuesday": "Kwabena",

    "Wednesday": "Kwaku",

    "Thursday": "Yaw",

    "Friday": "Kofi",

    "Saturday": "Kwame"
}
const dayOfWeekIndex = {
    0: "Sunday",

    1: "Monday",

    2: "Tuesday",

    3: "Wednesday",

    4: "Thursday",

    5: "Friday",

    6: "Saturday"

}

function calculateAkanName(birthday, gender) {
    // confirm date is valid
    // format date to ddmmyyyy
    // CC - is the century digits. For example 1989 has CC = 19
    // YY - is the Year digits (1989 has YY = 89)
    // MM -  is the Month
    // DD - is the Day of the month 
    // mod - is the modulus function ( % )
    // Function to use: Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    console.log("Date received", birthday);
    console.log("Gender received", gender);
    if(birthday ==null){
        return "Please select your birthday";
    }

    if(birthday ==null){
        console.log("Please select a gender from the list");
    }
    // const year = birthday.getFullYear().toString();
    // const CC = year.substring(0, 2);
    // const YY = year.substring(2, 4);
    // const MM = birthday.getMonth();//getMonth runs from 0-11, so add 1 to get the month
    // const DD = birthday.getDate();

    // const dayOfWeekNo = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);//converts to a ---number doesnt work
    // console.log("Year: " + year + " CC: " + CC + " YY: " + YY + " MM: " + MM + " DD: " + DD + " dayofweekNo: " + dayOfWeekNo+" dayofweek: " + dayOfWeekIndex[dayOfWeekNo]);

    const day = birthday.getDay();
    const dayOftheWeekValue = dayOfWeekIndex[day];
    console.log("Day of the year:", day,"dayOftheWeekValue",dayOftheWeekValue)

    let personName = "";
    if(gender.toLowerCase() == "female"){
        personName = akanFemaleNames[dayOftheWeekValue];
    }
    else if(gender.toLowerCase() == "male"){
        personName = akanMaleNames[dayOftheWeekValue];
    }
    else{
        console.log("Unknown gender:", gender);
    }


    console.log("Your Akan name is", personName);

}

calculateAkanName(new Date("2024-03-01"), "malle");