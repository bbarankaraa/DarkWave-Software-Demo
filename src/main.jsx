import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ZaferVipPage from './Pages/zafervip.jsx';
import KarenVipPage from './Pages/Karenvip.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/zafervip",
    element: <ZaferVipPage />
  },
  {
    path: "/karenvip",
    element: <KarenVipPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
