import ButtonEvents from "./ButtonEvents.jsx";
import Greeter from "./Greeter.jsx";

function App() {
  return (
    <main>
      <header>
        <h1>Our React Playground</h1>
      </header>
      <Greeter firstName="John" lastName="Smith"></Greeter>
      <hr />
      <ButtonEvents />
    </main>
  );
}

export default App;
