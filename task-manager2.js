const tasks = [];
const completedTaskCount = 0;

const setTask1 = function (title, description = null) {
  if (!title) {
    console.log("Нельзя добавить пустую задачу");
    return;
  }
  const task = {
    title: title,
    description: description,
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null,
  };
  tasks.push(task);
};

const setTask = function (title, description = null) {
  if (!title) {
    console.log("Нельзя добавить пустую задачу");
    return;
  }
  const task = {
    title: title,
    description: description,
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null,
  };
  tasks.push(task);
};

const showTask = function () {
  if (!tasks.length) {
    console.log("Список задач пуст");
    return;
  }
  tasks.forEach(
    (
      { title, description, isCompleted, createdDate, completedDate },
      index
    ) => {
      console.log(`
    Задача №${index + 1}:
    Название: ${title}
    Описание: ${description}
    Готовность: ${isCompleted ? "Готово" : "В процессе"}
    Дата создания: ${createdDate}
    Дата завершения: ${completedDate}
    `);
    }
  );
};

const completeTask = function (index) {
  const currTask = tasks[index];

  if (!currTask) {
    console.log("Введён некорректный индекс");
    return;
  }

  currTask.isCompleted = true;
  currTask.completedDate = new Date();
  completedTaskCount += 1;
};

const deleteTask = function (index) {
  const currTask = tasks[index];
  if (!currTask) {
    console.log("Введён некорректный индекс");
    return;
  }
  if (!currTask.isCompleted) {
    const isConfirmed = confirm("Таска еще не выполнена, удалить?");
    if (!isConfirmed) {
      console.log("Удаление отменено");
      return;
    }
  }
  tasks.splice(index, 1);
};

const clearTasks = function () {
  arr.length = 0;
};
