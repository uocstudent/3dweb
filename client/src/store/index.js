import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#D2960E', 
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo.png',
  fullDecal: './logo.png',

   // NUEVOS CAMPOS para navegación y selección
   product: 'shirt', // 'shirt' | 'shoe' | 'cap'
   step: 'home',     // 'home' | 'select' | 'customize'
});

export default state;