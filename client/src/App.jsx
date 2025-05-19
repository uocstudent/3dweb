import { useSnapshot } from 'valtio';
import state from './store';

import Home from './pages/Home';
import ProductSelection from './pages/ProductSelection';
import Customizer from './pages/Customizer';
import Canvas from './canvas'; // Tu componente 3D principal

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      {snap.step === 'home' && (
        <>
          <Home />
          <Canvas />
        </>
      )}
      {snap.step === 'select' && <ProductSelection />}
      {snap.step === 'customize' && (
        <>
          <Canvas />
          <Customizer />
        </>
      )}
    </main>
  );
}

export default App;
