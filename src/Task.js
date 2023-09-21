const Task = ({title, description, date}) =>{
    return (
    <div className="task">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{date}</p>
    </div>)
}

export default Task;