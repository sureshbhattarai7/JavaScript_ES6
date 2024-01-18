// const player = {
//     name: 'Cristiano Ronaldo',
//     club: 'Real Madrid',
//     address: {
//         city: 'Madrid'
//     }
// }

// // console.log(player.name);

// const { name, club, address: { city } } = player;
// console.log(`${name} plays for ${club}`);

// console.log(`${name} lives in ${city}`);


const student = {
    name: 'Suresh',
    age: 23,
    project: {
        restAPI: 'Rest API using Node.js, express.js and MongoDB'
    }
}

const { name, age, project: { restAPI } } = student;
console.log(`${name} of age ${age} has done personal project of ${restAPI}`);