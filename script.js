(function makeTable() {
  //Information to be inserted in the table
var heading = ['Name', 'Age', 'DOB', 'Email', 'Company']
var info = [['Ra_meh', 99, '29-Feb-1920', 'ra@mail.com', 'Black Waters'],
            ['Rama', 17, '24-Aug-2003', 'mara@mail.com', 'Private Militia'],
            ['Gadswez', 44, '03-Oct-1980', 'gad@mail.com', 'Public Republican'],
            ['Troy', 56, '17-Nov-1973', 'roy@mail.com', 'Rad Army'],
            ['Blizz', 23, '29-Jan-1997', 'zz@mail.com', 'Soviet USSR']];

// creating a table
var table = document.createElement("table");
table.setAttribute("border", "1"); // giving border to the table

// creating heading row
var tableRowHeading = document.createElement("tr");
tableRowHeading.id = "heading"; // giving first row an id

// entering the lables in heading
for (var i = 0; i < heading.length; i++) {
  var tableCol = document.createElement("td");
  var data = document.createTextNode(heading[i]);
  tableCol.appendChild(data);
  tableRowHeading.appendChild(tableCol);
}
table.appendChild(tableRowHeading);

// creating data row
for (var x = 0; x < info.length; x++) {
  var tableRow = document.createElement("tr");
  // entering the data in second row
  for (var i = 0; i < info[x].length; i++) {
    var tableCol = document.createElement("td");
    var data = document.createTextNode(info[x][i]);
    tableCol.appendChild(data);
    tableRow.appendChild(tableCol);
  }
  table.appendChild(tableRow);
}

document.body.appendChild(table); // appending table into HTML body

// making the headings of table bold
document.getElementById("heading").style.fontWeight = 'bold';

})();

//makeTable();