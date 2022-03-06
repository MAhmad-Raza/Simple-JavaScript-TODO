localStorage.clear();
const addNote = document.getElementById("addNote");
const getAndUpdate = () => {
  console.log("Updating The List");
  let noteTitle = document.getElementById("noteTitle").value;
  let noteDescription = document.getElementById("noteDescription").value;
  if (localStorage.getItem("itemJson") === null) {
    let itemJsonArray = [];
    itemJsonArray.push([noteTitle, noteDescription]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([noteTitle, noteDescription]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  }
  updateList();
};
const updateList = () => {
  if (localStorage.getItem("itemJson") === null) {
    let itemJsonArray = [];
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    tableBodyHtml = `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
      <td><button class="btn btn-danger" onClick=deleteNote(${index})>Delete</button></td>
     </tr>`;
    str += tableBodyHtml;
  });
  tableBody.innerHTML = str;
};

addNote.addEventListener("click", getAndUpdate);
const deleteNote = (itemIndex) => {
  console.log("Item Deleted", itemIndex);
  itemJsonArrayStr = localStorage.getItem("itemJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  updateList();
};

