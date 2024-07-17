function communityMessage(){
    let message ={}
    message.sender = prompt("what is your name?");
    message.phone = prompt("What is your phone number");
    message.email = prompt("What is your email?");
    message.request = prompt("What project would you like to volunteer for?");

    communityVolunteerParagraph.innerHTML = `Dear ${message.sender}, thanks for volunteering to help our your community.`;
    communtiyVolunteerParagraph.innerHTML = `You will get a calendar invite from the church's email account altarlifeministries@yahoo.com.`;

}
communityVolunteerButton.onclick = communityMessage