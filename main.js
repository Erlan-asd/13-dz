let data = [
    {
        name: 'Alibek',
        age: 27,
        gender: "m"
    },
    {
        name: 'Almaz',
        age: 30,
        gender: "m"
    },
    {
        name: 'Max',
        age: 20,
        gender: "m"
    },
    {
        name: 'Nika',
        age: 23,
        gender: "w"
    }
];

const a = new Promise((resolve, reject) => {
    resolve(data);
})
a.then((filteredData) => {
    let result = filteredData.filter((obj) => obj.age > 25);
    console.log(result);
});