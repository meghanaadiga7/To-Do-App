import React, { useState } from "react";
import NewForm from "./NewForm";

const NewItem = (props) => {
  const [error, setError] = useState(null);
  const newTaskHandler = async (newTask) => {
    setError(null);
    try {
      const response = await fetch(
        "https://task-todo-aef84-default-rtdb.firebaseio.com/taskList.json",
        {
          method: "POST",
          body: JSON.stringify({ text: newTask }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed!!");
      }
      const data = await response.json();
      const generatedData = data.name;
      const createdTask = {
        id: generatedData,
        text: newTask,
      };
      props.onAddItem(createdTask);
    } catch (err) {
      setError(err.message && "Something went wrong");
    }
  };
  return <NewForm onAddTask={newTaskHandler}>{error && <p>Error</p>}</NewForm>;
};
export default NewItem;
