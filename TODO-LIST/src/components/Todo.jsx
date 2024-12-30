import React from 'react'

const Todo = ({ todo,deleteTodo,moveUp,moveDown,total,index,createdAt}) => {
    
    return (
        <div className='todo'>
            <div className='column' >
                <p className='text'>{todo.text}</p>
                <p className='date' style={{fontFamily:'monospace',fontSize:'10px'}} >{todo.createdAt}</p>
            </div>
            <div className='utils'>
                <div className='go-up' style={{borderBottomColor:index === 0 ? 'grey' : '#1DA1F2'}} onClick={() => moveUp(todo.id)}></div>
                <div className='go-down' style={{borderTopColor:index === total - 1 ? 'grey' : '#1DA1F2'}} onClick={() => moveDown(todo.id)}></div>
                <div className='remove'  onClick={() => deleteTodo(todo.id)}></div>
            </div>
        </div>
    )
}

export default Todo
