import {Route , Routes} from "react-router-dom"
import './App.css';
import AddSongs from "./components/AddSongs";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/add-Songs">{<AddSongs/>}</Route>
    </Routes>
    </div>
  );
}

export default App;
