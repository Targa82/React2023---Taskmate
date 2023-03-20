import { useState } from "react";
export const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      setTasklist([
        ...taskList,
        {
          id: new Date().getTime(),
          name: task.name,
          time: `${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}`,
        },
      ]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          value={task.name || ""}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
