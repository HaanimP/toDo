document.addEventListener('DOMContentLoaded', function () {
    let tasks = [];

    function renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = index;
            listItem.appendChild(checkbox);

            const taskText = document.createTextNode(task);
            listItem.appendChild(taskText);

            taskList.appendChild(listItem);
        });
    }

    function addTask() {
        const taskInput = document.getElementById('task-input');
        const task = taskInput.value.trim();

        if (task !== '') {
            tasks.push(task);
            renderTasks();
            taskInput.value = '';
        }
    }

    function deleteTasks() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const selectedTasks = Array.from(checkboxes).map(checkbox => parseInt(checkbox.value));

        tasks = tasks.filter((task, index) => !selectedTasks.includes(index));
        renderTasks();
    }

    function sortTasks() {
        tasks.sort();
        renderTasks();
    }

    document.getElementById('add-btn').addEventListener('click', addTask);
    document.getElementById('delete-btn').addEventListener('click', deleteTasks);
    document.getElementById('sort-btn').addEventListener('click', sortTasks);

    renderTasks();
});
