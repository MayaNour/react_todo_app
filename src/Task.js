import ActionButton from "./ActionButton";

const Task = ({task, setShow, setButtonClicked, setSelectedTask, actions}) =>{
    const actionButtonOnclick = (action) =>{
        if(action === "edit"){
            setShow(true);  
            setButtonClicked("Edit");
        }
        setSelectedTask(task);
    }

    return (
    <div className="task">
        <div className='details'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.date}</p>
        </div>
        <div className='actions'>
            {actions.map(element => <ActionButton action={element} setAction={actionButtonOnclick}/>)}
        </div>
    </div>)
}

export default Task;