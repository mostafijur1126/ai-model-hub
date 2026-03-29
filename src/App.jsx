

import './App.css'
import Footer from './Component/Footer'
import AiModels from './Component/HomePage/AiModels'
import Banner from './Component/HomePage/banner'
import Navbar from './Component/Navbar'

async function handelModelData() {
  const response = await fetch('/modelData.json')
  const data =await response.json();
  return data
}
const modelResponse = handelModelData();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AiModels modelResponse={modelResponse}></AiModels>
      <Footer></Footer>
    </>
  )
}

export default App
