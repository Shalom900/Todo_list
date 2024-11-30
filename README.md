## Todo List Application

This is a simple yet dynamic **Todo List Application** built with HTML, CSS, and JavaScript. The app allows users to manage their daily tasks efficiently by adding, viewing, and removing to-do items in real time.

### Features

1. **Add Tasks**
   - Users can input a **title** and **description** for each task.
   - Tasks are displayed in a structured format with a title and description.

2. **Remove Tasks**
   - Delete tasks individually using a `❌` button next to each task.
   - Remove the last task added using the "Remove" button.

3. **Real-Time Updates**
   - The app dynamically updates the task list without refreshing the page using the `renderToDoList` function.

4. **Input Validation**
   - Ensures both the title and description are filled before adding a task.
   - Displays alerts if fields are left empty.

5. **Responsive Design**
   - The UI adapts to different screen sizes and ensures a clean, user-friendly interface.

6. **Dynamic Heading Display**
   - Toggles the visibility of the heading dynamically based on the presence of tasks.

---

### Code Breakdown

1. **HTML**:  
   A structured layout with an input form for tasks and a container to display the task list.  
   ```html
   <main>
       <div class="formContainer">
           <h1>Todo List</h1>
           <form id="formID">
               <div class="inputContainer">
                   <input type="text" required placeholder="Title" id="input1">
                   <input type="text" required placeholder="TodoList" id="input2">
               </div>
               <div class="btn">
                   <button type="submit" id="addButton">Add</button>
                   <button type="submit" id="removeButton">Remove</button>
               </div>
           </form>
       </div>
       <div class="todo">
           <h1 class="heading" id="heading">My Todo List</h1>
           <div class="ToDoContainer" id="toDoContainer"></div>
       </div>
   </main>
   ```

2. **CSS**:  
   Customize the look and feel of the application in `style.css`. Example classes include `.formContainer`, `.todo-item`, and `.remove-btn`.

3. **JavaScript**:  
   Core functionality for task management, input validation, and real-time updates.  
   ```javascript
   const todoList = {
       items: [],
       addItem: function (title, description) {
           this.items.push({ title, description });
       },
       removeItem: function (index) {
           this.items.splice(index, 1);
       },
   };

   const renderToDoList = () => {
       const toDoContainer = document.getElementById('toDoContainer');
       toDoContainer.innerHTML = '';

       todoList.items.forEach((item, index) => {
           const toDoItem = document.createElement('div');
           toDoItem.classList.add('todo-item');
           const title = document.createElement('h3');
           title.textContent = item.title;
           const description = document.createElement('p');
           description.textContent = item.description;
           const removeButton = document.createElement('span');
           removeButton.textContent = '❌';
           removeButton.addEventListener('click', () => {
               todoList.removeItem(index);
               renderToDoList();
           });
           toDoItem.appendChild(title);
           toDoItem.appendChild(description);
           toDoItem.appendChild(removeButton);
           toDoContainer.appendChild(toDoItem);
       });
   };
   ```

---

### How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list.git
   ```
2. Open the project directory:
   ```bash
   cd todo-list
   ```
3. Open the `index.html` file in a web browser to start using the application.

---

### Future Improvements
- **Persisting Tasks**: Add localStorage support to retain tasks after page refresh.
- **Search Functionality**: Include a search bar to filter tasks based on keywords.
- **Drag-and-Drop Sorting**: Allow users to reorder tasks interactively.

---

### Screenshots


---

Feel free to fork this project and contribute! 😊
