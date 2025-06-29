const addBtn = document.getElementById('add-button');
const input = document.getElementById('list-items');
const list = document.getElementById('shopping-list');


addBtn.addEventListener("click", addListItem);





function addListItem() {
    const li = document.createElement('li');
    const removeButton = document.createElement('button');
   
    li.textContent = input.value;
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", () => li.remove());
    li.appendChild(removeButton);
    list.appendChild(li);
    input.value = "";


    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
   // editButton.addEventListener('click', () => li.textContent = )
}

//Stumped on implementing the logic for the edit button