import Modal from './Modal';
import edit_icon from './images/edit.png'

const Task = ({task, setShow, setButtonClicked, setSelectedTask}) =>{
    return (
    <div className="task">
        <button id="edit_button" 
                onClick={()=> {setShow(true); setButtonClicked("Edit"); setSelectedTask(task)}}>
            <img src={edit_icon} alt='edit'/>
        </button>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.date}</p>
    </div>)
}

export default Task;