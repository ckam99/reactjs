import { Provider } from "react-redux";
import UserView from "./features/users/UserView";
import { CakeView } from "./features/cakes/views/CakeView";
import store from "./contrib/store";
import "./assets/style.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <CakeView />
        <UserView />
      </div>
    </Provider>
  );
}
