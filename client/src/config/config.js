const dev = process.env.NODE_ENV !== 'production';

export const server = dev 
  ? 'http://localhost:8080' 
  : 'https://tu-dominio-backend.com'; // Reemplazar con tu dominio real

export const config = {
  server
};
