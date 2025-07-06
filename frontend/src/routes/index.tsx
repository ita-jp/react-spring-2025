import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopPage from '../pages/TopPage'
import LoginPage from '../pages/LoginPage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}
