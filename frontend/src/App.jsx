import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Layout from "./layout/Layout.jsx"
import { GlobalStyle } from "./globalStyle.js"
import Goals from "./pages/goals/Goals.jsx"

function App() {
  return (
  <Router>
    <Layout>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Projects" element={<Goals/>}/>
      </Routes>
    </Layout>
  </Router>    
  )
}

export default App