import React, {useState, useEffect} from 'react'
import News from './todolist.js'
import {Context} from './context'

export default function App(){
    const [news, setNews] = useState([])
    
    const [newNews, addNews] = useState('')

    const handleClick = () =>{
        return null
    }

    useEffect(() => {
        const raw = localStorage.getItem('news') || []
        setNews(JSON.parse(raw))
    }, [])

    useEffect(()=>{
        document.addEventListener('click', handleClick)
        localStorage.setItem('news', JSON.stringify(news))
        return () =>{
            document.removeEventListener('click', handleClick)
        }
    }, [news])

    const addTask = () =>{
        if (newNews){
        const colors = ['yellow', 'red', 'white', 'green']
        const color = colors[Math.floor(Math.random() * colors.length)];
        setNews([
            ...news,
            {
                id: +new Date(),
                text: newNews,
                color: color
            }
        ])
        addNews('')}
    }

    const removeTask = id =>{
        setNews(news.filter(item =>
            {
                return item.id !== id
            }))
        }

		return(
			<Context.Provider value={{
                removeTask
            }}>
                <div className='wrap'>
				<div className='header'>
					ToDo board
					</div>
                <div className="task__add">
			        <input id='text' type='text' onChange={event => addNews(event.target.value)} value={newNews}/>
			        <button  onClick={addTask}>Add task</button>
			    </div>
				<News last_news={news}/>
			</div>
            </Context.Provider>
		)
    }



