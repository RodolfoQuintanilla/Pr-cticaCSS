import Nav from "./components/Nav"
import {
  Routes,
  Route,
} from "react-router-dom";
import Imagenes from "./components/Imagenes";
import Otro from "./components/Otro";


function App() {



  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Imagenes />} />
        <Route path="otros" element={<Otro />} />
      </Routes>
    </>
  )
}

export default App
