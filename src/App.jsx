import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './pages/owner/Login'
import Register from './pages/owner/Register'
import Home from './pages/pulic/Home'
import About from './pages/pulic/About'
import Properties from './pages/pulic/Properties'
import PropertyDetail from './pages/pulic/PropertyDetail'
import OwnerSpace from './pages/owner/OwnerSpace'
import Dashboard from './pages/owner/Dashboard'
import AddProperty from './pages/owner/AddProperty'
import Profil from './pages/owner/Profil'
import Setting from './pages/owner/Setting'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/properties' element={<Properties />} />
      <Route path='/properties/:id' element={<PropertyDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <OwnerSpace />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="properties/new" element={<AddProperty />} />
        <Route path="profil" element={<Profil />} />
        <Route path="settings" element={<Setting />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
