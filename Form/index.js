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
  const key = Object.keys(detail);
  const value = Object.values(detail);
  for (let i = 0; i < key.length; ++i) {
    localStorage.setItem(key[i], value[i]);
  }
}
