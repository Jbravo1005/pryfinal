import HeroHome from '../components/heros/HeroHome';
import CardStudios from '../components/cards/CardStudios';
import CardServices from '../components/cards/CardServices';
import '../styles/scss/Home.scss';

const Home = () => {

  const company = {
    title: '¡Capturamos tus mejores momentos!',
    subtitle: 'Es este sentimiento de nostalgia el que nos inspira. ',
    slogan: ' Fotografiamos bodas y tenemos la seguridad que la mejor manera de contar las historias de una boda son a traves de la fotografía.',
    priceNormal: 'S/ 500',
    priceOffer: 'S/ 250'
  };

  return (
    <>
      <HeroHome
        company={company}
      />
      <CardStudios
     
        title="📷 Inicio 📷"
      
        filter=""
      />
      <CardServices
        title="📷 Servicios 📷"
        filter=""
      />
    </>
  );
}

export default Home;