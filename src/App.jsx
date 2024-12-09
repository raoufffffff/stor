import { Outlet } from "react-router-dom"
import Header from "./compunent/header/Header"

function App() {

  return (
  <div
  className="w-full"
  >
    <Header />
    <div
    className="px-5"
    >
    <Outlet />
    </div>
  </div>
  )
}

export default App