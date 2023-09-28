import Task from "./Task";

const List = ({title, color, tasks}) =>{
    const listColor = {
        'backgroundColor': color
    }
    return (
    <div className="list" style={listColor}>
        <h2>{title} / {tasks.length}</h2>
        {tasks.map(task => <Task key={task.id} title={task.title} description={task.description} date={task.date}/>)}
    </div>);
}

export default List;