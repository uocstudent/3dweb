import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '../store';

import Shirt from './Shirt';
import Shoe from './Shoe';
import Cap from './Cap';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const snap = useSnapshot(state);
  
  console.log('Canvas State:', { product: snap.product, step: snap.step });

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
      style={{ background: '#fff' }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        {snap.step === 'home' && (
          <group position={[0.5, 0.1, 0]}>
            <Shirt />
          </group>
        )}
        {snap.step === 'customize' && (
          <>
            {snap.product === 'shirt' && <Shirt />}
            {snap.product === 'shoe' && (
              <group position={[0, 0, 0]}>
                <Center>
                  <Shoe />
                </Center>
                <OrbitControls 
                  enableZoom={true}
                  enablePan={true}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                />
              </group>
            )}
            {snap.product === 'cap' && (
              <group position={[0, 0, 0]}>
                <Center>
                  <Cap />
                </Center>
                <OrbitControls 
                  enableZoom={true}
                  enablePan={true}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                />
              </group>
            )}
          </>
        )}
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel