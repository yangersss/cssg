console.log("hello world");
let name = "Eddie";
const age = "19";
var computer = "pc";

console.log(name);
console.log(age);
console.log(computer);

const isStudent = true;
let hobbies = [false, "gaming", 20];

console.log(hobbies[0]);

let sum = 5 / 10;
console.log(sum);

if (age >= 18) {
    console.log("You are an adult");
}
else if (age >= 13) {
    console.log("You are a teen");
}
else {
    console.log("You are a child");
}

for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

function greetUser(name){
    console.log("Hello there, " + name);
}

greetUser("timothy henson");

document.getElementById("ptext").innerText = "Welcome to a great JS tutorial!";

// function whatToDo(){
//     alert("This button was clicked!");
// }

// document.getElementById("clickme").addEventListener("click", whatToDo);


function addItemButton(){
    let userText = document.getElementById("inputText").value;
    if(userText){
        let li = document.createElement("li");
        li.textContent = userText;
        document.getElementById("itemList").appendChild(li);
        document.getElementById("inputText").value = "";
    }
    else{
        alert("Please enter a value");
    }
}

document.getElementById("addItem").addEventListener("click", addItemButton);