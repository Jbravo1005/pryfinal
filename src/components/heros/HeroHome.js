import {
  Link
} from 'react-router-dom';
import PropTypes from "prop-types";
import heroImg from '../../assets/img/hero.png';


const HeroHome = ({ company }) => {

  const { title, subtitle, slogan, priceNormal, priceOffer } = company;

  return (
    <article className="hero animate__animated animate__fadeIn">
      <div className="hero-container">
        <div className="hero__message">
          <h2 className="hero__message-title">
            {title}
          </h2>
          <h1 className="hero__message-subtitle">
            {subtitle}
          </h1>
          <p className="hero__message-paragraph">
            {slogan}
          </p>
          <div className="hero__message-shopping-container">
            <div className="hero__message-cheapest-price-container">
              <span className="hero__message-cheapest-price">Desde:</span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--normal">
                {priceNormal}
              </span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--offer">
                {priceOffer}
              </span>
            </div>
            <Link to="/cupcakes" className="hero__message-buy-button">
              Cotizar
            </Link>
          </div>
        </div>
        <div className="hero__figure">
          <figure className="hero__figure-image-container">
            <img src={heroImg} alt="Imagen de portada" className="hero__figure-image" />
          </figure>
        </div>
      </div>
     
     
    </article>
  );
}

HeroHome.propTypes = {
  company: PropTypes.object
}

export default HeroHome;