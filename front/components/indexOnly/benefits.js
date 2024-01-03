import React from "react";

export default function Benefits() {
  return (
    <>
      <section className="my-4">
        <div className="container-fluid">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-3">
                <i className="bi bi-award-fill bi-icon fs-1"></i>
                <h6>Garantia e Satisfação</h6>
                <p>Garantia de satisfação em cada viagem. Descubra experiências inesquecíveis com nossa agência.</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-people-fill bi-icon fs-1"></i>
                <h6>Atendimento Personalizado</h6>
                <p>Oferecemos atendimento personalizado para tornar cada viagem única.</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-headset bi-icon fs-1"></i>
                <h6>Suporte Durante a Viagem</h6>
                <p>Suporte em toda viagem. Sua tranquilidade é nossa prioridade</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-tags-fill bi-icon fs-1"></i>
                <h6>Preços Competitivos</h6>
                <p>Preços competitivos para viagens incríveis. Descubra o mundo sem gastar muito.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
