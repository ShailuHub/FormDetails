const form = document.getElementById("addForm");

form.addEventListener("submit", storeData);

function storeData(event) {
  event.preventDefault();
  // Get the input field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const detail = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time,
  };
  const key = detail.name;
  const value = JSON.stringify(detail);
  localStorage.setItem(key, value);
  const deserialise_value = JSON.parse(localStorage.getItem(key));
  const listItem = document.querySelector(".allItems");
  const newList = document.createElement("li");
  const text = `Name: ${deserialise_value.name}, Email: ${deserialise_value.email}, Phone: ${deserialise_value.phone}`;
  newList.appendChild(document.createTextNode(text));
  listItem.appendChild(newList);
}
