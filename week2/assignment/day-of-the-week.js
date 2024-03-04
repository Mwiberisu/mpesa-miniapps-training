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

function calculateAkanName(dateString, gender) {
    // confirm date is valid
    // format date to ddmmyyyy
    // CC - is the century digits. For example 1989 has CC = 19
    // YY - is the Year digits (1989 has YY = 89)
    // MM -  is the Month
    // DD - is the Day of the month 
    // mod - is the modulus function ( % )
    // Function to use: Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    // const year = birthday.getFullYear().toString();
    // const CC = year.substring(0, 2);
    // const YY = year.substring(2, 4);
    // const MM = birthday.getMonth();//getMonth runs from 0-11, so add 1 to get the month
    // const DD = birthday.getDate();

    // const dayOfWeekNo = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);//converts to a ---number doesnt work
    // console.log("Year: " + year + " CC: " + CC + " YY: " + YY + " MM: " + MM + " DD: " + DD + " dayofweekNo: " + dayOfWeekNo+" dayofweek: " + dayOfWeekIndex[dayOfWeekNo]);
    let response = "";
    let error = "";
    console.log("Date received", dateString);
    console.log("Gender received", gender);

    const birthday = new Date(dateString)
    birthday
    console.log("IsValidDate", birthday.isValid());
    if (birthday.isValid() != true) {
        error = "Please select your birthday";
    }

    else if (gender == null) {
        error = "Please select a gender from the list";

    } else {

        const day = birthday.getDay();
        const dayOftheWeekValue = dayOfWeekIndex[day];
        console.log("Day of the year:", day, "dayOftheWeekValue", dayOftheWeekValue)

        let personName = "";

        if (gender.toLowerCase() == "female") {
            personName = akanFemaleNames[dayOftheWeekValue];
            response = "You were born on a <strong>"+dayOftheWeekValue+"</strong>. Your Akan name is <strong>" + personName+"</strong";        }
        else if (gender.toLowerCase() == "male") {
            personName = akanMaleNames[dayOftheWeekValue];
            response = "You were born on a <strong>"+dayOftheWeekValue+"</strong>. Your Akan name is <strong>" + personName+"</strong";
        }
        else {
            error = "Unknown gender:", gender;
        }

    }
    console.log(response);
    console.log(error);

    document.getElementById("response").innerHTML = response;
    document.getElementById("error").innerHTML = error;

}

Date.prototype.isValid = function () {

    // If the date object is invalid it
    // will return 'NaN' on getTime()
    // and NaN is never equal to itself
    return this.getTime() === this.getTime();
};

// test the function
// calculateAkanName(new Date("2024-03-01"), "malle");