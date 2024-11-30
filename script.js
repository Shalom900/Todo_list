'use strict';

const formID = document.getElementById('formID');
const addButton = document.getElementById('addButton');
const toDoContainer = document.getElementById('toDoContainer');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const removeButton = document.getElementById('removeButton');
const heading = document.getElementById('heading') 
const todoList = {
    items: [],

    // Add an item to the list
    addItem: function (title, description) {
        this.items.push({ title, description });
        console.log("Items Updated", this.items);
    },

    // Remove an item by index
    removeItem: function (index) {
        this.items.splice(index, 1); // Use splice to remove the item
        console.log("Item Removed", this.items);
    },
};
removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Remove the last item from the list
    todoList.removeItem(todoList.items.length[0]);
    renderToDoList();
    heading2();

}),
// Add event listener to the "Add" button
addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const itemValue = input1.value.trim(); // Title
    const itemValue2 = input2.value.trim(); // Description

    if (itemValue === '' && itemValue2 === '') {
        alert('Please enter a valid to-do item.');
        return;
    } else if (itemValue === '') {
        alert('Please enter a TITLE for your to-do list.');
        return;
    } else if (itemValue2 === '') {
        alert('Please enter a DESCRIPTION for your to-do list.');
        return;
    }

    // Add item as an object with title and description
    todoList.addItem(itemValue, itemValue2);

    renderToDoList();

    // Clear the input fields
    input1.value = '';
    input2.value = '';
    heading2();
});

// Render the to-do list
function renderToDoList() {
    toDoContainer.innerHTML = '';

    todoList.items.forEach((item, index) => {
        // Create to-do item container
        const toDoItem = document.createElement('div');
        toDoItem.classList.add('todo-item');

        // Create title
        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('title');

        // Create description
        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('todoList');

        // Create remove button
        const removeButton = document.createElement('span');
        removeButton.textContent = '❌';
        removeButton.classList.add('remove-btn');

        // Add event listener to remove button
        removeButton.addEventListener('click', () => {
            todoList.removeItem(index); // Remove the item from the list
            renderToDoList(); // Re-render the list
        });

        // Append title, description, and remove button to the item container
        toDoItem.appendChild(title);
        toDoItem.appendChild(description);
        description.appendChild(removeButton);

        // Append the item container to the main container
        toDoContainer.appendChild(toDoItem);
    });
}

const heading2 = () =>{
    
    if(heading.style.display === 'none') {
        heading.style.display = 'none';
    
    }else{
    
        heading.style.display = 'block';
    }

}
// heading2();
                
    // const inputValue =  input1.value;
    // const inputValue2 = input2.value;
    // console.log(inputValue);
    // console.log(inputValue2);

    // const newItemTitle = document.createElement('span');
    // const newItemTitle2 = document.createElement('div');
    // newItemTitle.className = 'title';
    // newItemTitle2.className = 'todoList';

    // newItemTitle.textContent = inputValue 
    // newItemTitle2.textContent = inputValue2
    // toDoContainer.appendChild(newItemTitle);
    // toDoContainer.appendChild(newItemTitle2);

    // heading2();
     
    





// removeButton.addEventListener('click', (e) =>{
//     e.preventDefault();

//    const inputValue =  input1.value;
//    const inputValue2 = input2.value;
//    console.log(inputValue);
//    console.log(inputValue2);

//    const newItemTitle = document.createElement('span');
//    const newItemTitle2 = document.createElement('div');
//    newItemTitle.className = 'title';
//    newItemTitle2.className = 'todoList';

//    newItemTitle.textContent = inputValue 
//    newItemTitle2.textContent = inputValue2
//    toDoContainer.remove(newItemTitle);
//    toDoContainer.remove(newItemTitle2);

// //    heading2();
    
   

// });
