import { Outlet } from "react-router-dom"
import Header from "./compunent/header/Header"
import Footer from "./compunent/footer/Footer"
import { AnimatePresence } from "motion/react"
import Item from "./pages/item/Item"


function App() {
  return (
  <div
  className="w-full"
  >
    <Header />
    <div
    className="mt-[100px]"
    >
<AnimatePresence>
  <Item />
</AnimatePresence>
    <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default App