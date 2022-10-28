// fake Dog data to test with. 

const { Dog } = require('../models');

// do i need to manually enter user_id or does that happen auto?
const dogData = [
    {
        dogName: 'Fido',
        dogBreed: 'Bichon',
        dogSex: 'male',
        dogAge: 3,
        dogWeight: 45,
        dogVet: 'Dr. Jung',
        dogConditions: 'None',
        img: "/image/Dog1.png"
    },
    {
        dogName: 'Finn',
        dogBreed: 'Boston Terrier',
        dogSex: 'male',
        dogAge: 1,
        dogWeight: 15,
        dogVet: 'Dr. Sally',
        dogConditions: 'Nut Allergy',
        img: "/image/Dog2.png"
    },
    {
        dogName: 'Josephine',
        dogBreed: 'Hound Mix',
        dogSex: 'female',
        dogAge: 2,
        dogWeight: 35,
        dogVet: 'Dr. Jung',
        dogConditions: 'ADHD',
        img: "/image/Dog5.png"
    },
    {
        dogName: 'Henry',
        dogBreed: 'Lab Mix',
        dogSex: 'male',
        dogAge: 1,
        dogWeight: 70,
        dogVet: 'Dr. Lex',
        dogConditions: 'None',
        img: "/image/Dog3.png"
    },
    {
        dogName: 'Alice',
        dogBreed: 'Dalmation',
        dogSex: 'female',
        dogAge: 7,
        dogWeight: 55,
        dogVet: 'Dr. Lex',
        dogConditions: 'Itchy Skin',
        img: "/image/Dog4.png"
    },
    {
        dogName: 'Sola',
        dogBreed: 'Golden Retriever',
        dogSex: 'male',
        dogAge: 1,
        dogWeight: 10,
        dogVet: 'Dr. Sally',
        dogConditions: 'Too Cute',
        img: "/image/Dog7.png"
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);
module.exports = seedDogs;