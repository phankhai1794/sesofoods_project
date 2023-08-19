import './App.css';
import Home from "./app/Home";
import {NavbarComponent, OffcanvasExample} from "./app/NavbarComponent";

function App() {
  return (
    <div className="App">
        <Home />
        <NavbarComponent />
        <OffcanvasExample />
    </div>
  );
}

export default App;
