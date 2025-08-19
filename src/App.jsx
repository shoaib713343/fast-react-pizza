import { createBrowserRouter } from "react-router-dom";
import Home from './ui/Home'
createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  const x = 23;
  return (
    <div>
      Hello vite
    </div>
  )
}

export default App
