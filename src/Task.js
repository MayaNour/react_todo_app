import ActionButton from "./ActionButton";

const Task = ({task, setShow, setButtonClicked, setSelectedTask, actions, deleteTask, checkTask, moveTask}) =>{
    const actionButtonOnclick = (action) =>{
        if(action === "edit"){
            setShow(true);  
            setButtonClicked("Edit");
            setSelectedTask(task);
        }
        else if(action === "delete")
            deleteTask(task);
        else if(action === "check")
            checkTask(task);
        else
            moveTask(task);
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