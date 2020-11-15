import React, {useState, useContext} from 'react'
import {Context} from './context'

export default function Article({text, color, id}){

    const {removeTask} = useContext(Context)
    const colorTask = "add__news "+color
    return(
        <div className={colorTask}>
            <p className="text">{text}</p>
            <div className="add__news__rating__block">
                <button className='remove__task' onClick={() => removeTask(id)}></button>		
            </div>
        </div>
    )
}