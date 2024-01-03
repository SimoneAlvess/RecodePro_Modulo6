import React from "react";
import Head from "next/head";

export default function Destinos() {
  return (
    <>
      <Head>
        <title>Destino | DestinoFácil</title>
      </Head>

      <main className="bgDestino">
        <section>
          <div className="container pt-5 text-white">
            <h2>Embarque na sua próxima aventura.</h2>
            <h6>Encontre agora seu destino dos sonhos!</h6>
          </div>

          <div className="container p-4 shadow bg-white">
            <div className="row">
              <div className="col-md-12">
                <form method="get">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ida" value="ida" />
                    <label className="form-check-label" htmlFor="ida">
                      Ida
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="idavolta" value="idavolta" />
                    <label className="form-check-label" htmlFor="idavolta">
                      Ida e Volta
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="variosdestinos" value="variosdestinos" />
                    <label className="form-check-label" htmlFor="variosdestinos">
                      Vários destinos
                    </label>
                  </div>

                  <div className="row py-2">
                    <div className="col-sm-4">
                      <label htmlFor="origem" className="form-label">
                        Origem
                      </label>
                      <input type="text" className="form-control" id="origem" aria-label="origem" />
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="destino" className="form-label">
                        Destino
                      </label>
                      <input type="text" className="form-control" id="destino" aria-label="destino" />
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="qtpessoas" className="form-label">
                        Quantidade de pessoas
                      </label>
                      <input type="text" className="form-control" id="qtpessoas" aria-label="qtpessoas" />
                    </div>
                  </div>

                  <div className="row py-2 align-items-sm-end ">
                    <div className="col-sm-4 mb-2 mb-sm-0">
                      <label htmlFor="dtida" className="form-label">
                        Data de ida
                      </label>
                      <input type="date" className="form-control" id="dtida" aria-label="dtida" />
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <label htmlFor="dtvolta" className="form-label">
                        Data de volta
                      </label>
                      <input type="date" className="form-control" id="dtvolta" aria-label="dtvolta" />
                    </div>
                    <div className="col-sm-4 d-grid gap-2 d-md-block">
                      <button className="btn btn-primary btn-sm" type="submit">
                        Pesquisar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
