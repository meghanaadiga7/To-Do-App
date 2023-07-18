import React, { useState, useEffect } from "react";
import NewItem from "./components/NewItem/NewItem";
import DisplayItem from "./components/DisplayItem/DisplayItem";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://task-todo-aef84-default-rtdb.firebaseio.com/taskList.json"
      );

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  const deleteTask=async(taskId)=>{
     fetch(`https://task-todo-aef84-default-rtdb.firebaseio.com/taskList/${taskId}.json`,{
        method:"DELETE",
      }).then(response=>{
        setTasks(prevTasks=> prevTasks.filter(idValue => idValue.id!==taskId));
      })
    }

  

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskHandler = (taskItem) => {
    setTasks((prevTasks) => prevTasks.concat(taskItem));
  };



  return (
    <React.Fragment>
      <NewItem onAddItem={taskHandler}></NewItem>
      <DisplayItem
        onDelete={deleteTask}
        items={tasks}
        loading={isLoading}
        error={error}
      ></DisplayItem>
    </React.Fragment>
  );
}

export default App;
