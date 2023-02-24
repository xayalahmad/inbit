import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Header2 from "./component/Header2/Header2";
import { Home } from "./component/Home";
import styles from "./reset.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/Theme.js'
import { Catalog } from "./component/CourseCatalog/Catalog";
import About  from "./component/About/About";
import Contact  from "./component/Contact/Contact";
// import Certificate  from "./component/certificate/Certificate";
// import Course  from "./component/course/course";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Header2 />
        <Routes>
          {/* <Route exact path="/certificate" element={<Certificate />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/course" element={<Course />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
