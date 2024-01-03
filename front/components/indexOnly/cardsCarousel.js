import React from "react";

export default function ardsCarousel() {
  return (
    <>
      <section className="py-3">
        <div className="container">
          <hr />
          <div className="row py-4">
            <div className="col-md-7">
              <h2 className="pt-5">
                Destinos populares. <span className="text-muted">Destinos nacionais.</span>
              </h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5">
              <div id="mycarousel2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner shadow rounded-4">
                  <div className="carousel-item active">
                    <div className="card rounded-4">
                      <img src="img/riodejaneiro.jpg" className="card-img-top" height="300" alt="rio de janeiro" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Rio de Janeiro</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/bonito.jpg" className="card-img-top" height="300" alt="bonito" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Bonito</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/maragogi.jpg" className="card-img-top" height="300" alt="maragogi" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Maragogi</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/gramado.jpg" className="card-img-top" height="300" alt="gramado" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Gramado</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mycarousel2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className="row py-4">
            <div className="col-md-7 order-md-5">
              <h2 className="pt-5">
                Destinos populares. <span className="text-muted">Destinos Internacionais.</span>
              </h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner shadow rounded-4">
                  <div className="carousel-item active">
                    <div className="card rounded-4">
                      <img src="img/paris.jpg" className="card-img-top" height="300" alt="paris" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Paris</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/orlando.jpg" className="card-img-top" height="300" alt="orlando" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Orlando</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/roma.jpg" className="card-img-top" height="300" alt="roma" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Roma</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/novaiorque.jpg" className="card-img-top" height="300" alt="new york" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Nova York</h5>
                        </div>
                        <p className="card-text text-muted">A cidade dos apaixonados e dos sonhadores, onde a atmosfera romântica flui ao longo das margens do rio Sena.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
