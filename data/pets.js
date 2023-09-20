import katrineImg from "shelter/assets/pictures/pets/katrine.png";
import jenniferImg from "shelter/assets/pictures/pets/jennifer.png";
import woodyImg from "shelter/assets/pictures/pets/woody.png";
import sophiaImg from "shelter/assets/pictures/pets/sophia.png";
import timmyImg from "shelter/assets/pictures/pets/timmy.png";
import charlyImg from "shelter/assets/pictures/pets/charly.png";
import scarlettImg from "shelter/assets/pictures/pets/scarlett.png";
import freddieImg from "shelter/assets/pictures/pets/freddie.png";

import pets from 'shelter/data/pets.json';
pets.forEach((e, i) => {
    e.id = i;
})
export {pets}

/*
const pets = [
    {
        name: "Katrine",
        breed: "Cat - British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        imgSrc: katrineImg
    },
    {
        name: "Jennifer",
        breed: "Dog - Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        imgSrc: jenniferImg
    },
    {
        name: "Woody",
        breed: "Dog - Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        imgSrc: woodyImg
    },
    {
        name: "Sophia",
        breed: "Cat - British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",

        imgSrc: sophiaImg
    },
    {
        name: "Timmy",
        breed: "Cat - British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        imgSrc: timmyImg
    },
    {
        name: "Charly",
        breed: "Dog - Jack Russell Terrier ",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        imgSrc: charlyImg
    },
    {
        name: "Scarlett",
        breed: "Cat - British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        imgSrc: scarlettImg
    },
    {
        name: "Freddie",
        breed: "Cat - British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        imgSrc: freddieImg
    },
]

pets.forEach((e, i) => {
    e.id = i;
})

export {pets}*/


/*<div className="pets__modal-body">
    <button className="btn-primary_outlined pets__close-modal">
        <img src="../assets/pictures/icons/icon-close.svg" alt="close">
    </button>
    <img src="../assets/pictures/pets/katrine.png" alt="" className="pets__modal-img">
        <div className="pets__modal-text-container">
            <h3 className="pets__modal-name">Katrine</h3>
            <h4 className="pets__modal-breed">Cat - British Shorthair</h4>
            <p className="pets__modal-description">Katrine is a beautiful girl. She is as soft as the finest velvet
                with a thick lush fur.
                Will love you until the last breath she takes as long as you are the one. She is picky about her
                affection. She loves
                cuddles and to stretch into your hands for a deeper relaxations.</p>
            <ul className="pets__modal-feature-list">
                <li className="pets__modal-feature-item"><span className="pets__feature">Age: </span>2 months</li>
                <li className="pets__modal-feature-item"><span className="pets__feature">Inoculations: </span>none
                </li>
                <li className="pets__modal-feature-item"><span className="pets__feature">Diseases: </span>none</li>
                <li className="pets__modal-feature-item"><span className="pets__feature">Parasites: </span>none</li>
            </ul>
        </div>
</div>*/