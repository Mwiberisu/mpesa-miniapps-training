const akanFemaleName = {
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
const DayOfWeekIndex = {
    1: "Sunday",

    2: "Monday",

    3: "Tuesday",

    4: "Wednesday",

    5: "Thursday",

    6: "Friday",

    7: "Saturday"

}

function calculateDayOfWeek(birthday, gender) {
    // confirm date is valid
    // format date to ddmmyyyy
    // CC - is the century digits. For example 1989 has CC = 19
    // YY - is the Year digits (1989 has YY = 89)
    // MM -  is the Month
    // DD - is the Day of the month 
    // mod - is the modulus function ( % )
    // Function to use: Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    const year =birthday.getFullYear().toString();
    const CC = year.substring(0,2);
    const YY = year.substring(2,4);
    const MM = birthday.getMonth();
    const DD = birthday.getDate();

    const dayOfWeek =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    console.log("Year: " +year + " CC: " + CC + " YY: " + YY+" MM: " + MM + " DD: " + DD + " dayofweek: " + dayOfWeek);

}

calculateDayOfWeek(new Date(1994, 11, 13), "female");