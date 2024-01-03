import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Promo.module.css";

export default function Promocoes() {

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

       
       
       
      </main>
    </>
  );
}
