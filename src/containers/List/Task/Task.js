import React from 'react'

import classes from "./Task.module.css"

const Task = (props) => {
    const classList = props.isComplete ? classes.Completed : null
    return(
        <li className={classList} onClick={props.complete}>
            <input 
                readOnly 
                value={props.children} 
                onChange={props.update} 
                onBlur={props.reReadOnly} 
                onClick={props.toggleComplete}
            ></input>
            <button className={classes.Edit} onClick={props.edit}>✏️</button>
            <button className={classes.Remove} onClick={props.delete}>❌</button>
        </li>
    )
}

export default Task