import Navbar from "./components/Navbar"
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import ShopCatory from "./pages/ShopCatory"
import Cart from "./pages/Cart"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clothes" element={<ShopCatory category="clothes"/>}/>
        <Route path="/shoes" element={<ShopCatory category="shoes"/>}/>
        <Route path="/jewellery" element={<ShopCatory category="jewellery"/>}/>
        <Route path="/jacket" element={<ShopCatory category="jacket"/>}/>
        <Route path="/Login" element={<Navigate to='/' />}/>
        <Route path="/cart" element={<Cart /> } />
    </Routes>
    </>
  )
}

export default App
