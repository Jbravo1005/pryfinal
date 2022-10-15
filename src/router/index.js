import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Contacto from "../components/contacto/Contacto";
import Categorias from "../components/categorias/Categorias";


const Router =()=>{

  return(

    <BrowserRouter>
      <Header/>
      <Hero/>


    <main className="main">
        
      <Routes>        
        <Route path="/categorias" element={<Categorias/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </main>
      <Footer/>
      
    </BrowserRouter>

  )

}

export default Router;