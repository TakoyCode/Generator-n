// Modell

function addNewCard() {
    let input = model.inputs;
    if (input.sender == "" || input.receiver == "" || input.contents == "" || input.picture == "") return;

    model.cards.push(JSON.parse(JSON.stringify(model.inputs)));
    model.chosenCardIndex = (model.cards.length - 1);
    model.cardShowing = true;
    updateView();
}

function showCard(index) {
    model.chosenCardIndex = index;
    model.cardShowing = true;
    updateView();
}