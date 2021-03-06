import React from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList(props) {
  const { tasks, onUpdateStatus, onDelete ,onUpdateItem} = props;
  const elmTasks = tasks.map((task, index) => {
    return (
      <TaskItem
        key={index}
        index={index}
        task={task}
        onUpdateStatus={onUpdateStatus}
        onDelete={onDelete}
        onUpdateItem={onUpdateItem}
      />
    );
  });
  return (
    <div className="row ">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-30">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <select className="form-control">
                  <option value="-1">Tất Cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTasks}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
