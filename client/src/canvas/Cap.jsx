// src/canvas/Cap.jsx
import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { easing } from 'maath'
import state from '../store'

export default function Cap() {
  const snap = useSnapshot(state)
  const { scene } = useGLTF('/cap.glb');

  useEffect(() => {
    console.log('Modelo cargado:', scene);
    // Verificar la estructura del modelo
    scene.traverse((child) => {
      console.log('Objeto en la escena:', {
        name: child.name,
        type: child.type,
        isMesh: child.isMesh,
        material: child.material
      });
    });
  }, [scene]);

  // Apply color change to all materials in the cap
  useFrame((state, delta) => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        easing.dampC(child.material.color, snap.color, 0.25, delta)
      }
    })
  })

  return (
    <primitive 
      object={scene}
      scale={0.03}
      position={[0, 0.5, 0]}
      rotation={[0, 0, 0]}
    />
  )
}
