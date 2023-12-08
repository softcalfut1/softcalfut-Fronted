import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid menu-ppal">
        <ul className="justify-content-center mx-auto">
          <li><a href="/" target="_self"><i className="fa fa-home"></i> INICIO</a></li>
          <li><a href="/somos-laf" target="_self"><i className="fa fa-building"></i> Somos LCF</a>
            <ul>
              <li><a href="/somos-laf/historia" target="_self"> Historia</a></li>
              <li><a href="/somos-laf/comite-ejecutivo" target="_self"> Comité Ejecutivo</a></li>
              <li><a href="/somos-laf/organigrama-mision-y-vision" target="_self"> Organigrama - Misión y visión</a></li>
            </ul>
          </li>
          <li><a href="#" target="_self"><i className="fa fa-trophy"></i> Torneos</a>
            <ul>
              <li><a href="/torneos/categoria/futbol" target="_self"> Fútbol</a></li>
              <li><a href="/torneos/categoria/futbol-sala" target="_self"> Fútbol sala</a></li>
              <li><a href="/torneos/futbol-playa" target="_self"> Fútbol playa</a></li>
              <li><a href="/programacion?all=true" target="_self"> Programación</a></li>
            </ul>
          </li>
          <li><a href="#" target="_self"><i className="fa fa-newspaper-o"></i> Noticias</a>
            <ul>
              <li><a href="/noticias/categoria/seleccion-antioquia" target="_self"> Selección Caldas</a></li>
              <li><a href="/noticias/categoria/protagonistas-laf" target="_self"> Protagonistas LCF</a></li>
            </ul>
          </li>
          <li><a href="/escuela-laf-ninos-y-jovenes" target="_self"><i className="fa fa-book"></i> Escuela de formación LCF</a></li>
          <li><a href="/mi-cuenta" target="_self"><i className="fa fa-futbol-o"></i> Mi Club</a></li>

          <img src={props.imagen} className="img-thumbnail mr-2 mb-2" alt="logo" width={"50"} height={"50"} />
        </ul>
      </div>
    </nav>



  )
}

export default Navbar