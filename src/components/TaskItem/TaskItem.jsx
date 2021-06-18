import React from "react";

function TaskItem(props) {
  const { task, index } = props;
  const onUpdateStatus = () => {};
  const onDelete = () => {
    props.onDelete(task.id);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={
            task.status === true ? "label label-danger" : "label label-success"
          }
          onClick={onUpdateStatus}
        >
          {task.status === true ? "Disable" : " Active"}
        </span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
