import { Outlet } from "react-router-dom"
import Header from "./compunent/header/Header"
import Footer from "./compunent/footer/Footer"


function App() {
  return (
  <div
  className="w-full"
  >
    <Header />
    <Outlet />
    <Footer />
  </div>
  )
}

export default App