import "./App.css";
import Clicker from "./components/Clicker";
import { Tiriye } from "./components/counter";
import DashBoard from "./components/DashBoard";
import Greeting from "./components/greetings";
import Header from "./components/Header";
import Inputter from "./components/Inputter";
import Notification from "./components/Notification";
import ThemeToggle from "./components/ThemeSwitcher";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <ThemeToggle />
      <WelcomeMessage isLoggedIn={true} />
      <Header />
      <Notification hasNewMessages={false} />
      <DashBoard isLoggedIn />
      <Greeting name="Muna" surname="Osman" />
      <Clicker />
      <Greeting name="Muna" surname="Osman" />
      <Inputter />

      <Tiriye />
    </>
  );
}

export default App;
