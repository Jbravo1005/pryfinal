import '../../styles/css/Footer.css';

const Footer = () => {


  return (
    <footer className="footer">
   
      <section className="footer__supercontainer">
        <div className="footer__container">
            <div className="footer__container-box1">
              <div className="footer__container-logo">
                <img src="/assets/img/FooterL.png" alt="Logo2 Company" width="128" height="132"/>
              </div>
              <div className="footer__container-paragraph">
                <p className="footer__container-parrafo">Reserve su fecha para una hermosa experiencia .</p>
              </div>      
            </div>
            
            <div className="footer__container-box2">
              <h4 className="footer__container-subtitle">Nosotros</h4>
              <ul className="footer__container-menulist">
                <li className="footer__container-list">
                  <a className="footer__container-ancla" href="#">Acerca</a>
                </li>
                <li className="footer__container-list">
                  <a href="#">Historia</a>
                </li>
                <li className="footer__container-list">
                  <a href="#">Testimonios</a>
                </li>
              </ul>
            </div>

            <div className="footer__container-box2">
              <h4 className="footer__container-subtitle">Contacto</h4>
              <ul className="footer__container-menulist">
                <li className="footer__container-list">
                  <a href="#">FAQ</a>
                </li>
                <li className="footer__container-list">
                  <a href="#">Llamanos</a>
                </li>
                <li className="footer__container-list">
                  <a href="#">Afíliate</a>
                </li>
              </ul>
            </div>

            <div className="footer__container-box2">
              <h4 className="footer__container-subtitle">Legales</h4>
              <ul className="footer__container-menulist">
                <li className="footer__container-list">
                  <a href="#">Terminos y condiciones</a>
                </li>
                <li className="footer__container-list">
                  <a href="#">Politicas de cookies</a>
                </li>
                <li className="footer__container-list">
                  <a href="#">Politicas de privacidad</a>
                </li>
              </ul>    
            </div>

            <div className="footer__container-box3">
                <div className="footer__media-icons">
                  <a id="facebook" href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a id="instagram" href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a id="twitter" href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a id="whatsapp" href="#">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>   

          </div>
        </section>

        <section class="footer__container-box4">
          <h5> Copyright © 2022 Jk Studio, S.R.L. <i class="bi bi-c-circle"></i> </h5>
        </section>
      
    </footer>

  );
}

export default Footer;