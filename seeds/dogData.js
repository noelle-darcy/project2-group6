// fake Dog data to test with. 

const { Dog } = require('../models');

// do i need to manually enter user_id or does that happen auto?
const dogData = [
    {
        id: 1,
        dogName: 'Fido',
        dogBreed: 'Chow',
        dogSex: 'male',
        dogAge: 3,
        dogWeight: 45,
        dogVet: 'Dr. Jung',
        dogConditions: 'None',
    },
    {
        id: 2,
        dogName: 'Lewis',
        dogBreed: 'Dalmatian',
        dogSex: 'male',
        dogAge: 10,
        dogWeight: 55,
        dogVet: 'Dr. Sally',
        dogConditions: 'Nut Allergy',
    },
    {
        id: 3,
        dogName: 'Josephine',
        dogBreed: 'Hound Mix',
        dogSex: 'female',
        dogAge: 2,
        dogWeight: 35,
        dogVet: 'Dr. Jung',
        dogConditions: 'ADHD',
    },
    {
        id: 4,
        dogName: 'Henry',
        dogBreed: 'Lab Mix',
        dogSex: 'male',
        dogAge: 1,
        dogWeight: 70,
        dogVet: 'Dr. Lex',
        dogConditions: 'None',
    },
    {
        id: 5,
        dogName: 'Alice',
        dogBreed: 'Daschund',
        dogSex: 'female',
        dogAge: 7,
        dogWeight: 15,
        dogVet: 'Dr. Lex',
        dogConditions: 'Itchy Skin',
    },
    {
        id: 6,
        dogName: 'Kasper',
        dogBreed: 'Irish Wolfhound',
        dogSex: 'male',
        dogAge: 3,
        dogWeight: 100,
        dogVet: 'Dr. Sally',
        dogConditions: 'Too Big',
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);
module.exports = seedDogs;