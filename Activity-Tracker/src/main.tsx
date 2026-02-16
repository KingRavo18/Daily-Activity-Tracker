import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Style/index.css';
import Connect from './Webpage-Connect/Connect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Connect />
  </StrictMode>,
)