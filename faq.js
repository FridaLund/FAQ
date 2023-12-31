// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

function createFAQ(data) {
  const accordion = document.querySelector(".accordion");

  for (const post of data) {
    const titleElement = document.createElement("div");
    titleElement.className = "title section";
    titleElement.textContent = post.title;

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "description";
    descriptionElement.innerHTML = `<p>${post.body}</p>`;

    accordion.appendChild(titleElement);
    accordion.appendChild(descriptionElement);

    titleElement.addEventListener("click", () => {
      titleElement.classList.toggle("active");
      descriptionElement.style.display =
        descriptionElement.style.display === "block" ? "none" : "block";
    });
  }
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then(createFAQ);
