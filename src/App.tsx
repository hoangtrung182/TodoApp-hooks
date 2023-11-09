import ListTodo from './components/ListTodo'
import TodosContextProvider from './context/todo'

const App = () => {
  return (
    <div>
      <TodosContextProvider>
        <ListTodo />
      </TodosContextProvider>
    </div>
  )
}

export default App