import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopPage from '../pages/TopPage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/test" element={<TopPage />} />
      </Routes>
    </Router>
  )
}
