// fake Dog data to test with. 

const { Dog } = require('../models');

// do i need to manually enter user_id or does that happen auto?
const dogData = [
    {
        dogName: 'Fido',
        dogBreed: 'Chow',
        dogSex: 'male',
        dogAge: 3,
        dogWeight: 45,
        dogVet: 'Dr. Jung',
        dogConditions: 'None',
    },
    {
        dogName: 'Lewis',
        dogBreed: 'Dalmatian',
        dogSex: 'male',
        dogAge: 10,
        dogWeight: 55,
        dogVet: 'Dr. Sally',
        dogConditions: 'Nut Allergy',
    },
    {
        dogName: 'Josephine',
        dogBreed: 'Hound Mix',
        dogSex: 'female',
        dogAge: 2,
        dogWeight: 35,
        dogVet: 'Dr. Jung',
        dogConditions: 'ADHD',
    },
    {
        dogName: 'Henry',
        dogBreed: 'Lab Mix',
        dogSex: 'male',
        dogAge: 1,
        dogWeight: 70,
        dogVet: 'Dr. Lex',
        dogConditions: 'None',
    },
    {
        dogName: 'Alice',
        dogBreed: 'Daschund',
        dogSex: 'female',
        dogAge: 7,
        dogWeight: 15,
        dogVet: 'Dr. Lex',
        dogConditions: 'Itchy Skin',
    },
    {
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