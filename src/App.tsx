import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState, useEffect } from 'react'
import AuthService from './services/AuthService'
import SidebarComponent from './components/SidebarComponent'
import AboutComponent from './components/AboutComponent'
import EditEmployee from './pages/EditEmployee'
import AdminComponent from './components/AdminComponent'

// import Example from './components/Example'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    setIsAuthenticated(AuthService.isLoggedIn())
  }, [])

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  // Protected Route Component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />
    }
    return <>{children}</>
  }

  return (
    <>
      {/* <Example /> */}
      <BrowserRouter>
        {/* Only show header if authenticated */}
        {isAuthenticated && <HeaderComponent toggleSidebar={toggleSidebar} />}

        <div className="d-flex">
          {isAuthenticated && isSidebarVisible && <SidebarComponent handleLogout={handleLogout} />}
          <div className="flex-grow-1">
            <Routes>
              {/* Default route redirects to login if not authenticated, otherwise to employees */}
              <Route
                path="/"
                element={
                  isAuthenticated ?
                    <Navigate to="/employees" /> :
                    <Navigate to="/login" />
                }
              />

              {/* Auth routes */}
              <Route
                path="/login"
                element={
                  isAuthenticated ?
                    <Navigate to="/employees" /> :
                    <Login onLoginSuccess={handleLogin} />
                }
              />
              <Route path="/register" element={<Register />} />

              {/* Protected routes */}
              <Route
                path="/admins"
                element={
                  <ProtectedRoute>
                    <AdminComponent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <ProtectedRoute>
                    <ListEmployeeComponent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-employee"
                element={
                  <ProtectedRoute>
                    <EmployeeComponent />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/edit-employee/:id" element={<EditEmployee />} />
            </Routes>
          </div>
        </div>

        {/* Only show footer if authenticated */}
        {isAuthenticated && <FooterComponent />}
      </BrowserRouter>
    </>
  )
}

export default App
