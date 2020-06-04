import React, { Component, Fragment } from 'react'

import Task from "./Task/Task"

import classes from "./List.module.css";

export default class List extends Component {
    state = {
        list: [
            {id: "0", name:"Finish painting Tom's fence", isComplete: true},
            {id: "1", name:"Prepare Lasagna for Jon's cat", isComplete: false},
            {id: "2", name:"Paint a Picasso", isComplete: false}
        ]
    }

    toggleComplete = (event, id) => {
        console.log(`Toogle Completion ${id}`)
    }

    editTask = (event, id) => {
        console.log(`Edit ${id}`)
    }

    deleteTask = (event, id) => {
        console.log(`Delete ${id}`)
    }

    updateTask = (event, id) => {
        console.log(`Update ${id}`)
    }

    render() {
        const tasks = this.state.list.map((task) => {
            return(       
                <Task 
                    isComplete={task.isComplete} 
                    key={task.id}
                    toggleComplete={(event) => this.toggleComplete(event, task.id)}
                    edit={(event) => this.editTask(event, task.id)}
                    delete={(event) => this.deleteTask(event, task.id)}
                    update={(event) => this.updateTask(event, task.id)}
                >
                    {task.name}
                </Task>
            )
        })

        return (
                <Fragment>
                    <ul className={classes.List}>
                        {tasks}
                    </ul>
                    <div className={classes.addItem}>
                        <span>+</span>
                    </div>
                </Fragment>
            )
    }
}
