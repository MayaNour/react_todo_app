import Task from "./Task";
import edit_icon from './images/edit.png';
import delete_icon from './images/delete.png'
import check_icon from './images/checked.png'
import move_icon from './images/move-right.png'

const List = ({title, color, tasks, setShow, setButtonClicked, setSelectedTask, deleteTask, checkTask, moveTask}) =>{
    const actions = [{action: "edit", image: edit_icon}, 
                    {action: "delete", image: delete_icon}, 
                    {action: "check", image: check_icon}, 
                    {action: "next", image: move_icon}];

    const listColor = {
        'backgroundColor': color
    }
    return (
    <div className="list" style={listColor}>
        <h2>{title} / {tasks.length}</h2>
        {tasks.map(task => <Task key={task.id} 
                                task={task} 
                                setShow={setShow} 
                                setButtonClicked={setButtonClicked}
                                setSelectedTask={setSelectedTask}
                                actions={task.stage !== 3 ? actions : actions.slice(0, 2)}
                                deleteTask={deleteTask}
                                checkTask={checkTask}
                                moveTask={moveTask}/>)}
    </div>);
}

export default List;