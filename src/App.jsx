import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Contact from "./Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "styled-components"



export default function App() {
  const theme = {
    colors: {
      th_c_1: '#004f51',
      th_c_2: '#ffb400',
      th_c_3: '#ebefe9',
      th_c_4: '#000',
      th_c_5: '#fff',
    },
    fontSizes: {
      th_fs_1: '40px',
      th_fs_2: '32px',
      th_fs_3: '24px',
      th_fs_4: '18px',
    },
    fonts: {
      th_font_1: '"Kumbh Sans", sans-serif',
      th_font_2: '"Inter", sans-serif',
    },
    media: {
      th_media_xs: '@media (max-width: 576px)',
      th_media_sm: '@media (min-width: 576px)',
      th_media_md: '@media (min-width: 768px)',
      th_media_lg: '@media (min-width: 992px)',
      th_media_xl: '@media (min-width: 1200px)',
    },
  };
  
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  )
}
