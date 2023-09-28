import { useState } from 'react';
import './App.css';
import List from './List';
import Modal from './Modal';

const lists = [{id:"toDo",
          title: "To do", 
          color:"Grey",
          stage:1},
          {id:"inProgress",
          title: "In progress", 
          color:"#0000ff80",
          stage:2},
          {id:"done",
          title: "Done", 
          color:"#00ff0080",
          stage:3}];
  
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
  const [disabledAddButton, setDisabledAddButton] = useState(false);
  const [toDoList, setToDoList] = useState(tasks.filter(function(task){return task.stage === 1}));
  const [inProgressList, setInProgressList] = useState(tasks.filter(function(task){return task.stage === 2}));
  const [doneList, setDoneList] = useState(tasks.filter(function(task){return task.stage === 3}));

  const handlelistTask = (stage) =>{
    switch (stage){
      case 1: return toDoList;
      case 2: return inProgressList;
      case 3: return doneList;
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={()=>{setShowModal(true); setDisabledAddButton(true)}} disabled={disabledAddButton}>+ new task</button>
      </div>
      <div className='lists'>
      {lists.map((item,index) =>{return <List key={item.id}  title={item.title} color={item.color} tasks={handlelistTask(item.stage)} />})}
      </div>
      <Modal show={showModal} setShow={setShowModal} setDisabled={setDisabledAddButton} setToDoList={setToDoList} toDoList={toDoList}/>
    </div>
  );
}

export default App;
