import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction
  ? 'https://deviego.vercel.app/email'
  : 'http://localhost:3000/email';

export const api = axios.create({
  baseURL: base
});
