import { useState } from 'react';
import './App.css';
import List from './List';
import Task from './Task';

const l = [
  {title: "To do", color:"Grey", 
  tasks:[{title:"Clean the house",
          description:"you should clean the house before this date",
          date:"23.09.2023"}]},
  {title: "In progress", color:"#0000ff80", 
  tasks:[{title:"Clean the car",
          description:"you should car the house before this date",
          date:"23.09.2023"}]},
  {title: "Done", color:"#00ff0080", 
  tasks:[{title:"Finish 3 lessons",
          description:"",
          date:"23.09.2023"}]},];


function App() {
  const [lists, setLists] = useState(l);

  return (
    <div className="App">
      <div><button>Add new task</button></div>
      <div className='lists'>
      {lists.map(item =>{return <List  title={item.title} color={item.color} tasks={item.tasks} />})}
      </div>
    </div>
  );
}

export default App;
