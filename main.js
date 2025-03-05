const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const processData = () => {
  alert("Button was clicked!");
};
btn.addEventListener("click", processData);

fetch("data.txt")
  .then((res) => res.text())
  .then((data) => {
    const listArray = data.split("\n");
    listArray.sort();
    listArray.forEach((line) => {
      const liElement = document.createElement("li");
      liElement.textContent = line;
      ul.appendChild(liElement);
    });
  });
