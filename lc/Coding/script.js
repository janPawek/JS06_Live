// let obj = `{
//   "name": "Serri",
//   "job": "IT"
// }`;

// let students = `[
//   {
//     "name": "test",
//     "age": 22
//   },{
//     "name": "test",
//     "age": 22
//   },{
//     "name": "test",
//     "age": 22
//   },{
//     "name": "test",
//     "age": 22
//   }
// ]`

// json is an string inside, the string you have object or array of objects

// to convert from JSON to an object, use JSON.parse()

// let object = JSON.parse(obj);

// console.log(object.job);

let students = `[
  {
    "name": "John",
    "age": 33,
    "gym": true,
    "likes": 0,
    "hobbies": ["read", "code"]
  },
  {
    "name": "Mary",
    "age": 20,
    "gym": true,
    "likes": 0,
    "hobbies": ["read", "code"]
  },
  {
    "name": "test",
    "age": 25,
    "gym": true,
    "likes": 2,
    "hobbies": ["read", "code"]
  },
  {
    "name": "test 2",
    "age": 40,
    "gym": true,
    "likes": 3,
    "hobbies": ["read", "code", "swim"]
  }
]`;

let studentsArray = JSON.parse(students);
console.log(studentsArray);

let result = "";

for (let x of studentsArray) {
  result += `<div>
  <p class="badge bg-secondary">${x.name}</p>
  <p>${x.age}</p>
  <p>${x.gym}</p>
  <span class="btn btn-danger mybtns">${x.likes}</span><br>
  `;
  for (let val of x.hobbies) {
    result += `
      <span class="badge bg-success">${val}</span>
    `;
  }

  result += `</div>`;
}

document.getElementById("result").innerHTML = result;

let btns = document.querySelectorAll(".mybtns");

btns.forEach((element, i) => {
  element.addEventListener("click", function () {
    studentsArray[i].likes++;
    element.innerHTML = studentsArray[i].likes;
  });
});

// to add a variable in localstorage you need to use setItem(Key, Value)
// localStorage.setItem("fname", "Serri");

// to get the data back and use it getItem(Key)

// console.log(localStorage.getItem("fname"));

// localStorage.removeItem("fname");
// console.log(localStorage.getItem("fname"));
