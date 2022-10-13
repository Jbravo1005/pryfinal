import PropTypes from 'prop-types';

const CardStudio = ({ id, TS, color, descripcion, precio, imagen }) => {

  const formatoMonedaSoles = (valor) => {
    return valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 });
  }

  return (
    <article className="studios__studio" key={id}>
      <figure className="studios__studio-image-container">
        <img
          src={imagen}
          alt={descripcion}
          className="studios__studio-image-container" />
      </figure>

      <div className="studios__studio-data">
        <h2 className="studios__studio-data-TS">Tipo de sesion: {TS}</h2>
        <h3 className="studios__studio-data-precio">Precio: {formatoMonedaSoles(precio)}</h3>
        <h4 className="studios__studio-data-color">Locacion: {color}</h4>
        <p className="studios__studio-data-about">{id}: {descripcion}</p>
      </div>

      <div className="studios__studio-button-container">
        <button className="studios__studio-button studios__studio-button--active">Ver</button>
        <button className="studios__studio-button">Cotizar</button>
      </div>
    </article>
  );
}

CardStudio.propTypes = {
  id: PropTypes.number.isRequired,
  TS: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired
}

CardStudio.defaultProps = {
  imagen: 'https://img.freepik.com/vector-premium/cute-dibujos-animados-novios-tarjeta-invitacion-boda_21630-737.jpg?w=740',
  precio: 0
}

export default CardStudio;