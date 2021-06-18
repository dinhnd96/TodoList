import React, { useState } from "react";

function TaskForm(props) {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const { isDisplayForm, onCloseForm } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(name, status === "1" ? true : false);
    }
  };
  const onClear = () => {
    setName("");
    setStatus(true);
  };
  return (
    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title" onClick={onCloseForm}>
            Thêm Công Việc
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="1">Kích Hoạt</option>
              <option value="0">Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
