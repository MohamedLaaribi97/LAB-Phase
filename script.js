const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let hour = d.getHours();
let minutes = d.getMinutes();

function formctrl() {
  id = document.getElementById("myForm").elements[0].value;
  mdp = document.getElementById("myForm").elements[1].value;
  if (id.length == 0) {
    alert("saisir votre identifiant");
  }
  if (mdp == 0) alert("saisir votre mot de passe");
  else document.getElementById("redirect").setAttribute("href", "./index.html");
  localStorage.setItem("id", id);
  console.log(id);
}

if (localStorage.getItem('id')) {
  let newElement = document.createElement("div");

  newElement.innerHTML = ` 
<div class="greating">
  <svg
    class="text-success"
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="currentColor"
    class="bi bi-person-circle"
    viewBox="0 0 16 16"
  >
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path
      fill-rule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
    />
  </svg>
  <svg
    class="text-success"
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="currentColor"
    class="bi bi-clock-history"
    viewBox="0 0 16 16"
  >
    <path
      d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
    />
    <path
      d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
    />
    <path
      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
    />
  </svg>
</div>
<div class="greating">
  <p>name</p>
  <p>time</p>
</div>
<div class="greating">
  <p id="nam">${localStorage.getItem('id')}</p>
  <p id="time">${
    day + "/" + month + "/" + year + "-" + hour + ":" + minutes
  }</p>
</div>
`;
  document.getElementById("account").append(newElement);
}

//when the user click th sign up button of the form
//form validation
function validForm() {
  firstname = document.getElementById("sign-up-form").elements[0].value;
  lastname = document.getElementById("sign-up-form").elements[1].value;
  password = document.getElementById("sign-up-form").elements[2].value;
  confirmPass = document.getElementById("sign-up-form").elements[3].value;
  email = document.getElementById("sign-up-form").elements[4].value;
  adress = document.getElementById("sign-up-form").elements[5].value;
  city = document.getElementById("sign-up-form").elements[6].value;
  state = document.getElementById("sign-up-form").elements[7].value;
  zip = document.getElementById("sign-up-form").elements[8].value;
  checked = document.getElementById("sign-up-form").elements[9].value;
  if (firstname.length == 0) {
    alert("sasir votre nom");
    document.getElementById("firstName").style.color = "red";
  } else {
    document.getElementById("firstName").style.color = "black";
  }
  if (lastname.length == 0) {
    alert("sasir votre prenom");
    document.getElementById("lastName").style.color = "red";
  } else {
    document.getElementById("lastName").style.color = "black";
  }
  if (password.length == 0) {
    alert("sasir votre mot de passe");
    document.getElementById("pass").style.color = "red";
  } else {
    document.getElementById("pass").style.color = "black";
  }
  if (password != confirmPass) {
    alert("mot de passe doit etre conforme");
    document.getElementById("confirmPass").style.color = "red";
  } else {
    document.getElementById("confirmPass").style.color = "black";
  }
  if (
    email.indexOf("@") == -1 ||
    email.indexOf("@") == 0 ||
    email.indexOf("@") == email.length - 1
  ) {
    alert("le format de l'adresse email n'est pas valide");
    document.getElementById("email").style.color = "red";
  } else {
    document.getElementById("email").style.color = "black";
  }
}

// when user want to convert from a currency to another
function convertcurrency() {
  input = document.getElementById("input-convert").value;
  inputstate = document.getElementById("inputState").value;
  outputstate = document.getElementById("outputState").value;
  if (input < 0) {
    alert("enter a valid number");
  } else if (
    (inputstate == "TND" && outputstate == "TND") ||
    (inputstate == "Euro" && outputstate == "Euro") ||
    (inputstate == "Dollars" && outputstate == "Dollars")
  ) {
    document.getElementById("output-convert").value = input * 1;
  } else if (inputstate == "TND" && outputstate == "Euro") {
    document.getElementById("output-convert").value = input * 0.332;
  } else if (inputstate == "TND" && outputstate == "Dollars") {
    document.getElementById("output-convert").value = input * 0.351;
  } else if (inputstate == "Euro" && outputstate == "TND") {
    document.getElementById("output-convert").value = input * 3.32;
  } else if (inputstate == "Euro" && outputstate == "Dollars") {
    document.getElementById("output-convert").value = input * 0.89;
  } else if (inputstate == "Dollars" && outputstate == "TND") {
    document.getElementById("output-convert").value = input * 3.51;
  } else if (inputstate == "Dollars" && outputstate == "Euro") {
    document.getElementById("output-convert").value = input * 1.11;
  }
}
// gif animation when the user enter the main page
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 2400);
}

window.onload = fadeOut;

window.onload = fadeOut;
