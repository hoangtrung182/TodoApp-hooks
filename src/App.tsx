import StateContextProvider from "./context/header-sidebar";
import TodosContextProvider from "./context/todo";
import Routers from "./router";

const App = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <StateContextProvider>
        <TodosContextProvider>
          <Routers />
        </TodosContextProvider>
      </StateContextProvider>
    </div>
  );
};

export default App;
