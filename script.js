const url = "https://jsonplaceholder.typicode.com/posts/1";

let btn = document.getElementById("btn");
let div = document.getElementById("output");

btn.addEventListener("click", () => {
  fetching(callbc);
});

function callbc(data) {
  div.innerText = data.title;
}

async function fetching(callback) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  callback(data);
}
