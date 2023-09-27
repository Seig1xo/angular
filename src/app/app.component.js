document.querySelector("#button-duplicate").addEventListener('click', (e) => {
    let card = document.querySelector(".card");
    let clonedCard = card.cloneNode(true);
    clonedCard.id = 'clonedcard';
    document.body.appendChild(clonedCard);
});

document.querySelector("#button-delete").addEventListener('click', (e) => {
    let card = document.querySelector(".card");
    let clonedCard = card.cloneNode(true);
    clonedCard.id = 'clonedcard';
    document.querySelector("#clonedcard").remove();
});

document.querySelector("#button-color").addEventListener('click', (e) => {
    let c = document.querySelector("#card");
    c.className = 'toggled' == c.className ? '' : 'toggled';
});

document.querySelector("#button-heading").addEventListener('click', (e) => {
    let h = document.querySelector("h1");
    if (h.innerHTML == "MTD") {
      h.innerHTML = "super";
    }
    else {
      h.innerHTML = "MTD";
    }
});

document.querySelector("#button-description").addEventListener('click', (e) => {
    const details = document.querySelector('summary');
    if (details.parentNode.getAttribute('open')) {
      details.parentNode.removeAttribute('open');
    }
    else {
      details.parentNode.setAttribute('open','open');   
    }
});