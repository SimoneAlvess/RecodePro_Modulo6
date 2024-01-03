import React from "react";
import styles from "../../styles/Home.module.css";

export default function CarouselHome() {
  return (
    <>
      <section>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner rounded-bottom">
            <div className="carousel-item active">
              <img alt="paisagem" src="img/background_cadastros.jpg" height="534" width="100%" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Bem-vindo(a) à DestinoFácil</h1>
                  <p className="lead">
                    Sua porta de entrada para um mundo de possibilidades e descobertas <br />
                    Transformando sonhos em destinos!
                  </p>
                  <p>
                    <a className={`btn btn-lg ${styles.btnGroup}`} href="./cliente">
                      Cadastre-se
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="paisagem" src="img/carousel03.jpg" height="534" width="100%" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Encontre seu destino dos sonhos</h1>
                  <p className="lead">Confira nossos destinos e realize a tão esperada viagem dos seus sonhos.</p>
                  <p>
                    <a className={`btn btn-lg ${styles.btnGroup}`} href="./destino">
                      Confira Já
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="paisagem" src="img/bg-carousel01.jpg" height="534" width="100%" />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Ofertas que cabem no seu bolso</h1>
                  <p className="lead">Não deixe de conferir nossas ofertas especiais.</p>
                  <p>
                    <a className={`btn btn-lg ${styles.btnGroup}`} href="./promocao">
                      Confira Já
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
