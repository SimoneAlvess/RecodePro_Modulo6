import Link from "next/link";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link href="/" className="navbar-brand mb-2">
            <img src="img/logo_destinofacil.png" alt="logo" width="145" height="39" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" href={"/"}>
                Home
              </Link>
              <Link className="nav-link" href={"destinos"}>
                Destinos
              </Link>
              <Link className="nav-link" href={"promocoes"}>
                Promoções
              </Link>
              <Link className="nav-link" href={"contato"}>
                Contato
              </Link>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-fill-gear fs-4"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" href={"cliente"}>
                    <i className="bi bi-people pe-1"></i>
                    Clientes
                  </Link>
                  <Link className="dropdown-item" href={"destino"}>
                    <i className="bi bi-geo-alt pe-1"></i>
                    Destinos
                  </Link>
                  <Link className="dropdown-item" href={"promocao"}>
                    <i className="bi bi-tags pe-1"></i>
                    Promoções
                  </Link>
                  <Link className="dropdown-item" href={"compra"}>
                    <i className="bi bi-cart pe-1"></i>
                    Compras
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
