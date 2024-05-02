function fetchDataFromServer() {
    console.log('Fetching data from the server');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {const fetchedData = "This is the data that was fetched from the server";
        resolve(fetchedData);

        reject(new Error("There was an error fetching the data from the server") );},20000);
    })
}

// fetchDataFromServer().then((data) => {console.log('Data', data)}).catch((error) => {console.error(error)});



function logIn() {
    console.log('Initiated login');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {const fetchedData = {id:1, firstName: 'John', lastName:'Doe', email: 'john@example.com'};
        resolve(fetchedData);

        reject(new Error("There was an error fetching the data from the server") );
    },20000);
    })
}

function getMessages() {
    console.log('Initiated get messages');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {const fetchedData = ['message1', 'message2', 'message3'];
        resolve(fetchedData);

        reject(new Error("There was an error fetching the data from the server") );
    },20000);
    })
}

logIn().then((user) => {console.log('Logged in user', user); return getMessages(user.id)}).catch((error) => {console.error(error)}).then((messages) =>{console.log("user messages", messages); });