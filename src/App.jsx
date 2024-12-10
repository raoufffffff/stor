import { Outlet } from "react-router-dom"
import Header from "./compunent/header/Header"

function App() {

  return (
  <div
  className="w-full"
  >
    <Header />
    
    <Outlet />
  </div>
  )
}

export default App