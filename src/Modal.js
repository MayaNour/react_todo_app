const Modal = ({show, setShow, setDisabled}) =>{
    const handleAddNewTask = (title, description, date) =>{
        const task = {title:title, description:description, date:date};
    }

    return( show &&
        <form id="newTaskModal">
            <button type="close" onClick={()=>{setShow(false); setDisabled(false)}}>X</button>
            <label for="title">Task title*</label>
            <input name="title" type="text" placeholder="Enter your task title" required/>
            <label for="description">Description</label>
            <textarea name="description" type="text" placeholder="Enter your task description (optional)" rows="5"/>
            <label for="date">Task last date*</label>
            <input name="date" type="date" placeholder="Enter your task last date" required/>
            <button type="submit">Add</button>
        </form>
    )
} 

export default Modal;