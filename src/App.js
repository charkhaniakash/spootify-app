import {Route , Routes} from "react-router-dom"
import './App.css';
import AddSongs from "./components/AddSongs";
import Home from './components/Home';
import AddArtist from "./components/AddArtist"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/add-Songs">{<AddSongs/>}</Route>
      <Route path="/add-Artist">{<AddArtist/>}</Route>

    </Routes>
    </div>
  );
}

export default App;
