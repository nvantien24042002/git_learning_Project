const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        todoList.appendChild(li);
        input.value = ""; // Xóa nội dung input sau khi thêm
    }
});