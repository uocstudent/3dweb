import React, { useMemo } from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb');
  
    const logoTexture = useTexture(snap.logoDecal || '');
    const fullTexture = useTexture(snap.fullDecal || '');
  
    // cambiar el color del material de la camiseta
    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

    // Usar useMemo para evitar recálculos innecesarios
    const uniqueKey = useMemo(() => {
      return `${snap.logoDecal}-${snap.fullDecal}-${snap.color}`;
    }, [snap.logoDecal, snap.fullDecal, snap.color]);

    return (
        <group key={uniqueKey}>
          <mesh
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1}
            material-roughness={1}
            dispose={null}
          >
             {snap.isFullTexture && fullTexture && (
               <Decal 
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={1}
                map={fullTexture}
                transparent={true}
                depthTest={true}
                depthWrite={true}
              />
             )}

              {snap.isLogoTexture && logoTexture && (
               <Decal 
               position={[0.05, 0.04, 0.15]}
               rotation={[0, 0, 0]}
               scale={0.10}
               map={logoTexture}
               transparent={true}
               depthTest={true}
               depthWrite={true}
              />
        )} 
          </mesh>
        </group>
      )
}

export default Shirt