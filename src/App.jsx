

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
  const [activeTab, setActiveTab] = useState("models")
  const [carts, setCart] = useState([]);
  // console.log(carts);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ButtonToggol carts={carts} setActiveTab={setActiveTab}></ButtonToggol>
      {activeTab === "models" ? 
      (<AiModels carts={carts} setCart={setCart} modelResponse={modelResponse}></AiModels>) 
      : 
      (<Cart carts={carts}></Cart>)}

      <Footer></Footer>
    </>
  )
}

export default App
