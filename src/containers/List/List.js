import React, { Component } from 'react'

import Task from "./Task/Task"
import Auxiliar from './../../hoc/Auxiliar'

import classes from './List.module.css'

export default class List extends Component {
    state = {
        list: [
            {name:"Wash dishes", isCompleted: false},
            {name:"Do laundry", isCompleted: false},
            {name:"Make the bed", isCompleted: false}
        ],
        taskAdded: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("Should Component Update - List.js")
        // if(nextState.list[0].isCompleted){
        //     return true
        // }
        return true
    }

    componentDidUpdate() {
        console.log("Component Did Update - List.js\n\n\n")
        if(this.state.taskAdded) {
            document.querySelector(`li:last-of-type input`).removeAttribute("readonly")
            document.querySelector(`li:last-of-type input`).focus()
        }
    }

    deleteTask = (id) => {
        //this.state.list[0].splice(0,1)
        const tempList = [...this.state.list]
        tempList.splice(id, 1)
        this.setState({
            list: tempList
        })
    }

    addTask = () => {
        const tempList = [...this.state.list]
        tempList.push({name:"", isCompleted: false})
        this.setState({
            list: tempList
        })
        this.setState({
            taskAdded: true
        })
    }

    editTask = (id) => {
        const editedField = document.querySelector(`#task_${id} input`)
        editedField.removeAttribute("readonly")
        editedField.focus()
    }

    reReadOnly = (event) => {
        event.target.setAttribute("readonly", true)
        this.setState({
            taskAdded: false
        })
    }

    toogleComplete = (id) => {
        const tempList = [...this.state.list]
        tempList[id].isCompleted = !tempList[id].isCompleted
        this.setState({
            list: tempList
        })
    }

    updateTask = (event, id) => {
        const tempList = [...this.state.list]
        tempList[id].name = event.target.value
        this.setState({
            list: tempList
        })
    }

    render() {
        // for loop that go over every element of the list and execute a function on it, returning a new array
        const tasks = this.state.list.map((task, index) => {
            return(
                <Task 
                    completed={task.isCompleted} 
                    key={index}
                    id={index}
                    delete={() => this.deleteTask(index)}
                    toogleCompletion={() => this.toogleComplete(index)}
                    edit={() => this.editTask(index)}
                    reReadOnly={(event)=>this.reReadOnly(event)}
                    update={(event)=>this.updateTask(event, index)}
                >
                    {task.name}
                </Task>
            )
        })

        return (
            <Auxiliar>
                <ul className={classes.List}>
                    {tasks}
                </ul>
                <div 
                    className={classes.addItem}
                    onClick={this.addTask}
                >
                    <span>+</span>
                </div>
            </Auxiliar>
            )
    }
}
