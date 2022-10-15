import '../../styles/css/Categorias.css';
import civiluno from '../../assets/img/filter-image/civil1.png';
import reliuno from '../../assets/img/filter-image/reli1.png';
import playauno from '../../assets/img/filter-image/playa1.png';
import postuno from '../../assets/img/filter-image//post1.png';
import pre from '../../assets/img/filter-image/pre.png';
import civildos from '../../assets/img/filter-image/civil2.png';
import relidos from '../../assets/img/filter-image/reli2.png';
import playados from '../../assets/img/filter-image/playa2.png';
import postdos from '../../assets/img/filter-image//post2.png';
import preuno from '../../assets/img/filter-image/pre1.png';
import civiltres from '../../assets/img/filter-image/civil3.png';
import relitres from '../../assets/img/filter-image/reli3.png';
import playatres from '../../assets/img/filter-image/playa3.png';
import posttres from '../../assets/img/filter-image//post3.png';
import predos from '../../assets/img/filter-image/pre2.png';
import civilcuatro from '../../assets/img/filter-image/civil4.png';
import relicuatro from '../../assets/img/filter-image/reli4.png';
import playacuatro from '../../assets/img/filter-image/playa4.png';
import postcuatro from '../../assets/img/filter-image//post4.png';
import pretres from '../../assets/img/filter-image/pre3.png';
import civilcinco from '../../assets/img/filter-image/civil5.png';
import relicinco from '../../assets/img/filter-image/reli5.png';
import playascinco from '../../assets/img/filter-image/playa5.png';
import postcinco from '../../assets/img/filter-image//post5.png';
import precuatro from '../../assets/img/filter-image/pre4.png';


const Categorias = () => {


  return (
    <main class="main">
       <section class="cont-fotos">
           <ul>
               <li className="list active" data-filter="todos">Todos</li>
               <li className="list" data-filter="bodacivil">Boda civil</li>
               <li className="list" data-filter="bodareligiosa">Boda religiosa</li>
               <li className="list" data-filter="bodaenlaplaya">Boda  en la playa</li>
               <li className="list" data-filter="postboda">Post Boda</li>
               <li className="list" data-filter="preboda">Pre boda</li>
           </ul>
           <div className="fotos">
               <div className="itemFotos"data-item="bodacivil"><img src={civiluno} alt="foto1"/></div>
               <div className="itemFotos"data-item="bodareligiosa"><img src={reliuno} alt="foto2"/></div>
               <div className="itemFotos"data-item="bodaenlaplaya"><img src={playauno} alt="foto3"/></div>
               <div className="itemFotos"data-item="postboda"><img src={postuno} alt="foto4"/></div>
               <div className="itemFotos"data-item="preboda"><img src={pre} alt="foto5"/></div>
               <div className="itemFotos"data-item="bodacivil"><img src={civildos} alt="foto6"/></div>
               <div className="itemFotos"data-item="bodareligiosa"><img src={relidos} alt="foto7"/></div>
               <div className="itemFotos"data-item="bodaenlaplaya"><img src={playados} alt="foto8"/></div>
               <div className="itemFotos"data-item="postboda"><img src={postdos} alt="foto9"/></div>
               <div className="itemFotos"data-item="preboda"><img src={preuno} alt="foto10"/></div>
               <div className="itemFotos"data-item="bodacivil"><img src={civiltres} alt="foto11"/></div>
               <div className="itemFotos"data-item="bodareligiosa"><img src={relitres} alt="foto12"/></div>
               <div className="itemFotos"data-item="bodaenlaplaya"><img src={playatres} alt="foto13"/></div>
               <div className="itemFotos"data-item="postboda"><img src={posttres} alt="foto14"/></div>
               <div className="itemFotos"data-item="preboda"><img src={predos} alt="foto15"/></div>
               <div className="itemFotos"data-item="bodacivil"><img src={civilcuatro} alt="foto16"/></div>
               <div className="itemFotos"data-item="bodareligiosa"><img src={relicuatro} alt="foto17"/></div>
               <div className="itemFotos"data-item="bodaenlaplaya"><img src={playacuatro} alt="foto18"/></div>
               <div className="itemFotos"data-item="postboda"><img src={postcuatro} alt="foto19"/></div>
               <div className="itemFotos"data-item="preboda"><img src={pretres} alt="foto20"/></div>
               <div className="itemFotos"data-item="bodacivil"><img src={civilcinco} alt="foto21"/></div>
               <div className="itemFotos"data-item="bodareligiosa"><img src={relicinco} alt="foto22"/></div>
               <div className="itemFotos"data-item="bodaenlaplaya"><img src={playascinco} alt="foto23"/></div>
               <div className="itemFotos"data-item="postboda"><img src={postcinco} alt="foto24"/></div>
               <div className="itemFotos"data-item="preboda"><img src={precuatro} alt="foto25"/></div>
               <div className="itemFotos"data-item="bodacivil"><img src={civilcinco} alt="foto26"/></div>
               <div className="itemFotos"data-item="bodareligiosa"><img src={relicinco} alt="foto27"/></div>
               <div className="itemFotos"data-item="bodaenlaplaya"><img src={playascinco} alt="foto28"/></div>
               <div className="itemFotos"data-item="postboda"><img src={postcinco} alt="foto 29"/></div>
               <div className="itemFotos"data-item="preboda"><img src={precuatro} alt="foto30"/></div>
           </div>
       </section>
       
   </main>

  );
}

export default Categorias;