function createMessage() {
    let message = {}
    message.sender = prompt("What is your name?");
    message.request = prompt("What is your prayer request");

    prayerrequestParagraph.innerHTML = `Dear ${message.sender}, Thank you for your request! Here is your prayer below..`;
    prayerrequestParagraph.innerHTML = `Dear God, we come to you today to interseed in prayer for ${message.sender}. We ask that you grant their request for ${message.request}. We thank you heavenly father for hearing us and granting their request. In Jesus name, Amen!`;

}
prayerrequestButton.onclick = createMessage




if (importantText = true) {
    const importantText = ["suicide", "hurting self", "depressed", "stressed", "lonely", "commit suicide", "saying goodbye", "selling", "will", "giving",]
    
    window.open('mailto:test@example.com?subject=Your%20Subject&body=Your%20Message');

}

