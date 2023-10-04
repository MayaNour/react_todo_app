import { useState } from 'react';
import './App.css';
import List from './List';
import Modal from './Modal';

const lists = [{id:"toDo", title: "To do", color:"Grey", stage:1},
               {id:"inProgress", title: "In progress", color:"#0000ff80", stage:2},
               {id:"done", title: "Done", color:"#00ff0080", stage:3}];
  
const tasks =[{id:1,
              title:"Clean the house",
              description:"you should clean the house before this date",
              date:"2023-10-05",
              stage:1},
              {id:2,
              title:"Clean the car",
              description:"you should clean the car before this date",
              date:"2023-11-09",
              stage:2},
              {id:3,
              title:"Finish 3 lessons",
              description:"",
              date:"2023-10-14",
              stage:3}]

function App() {
  const [showModal, setShowModal] = useState(false);
  const [buttonClicked, setButtonClicked] = useState('');
  const [selectedTask, setSelectedTask] = useState();
  const [toDoList, setToDoList] = useState(tasks.filter(function(task){return task.stage === 1}));
  const [inProgressList, setInProgressList] = useState(tasks.filter(function(task){return task.stage === 2}));
  const [doneList, setDoneList] = useState(tasks.filter(function(task){return task.stage === 3}));

  const handlelistTask = (stage) =>{
    switch (stage){
      case 1: return toDoList;
      case 2: return inProgressList;
      default: return doneList;
    }
  }

  const AddTask = (task) =>{
    setToDoList([...toDoList, task]);
  }

  const updateTaskList = (task, taskList, listSetter, action) => {
    let newState;
    if(action === "edit")
      newState = taskList.map(t => t.id === task.id ? task : t);
    else if(action === "delete")
      newState = taskList.filter(t => t.id !== task.id);
    listSetter(newState);
  };

  const editTask = (task) =>{
    if (task.stage === 1)
      updateTaskList(task, toDoList, setToDoList, "edit");
    else if (task.stage === 2) 
      updateTaskList(task, inProgressList, setInProgressList, "edit");
    else
      updateTaskList(task, doneList, setDoneList, "edit");
    }
  
  const deleteTask = (task) =>{
    if (task.stage === 1)
      updateTaskList(task, toDoList, setToDoList, "delete");
    else if (task.stage === 2) 
      updateTaskList(task, inProgressList, setInProgressList, "delete");
    else
      updateTaskList(task, doneList, setDoneList, "delete");
  }

  const checkTask = (task) =>{
    setDoneList([...doneList, {...task, stage:3}]);
    if(task.stage === 1)
      updateTaskList(task, toDoList, setToDoList, "delete");
    else
      updateTaskList(task, inProgressList, setInProgressList, "delete");
  }

  const moveTask = (task) =>{
    if(task.stage === 1)
      {
        setInProgressList([...inProgressList, {...task, stage:2}]);
        updateTaskList(task, toDoList, setToDoList, "delete");
      }
    else
      {
        setDoneList([...doneList, {...task, stage:3}]);
        updateTaskList(task, inProgressList, setInProgressList, "delete");     
      }

  }

  return (
    <div className="App">
      {showModal ? <Modal setShow={setShowModal}
                          buttonClicked={buttonClicked}
                          selectedTask={selectedTask}
                          setSelectedTask={setSelectedTask} 
                          handleSubmit={buttonClicked === "Add" ? AddTask : editTask}/> : 
      <>
        <div>
          <button onClick={()=>{setShowModal(true); setButtonClicked("Add")}}>+ new task</button>
        </div>
        <div className='lists'>
        {lists.map((item) =>{return <List key={item.id}  
                                          title={item.title} 
                                          color={item.color} 
                                          tasks={handlelistTask(item.stage)}
                                          setButtonClicked={setButtonClicked}
                                          setShow={setShowModal}
                                          setSelectedTask={setSelectedTask}
                                          deleteTask={deleteTask}
                                          checkTask={checkTask}
                                          moveTask={moveTask}/>})}
        </div>
      </>}
    </div>
  );
}

export default App;
