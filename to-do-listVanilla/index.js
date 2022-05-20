const addButton = document.querySelector(".addButton");
const toDoList = document.querySelector(".toDoList");

const input = document.querySelector(".inputBox");




input.addEventListener("input", inputChange);
addButton.addEventListener("click", appendList);


function inputChange() {
    if (this.value.length !== 0) {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
};


function appendList() {
    const li = createListItem(input.value);
    li.classList.add("listItem");
    console.log(li)
    toDoList.appendChild(li);

    input.value = "";
    addButton.disabled = true;
}


function createListItem(name) {
    const li = document.createElement("li");
    li.textContent = name;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", deleteItem);
    li.appendChild(deleteButton);

    return li;
}



function deleteItem() {
    this.parentNode.remove();
}






