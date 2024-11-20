
import './App.css';
import {Canvas} from "@react-three/fiber"; 
import Laptop from "./components/Laptop.jsx";

function App() {
  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}>
      <Laptop />
    </Canvas>
  );
}

export default App;
