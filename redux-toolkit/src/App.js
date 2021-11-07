import Counter from "./components/Counter";
import { useSelector } from 'react-redux'

function App() {

  const count = useSelector((state) => state.counter.count)
  return (
    <div className="App">
      <h1>global counter: {count}</h1>
      <Counter />
    </div>
  );
}

export default App;
