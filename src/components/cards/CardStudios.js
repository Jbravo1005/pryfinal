import Swal from 'sweetalert2';
import useApi from '../../hooks/useApi';
import Spinner from '../Spinner';
import CardStudio from './CardStudio';
import PropTypes from 'prop-types';

const Cardstudios = ({ title, filter }) => {

  // const recurso = `/studios${filter}`;
  const recurso = `studios`;

  const [studios, error] = useApi(recurso);

  if (error) {
    Swal.fire({
      position: 'center',
      title: '¡Ha ocurrido un error! Contactar con soporte.',
      text: error,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  return (
    <section className={`studios ${filter ? '' : 'studios--pt-4'} animate__animated animate__fadeIn`}>
      <div className="studios-container">
        <h1 className="studios__title">{title}</h1>
        {
          studios.length === 0
            ?
            (
              <Spinner />
            )
            :
            (
              <div className="studios__studios">
                {studios.map(({ id, TS, color, descripcion, precio, imagen }) => {
                  return (
                    <CardStudio
                      key={id}
                      id={id}
                      TS={TS}
                      color={color}
                      descripcion={descripcion}
                      precio={precio}
                      imagen={imagen}
                    />
                  );
                })}
              </div>
            )
        }
      </div>
    </section>
  );
}

CardStudio.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string
}

export default Cardstudios;