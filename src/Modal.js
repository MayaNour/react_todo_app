import { useState } from "react";

const Modal = ({setShow, handleSubmit, selectedTask, buttonClicked, setSelectedTask}) =>{
    const task = {...selectedTask};
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [date, setDate] = useState(task.date);

    const submit = () =>{
        const newId = Math.floor((Math.random() * 100) + 1);
        const task = {id: (buttonClicked === "Add" ?  newId : selectedTask.id), 
                      title:title, 
                      description:description, 
                      date:date, 
                      stage: (buttonClicked === "Add" ? 1 : selectedTask.stage)};
        handleSubmit(task);
        resetForm();
        setShow(false);
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setDate(null);
        setSelectedTask({});
    }

    const handleClose = () =>{
        setShow(false);
        resetForm();
    }

    return(
        <form id="newTaskModal" onSubmit={submit}>
            <button type="close" onClick={handleClose}>X</button>
            <label for="title">Task title*</label>
            <input name="title" 
                   type="text" 
                   value={title}
                   onChange={(e) => setTitle(e.target.value)} 
                   placeholder="Enter your task title" required/>
            <label for="description">Description</label>
            <textarea name="description" 
                      type="text" 
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)} 
                      placeholder="Enter your task description (optional)" 
                      rows="5"/>
            <label for="date">Task last date*</label>
            <input name="date" 
                   type="date" 
                   value={date}
                   onChange={(e) => setDate(e.target.value)}
                   min={new Date().toISOString().split('T')[0]}  
                   placeholder="Enter your task last date" required/>
            <button type="submit">{buttonClicked}</button>
        </form>
    )
} 

export default Modal;