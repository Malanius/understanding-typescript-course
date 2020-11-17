const button = document.querySelector("button");

const clickHandler = (message: string, age?: number) => {
  const unused = "bla";
  console.log("Clicked!" + message);
};

const add = (n1: number, n2: number) => {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
};

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "Heya!", 50));
}
