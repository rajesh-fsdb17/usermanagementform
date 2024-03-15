const name = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");

const submitBtn = document.querySelector("button");
const tbody = document.querySelector("tbody");

let users = [];

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!name.value || !age.value || !email.value || !contact.value) {
    alert("Please enter user details");
    return;
  }
  const userData = {
    name: name.value,
    age: age.value,
    email: email.value,
    contact: contact.value,
  };
  users.push(userData);
  displayData();
  name.value = "";
  age.value = "";
  email.value = "";
  contact.value = "";
});

function displayData() {
  tbody.innerHTML = "";
  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    const nameData = document.createElement("td");
    const ageData = document.createElement("td");
    const emailData = document.createElement("td");
    const contactData = document.createElement("td");
    const button = document.createElement("button");

    nameData.innerText = user.name;
    ageData.innerText = user.age;
    emailData.innerText = user.email;
    contactData.innerText = user.contact;
    button.innerText = "Delete";
    button.onclick = function () {
      deleteUser(index);
    };

    tr.append(nameData);
    tr.append(ageData);
    tr.append(emailData);
    tr.append(contactData);
    tr.append(button);
    tbody.append(tr);
  });
}

function deleteUser(id) {
  users = users.filter((user, index) => index !== id);
  displayData();
}
