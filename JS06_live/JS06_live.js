// let obj =`{
//     "name": "Serri",
//     "job": "IT",
// }`;

// let students = [
//     {
//         "name": "test",
//         "age": "22",
//     },{
//         "name": "test",
//         "age": "22",
//     },{
//         "name": "test",
//         "age": "22",
//     }
// ]
// json is a string inside, the string you have object or array of objects
// to convert from JSON to an object, use JSON.parse()

// let object  = JSON.parse(obj);

// console.log(obj.job);

let students = `[
    {
        "name": "John",
        "age": "33",
        "gym": true,
        "hobbies": ["read", "code"],
    },
    {
        "name": "Mary",
        "age": "20",
        "gym": true,
        "hobbies": ["read", "code"],
    },
    {
        "name": "test",
        "age": "25",
        "gym": true,
        "hobbies": ["read", "code"],
    }, 
    {
        "name": "test2",
        "age": "40",
        "gym": true,
        "hobbies": ["read", "code"]
    }
]`;

let studentsArray = JSON.parse(students);
console.log(studentsArray);

for(let val of studentsArray) {
    console.log(x);
    document.getElementById("result").innerHTML += 
    <p class="badge bg-secondary>${x.name}</p>
    <p>${x.age}
}
}
