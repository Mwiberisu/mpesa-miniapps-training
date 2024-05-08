console.log('Running');

async function login(){
    try {
        const user = await logIn();
        console.log('Logged in user', user);
        const messages = await getMessages(user.id);
        console.log("user messages", messages);

        const messageList = document.getElementById('messagesList');
        messages.forEach(message => {
            const listItem = document.createElement('li');
            listItem.textContent = message;
            messageList.appendChild(listItem);
            
        });
        
    } catch (error) {
        console.log('Failed to login', error);
        
    }
}
window.onload = () => {login()};


function logIn() {
    console.log('Initiated login');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {const fetchedData = {id:1, firstName: 'John', lastName:'Doe', email: 'john@example.com'};
        resolve(fetchedData);

    },200);
    })
}

function getMessages() {
    console.log('Initiated get messages');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {const fetchedData = ['message1', 'message2', 'message3'];
        resolve(fetchedData);

    },200);
    })
}