import {pets} from "shelter/data/pets";
import {appendChilds} from "shelter/jsSrc/utils";
import {attachModal} from "shelter/jsSrc/petsModal";
import closeIconSrc from "shelter/assets/pictures/icons/icon-close.svg";

const cardClasses = {
    card: "pet-card",
    img: "pet-card__img",
    figcaption: "pet-card__caption",
    btn: "btn-primary_outlined pet-card__btn"
}
export function getCardsCount() {
    return pets.length;
}
export function getCardById(petId, btnText = 'Learn more') {
    for (const pet of pets) {
        if (pet.id !== petId) {
            continue;
        }
        const card = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const btn = document.createElement('button');

        card.classList.add(cardClasses.card);
        img.classList.add(cardClasses.img);
        figcaption.classList.add(cardClasses.figcaption);
        btn.classList.add(...cardClasses.btn.split(' '));

        img.src = pet.imgSrc;
        figcaption.innerHTML = pet.name;
        btn.innerHTML = btnText;

        const {modalBody, closeButton} = createModal(pet);
        attachModal(modalBody, btn, closeButton);
        appendChilds(card, [img, figcaption, btn]);
        return {card, items: {img, figcaption, btn, modalBody}};
    }
    throw new Error(`can't find pet with id ${petId}`);
}

function createModal(pet) {
    if (!pet) {
        throw new Error(`pet can't be undefined`)
    }
    const modalBody = document.createElement("div");
    modalBody.className = "pets__modal-body";

    const closeButton = document.createElement("button");
    closeButton.className = "btn-primary_outlined pets__close-modal";
    const closeIcon = document.createElement("img");
    closeIcon.src = closeIconSrc;
    closeIcon.alt = "close";
    closeButton.appendChild(closeIcon);
    modalBody.appendChild(closeButton);

    const petImage = document.createElement("img");
    petImage.src = pet.imgSrc;
    petImage.alt = "";
    petImage.className = "pets__modal-img";
    modalBody.appendChild(petImage);

    const textContainer = document.createElement("div");
    textContainer.className = "pets__modal-text-container";

    const nameHeading = document.createElement("h3");
    nameHeading.className = "pets__modal-name";
    nameHeading.textContent = pet.name;
    textContainer.appendChild(nameHeading);

    const breedHeading = document.createElement("h4");
    breedHeading.className = "pets__modal-breed";
    breedHeading.textContent = pet.breed;
    textContainer.appendChild(breedHeading);

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className = "pets__modal-description";
    descriptionParagraph.textContent = pet.description;
    textContainer.appendChild(descriptionParagraph);

    const featureList = document.createElement("ul");
    featureList.className = "pets__modal-feature-list";

    const ageListItem = document.createElement("li");
    ageListItem.className = "pets__modal-feature-item";
    ageListItem.innerHTML = "<span class='pets__feature'>Age: </span>2 months";
    featureList.appendChild(ageListItem);

    const inoculationsListItem = document.createElement("li");
    inoculationsListItem.className = "pets__modal-feature-item";
    inoculationsListItem.innerHTML = "<span class='pets__feature'>Inoculations: </span>none";
    featureList.appendChild(inoculationsListItem);

    const diseasesListItem = document.createElement("li");
    diseasesListItem.className = "pets__modal-feature-item";
    diseasesListItem.innerHTML = "<span class='pets__feature'>Diseases: </span>none";
    featureList.appendChild(diseasesListItem);

    const parasitesListItem = document.createElement("li");
    parasitesListItem.className = "pets__modal-feature-item";
    parasitesListItem.innerHTML = "<span class='pets__feature'>Parasites: </span>none";
    featureList.appendChild(parasitesListItem);

    textContainer.appendChild(featureList);

    modalBody.appendChild(textContainer);
    return {modalBody, closeButton};
}