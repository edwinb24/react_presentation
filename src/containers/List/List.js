import React, { Component, Fragment } from 'react'

import classes from "./List.module.css";

export default class List extends Component {
    render() {
        return (
                <Fragment>
                    <ul className={classes.List}>
                        <li className={classes.Completed}><span>Do Homework</span><button className={classes.Edit}>✏️</button><button className={classes.Remove}>❌</button></li>
                        <li><span>Throw Trash</span><button className={classes.Edit}>✏️</button><button className={classes.Remove}>❌</button></li>
                        <li><span>Pick up kids</span><button className={classes.Edit}>✏️</button><button className={classes.Remove}>❌</button></li>
                    </ul>
                    <div className={classes.addItem}>
                        <span>+</span>
                    </div>
                </Fragment>
            )
    }
}
