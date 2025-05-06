import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Base64 from './components/tools/Base64'
import Home from './components/Home'
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/base64-encoder-decoder" element={<Base64 />} />
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
