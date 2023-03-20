export const ShowTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleDelete = (id) => {
    setTasklist(taskList.filter((dTask) => dTask.id !== id));
  };

  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            setTasklist([]);
          }}
        >
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                onClick={() => {
                  handleEdit(task.id);
                }}
                className="bi bi-pen"
              ></i>
              <i
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="bi bi-trash"
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
