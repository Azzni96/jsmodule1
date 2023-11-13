let nameslist = document.getElementById('nameslist')
let participants = +(prompt("Enter the number of participants"))
let names = [];
for (let i=0; i<participants; i++) {
  let name = prompt("Enter the name participants" + (i + 1) + ":");
  names.push(name);
}
for (let i =0 ; i < names.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = names[i];
  nameslist.appendChild(listItem);
}
