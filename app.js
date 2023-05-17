// DOM EVENTS EXERCISE
// 1a
const button1 = document.querySelector(`button`);

// 1b
button1.onclick = () => {
  alert("You clicked the first button! Congrats!");
}

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener('mouseover', () => {
  alert("You hovered over the h3 element! Congrats!");
});

// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, p => {
  p.preventDefault();

  alert(form.elements.entry.value);

  form.elements.entry.value = "";
});