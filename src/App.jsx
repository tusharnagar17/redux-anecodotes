import AnecodeList from "./components/AnecodeList";
import AnecodeForm from "./components/AnecodeForm";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter />
      <AnecodeList />
      <AnecodeForm />
    </div>
  );
};

export default App;
