import Task from "./Task";

const List = ({title, color, tasks, setShow, setButtonClicked, setSelectedTask}) =>{
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
                                setSelectedTask={setSelectedTask}/>)}
    </div>);
}

export default List;