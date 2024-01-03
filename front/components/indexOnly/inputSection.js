import React from "react";
import styles from "../../styles/Home.module.css";

export default function InputSection() {
  return (
    <>
      <section className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Fique por dentro das novidades e ofertas da <span className="text-muted">DestinoFácil.</span>
            </h2>
            <p className="lead">
              Explore o mundo com facilidade! <br />
              Nossa missão é tornar cada viagem uma jornada inesquecível. Viajar nunca foi tão fácil e emocionante!
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <form>
              <h5>Inscreva-se</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input type="text" className="form-control" placeholder="Email" />
                <button className={`btn ${styles.btnGroup}`} type="button">
                  Inscreva
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
