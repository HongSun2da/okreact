import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import App from './App'
import About from './About'
import Header from './Header'
import Contact from './pages/Contact'
import MyPage from './pages/MyPage'
import AjaxTest from './pages/AjaxTest'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/pages/mypage" element={<MyPage />} />
        <Route path="/pages/ajaxtest" element={<AjaxTest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
