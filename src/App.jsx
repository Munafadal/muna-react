import "./App.css";
import Counter from "./components/counter";
import Greeting from "./components/greetings";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Greeting name="Muna" surname="Osman" />
      <Counter />
    </>
  );
}

export default App;
