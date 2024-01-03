import React from "react";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <>
      <section className={`my-5 rounded-3 ${styles.bgHome}`}>
        <div className="container py-5 text-center">
          <i className="bi bi-building-check fs-1"></i>
          <h4>Sobre Nós</h4>
          <p>
            À DestinoFácil tem uma vasta experiência no setor. Ao longo dos anos, acumulamos conhecimento e expertise para garantir que cada viagem seja cuidadosamente planejada e executada com excelência. Nossa equipe dedicada e apaixonada por viagens está pronta para tornar suas jornadas memoráveis e repletas de momentos únicos, fazendo com que cada destino seja uma experiência verdadeiramente
            inesquecível.
          </p>
        </div>
      </section>
    </>
  );
}
