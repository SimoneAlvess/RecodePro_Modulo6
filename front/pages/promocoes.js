import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Promo.module.css";
import Link from "next/link";

export default function Promocoes() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7282/api/Destinos")
      .then(async (response) => {
        const destinosDados = await Promise.all(
          response.data.map(async (destino) => {
            try {
              const promocao = await axios.get(`https://localhost:7282/api/Promocoes/${destino.promocaoId}`);
              return { ...destino, promocao: promocao.data };
            } catch (error) {
              console.error(`Erro ao buscar promoção para o destino ${destino.destinoId}:`, error);
              return destino;
            }
          })
        );
        setDestinos(destinosDados);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
      });
  }, []);

  const formatMoney = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>Promoções | DestinoFácil</title>
      </Head>
      <main>
        <section>
          <div className={`container-fluid shadow rounded-bottom ${styles.bgPromo}`}>
            <div className={`container text-white text-center ${styles.promoStyle}`}>
              <h2>Explore o mundo com as nossas promoções imperdíveis</h2>
              <p className="lead">Venha conhecer destinos deslumbrantes. Aventure-se e descubra as melhores ofertas para a sua próxima viagem dos sonhos!</p>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="mb-5">
            <h2>Pacotes Promocionais</h2>
            <hr></hr>
          </div>

          <div className="row">
            {destinos.map((destino) => (
              <div key={destino.destinoId} className="col-lg-3 mb-2">
                <div className={`card border-0 shadow mb-4 rounded-4 ${styles.card}`}>
                  <img src={destino.urlImagem} alt="Imagem do Destino" className="card-img-top rounded-top-4 shadow" style={{ height: "180px", objectFit: "cover" }} />
                  <div className="card-body px-4">
                    <h4 className="card-title pb-2">{destino.nomeDestino}</h4>
                    <div className="card-text d-flex align-items-center">
                      <i className="bi bi-check-circle iconsStyle me-2 mt-1"></i>
                      <span className="card-text">{destino.transporte}</span>
                    </div>

                    <div className="card-text d-flex align-items-center">
                      <i className="bi bi-check-circle iconsStyle me-2 mt-1"></i>
                      <span className="card-text">{formatMoney(destino.promocao?.pacote)}</span>
                    </div>

                    <div className="card-text d-flex align-items-center mb-4">
                      <i className="bi bi-patch-check-fill iconsStyle me-2 mt-1"></i>
                      <span className="card-text">Desconto: {destino.promocao?.desconto}%</span>
                    </div>

                    <div className="card-text">
                      <span className="d-flex fs-4 fw-semibold">{formatMoney(destino.precoTotal)}</span>
                      De: <span className="text-decoration-line-through"> {formatMoney(destino.preco)} </span>
                    </div>

                    <Link className="btn btn-primary mt-4" href={"/compra"}>
                      Comprar
                    </Link>
                  </div>

                  <div className="card-footer text-muted bg-transparent mt-2 px-4 d-flex align-items-center">
                    <i className="bi bi-clock-history me-2 fs-3" style={{ color: "orange" }}></i>
                    <small>Por tempo limitado: {new Date(destino.promocao?.validadePromocao).toLocaleString("pt-BR")}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
