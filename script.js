function validateForm() {
  let name = document.getElementById("inputName");
  let email = document.getElementById("inputEmail");
  let phone = document.getElementById("inputPhone");

  // Validating Name
  if (name.value == "") { alert("Name must be filled out."); name.focus(); }
  else if (name.value.match(/[\s]*[a-zA-Z][a-zA-Z ]*/) == null) { alert("Only alphabets are allowed."); name.focus(); }
  // Validating Email
  else if (email.value == "") { alert("Email must be filled out."); email.focus(); }
  else if (email.value.match(/\S+@\S+\.\S+/) == null) { alert("Enter a vaild email."); email.focus(); }
  // Validating Phone Number
  else if (phone.value == "") { alert("Phone Number must be filled out."); phone.focus(); }
  else if (phone.value.match(/[0-9]{10}/) == null) { alert("Only 10 digit Phone number allowed."); phone.focus(); }
  // Store data and reset form
  else { storeData(); document.getElementById("myForm").reset(); }
}

function storeData() {
  let personName = document.getElementById("inputName").value;
  let personEmail = document.getElementById("inputEmail").value;
  let personPhone = document.getElementById("inputPhone").value;
  let obj = { name: personName, email: personEmail, phone: personPhone };

  if (localStorage.info) { // if info stored previously in local data
    let storedData = JSON.parse(localStorage.getItem("info")); // storedData is an array of obj
    storedData.push(obj);
    localStorage.setItem('info', JSON.stringify(storedData));
  } else localStorage.setItem('info', JSON.stringify([obj])); // storing array for 1st time

  updateTable();
}

function updateTable() {
  if (localStorage.info) { // Execute only if localStorage exist
    //Information to be inserted in the table
    let info = JSON.parse(localStorage.getItem("info")); // info is an array of obj
    let table = document.getElementById("tableData");
    table.innerHTML = "";
    document.getElementById("tableCaption").innerText = info.length + " entries found." // updating caption

    for (let i = 0; i < info.length; i++) {
      let tableRow = document.createElement("tr");
      let name = info[i].name;
      let email = info[i].email;
      let phone = info[i].phone;
      tableRow.innerHTML = '<td>' + (i + 1) + '</td>' + '<td>' + name + '</td>' + '<td>' + email + '</td>' + '<td>' + phone + '</td>';
      table.appendChild(tableRow);
    }
  }
}
updateTable(); // This function will execute every time web-page in opened