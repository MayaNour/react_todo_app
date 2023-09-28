import { useState } from "react";

const Modal = ({show, setShow, setDisabled, setToDoList, toDoList, titlepro, des, deadline}) =>{
    const [title, setTitle] = useState(titlepro);
    const [description, setDescription] = useState(des);
    const [date, setDate] = useState(deadline);


    const handleAddNewTask = (e) =>{
        const task = {title:title, description:description, date:date, stage:1};
        setToDoList([...toDoList, task]);
        setDisabled(false);
        setShow(false);
        resetForm();
        console.log(date);
        console.log(date.type);
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setDate(null);
    }

    return( show &&
        <form id="newTaskModal" onSubmit={handleAddNewTask}>
            <button type="close" onClick={()=>{setShow(false); setDisabled(false)}}>X</button>
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
            <button type="submit">Add</button>
        </form>
    )
} 

export default Modal;