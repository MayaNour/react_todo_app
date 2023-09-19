import './App.css';
import List from './List';
import Task from './Task';

const tasks_lists = [
  {title: "To do", color:"blue"},
  {title: "In progress", color:"yellow"},
  {title: "Done", color:"red"}];


function App() {
  return (
    <div className="App">
      {tasks_lists.map(item =>{
        return <List>
          <Task title={"Clean the house"} description={"you should clean the house before this date"} date={"23.09.2023"}/>
        </List>
      })}
    </div>
  );
}

export default App;
