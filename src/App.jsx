import AnecodeList from "./components/AnecodeList";
import AnecodeForm from "./components/AnecodeForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification />
      <Filter />
      <AnecodeList />
      <AnecodeForm />
    </div>
  );
};

export default App;
