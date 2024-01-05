import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Compra() {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    axios
      .get("https://destinofacilapi.somee.com/api/Compras")
      .then((response) => {
        setCompras(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de compras:", error);
      });
  }, []);

  const formatMoney = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>Compras | DestinoFácil</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-cart-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Compras</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Cliente</th>
                          <th>Destino</th>
                          <th>Data/Hora da Viagem</th>
                          <th>Forma de Pagamento</th>
                          <th>Preço à Pagar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compras.map((compra) => (
                          <tr key={compra.compraId}>
                            <td>{compra.compraId}</td>
                            <td>{compra.cliente.nome}</td>
                            <td>{compra.destino.nomeDestino}</td>
                            <td>{compra.dataHoraViagem}</td>
                            <td>{compra.formaPagamento}</td>
                            <td>{formatMoney(compra.destino.precoTotal)}</td>
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
