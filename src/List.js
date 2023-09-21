import Task from "./Task";

const List = ({title, color, tasks}) =>{
    const listColor = {
        'background-color': color
    }
    return (
    <div className="list" style={listColor}>
        <h2>{title} / {tasks.length}</h2>
        {tasks.map(task => <Task title={task.title} description={task.description} date={task.date}/>)}
    </div>);
}

export default List;