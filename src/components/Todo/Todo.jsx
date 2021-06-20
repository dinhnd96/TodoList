import React, { useEffect, useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import Control from "../Control/Control";
import TaskList from "../TaskList/TaskList";

function Todo(props) {
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [tasks, setTask] = useState([]);
  const [taskEditing, setTaskEditing] = useState([])
  useEffect(() => {
    const data = localStorage.getItem("task");
    if (data) {
      setTask(JSON.parse(data));
      console.log(JSON.parse(data));
    }
  }, []);
  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }
  const onCloseForm = () => {
    setIsDisplayForm(false);
  };
  const onShowForm = () => {
    setIsDisplayForm(true);
  };
  const onSubmit = (name, status, id) => {
    if (id === undefined) {
      const itemFromForm = {
        id: guidGenerator(),
        name: name,
        status: status,
      };

      tasks.push(itemFromForm);
      setTask(tasks);
    } else {
      console.log(1);
    }
    setIsDisplayForm(false);
    localStorage.setItem("task", JSON.stringify(tasks));
    console.log(tasks);
  };
  const elmTasksForm = isDisplayForm ? (
    <TaskForm
      isDisplayForm={isDisplayForm}
      onCloseForm={onCloseForm}
      onSubmit={onSubmit}
      taskEditing={taskEditing}
    />
  ) : (
    ""
  );

  const onGenerateData = () => {
    const tasks = [
      {
        id: guidGenerator(),
        name: guidGenerator(),
        status: true,
      },
      {
        id: guidGenerator(),
        name: guidGenerator(),
        status: true,
      },
      {
        id: guidGenerator(),
        name: guidGenerator(),
        status: false,
      },
    ];
    setTask(tasks);
  };

  const onToggleForm = () => {
    setIsDisplayForm(!isDisplayForm);
  };

  const findIndex = (id) => {
    // console.log("id", id);

    let tmp = -1;
    tasks.forEach((task, index) => {
      // console.log("task.id", task.id);

      if (task.id === id) {
        tmp = index;
      }
    });
    // console.log("tmp", tmp);
    return tmp;
  };

  const onUpdateStatus = (id) => {
    const index = findIndex(id);
    if (index != -1) {
      tasks[index].status = !tasks[index].status;
      setTask([...tasks]);
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  };
  const onDelete = (id) => {
    const index = findIndex(id);
    // console.log("index", index);
    if (index !== -1) {
      tasks.splice(index, 1);
      setTask([...tasks]);
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  };
  const onUpdateItem = (id) => {
    const index = findIndex(id);
    console.log("index", index);
    const taskEditing = tasks[index]
    console.log(taskEditing);
    setTaskEditing(taskEditing)
    onShowForm(true)
  }
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        {elmTasksForm}
        <div
          className={
            isDisplayForm
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={onToggleForm}
          >
            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={onGenerateData}
          >
            <span className="fa fa-plus mr-5 "></span>Generate Data
          </button>
          <Control />
          <TaskList
            tasks={tasks}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
            onUpdateItem={onUpdateItem}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
