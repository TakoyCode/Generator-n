// Modell
const model = {

    inputs: {
        sender: "",
        receiver: "",
        contents: ``,
        picture: "",
    },

    cards: [
        {
            sender: "Audun",
            receiver: "Deg som leser dette",
            contents: `Dette er her tekst skal være, plis ikke skriv for mye den er sjenert`,
            picture: "https://i1.adis.ws/i/canon/future_of_forests_header_16x9_dc14bbe1e35040f79bf566eedaf5c8f7?$hero-header-half-16by9-dt$",
        },
        {
            sender: "Julenissen",
            receiver: "Påskeharen",
            contents: `Nå er den din tur`,
            picture: "https://www.columbiatribune.com/gcdn/authoring/2015/12/23/NCDT/ghows-MO-2188d3b8-4f3a-436a-b1d6-f3fa2f3aa210-a85f8cb1.jpeg?crop=1764,997,x0,y88&width=1764&height=997&format=pjpg&auto=webp",
        },
        {
            sender: "Far",
            receiver: "Deg",
            contents: `
            Har du hørt om han som reklamerte på den nye kortstokken han hadde kjøpt?  
            Fire av kortene var knekt…`,
            picture: "https://previews.123rf.com/images/harmkruyshaar/harmkruyshaar0905/harmkruyshaar090500176/4879345-jack-of-clubs-playing-card.jpg",
        }
    ],

    chosenCardIndex: 0,
    cardShowing: false,
    frontSide: true,
};