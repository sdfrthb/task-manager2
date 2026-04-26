const tasks = [];
const completedTaskCount = 0;

const setTask = function (title, description = null) {
  if (!title) {
    console.log("Нельзя добавить пустую задачу");
  } else {
    const task = {
      title: title,
      description: description,
      isCompleted: false,
      createdDate: new Date(),
      completedDate: null,
    };
    tasks.push(task);
  }
};

const showTask = function () {
  if (!tasks.length) {
    console.log("Список задач пуст")
  }
  else {
  tasks.forEach((task, index) => {
    console.log(`
    Задача №${index + 1}:
    Название: ${task.title}
    Описание: ${task.description}
    Готовность: ${task.isCompleted ? "Готово" : "В процессе"}
    Дата создания: ${task.createdDate}
    Дата завершения: ${task.completedDate}
    `);
  }); }
};

const completeTask = function (index) {
  if (index >= 0 && index < tasks.length) {
    const currTask = tasks[index];
    currTask.isCompleted = true;
    currTask.completedDate = new Date();
    completedTaskCount += 1;
    return;
  }
  console.log("Введите корректный индекс");
};

const deleteTask = function (index) {
  if (index >= 0 && index < tasks.length) {
    const currTask = tasks[index];
    if (currTask.isCompleted) {
      const answer = confirm("Таска еще не выполнена, удалить?");
      if (answer) {
        tasks.splice(index, 1);
      }
    }
    return;
  }
  console.log("Введите корректный индекс");
};

const clearTasks = function() {
  arr.length = 0;
}

