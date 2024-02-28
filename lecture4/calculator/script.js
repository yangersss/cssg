document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

function add(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = parseFloat(input1) + parseFloat(input2);
    document.getElementById("result").innerText = result;
}
function subtract(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = parseFloat(input1) - parseFloat(input2);
    document.getElementById("result").innerText = result;
}
function multiply(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = parseFloat(input1) * parseFloat(input2);
    document.getElementById("result").innerText = result;
}
function divide(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = parseFloat(input1) / parseFloat(input2);
    document.getElementById("result").innerText = result;
}