
export const Proyects = () => {
  return (
    <>
    <div className="section-2 pt-5">
      <div className="text-center">
        <h2>Proyectos en los cuales trabaje</h2>
        <h6>cada uno con diferentes practicas y tecnologias</h6>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide pt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
         <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="https://dematrox.github.io/HeroesApp/">
                <div className="text-center">
                    <img src="https://res.cloudinary.com/dgcuq2caj/image/upload/v1670509585/portafolio/HeroesApp_2_fizhnu.jpg" className="text-center rounded" alt="..."/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>HeroesApp</h5>
                  <p>HeroesApp consiste en mostrar héroes de Marvel y DC con información estática consumida desde un JSON.</p>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://dematrox.github.io/blonew">
                <div className="text-center">
                    <img src="https://res.cloudinary.com/dgcuq2caj/image/upload/v1670509603/portafolio/blonew_kpglyp.jpg" className="text-center rounded" alt="..."/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Blonew</h5>
                  <p>Blonew esta diseñada para mostrar y crear noticias o blogs creados por la comunidad.</p>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://dematrox.github.io/GifsApp/">
                <div className="text-center">
                    <img src="https://res.cloudinary.com/dgcuq2caj/image/upload/v1670509552/portafolio/GifsApp_epmnbs.jpg" className="text-center rounded" alt="..."/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>GifsApp</h5>
                  <p>En GifsApp el usuario puede buscar cualquier gif con tan solo ingresar un texto en un campo.</p>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://dematrox.github.io/RecuedosApp/">
                <div className="text-center">
                    <img src="https://res.cloudinary.com/dgcuq2caj/image/upload/v1670509527/portafolio/JournalApp_ui4sl9.jpg" className="text-center rounded" alt="..."/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>JournalApp</h5>
                  <p>JournalApp es una aplicación que permite al usuario crear notas de actividades diarias.</p>
                </div>
              </a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
</div>
    </div>
    </>
  )
}
