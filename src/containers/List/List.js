import React, { Component, Fragment } from 'react'

import Task from "./Task/Task"

import classes from "./List.module.css";

export default class List extends Component {
    state = {
        list: [
            {name:"Finish painting Tom's fence", isComplete: true},
            {name:"Prepare Lasagna for Jon's cat", isComplete: false},
            {name:"Paint a Picasso", isComplete: false}
        ]
    }

    componentDidMount() {
        console.log('[List.js] componentDidMount');
    }    

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[List.js] shouldComponentUpdate');
        // if(nextState.list[0].isComplete)
        //     return false
        return true
    }
    
    componentDidUpdate() {
        console.log('[List.js] componentDidUpdate');
    }

    toggleComplete = (event, id) => {
        const tempTask = this.state.list[id]
        tempTask.isComplete = !tempTask.isComplete
        const modifiedList = [...this.state.list]
        modifiedList[id] = tempTask

        this.setState({
            list : modifiedList
          })
    }

    editTask = (event) => {
        const fieldToEdit = event.target.previousSibling
        fieldToEdit.removeAttribute("readonly")
        fieldToEdit.focus()
    }

    reReadOnly = (event) => {
        event.target.setAttribute("readonly", true)
    }

    deleteTask = (id) => {
        const tempList = [...this.state.list]
        tempList.splice(id, 1)
        this.setState({
            list: tempList
        })
    }

    updateTask = (event, id) => {
        const tempTask =  this.state.list[id]
        tempTask.name = event.target.value
        
        const modifiedList = [...this.state.list]
        modifiedList[id] = tempTask
        this.setState({
            list : modifiedList
        })
    }

    addTask = () => {
        const modifiedList = [...this.state.list]
        modifiedList.push({name:"", isComplete:false})
        this.setState({
            list : modifiedList
        })
    }

    render() {
        const tasks = this.state.list.map((task, index) => {
            return(       
                <Task 
                    isComplete={task.isComplete} 
                    key={index}
                    reReadOnly={(event) => this.reReadOnly(event)}
                    toggleComplete={(event) => this.toggleComplete(event, index)}
                    edit={(event) => this.editTask(event, index)}
                    delete={() => this.deleteTask(index)}
                    update={(event) => this.updateTask(event, index)}
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
                        <span onClick={this.addTask}>+</span>
                    </div>
                </Fragment>
            )
    }
}
