const students = [
    { name: 'John', city: 'New York' },
    { name: 'Peter', city: 'Paris' },
    { name: 'Kate', city: 'Sydney' }
];

for (let student of students) {
    console.log(`${student.name} lives in ${student.city}`);
}