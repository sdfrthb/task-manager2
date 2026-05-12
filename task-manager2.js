let tasks = [];
const completedTaskCount = 0;

class InvalidIndexError extends Error {
  constructor(message = "Введён некорректный индекс") {
    super(message);
    this.name = "InvalidIndexError";
  }
}

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
  try {
    const currTask = tasks[index];

    if (!currTask) {
      throw new InvalidIndexError();
    }

    currTask.isCompleted = true;
    currTask.completedDate = new Date();
    completedTaskCount += 1;
  } catch (e) {
    console.log(e.message);
  }
};

const deleteTask = function (index) {
  try {
    const currTask = tasks[index];
    if (!currTask) {
      throw new InvalidIndexError();
    }
    if (!currTask.isCompleted) {
      const isConfirmed = confirm("Таска еще не выполнена, удалить?");
      if (!isConfirmed) {
        console.log("Удаление отменено");
        return;
      }
    }
    tasks.splice(index, 1);
  } catch (e) {
    console.log(e.message);
  }
};

const clearTasks = function () {
  arr.length = 0;
};

const getTaskDescriptions = function () {
  if (!tasks.length) {
    console.log("Список задач пуст");
    return;
  }
  return tasks.map((task) => task.description);
};

const getLongTasks = function () {
  if (!tasks.length) {
    console.log("Список задач пуст");
    return;
  }
  return tasks.filter(
    (task) => task.title.length > 10 || task.description.length > 10
  );
};

const getTasksByDateRange = function (startDate, endDate, isCompleted = false) {
  if (!tasks.length) {
    console.log("Список задач пуст");
    return;
  }
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const filteredTasks = tasks.filter((task) => {
    const created = task.createdDate.getTime();
    const completed = task.completedDate?.getTime();

    return (
      (created >= start && created <= end) ||
      (completed && completed >= start && completed <= end)
    );
  });
  if (isCompleted) {
    return filteredTasks.filter((task) => task.isCompleted);
  }
  return filteredTasks;
};

const clearShortTasks = function () {
  if (!tasks.length) {
    console.log("Список задач пуст");
    return;
  }
  tasks = tasks.filter((task) => task.title.length >= 5);
};

const setTitle = function (index, newTitle) {
  try {
    const currTask = tasks[index];

    if (!currTask) {
      throw new InvalidIndexError();
    }

    currTask.title = newTitle;
  } catch (e) {
    console.log(e.message);
  }
};

console.log(getTasksByDateRange("2026-05-12", "2026-05-30"))
