function createMessage(){
    let message ={}
    message.sender = prompt("What is your name?");
    message.phone = prompt("What is your phone number?");
    message.email = prompt("What is your email address?");
    message.request = prompt("What is your prayer request");

    prayerrequestParagraph.innerHTML = `Dear ${message.sender}, Thank you for your request! Here is your prayer below..`;
    prayerrequestParagraph.innerHTML = `Dear God, we come to you today to interseed in prayer for ${message.sender}. We ask that you grant their request for ${message.request}. We thank you heavenly father for hearing us and granting their request. In Jesus name, Amen!`;

}
prayerrequestButton.onclick = createMessage

if (importantText = true) {
    const importantText = ["help", "suicide", "hurting self", "depressed", "stressed", "lonely", "commit suicide", "saying goodbye", "selling", "will", "giving",]
    
    window.open('mailto:test@example.com?subject=Important Reach Out');
    window.open('mailto:sophie950950@yahoo.com?subject=Important Reach Out');

}

const bibleVerses = [
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. Philippians 4:6-7",
    "Rejoice in hope, be patient in tribulation, be constant in prayer. Romans 12:12",
    "The prayer of a righteous person is powerful and effective. James 5:16",
    "Jesus makes clear that he is speaking of prayer, and that we are all to pray. Mark 11:24",
    "With every prayer and request, pray at all times in the Spirit. Ephesians 6:18",
    "And everything you shall ask in prayer, believing, you shall receive. Matthew 21:22",
    "And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son. If ye shall ask any thing in my name, I will do it. John 14:13-14",
    "Devote yourselves to prayer, being watchful and thankful. Colossians 4:2",
    "A passage to consider when facing disaster, this verse says, Trust in the Lord with all your heart, and lean not to your own understanding. In all your ways acknowledge him, and he shall direct your paths. Proverbs 3:5-6",
    "Jesus reminds us in this verse that he has overcome the world, and that he can give us peace when we're struggling. John 16:33",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. Isaiah 40:31",
    "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit. Romans 15:13",
    "This verse encourages us to cast our anxieties on God, who cares for us, and to humble ourselves under his mighty hand. 1 Peter 5:6-7",
    "So be strong and courageous! Do not be afraid and do not panic before them. For the Lord your God will personally go ahead of you. He will neither fail you nor abandon you. Deuteronomy 31:6",
    "The Lord is my shepherd; I shall not want. Psalms 23:1",
    "My God will meet all your needs. He will meet them in keeping with his wonderful riches. These riches come to you because you belong to Christ Jesus. Philippians 4:19",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. Philippians 4:6-7",
    "I am the Lord your God, who brought you up out of Egypt. Open wide your mouth and I will fill it. Psalms 81:10",
    "Taste and see that the Lord is good, blessed is the one who takes refuge in him. Psalms 34:8",
    "So do not fear, for I am with you do not be dismayed, for I am your God. I will strengthen you and help you I will uphold you with my righteous right hand. Isaiah 41:10",
    "I sought the Lord, and he answered me he delivered me from all my fears. Those who look to him are radiant their faces are never covered with shame. Psalm 34:4-5"
    


];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    return bibleVerses[randomIndex];
}

const randomVerse = getRandomVerse();
alert(randomVerse); 