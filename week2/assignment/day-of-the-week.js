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
    let response = "";
    let error = "";
    console.log("Date received", dateString);
    console.log("Gender received", gender);

    // validate birthday
    const birthday = new Date(dateString)
    console.log("IsValidDate", birthday.isValid());
    if (birthday.isValid() != true) {
        error = "Please select your birthday";
    }
    // validate gender
    else if (gender === null) {
        error = "Please select a gender from the list";

    } else {

        // get day of the week
        const day = birthday.getDay();
        const dayOftheWeekValue = dayOfWeekIndex[day];
        console.log("Day of the year:", day, "dayOftheWeekValue", dayOftheWeekValue)

        // calculate name
        let personName = "";

        if (gender.toLowerCase() == "female") {
            personName = akanFemaleNames[dayOftheWeekValue];
            response = "You were born on a <strong>" + dayOftheWeekValue + "</strong>. Your Akan name is <strong>" + personName + "</strong";
        }
        else if (gender.toLowerCase() == "male") {
            personName = akanMaleNames[dayOftheWeekValue];
            response = "You were born on a <strong>" + dayOftheWeekValue + "</strong>. Your Akan name is <strong>" + personName + "</strong";
        }
        else {
            error = "Unknown gender:", gender;
        }

    }
    console.log(response);
    console.log(error);

    document.getElementById("response").innerHTML = response;
    document.getElementById("error").innerHTML = error;
    document.getElementById("akanForm").reset();

}

Date.prototype.isValid = function () {

    // If the date object is invalid it
    // will return 'NaN' on getTime()
    // and NaN is never equal to itself
    return this.getTime() === this.getTime();
};

// test the function
// calculateAkanName(new Date("2024-03-01"), "malle");