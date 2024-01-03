import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Promocao() {
  const [promocoes, setPromocoes] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7282/api/Promocoes")
      .then((response) => {
        setPromocoes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de promoções:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Promoções | DestinoFácil</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-tags-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Promoções</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Pacote</th>
                          <th>Desconto</th>
                          <th>Validade da Promoção</th>
                        </tr>
                      </thead>
                      <tbody>
                        {promocoes.map((promocao) => (
                          <tr key={promocao.promocaoId}>
                            <td>{promocao.promocaoId}</td>
                            <td>{promocao.pacote}</td>
                            <td>{promocao.desconto}%</td>
                            <td>{promocao.validadePromocao}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
