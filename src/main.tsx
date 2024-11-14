import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SideBarProvider } from './context/SideBarContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </StrictMode>
);
