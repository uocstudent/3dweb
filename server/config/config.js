const dev = process.env.NODE_ENV !== 'production';

const config = {
  port: process.env.PORT || 8080,
  cors: {
    origin: dev 
      ? 'http://localhost:3000'
      : 'https://tu-dominio-frontend.com', // Reemplazar con tu dominio real
    credentials: true
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY
  }
};

export default config; 