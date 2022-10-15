import '../../styles/css/Contacto.css';

const Contacto = () => {


  return (
    <main className="main">
  <section className="registration" id="registration">
    <div className="registration__container">
      <div className="registration__titles">
        <h2 className="registration__titles-title">Reserva</h2>
        <h3 className="registration__titles-message">tu sesion de fotos</h3>
      </div>

      <form className="registration__form" id="form" action="https://getform.io/f/346424ed-eec6-414f-b07f-ec22feb261ea" method="POST">
        <input name="surname" type="text" className="registration__input-text" placeholder="Nombres y Apellidos" id="nameSurname" required/>
        <input name="phone" type="tel" className="registration__input-text" placeholder="Teléfono" id="telephone" required/>
        <input name="email" type="email" className="registration__input-text" placeholder="Correo Electrónico" id="email" required/>
        <input name="place" type="text" className="registration__input-text" placeholder="Lugar del Evento" id="place" required/>
        <label className="registration__label-text" for="date">Fecha del evento</label>
        <input name="date" type="date" className="registration__input-text" placeholder="Fecha del Evento" id="date" required/>
        <label className="registration__label-text" for="message">Cuentanos como te gustaria que sea tu sesion de fotos</label>
        <textarea name="message" id="message" className="registration__text-area" rows="3"></textarea>
        <button type="submit" className="registration__button" id="button">Enviar</button>
      </form>
    </div>
  </section>
</main>    

  );
}

export default Contacto;