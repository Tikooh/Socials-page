import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SocialMediaProvider } from './context/AccountProvider.tsx'
import { SlimeProvider } from './context/SlimeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocialMediaProvider>
      <SlimeProvider>
        <App />
      </SlimeProvider>
    </SocialMediaProvider>
  </StrictMode>,
)
