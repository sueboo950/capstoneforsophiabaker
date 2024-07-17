function createMessage(){
    let message ={}
    message.sender = prompt("What is your name?");
    message.phone = prompt("What is your phone number");
    message.email = prompt("What is your email?");
    message.request = prompt("What project would you like to volunteer for?");

    nonprofitVoluteerParagraph.innerHTML = `Dear ${message.sender}, Thank you for signing up to voluteer..`;
    nonprofitVoluteerParagraph.innerHTML = `You will receive a calendar invite from the church's email account altarlifeministries@yahoo.com.`;

}
nonprofitVoluteerButton.onclick = createMessage