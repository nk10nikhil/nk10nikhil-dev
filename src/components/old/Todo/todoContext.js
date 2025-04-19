import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        text: "Learn React",
        isCompleted: false
    }],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
    // toogle: (id) => {},
    // editTodo: () => {},
    // clearTodos: () => {},
    // setTodos: () => {}
});

export const useTodoContext = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;