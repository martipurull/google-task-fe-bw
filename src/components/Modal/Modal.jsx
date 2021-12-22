import { useState } from "react";
import "./Modal.css";

const { REACT_APP_URL } = process.env

export const Modal = ({ isOpen, close, type, planners }) => {
  const [select, setSelect] = useState([]);
  const [newTask, setNewTask] = useState({
    plannerId: select,
    content: "",
    done: false
  });
  const [newPlannerName, setNewPlannerName] = useState('')

  const handleAddTask = async (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      try {
        const request = await fetch(`http://localhost:3001/task`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(newTask)
        })
        return await request.json()
        close();
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
      
    } else {
      setNewTask({
        ...newTask,
        content: event.target.value
      });
    }
  }

  const handleAddPlanner = async (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      try {
        const request = await fetch(`http://localhost:3001/planner`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ name: newPlannerName })
        })
        return await request.json()
        close();
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
      
    }
  }


  return (
    <>
      {type === "task"
        ? isOpen && (
          <>
            <div className="modal__bg" onClick={() => close()}></div>
            <div className="modal__inner">
              <div className="modal__controls" onClick={() => close()}>
                x
              </div>
              <h2>Create new task</h2>
              <small>Press enter to create</small>
              <input type="text" onKeyUp={(e) => handleAddTask(e)} />
              <h3>Choose a planner</h3>
              <div className="modal__planners">
                {planners?.map((planner) => {
                  return (
                    <div className={planner.id === select ? "option__modal--click" : "option__modal"} onClick={() => setSelect(planner.id)}>
                      {planner.name}
                    </div>
                  );
                })}
              </div>
            </div>{" "}
          </>
        )
        : isOpen && type === "planner" && (
          <>
            <div className="modal__bg" onClick={() => close()}></div>
            <div className="modal__inner">
              <div className="modal__controls" onClick={() => close()}>
                x
              </div>
              <h2>Create new planner</h2>
              <small>Press enter to create</small>
              <input type="text" onChange={(e) => setNewPlannerName(e.target.value)} onKeyUp={(e) => handleAddPlanner(e)} />
            </div>
          </>
        )}
    </>
  );
};
