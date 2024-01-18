const player = {
    name: 'Cristiano Ronaldo',
    club: 'Real Madrid',
    address: {
        city: 'Madrid'
    }
}

// console.log(player.name);

const { name, club, address: { city } } = player;
console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);