import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";

import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  let saludo = "Hola bienvenido a Game Over";

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={saludo} />
      <CounterContainer />
    </div>
  );
}

export default App;
