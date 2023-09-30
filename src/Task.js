import Modal from './Modal';
import edit_icon from './images/edit.png'

const Task = ({title, description, date, setShow}) =>{
    return (
    <div className="task">
        <button id="edit_button" 
                onClick={()=> setShow(true)}>
            <img src={edit_icon} alt='edit'/>
        </button>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{date}</p>
    </div>)
}

export default Task;