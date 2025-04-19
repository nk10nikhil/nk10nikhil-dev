import { useEffect, useState } from 'react'
import { TodoProvider } from './todoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


function Todo() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos([...todos, todo])
    setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos])
  }

  const updateTodo = (id, todo) => {
    // setTodos((prevTodos) => {
    //   return prevTodos.map((t) => t.id === id ? {...t, ...todo} : t)
    // })
        setTodos((prevTodos) => prevTodos.map((prev) => prev.id === id ? todo : prev))
  }

  const removeTodo = (id) => {
    // setTodos((prevTodos) => {
    //   return prevTodos.filter((t) => t.id !== id)
    // })
        setTodos((prevTodos) => prevTodos.filter((prev) => prev.id !== id))
  }

  const toggleTodo = (id) => {
    // setTodos((prevTodos) => {
    //   return prevTodos.map((t) => t.id === id ? {...t, isCompleted: !t.isCompleted} : t)
    // })
        setTodos((prevTodos) => prevTodos.map((prev) => prev.id === id ? {...prev, isCompleted: !prev.isCompleted} : prev))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8 mx-10 rounded-2xl">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            // <TodoItem key={todo.id} todo={todo} />
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default Todo
