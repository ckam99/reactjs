import "./assets/styles.css";
import { Provider } from "react-redux";
import "./assets/style.css";
import TodoListView from "./views/TodoList";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <TodoListView />
      </div>
    </Provider>
  );
}
