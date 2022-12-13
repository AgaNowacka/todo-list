{
    const tasks = [
        {
            content: "zrobić zakupy",
            done: false,

        },
        {
            content: "zjeść obiad",
            done: true,
        },

    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeButton");
        
        removeButtons.forEach ((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-doneButton");
        
        toggleDoneButtons.forEach ((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
                    <button class="js-doneButton">zrobione?</button>
                    <button class="js-removeButton">Usuń</button>
                    ${task.content}
                 </li>
            `;
        }

        
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

        const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        };

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}