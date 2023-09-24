import { useState } from 'react';
import './App.css';
import List from './List';
import Modal from './Modal';

const l = [
  { id:"toDo",
  title: "To do", color:"Grey", 
  tasks:[{title:"Clean the house",
          description:"you should clean the house before this date",
          date:"23.09.2023"}]},
  {id:"inProgress",
  title: "In progress", color:"#0000ff80", 
  tasks:[{title:"Clean the car",
          description:"you should clean the car before this date",
          date:"23.09.2023"}]},
  {id:"done",
  title: "Done", color:"#00ff0080", 
  tasks:[{title:"Finish 3 lessons",
          description:"",
          date:"23.09.2023"}]}];


function App() {
  const [showModal, setShowModal] = useState(false);
  const [lists, setLists] = useState(l);
  const [disabledAddButton, setDisabledAddButton] = useState(false);

  return (
    <div className="App">
      <div>
        <button onClick={()=>{setShowModal(true); setDisabledAddButton(true)}} disabled={disabledAddButton}>+ Add new task</button>
      </div>
      <div className='lists'>
      {lists.map(item =>{return <List key={item.id}  title={item.title} color={item.color} tasks={item.tasks} />})}
      </div>
      <Modal show={showModal} setShow={setShowModal} setDisabled={setDisabledAddButton}/>
    </div>
  );
}

export default App;
