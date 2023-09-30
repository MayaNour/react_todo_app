import { useState } from "react";

const Modal = ({setShow, handleSubmit, titlepro, des, deadlineDate, buttonClicked}) =>{
    const [title, setTitle] = useState(titlepro);
    const [description, setDescription] = useState(des);
    const [date, setDate] = useState(deadlineDate);


    const submit = () =>{
        const task = {id:Math.floor((Math.random() * 100) + 1), 
                      title:title, 
                      description:description, 
                      date:date, 
                      stage:1};
        handleSubmit(task);
        setShow(false);
        resetForm();
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setDate(null);
    }

    return(
        <form id="newTaskModal" onSubmit={submit}>
            <button type="close" onClick={()=>{setShow(false)}}>X</button>
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