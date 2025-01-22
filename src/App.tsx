import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'

// import Example from './components/Example'

function App() {

  return (
    <>
    {/* <Example /> */}
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path='/' element={<ListEmployeeComponent />} />
      <Route path='/employees' element={<ListEmployeeComponent />} />
      <Route path='/add-employee' element={<EmployeeComponent />}/>
    </Routes>
    <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
