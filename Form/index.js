const form = document.getElementById("addForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const listItem = document.querySelector(".allItems");

form.addEventListener("submit", storeData);

function storeData(event) {
  event.preventDefault();
  // Get the input field values

  const detail = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    date: date.value,
    time: time.value,
  };
  const key = detail.name;
  const value = JSON.stringify(detail);
  localStorage.setItem(key, value);
  const deserialise_value = JSON.parse(localStorage.getItem(key));
  const newList = document.createElement("li");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  delBtn.className = "btn btn-info mb-2 mr-2";
  editBtn.className = "btn btn-info mb-2 ml-2";
  delBtn.id = "del";
  delBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  delBtn.appendChild(document.createTextNode("delete"));
  editBtn.appendChild(document.createTextNode("edit"));

  const text = `Name: ${deserialise_value.name}, Email: ${deserialise_value.email}, Phone: ${deserialise_value.phone}`;

  newList.appendChild(document.createTextNode(text));
  newList.appendChild(delBtn);
  newList.appendChild(editBtn);
  listItem.appendChild(newList);
}

function deleteItem(event) {
  event.preventDefault();
  const emailToDelete = event.target.parentElement.textContent
    .split(",")[1]
    .trim()
    .slice(7);

  const itemToRemove = document.getElementsByTagName("li");
  Array.from(itemToRemove).forEach((element) => {
    if (element.textContent.includes(emailToDelete)) {
      listItem.removeChild(element);
      localStorage.removeItem(emailToDelete);
    }
  });
}
function editItem(event) {
  event.preventDefault();
  const emailToDelete = event.target.parentElement.textContent
    .split(",")[1]
    .trim()
    .slice(7);
  const nameToEdit = event.target.parentElement.textContent
    .split(",")[0]
    .trim()
    .slice(6);
  const editItem = JSON.parse(localStorage.getItem(nameToEdit));
  email.value = editItem.email;
  phone.value = editItem.phone;
  time.value = editItem.time;
  date.value = editItem.date;

  const itemToRemove = document.getElementsByTagName("li");
  Array.from(itemToRemove).forEach((element) => {
    if (element.textContent.includes(emailToDelete)) {
      listItem.removeChild(element);
      localStorage.removeItem(emailToDelete);
    }
  });
}
