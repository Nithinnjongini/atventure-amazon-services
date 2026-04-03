import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { AmazonServicesPage } from './pages/AmazonServicesPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { RetailFoundationsPage } from './pages/RetailFoundationsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ValuesPage } from './pages/ValuesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/amazon-services" element={<AmazonServicesPage />} />
        <Route path="/retail-foundations" element={<RetailFoundationsPage />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
