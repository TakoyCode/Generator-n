// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
        <div class="mainView">
            <div class="lineupDivs">
                ${createAddCardHtml()}
                ${createPostcardBankHtml()}
            </div>
            ${model.cardShowing ? createCardHtml() : ""}
        </div>
    `;
    app.innerHTML = html;
}

function createPostcardBankHtml() {
    return /*HTML*/ `
    
    <div class="postcardBank">
        <div class="title2">Dine lagret kort!</div>
        <div class="cardPreviewHolder">
            ${makeCardPreviewHtml()}
        </div>
    </div>
    
    `;
}

function makeCardPreviewHtml() {
    let html = "";
    for (i = 0; i < model.cards.length; i++) {
        html += /*HTML*/ `

        <img class="cardPreview" onclick="showCard(${i})"
        src="${model.cards[i].picture}" alt="${model.cards[i].picture}"/>
        `;
    }
    return html;
}


function createAddCardHtml() {
    return /*HTML*/`
    <div class="inputContainer">
        <div class="title1">Lag et postkort!</div>
        <label>Avsender</label>
        <input type="text" oninput="model.inputs.sender = this.value" value="${model.inputs.sender}" placeholder="Skriv inn avsender">
        <label>Mottager</label>
        <input type="text" oninput="model.inputs.receiver = this.value" value="${model.inputs.receiver}" placeholder="Skriv inn mottager">
        <label>Innhold</label>
        <input type="text" oninput="model.inputs.contents = this.value" value="${model.inputs.contents}" placeholder="Skriv inn innhold">
        <label>Bilde</label>
        <input type="text" oninput="model.inputs.picture = this.value" value="${model.inputs.picture}" placeholder="Skriv inn bilde link">
        <button onclick="addNewCard()">legg til postkort</button>
    </div>
    `;
}

function createCardHtml() {
    if (model.frontSide) {
        return /*HTML*/`
            <div class="cardFront" onclick="model.frontSide = false; updateView();">
                <div>
                    <div class="cardText">Til: ${model.cards[model.chosenCardIndex].receiver}</div>
                    <div class="cardText">Fra: ${model.cards[model.chosenCardIndex].sender}</div>
                    <div class="cardContent">${model.cards[model.chosenCardIndex].contents}</div>
                </div>
            </div>
        `;
    }
    else {
        return /*HTML*/`
            <div class="cardBack" onclick="model.frontSide = true; updateView();">
                <img class="cardImg" src="${model.cards[model.chosenCardIndex].picture}" alt="Couldn't find: ${model.inputs.picture}"/>
            </div>
        `;
    }
}
