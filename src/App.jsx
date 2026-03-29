

import { useState } from 'react'
import './App.css'
import Footer from './Component/Footer'
import AiModels from './Component/HomePage/AiModels'
import Banner from './Component/HomePage/banner'
import Cart from './Component/HomePage/Cart'
import Navbar from './Component/Navbar'
import ButtonToggol from './Component/HomePage/ButtonToggol'

async function handelModelData() {
  const response = await fetch('/modelData.json')
  const data =await response.json();
  return data
}
const modelResponse = handelModelData();

function App() {
  const [activeTab, setActiveTab] = useState("cart")
  console.log(activeTab);
  const [carts, setCart] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ButtonToggol setActiveTab={setActiveTab}></ButtonToggol>
      {activeTab === "cart" ? 
      (<AiModels carts={carts} setCart={setCart} modelResponse={modelResponse}></AiModels>) 
      : 
      (<Cart></Cart>)}

      <Footer></Footer>
    </>
  )
}

export default App
