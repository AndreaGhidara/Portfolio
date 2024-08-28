import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CV from './pages/cv/CV.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cv",
    element: <CV />
  }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
