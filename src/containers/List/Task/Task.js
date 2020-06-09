import React from 'react'

import classes from "./Task.module.css"

const Task = (props) => {
    const completedClass = props.completed ? classes.Completed : null

 return (
     <li id={`task_${props.id}`} className={completedClass}>
        <input 
            value={props.children} 
            readOnly
            onChange={props.update} 
            onBlur={props.reReadOnly} 
            onClick={props.toogleCompletion}
        ></input>
        <button className={classes.Edit} onClick={props.edit}><span role="img" aria-label="Icon of Edit button">✏️</span></button>
        <button className={classes.Remove} onClick={props.delete}><span role="img" aria-label="Icon of Delete button">❌</span></button>
     </li>
 )   
}

export default Task