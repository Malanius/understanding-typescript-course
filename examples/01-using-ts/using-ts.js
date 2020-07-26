var button = document.querySelector("button");
// The '!' - means it will enver be null, we know it as we know the element IDs in HTML
// as ... is type-casting
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
